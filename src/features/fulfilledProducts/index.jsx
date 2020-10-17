import React from 'react';

import SearchBar from 'src/components/searchBar';
import TableHeader from 'src/components/tableHeader';
import TableSection from './tableSection';

export default function SavedProducts() {
  return (
    <>
      <SearchBar />
      <TableHeader title="Fulfilled Products" count="12" subtitle="View fulfilled sales." />
      <TableSection />
    </>
  );
}
