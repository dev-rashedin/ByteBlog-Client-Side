import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import md5 from 'md5';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// Function to get Gravatar URL based on email
const getGravatarURL = (email) => {
  const hash = md5(email.trim().toLowerCase());
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};

const BlogTable = ({ posts }) => {
  const [sorting, setSorting] = useState([]);

  // Define columns with proper IDs and accessors
  const columns = [
    {
      id: 'serialNumber',
      header: 'Sl. No.',
      cell: ({ row }) => row.index + 1,
    },
    {
      id: 'postTitle',
      header: 'Blog Title',
      accessorKey: 'post_title',
    },
    {
      id: 'blogOwner',
      header: 'Blog Owner',
      accessorKey: 'email',
    },
    {
      id: 'postedTime',
      header: 'Posted Time',
      accessorKey: 'createdAt',
      cell: ({ getValue }) => {
        const createdAt = getValue();
        const formattedDate = new Date(createdAt).toLocaleString(); // Format the date
        return formattedDate;
      },
    },
  ];

  // Initialize table instance with the actual data
 const table = useReactTable({
   data: posts,
   columns,
   state: {
     sorting,
   },
   onSortingChange: setSorting,
   getCoreRowModel: getCoreRowModel(),
   getSortedRowModel: getSortedRowModel(),
 });

  return (
    <div data-aos='fade-up'
    data-aos-duration='2500'>
      <table className='divide-x-2 divide-y-2 divide-royal-amethyst mt-12 mx-5 lg:mx-auto rounded-lg  border-r-2 border-r-royal-amethyst border-b-2 border-b-royal-amethyst'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-6 py-3 text-left text-sm lg:text-base font-medium uppercase tracking-wider border-2 border-golden-saffron'
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isSorted ? (
                    <span>
                      {header.column.getIsSorted() === 'desc' ? '🔽' : '🔼'}
                    </span>
                  ) : null}
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='divide-y divide-royal-amethyst'>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className='px-6 py-1 whitespace-nowrap text-sm font-medium border-2 border-royal-amethyst '
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
