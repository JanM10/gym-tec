import React, { useState } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';

function Table({ data }) {
  const [query, setQuery] = useState('');
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sucursal',
        accessor: 'sucursal',
      },
      {
        Header: 'Clase',
        accessor: 'clase',
      },
      {
        Header: 'Inicio',
        accessor: 'inicio',
      },
      {
        Header: 'Fin',
        accessor: 'fin',
      },
      {
        Header: 'Instructor',
        accessor: 'instructor',
      },
      {
        Header: 'Cupos',
        accessor: 'cupos',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleReset = () => {
    setQuery('');
  };

  const globalFilter = React.useMemo(
    () => (rows, columnIds, filterValue) => {
      const lowerCaseFilterValue = filterValue.toLowerCase();
      return rows.filter((row) =>
        columnIds.some(
          (id) =>
            row.values[id].toString().toLowerCase().includes(lowerCaseFilterValue)
        )
      );
    },
    [rows]
  );

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} />
      <button onClick={handleReset}>Reset</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={columns.length}>
              <input value={query} onChange={(e) => setGlobalFilter(e.target.value)} />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
