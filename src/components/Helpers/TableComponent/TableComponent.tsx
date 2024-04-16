import { useTable, usePagination, TableInstance, Row } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./table.scss";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

import { useTranslation } from "react-i18next";

// Define a type for the row data
type RowData = {
  [key: string]: any;
};

// Define a type for the column
type Column = {
  Header: string;
  accessor: string; // keys from row data
};

interface ReactTableProps {
  columns: Column[];
  data: RowData[];
  pageNumber: number;
  setPageNumber?: (page: number) => void;
  pageCount: number;
}

const TableComponent: React.FC<ReactTableProps> = ({
  columns,
  data,
  pageNumber,
  setPageNumber,
  pageCount,
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable({ columns, data }, usePagination) as TableInstance<RowData> & {
      canPreviousPage: boolean;
      canNextPage: boolean;
      page: any;
      pageOptions: number[];
      pageCount: number;
      nextPage: () => void;
      previousPage: () => void;
    };

  const { i18n } = useTranslation();

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // Maximum number of page buttons visible, excluding first and last pages.

    // Calculate start and end indices for visible page buttons
    let startPage = Math.max(pageNumber - Math.floor(maxPageButtons / 2), 0);
    let endPage = Math.min(startPage + maxPageButtons - 1, pageCount - 1);

    // Adjust if the current page is near the start or end
    if (pageNumber < Math.floor(maxPageButtons / 2)) {
      endPage = Math.min(maxPageButtons - 1, pageCount - 1);
    } else if (pageCount - pageNumber <= Math.floor(maxPageButtons / 2)) {
      startPage = Math.max(pageCount - maxPageButtons, 0);
    }

    // Show first page and ellipsis if needed
    if (startPage > 0) {
      pageNumbers.push(
        <button
          className="border-0 px-2 py-1 bg-transparent"
          key="page-1"
          onClick={() => setPageNumber?.(0)}
        >
          1
        </button>
      );
      if (startPage > 1) {
        pageNumbers.push(
          <span className="mt-1 me-2" key="ellipsis-start">
            ...
          </span>
        );
      }
    }
    // Generate buttons for visible page range
    for (let i = startPage; i <= endPage; i++) {
      const isActivePage = pageNumber === i;
      const buttonStyle = isActivePage
        ? {
            backgroundColor: "var(--darkPrimaryColor)",
            color: "white",
            padding: "2px 12px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        : {
            backgroundColor: "transparent",
            color: "black",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          };
      pageNumbers.push(
        <button
          key={`page-${i}`}
          disabled={isActivePage}
          onClick={() => setPageNumber?.(i)}
          className="border-0 me-3 rounded"
          style={buttonStyle}
          // disabled={isActivePage}
        >
          {i + 1}
        </button>
      );
    }

    // Show ellipsis and last page if needed
    if (endPage < pageCount - 1) {
      if (endPage < pageCount - 2) {
        pageNumbers.push(
          <span className="mt-1 me-2" key="ellipsis-end">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={`page-${pageCount - 1}`}
          onClick={() => setPageNumber?.(pageCount - 1)}
          className="border-0 px-2 py-1 bg-transparent"
        >
          {pageCount}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="d-flex w-100 flex-column justify-content-center align-items-end tableDiv">
      <table {...getTableProps()} cellPadding="15" className="mt-4 ">
        <thead
          style={{
            backgroundSize: "initial",
            backgroundPosition:
              i18n.language === "en" ? "-15% 43%" : "115% 44%",
            backgroundRepeat: "no-repeat",
            height: "69px",
            fontWeight: "lighter !important",
            fontSize: "14px",
          }}
        >
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length > 0 ? (
            page.map((row: Row<RowData>) => {
              prepareRow(row);
              return (
                <tr className="mb-2" {...row.getRowProps()}>
                  {row.cells.map((cell, i) => (
                    <td
                      style={{
                        width:
                          i === row.cells.length - 1
                            ? "25px"
                            : `calc(100% / ${row.cells.length})`,
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                style={{ textAlign: "center", padding: "20px" }}
              >
                No Data To Show
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Pagination controls */}
      {page.length > 0 && (
        <div className="pagination mt-2 me-4 d-flex align-items-center justify-content-center">
          <button
            className="border-0 me-2 px-2 py-1 bg-transparent"
            style={{ fontSize: "22px" }}
            onClick={() => setPageNumber?.(pageNumber - 1)}
            disabled={pageNumber === 0}
          >
            {/* {"<"} */}
            {i18n.language === "en" ? (
              <IoChevronBackSharp />
            ) : (
              <IoChevronForwardSharp />
            )}
          </button>
          {renderPageNumbers()}
          <button
            className="border-0 ms-2 px-2 py-1 bg-transparent"
            style={{ fontSize: "24px" }}
            onClick={() => setPageNumber?.(pageNumber + 1)}
            disabled={pageNumber + 1 === pageCount}
          >
            {/* {">"} */}
            {i18n.language === "en" ? (
              <IoChevronForwardSharp />
            ) : (
              <IoChevronBackSharp />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
