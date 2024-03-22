import * as React from 'react';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import { Box, Drawer, Typography } from '@mui/material';
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 90, type: 'string' },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'Number',
    headerName: '# of accounts',
    width: 150,
    editable: false,
  },
  {
    field: 'update',
    headerName: 'Last update',
    type: 'number',
    width: 110,
    editable: false,
  },
];

const rows = [
  { id: 1, Number: 1, Name: 'Jon', update: '2023-08-16' },
  { id: 2, Number: 2, Name: 'Cersei', update: '2023-08-16' },
  { id: 3, Number: 3, Name: 'Jaime', update: '2023-08-16' },
  { id: 4, Number: 4, Name: 'Arya', update: '2023-08-16' },
  { id: 5, Number: 5, Name: 'Daenerys', update: '2023-08-16' },
  { id: 6, Number: 6, Name: 'Dog', update: '2023-08-16' },
  { id: 7, Number: 7, Name: 'Ferrara', update: '2023-08-16' },
  { id: 8, Number: 8, Name: 'Rossini', update: '2023-08-16' },
  { id: 9, Number: 9, Name: 'Harvey', update: '2023-08-16' },
];

const ClientsPage = () => {
  const [state, setState] = useState(false);
  const [clientId, setClientId] = useState('');

  const handleRowClick = (data: GridRowParams) => {
    const { row } = data;
    setState(!state);
    setClientId(row.id);
  };
  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(!state);
    };

  const list = (id: string) => (
    <Box
      sx={{ width: 720 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <Typography sx={{ m: 2 }}>id: {id}</Typography>
    </Box>
  );

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
        checkboxSelection
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
      />
      <Drawer onClose={toggleDrawer()} anchor="right" open={state}>
        {list(clientId)}
      </Drawer>
    </Box>
  );
};

export default ClientsPage;
