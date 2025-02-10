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
import CreateQuestionsDialog from "./CreateQuestionsDialog";
 
const Questions = () => {
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
    { field: "feedback_form_id", headerName: "Feedback Form Id", flex: 1 },
    { field: "question", headerName: "Question", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "options", headerName: "Options", flex: 1 },
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
            Question Details
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
      <CreateQuestionsDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Questions;
