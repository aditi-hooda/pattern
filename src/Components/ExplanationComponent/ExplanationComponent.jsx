import React from "react";
import { images } from "../../Assets";

export default function ExplanationComponent(props) {
  const copyToClipboard = async (e) => {
    try {
      await navigator.clipboard.writeText(props.data.code);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const codeExplainationLines = props.data.explanation.split("\n");

  return (
    <div className="explanation-container">
      <div className="header">
        <button className="btn-copy" onClick={copyToClipboard}>
          <img src={images.copyimg} />
          Copy code
        </button>
      </div>
      <pre className="code">
        <code>{props.data.code}</code>
      </pre>
      <div className="explaination-container">
        <img src={props.image} alt="pattern Matrix image" />
        <div className="explaination">
          {codeExplainationLines.map((line, index) => {
            if (line.includes("<span")) {
              return (
                <p key={index} dangerouslySetInnerHTML={{ __html: line }}></p>
              );
            } else {
              return <p key={index}>{line}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
}
