import React, { useState, useEffect } from "react";
import marked from "marked";
import "./App.scss";

function App() {
  const defaultMD = require("./defaultMarkdown.md");
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    fetch(defaultMD)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkdownText(text);
      });
  }, [defaultMD]);

  const onTextChange = event => {
    setMarkdownText(event.target.value);
  };
  return (
    <div className="App">
      <header>
        <h1>Markdown Previewer</h1>
      </header>
      <div className="editor-container">
        <div className="title">Editor</div>
        <textarea
          id="editor"
          value={markdownText}
          onChange={onTextChange}
        ></textarea>
      </div>
      <div className="preview-container">
        <div className="title">Preview</div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdownText, { gfm: true, breaks: true })
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
