import { connect } from "react-redux";
import { fetchNotes, createNote } from "../../actions/note_action";
import NotesIndex from "./notes_index"

const mSTP = (state) => {
    return {
        notes: Object.values(state.entities.notes),
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (note) => dispatch(createNote(note)),
})

export default (connect(mSTP, mDTP)(NotesIndex));