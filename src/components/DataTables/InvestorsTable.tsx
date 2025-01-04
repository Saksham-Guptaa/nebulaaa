import React, { FC, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  Column,
  TableInstance,
} from "react-table";
import { FilterProps } from "react-table";
import ColumnFilter from "./ColumnFilter";
import { useFirebase } from "../../context/FirebaseContext";
import { useUsers } from "@/context/RoleContext";
import { useRouter } from "next/navigation";

// Define Employee interface
interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

// Define columns for the table
const columns: Column<Employee>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Position",
    accessor: "role",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
];

const InvestorTable: FC = () => {
  const router = useRouter();
  const firebaseContext = useFirebase();
  const { usersByRole, loading } = useUsers();

  // Memoize the data for the table to prevent unnecessary recalculations
  const data: Employee[] = useMemo(() => {
    return (
      usersByRole?.investors?.map((investor) => ({
        id: investor.id,
        name: investor.fullName || investor.name || "N/A",
        role: investor.role || "N/A",
        email: investor.email || "N/A",
        phone: investor.phoneNumber || "N/A",
      })) || []
    );
  }, [usersByRole]);

  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter as React.FC<FilterProps<Employee>>,
    }),
    [],
  );

  // Initialize table instance with useTable and other hooks
  const tableInstance: TableInstance<Employee> = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  const handleGlobalFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const value: string = e.target.value;
    if (value !== globalFilter) {
      setGlobalFilter(value || undefined);
    }
  };

  if (!firebaseContext) {
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between px-8 pb-4">
        <div className="w-100">
          <input
            type="text"
            value={globalFilter || ""}
            onChange={handleGlobalFilterChange}
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        <div className="flex items-center font-medium">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-transparent pl-2"
            aria-label="Entries per page"
          >
            {[5, 10, 20, 50].map((page: number) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <p className="pl-2 text-black dark:text-white">Entries Per Page</p>
        </div>
      </div>

      <table
        {...getTableProps()}
        className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
        role="table"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                >
                  <div className="flex items-center">
                    <span>{column.render("Header")}</span>
                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill="" />
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {column.canFilter ? column.render("Filter") : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                onClick={() => {
                  router.push(`/deck/investor/${row.original.id}`);
                }}
                className="border-t border-stroke dark:border-strokedark"
                {...row.getRowProps()}
                key={row.id}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className="px-4 py-2"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between border-t border-stroke px-6 pt-5 dark:border-strokedark">
        <div className="flex">
          <button
            className="flex items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={previousPage}
            disabled={!canPreviousPage}
            aria-label="Previous Page"
          >
            &lt;
          </button>
          {pageOptions.map((_, index: number) => (
            <button
              key={index}
              onClick={() => gotoPage(index)}
              className={`mx-1 flex items-center justify-center rounded-md p-1 px-3 ${
                pageIndex === index ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white`}
              aria-label={`Go to page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="flex items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={nextPage}
            disabled={!canNextPage}
            aria-label="Next Page"
          >
            &gt;
          </button>
        </div>
        <p className="font-medium">
          Showing {pageIndex + 1} of {pageOptions.length} pages
        </p>
      </div>
    </section>
  );
};

export default InvestorTable;
