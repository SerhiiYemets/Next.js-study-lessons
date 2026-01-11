import { getNote } from "@/lib/api"
import {QueryClient, HydrationBoundary, dehydrate} from "@tanstack/react-query"

import NoteDetailsPage from "./NoteDetailsPage.client"

interface NoteProps {
    params: Promise<{ id: string }>
}

async function Note({ params }: NoteProps) {
    const { id } = await params;

    const queryClient = new QueryClient();

    queryClient.prefetchQuery({
        queryKey: ["note", id],
        queryFn: () => getNote(id)
    })


    return (
        <HydrationBoundary state={dehydrate(queryClient)}> 
            <NoteDetailsPage />
        </HydrationBoundary>
    );
}

export default Note;