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
import CreateUsersDialog from "./CreateUsersDialog";
import { useSelector } from "react-redux";

const Users = () => {
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
      const response = await axios.get("https://aihika.in/internal-software/public/api/v1/users", {
        headers: {
          Authorization: `Bearer ${login.token}`,
        },
      });

      const transformedData = response?.data?.data.map(users => ({
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        company_id: users.company_id,
        role_id:users.role_id,
        name: users.name,
        email: users.email,
        phone_number: users.phone_number,
        designation: users.designation,
        alternative_number: users.alternative_number,
        home_number: users.home_number,
        joining_date: users.joining_date,
        leaves_left: users.leaves_left,
        dob: users.dob,
        profile: users.profile,
        offer_letter: users.offer_letter,
        aadhar_front: users.aadhar_front,
        aadhar_back: users.aadhar_back,
        pan: users.pan,
        prev_company_experience_letter: users.prev_company_experience_letter,
        created_at: users.created_at,
        updated_at: users.updated_at,
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
    { field: "role_id", headerName: "Roll Id", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone_number", headerName: "Mobile Number", flex: 1.5 },
    { field: "designation", headerName: "Designation", flex: 1 },
    { field: "alternative_number", headerName: "Alternate Number", flex: 1 },
    { field: "home_number", headerName: "Home Number", flex: 1 },
    { field: "joining_date", headerName: "Joining Date", flex: 1 },
    { field: "leaves_left", headerName: "Leaves Left", flex: 1 },
    { field: "dob", headerName: "Date Of Birth", flex: 1 },
    { field: "profile", headerName: "Profile", flex: 1 },
    { field: "aadhar_front", headerName: "Aadhar Front", flex: 1 },
    { field: "aadhar_back", headerName: "Aadhar Back", flex: 1 },
    { field: "pan", headerName: "Pan Card", flex: 1 },
    { field: "prev_company_experience_letter", headerName: "Experience Letter", flex: 1 },
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
              Users Details
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

      <CreateUsersDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Users;






































































