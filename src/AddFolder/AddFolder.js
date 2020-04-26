import React from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import NotefulContext from "../NotefulContext";
import config from "../config";
import "./AddFolder.css";
import PropTypes from "prop-types";

class AddFolder extends React.Component {
  static defaultProps = {
    name: "",
    history: {
      push: () => {},
    },
  };
  static contextType = NotefulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const folder = {
      name: e.target["folder-name"].value,
    };

    try {
      fetch(`${config.API_ENDPOINT}/folders`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(folder),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res.json();
        })
        .then((data) => {
          this.context.addFolder(data);
          this.props.history.push(`/`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <section className="AddFolder">
        <h2>Create a folder</h2>
        <NotefulForm onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="folder-name-input">Name</label>
            <input type="text" id="folder-name-input" name="folder-name" />
          </div>
          <div className="buttons">
            <button type="submit">Add folder</button>
          </div>
        </NotefulForm>
      </section>
    );
  }
}

AddFolder.propTypes = {
  folders: PropTypes.array,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  content: PropTypes.string,
  modified: PropTypes.string,
};

export default AddFolder;
