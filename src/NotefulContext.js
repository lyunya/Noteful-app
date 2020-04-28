import React from "react";

const NotefulContext = React.createContext({
  notes: [],
  folders: [],
  toggle: false,
  API: "http://localhost:9090",
  deleteNote: () => {},
  addFolder: () => {},
  addNote: () => {},
  back: () => {},
});

export default NotefulContext;
