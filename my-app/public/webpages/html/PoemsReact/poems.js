import React from 'react';
import ReactMarkdown from 'react-markdown';
import poems from "./listPoems";
import PoemDisplay from "../../../../src/components/PoemDisplay";

function poems() {
  return (

    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>My Poetry Collection</h1>
      {poems.map((poem) => (
        <PoemDisplay key={poem.id} title={poem.title} content={poem.content} />
      ))}
    </div>
  
  );
}

export default poems;
