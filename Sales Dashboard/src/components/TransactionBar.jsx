import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { mockTransactions } from '../data/mockData';  // Import the transactions

const columns = [
  { field: 'txId', headerName: 'Transaction ID', width: 150 },
  { field: 'user', headerName: 'User', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'cost', headerName: 'Cost', width: 100 },
];

const TransactionBar = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={mockTransactions}
        columns={columns}
        getRowId={(row) => row.txId}  // Use `txId` as the unique identifier
        pageSize={5}
        hideFooterPagination
        disableColumnMenu
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default TransactionBar;
