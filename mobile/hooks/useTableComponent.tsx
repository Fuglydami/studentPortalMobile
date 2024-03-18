import React, {useState} from 'react';

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  getCurrentPageData: () => Array<string[]>;
  handlePagination: (direction: 'prev' | 'next') => void;
}

export const useTablePagination = (
  initialData: Array<string[]>,
  itemsPerPage = 5,
): TablePaginationProps => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(initialData.length / itemsPerPage);

  const getCurrentPageData = (): Array<string[]> => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return initialData.slice(startIndex, endIndex);
  };

  const handlePagination = (direction: 'prev' | 'next'): void => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {currentPage, totalPages, getCurrentPageData, handlePagination};
};
