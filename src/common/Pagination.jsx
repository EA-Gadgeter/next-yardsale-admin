import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Pagination = ({ totalResults, resultsPerPage, setOffset, offset }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const PaginationButton = ({ pageNumber }) => {
    const defaultStyles = "relative inline-flex items-center px-4 py-2 text-sm font-semibold";
    let buttonStyles;

    if (currentPage !== pageNumber) buttonStyles = `${defaultStyles} text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`;
    else buttonStyles = `${defaultStyles} z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`;

    return (
      <button className={buttonStyles} onClick={() => handlePage(pageNumber)}>
        {pageNumber}
      </button>
    );
  };

  const handlePrev = () => {
    if (offset === 0) return;
    setOffset(offset - resultsPerPage);
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (offset === totalResults - resultsPerPage) return;
    setOffset(offset + resultsPerPage);
    setCurrentPage(currentPage + 1);
  };

  const handlePage = (pageNumber) => {
    const newOffset = (pageNumber - 1) * resultsPerPage;
    setOffset(newOffset);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</button>
        <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPage}</span> to <span className="font-medium">{totalPages}</span> of <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handlePrev}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {Array.from({ length: totalPages }).map((item, index) => {
              return <PaginationButton key={`paginationButton-${index}`} pageNumber={index + 1} />;
            })}
            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={handleNext}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
