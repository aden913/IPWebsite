import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PoemDisplay = ({ title, content }) => {
  const formattedContent = addDoubleSpaces(content);

  return (
    <div style={styles.poemContainer}>
      <h2 style={styles.title}>{title}</h2>
      <div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {formattedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

const addDoubleSpaces = (content) => {
  return content
    .split('\n')
    .map(line => line + '  ')  // Add two spaces to the end of each line
    .join('\n');
};

const styles = {
  poemContainer: {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '70%',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '1.5em',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
};

export default PoemDisplay;
