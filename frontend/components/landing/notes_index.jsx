import React from 'react';


export default class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        
        return (
                <div className="notes-index-content">
                    <div>{console.log(!this.props.notes)}</div>
                </div>
        )
    }
}