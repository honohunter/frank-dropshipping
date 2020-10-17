import React from 'react';

import SearchBar from 'src/components/searchBar';
import TableHeader from 'src/components/tableHeader';
import TableSection from './tableSection';

export default function SavedProducts() {
  return (
    <>
      <SearchBar />
      <TableHeader title="Saved Products" count="18" subtitle="View the products you’ve saved." />
      <TableSection />
    </>
  );
}
