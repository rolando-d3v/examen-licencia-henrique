import React from "react";
import "./question2.scss";

export default function Question2({ question2 }) {
  return (
    <div
      className="content_question"
      style={{
        marginTop: question2?.length > 0 && 30,
        marginBottom: question2?.length > 0 && 30,
      }}
    >
      <pre className="question2">{question2} </pre>
    </div>
  );
}
