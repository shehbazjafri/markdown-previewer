import React, { useState, useEffect } from "react";
import marked from "marked";
import "./App.css";

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
      <textarea
        id="editor"
        value={markdownText}
        onChange={onTextChange}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdownText, { gfm: true, breaks: true })
        }}
      ></div>
    </div>
  );
}

export default App;
