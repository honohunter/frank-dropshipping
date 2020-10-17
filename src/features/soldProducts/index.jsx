import React from 'react';

import SearchBar from 'src/components/searchBar';
import TableHeader from 'src/components/tableHeader';
import TableSection from './tableSection';

export default function SavedProducts() {
  return (
    <>
      <SearchBar />
      <TableHeader title="Sold Products" count="12" subtitle="View sold products." />
      <TableSection />
    </>
  );
}
