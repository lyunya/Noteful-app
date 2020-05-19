import React from "react";

const NotefulContext = React.createContext({
  notes: [],
  folders: [],
  toggle: false,
  API: "http://localhost:8000/",
  deleteNote: () => {},
  addFolder: () => {},
  addNote: () => {},
  back: () => {},
  updateNote: () => {},
  updateFolder: () => {},
});

export default NotefulContext;
