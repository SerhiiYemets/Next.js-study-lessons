"use client";

import {useQuery} from "@tanstack/react-query"
import { useParams } from "next/navigation"; 
import { useState } from "react";

import { getNote } from "@/lib/api";

function NoteDetails() {
    const { id } = useParams<{id: string}>()

    const { data } = useQuery({
        queryKey: ["note", id],
        queryFn: () => getNote(id),
        refetchOnMount: false,
    })

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(true);
    }

    return (
        <div>
            <button onClick={handleEdit}>Edit</button>
            {isEdit ? (
                <form>
                    <div>
                        <input placeholder="Title"/>
                    </div>
                    <div>
                        <textarea placeholder="Content"/>
                    </div>
                    <button>Submit</button>
                </form> 
                ) : (
                    <>
                        <h1>{data?.title}</h1>
                        <p>{data?.content}</p>
                    </>
                )}
        </div>
    );
}

export default NoteDetails;