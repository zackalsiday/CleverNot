import * as NotesApiUtil from "../util/note_api_util"

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const receiveAllNotes = (notes) => ({
    type: RECEIVE_ALL_NOTES,
    notes,
});

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note,
});

const removeNote = (note) => ({
    type: REMOVE_NOTE,
    note,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const fetchNotes = () => (dispatch) => 
    NotesApiUtil.fetchNotes().then((notes) => dispatch(receiveAllNotes(notes)));
// , err => (dispatch(receiveErrors(err.responseJSON))));

export const fetchNote = (noteId) => (dispatch) =>
    NotesApiUtil.fetchNote(noteId).then((note) => dispatch(receiveNote(note)));
// , err => (dispatch(receiveErrors(err.responseJSON))));

export const createNote = (note) => (dispatch) =>
    NotesApiUtil.createNote(note).then(
        (note) => dispatch(receiveNote(note)),
        (err) => dispatch(receiveErrors(err))
    );

export const updateNote = (note) => (dispatch) =>
    NotesApiUtil.updateNote(note).then(
        (note) => dispatch(receiveNote(note)),
        (err) => dispatch(receiveErrors(err))
    );

export const deleteNote = (note) => (dispatch) =>
    NotesApiUtil.deleteNote(note).then(
        (note) => dispatch(removeNote(note)),
        (err) => dispatch(receiveErrors(err))
    );