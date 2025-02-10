import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
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
import CreateProjectDialog from "./CreateProjectDialog";
import { useSelector } from "react-redux";

const  Projects = () => {
  const { login } = useSelector((state) => state?.login);
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://aihika.in/internal-software/public/api/v1/projects", {
        headers: {
          Authorization: `Bearer ${login.token}`,
        },
      });

      const transformedData = response?.data?.data.map(projects => ({
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        company_id: projects.company_id,
        service_id: projects.service_id,
        client_id: projects.client_id,
        invoice_id: projects.invoice_id,
        name: projects.name,
        start_date:projects.start_date,
        end_date:projects.end_date,
        cost: projects.cost,
        test_url:projects.test_url,
        live_url:projects.live_url,
        db_design_url:projects.db_design_url,
        payment_received:projects.payment_received,
        payment_received_percentage: projects.payment_received_percentage,
        created_at: projects.created_at,
        updated_at: projects.updated_at,
      }));

      setRows(transformedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    return rows.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const filteredRows = handleSearch();

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
        { field: "service_id", headerName: "Service Id", flex: 1 },
        { field: "client_id", headerName: "Client Id", flex: 1 },
        { field: "invoice_id", headerName: "Invoice Id", flex: 1.5 },
        { field: "name", headerName: "Name", flex: 1 },
        { field: "start_date", headerName: "Start Date", flex: 1 },
        { field: "end_date", headerName: "End Date", flex: 1 },
        { field: "cost", headerName: "Cost", flex: 1 },
        { field: "test_url", headerName: "Test Url", flex: 1 },
        { field: "live_url", headerName: "Live Url", flex: 1 },
        { field: "db_design_url", headerName: "Db Design Url", flex: 1 },
        { field: "payment_received", headerName: "Payment Received", flex: 1 },
        { field: "payment_received_percentage", headerName: "Payment Received Percentage", flex: 1 },
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
              Projects Details
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <TextField
              fullWidth
              placeholder="Search"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={handleSearch}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
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

      <Box sx={{ flexGrow: 1, overflowX: "auto", p: 2, "& .MuiDataGrid-root": { height: "100%", minWidth: 2500 } }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          components={{ Toolbar: CustomToolbar }}
          loading={loading}
          disableSelectionOnClick
        />
      </Box>

      <CreateProjectDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default  Projects;










































































