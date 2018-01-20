import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

    static propTypes ={
        noteContent: PropTypes.string
    };

    constructor(props){
        super(props);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(props){
        return(
            <div className="note fade-in">
                <span className="closebtn"
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <p className="noteContent">{ this.noteContent}</p>

            </div>
        )
    }
}


export default Note;