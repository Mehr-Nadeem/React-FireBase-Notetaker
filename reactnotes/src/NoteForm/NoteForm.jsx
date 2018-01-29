import React, { Component } from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';

class NoteForm extends Component{

     static propTypes ={
        addNote: PropTypes.func
     };

    constructor(props){
        super(props);
        this.state ={
            newNoteContent: '',
        };

        this.handleUserInput= this.handleUserInput.bind(this);
        this.writeNote=this.writeNote.bind(this);
    }

    //When the user input changes, set the newNoteContent to value of what's in input box

    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, //value of text input
        })
    }

    writeNote(){
        // call a method that sets the noteContent for a note to value of input

        this.props.addNote(this.state.newNoteContent);

        //Set newNoteContent back to an empty string
        this.setState({
            newNoteContent: '',
        })
    }

    enterPressed(event){
        var code = event.keyCode || event.which;
        if(code === 13){
            this.writeNote();
        }
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                       placeholder="Write a new note..."
                       value={this.state.newNoteContent}
                       onChange={this.handleUserInput}
                       onKeyPress={this.enterPressed.bind(this)}/>
                <button className="noteButton"
                        onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;