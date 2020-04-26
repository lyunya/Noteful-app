import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NoteListMain.css";
import NotefulContext from "../NotefulContext";
import Note from "../Note/Note";
import { getNotesForFolder } from "../notes-helpers";
import CircleButton from "../CircleButton/CircleButton";

export default class NoteListMain extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = NotefulContext;

  render() {
    const { folderId } = this.props.match.params;
    const { notes = [] } = this.context;
    const notesForFolder = getNotesForFolder(notes, folderId);
    return (
      <section className="NoteListMain">
        <ul id="note__list">
          {notesForFolder.map((note) => (
            <li key={note.id}>
              <Note id={note.id} name={note.name} modified={note.modified} />
            </li>
          ))}
        </ul>
        <div className="NoteListMain__button-container">
          <CircleButton
            tag={Link}
            to="/add-note"
            type="button"
            className="NoteListMain__add-note-button"
          >
            <br />
            Note
          </CircleButton>
        </div>
      </section>
    );
  }
}

NoteListMain.propType = {
  notes: PropTypes.array,
  id: PropTypes.string,
  match: PropTypes.object.isRequired
};
