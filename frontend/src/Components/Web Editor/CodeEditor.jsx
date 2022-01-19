import React from "react";
import Editor from "@monaco-editor/react";
import Heading from "./Heading";

export default function CodeEditor(prop) {
  const { value, lang, setValue, displayName} = prop;

  function handleEditorChange(value, event) {
    setValue(value);
  }
  return (
    <td>
      <div className="editor">
        <Heading name={displayName} />

        <Editor
          width="100%"
          height="50vh"
          defaultLanguage={lang}
          defaultValue={value}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>
    </td>
  );
}
