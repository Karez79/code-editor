import { useState } from "react";
import CodeEditor from "../CodeEditor/CodeEditor";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import "./App.css";

const App = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code }),
      });
      const result = await response.json();
      setOutput(result.status === "success" ? result.output : result.error);
    } catch (error) {
      setOutput("Failed to execute code.");
    }
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Online Code Editor</h1>
        <p className="app__description">Write your code and run it to see the output below!</p>
      </header>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <CodeEditor code={code} setCode={setCode} language={language} />
      <button onClick={runCode} className="app__run-button">Run</button>
      <div className="app__output">
        <h3 className="app__output-title">Output:</h3>
        <pre className="app__output-content">{output}</pre>
      </div>
    </div>
  );
};

export default App;
