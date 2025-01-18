import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ReactSearchBox from 'react-search-box'; // Import the search box component
import PoemDisplay from './PoemDisplay';
import listPoems from '../pages/PoemsReact/listPoems';

const PoemsWithPagination = () => {
  const poemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [showPoemList, setShowPoemList] = useState(false); // State to toggle poem list display

  // Filter poems based on search term
  const filteredPoems = listPoems.filter((poem) =>
    poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poem.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the poems to display based on the filtered poems and current page
  const indexOfLastPoem = (currentPage + 1) * poemsPerPage;
  const indexOfFirstPoem = indexOfLastPoem - poemsPerPage;
  const currentPoems = filteredPoems.slice(indexOfFirstPoem, indexOfLastPoem);

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Handle search input change
  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(0); // Reset to the first page when search changes
  };

  // Handle poem click from the list
  const handlePoemClick = (poem) => {
    setSearchTerm(poem.title); // Set the search term to the clicked poem's title
    setShowPoemList(false); // Hide the poem list after selection
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>My Poetry Collection</h1>

      {/* Search Box */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <ReactSearchBox
          placeholder="Search Poems"
          value={searchTerm}
          data={filteredPoems.map((poem) => ({ key: poem.title, value: poem.title }))}
          onChange={handleSearch}
          onSelect={() => {}}
        />
      </div>

      {/* Button to show all poems */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          id="showPoemsButton"
          onClick={() => setShowPoemList(!showPoemList)}
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          {showPoemList ? 'Hide Poem List' : 'Show Poem List'}
        </button>
      </div>

      {/* Display poem list when the button is clicked */}
      {showPoemList && (
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {listPoems.map((poem) => (
              <li
                className='poemList'
                key={poem.id}
                onClick={() => handlePoemClick(poem)}
                style={{
                  cursor: 'pointer',
                  margin: '5px 0',
                  backgroundColor: '#f9f9f9',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              >
                {poem.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display current poems */}
      {currentPoems.map((poem) => (
        <PoemDisplay key={poem.id} title={poem.title} content={poem.content} />
      ))}

      {/* Pagination controls */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredPoems.length / poemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        disabledClassName={"disabled"}
      />
    </div>
  );
};

export default PoemsWithPagination;
