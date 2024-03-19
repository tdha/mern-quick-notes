import { useState, useEffect } from 'react';

import * as notesAPI from '../../utilities/notes-api';

import NotesList from '../../components/NoteList/index';
import NoteForm from '../../components/NoteForm/index';

export default function NotesPage() {
    const [notes, setNotes] = useState([]);

    async function addNote(note) {
        const newNote = await notesAPI.createNote(note);
        setNotes([...notes, newNote]);
    }

    async function deleteNote(id) {
        await notesAPI.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
    }

    useEffect(() => {
        notesAPI.getNotes().then((notes) => {
            setNotes(notes);
        });
    }, []);

    return (
        <>
            <h1>
                NotesPage
                <NoteForm addNote={ addNote } />
                <NotesList notes={notes} deleteNote={ deleteNote } />
            </h1>
        </>
    );
}