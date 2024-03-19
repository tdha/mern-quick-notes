import { useState } from 'react';

export default function NotesList ({notes, deleteNote}) {
    const [reverse, setReverse] = useState(false);

    if (notes.length === 0) {
        return <p>No notes yet!</p>
    }

    const notesList = notes.map((n) => (
        <div key={n._id}>
            <p>
                { new Date(n.createdAt).toLocaleString() }:
            </p>
            <p>
                { n.text }
                <button onClick={ () => deleteNote(n._id) } title="Delete note">&times;</button>
            </p>
        </div>
    ));

    return (
        <div>
            <button onClick={ () => setReverse(!reverse) } title="Reverse notes order">
                ▲ | ▼ 
            </button>
            {
                reverse ? notesList.reverse() : notesList
            }
        </div>
    )
}