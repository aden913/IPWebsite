import React from "react";
import ReactMarkdown from "react-markdown";

const PoemDisplay = ({ title, content }) => {
  return (
    <div style={styles.poemContainer}>
      <h2 style={styles.title}>{title}</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

const styles = {
  poemContainer: {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "600px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
};

export default PoemDisplay;
