import React from "react";
import "./LanguageSelector.css";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (value: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  return (
    <div className="language-selector">
      <label htmlFor="language" className="language-selector__label">Select Language:</label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="language-selector__dropdown"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
