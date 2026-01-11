import type { Note } from "@/types/note"
import Link from "next/link"
import styles from "./NoteList.module.css"

interface NoteListProps {
    notes: Note[]
}

function NoteList({notes}: NoteListProps) {
    return (
        <ul className={styles.noteList}>
            {notes.map((note) => 
            <li key={note.id} className={styles.noteItem}>
                <Link 
                    href={`/notes/${note.id}`}
                    className={styles.noteLink}
                >
                    {note.title}
                </Link>
            </li>)}
        </ul>
    )
}

export default NoteList;