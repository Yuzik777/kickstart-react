import React, { useState, useEffect, useMemo } from "react";

export const Search: React.FC = () => {
  return (
    <>
      <input type="text" className="searchInput" placeholder="Search"></input>
      <ul className="searchResults"></ul>
    </>
  );
};
