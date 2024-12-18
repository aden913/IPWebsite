import React from 'react';
import listPoems from "./listPoems";
import PoemDisplay from "../../components/PoemDisplay";
import PoemsWithPagination from '../../components/PoemsWithPagination';


function Poems() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
    {/* <h1 style={{ textAlign: "center", margin: "20px 0" }}>My Poetry Collection</h1> */}
    <PoemsWithPagination />
   {/*  {listPoems.map((listPoems) => (
      <PoemDisplay key={listPoems.id} title={listPoems.title} content={listPoems.content} />
    ))} */}
  </div>
  
  );
}
export default Poems;
