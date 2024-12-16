import React from "react";
import MonacoEditor from "react-monaco-editor";
import "./CodeEditor.css";

interface CodeEditorProps {
  code: string;
  setCode: (value: string) => void;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode, language }) => {
  const onChange = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <div className="code-editor">
      <MonacoEditor
        width="100%"
        height="400px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={onChange}
        options={{ automaticLayout: true }}
      />
    </div>
  );
};

export default CodeEditor;
