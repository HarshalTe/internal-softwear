import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import CreateMeetingsDialog from "./CreateMeetingsDialog";
 
const Meetings = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  const columns = [
    { field: "company_id", headerName: "Company Id", flex: 1 },
    { field: "is_client", headerName: "Is Client", flex: 1 },
    { field: "client_id", headerName: "Client Id", flex: 1 },
    { field: "date_time", headerName: "Date Time", flex: 1 },
    { field: "agenda", headerName: "Agenda", flex: 1.5 },
    { field: "outcome", headerName: "Outcome", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "expected_duration", headerName: "Expected Duration", flex: 1 },
    { field: "final_duration", headerName: "Final Duration", flex: 1 },
    { field: "created_at", headerName: "Created At", flex: 1 },
    { field: "updated_at", headerName: "Updated At", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => (
        <>
          <Button variant="outlined" color="primary" size="small" sx={{ mr: 1 }}>
            Update
          </Button>
          <Button variant="outlined" color="error" size="small">
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Box sx={{ p: 2, flexShrink: 0 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
            Notifications Details
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <TextField
              fullWidth
              placeholder="Search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: <SearchIcon position="start" />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button fullWidth variant="contained" color="success" onClick={handleOpen}>
              CREATE
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, overflowX: "auto", p: 2, "& .MuiDataGrid-root": { height: "100%", minWidth: 1800 } }}>
        <DataGrid
          rows={[]}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          components={{ Toolbar: CustomToolbar }}
          disableSelectionOnClick
        />
      </Box>

      {/* Popup Component */}
      <CreateMeetingsDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Meetings;
