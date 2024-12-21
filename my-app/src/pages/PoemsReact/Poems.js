import React from 'react';
import PoemsWithPagination from '../../components/PoemsWithPagination';
import './poems.css'

function Poems() {
  return (
    <div>
    {/* <h1 style={{ textAlign: "center", margin: "20px 0" }}>My Poetry Collection</h1> */}
    <PoemsWithPagination />
   {/*  {listPoems.map((listPoems) => (
      <PoemDisplay key={listPoems.id} title={listPoems.title} content={listPoems.content} />
    ))} */}
  </div>
  
  );
}
export default Poems;
