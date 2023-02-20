import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ExplanationComponent from "../../../ExplanationComponent/ExplanationComponent";
import { data } from "./data";

export default function PatternM() {
  let [pattern, setPattern] = useState("");
  let [showCode, setshowCode] = useState(false);
  function handleClick() {
    setshowCode(!showCode);
  }
  useEffect(() => {
    var retPattern = "";
    for (var i = 0; i <= 6; i++) {
      retPattern += "<div>";
      for (var j = 0; j <= 6; j++) {
        if (i < 4) {
          if (i === j) {
            retPattern += "<span class='star star-green'>*</span>";
          } else if (i + j === 6) {
            retPattern += "<span class='star star-orange'>*</span>";
          } else {
            retPattern += "<span class='space'>_</span>";
          }
        } else if (j === 3 && i > 3) {
          retPattern += "<span class='star star-blue'>*</span>";
        } else {
          retPattern += "<span class='space'>_</span>";
        }
      }
      retPattern += "</div>";
    }
    setPattern(retPattern);
  }, [pattern]);

  return (
    <div>
      <div
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: pattern }}
      ></div>
      {showCode && <ExplanationComponent data={data} />}
    </div>
  );
}
