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
import CreateRolesDialog from "./CreateRolesDialog";
import { useSelector } from "react-redux";

const  Roles = () => {
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
      const response = await axios.get("https://aihika.in/internal-software/public/api/v1/roles", {
        headers: {
          Authorization: `Bearer ${login.token}`,
        },
      });

      const transformedData = response?.data?.data.map(roles => ({
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                     id: roles.id,
                     name: roles.name,
                    
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
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
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
              Roles Details
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

      <CreateRolesDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default  Roles;







































































// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Button,
// } from "@mui/material";
// import {
//   DataGrid,
//   GridToolbarContainer,
//   GridToolbarColumnsButton,
//   GridToolbarFilterButton,
//   GridToolbarExport,
//   GridToolbarDensitySelector,
// } from "@mui/x-data-grid";
// import SearchIcon from "@mui/icons-material/Search";
// import CreateRolesDialog from "./CreateRolesDialog";

// const Roles = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const CustomToolbar = () => (
//     <GridToolbarContainer>
//       <GridToolbarColumnsButton />
//       <GridToolbarFilterButton />
//       <GridToolbarDensitySelector />
//       <GridToolbarExport />
//     </GridToolbarContainer>
//   );

//   const columns = [
//     { field: "name", headerName: "Name", flex: 1 },
//     {
//       field: "action",
//       headerName: "Action",
//       flex: 1,
//       renderCell: () => (
//         <>
//           <Button variant="outlined" color="primary" size="small" sx={{ mr: 1 }}>
//             Update
//           </Button>
//           <Button variant="outlined" color="error" size="small">
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   return (
//     <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
//       <Box sx={{ p: 2, flexShrink: 0 }}>
//         <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
//           <Grid item xs={12}>
//             <Typography variant="h4" component="h2" gutterBottom>
//               Clients Details
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
//             <TextField
//               fullWidth
//               placeholder="Search"
//               variant="outlined"
//               size="small"
//               InputProps={{
//                 startAdornment: <SearchIcon position="start" />,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
//             <Button fullWidth variant="contained" color="success" onClick={handleOpen}>
//               CREATE
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>

//       <Box sx={{ flexGrow: 1, overflowX: "auto", p: 2, "& .MuiDataGrid-root": { height: "100%", minWidth: 1800 } }}>
//         <DataGrid
//           rows={[]}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5, 10, 20]}
//           components={{ Toolbar: CustomToolbar }}
//           disableSelectionOnClick
//         />
//       </Box>

//       {/* Popup Component */}
//       <CreateRolesDialog open={open} handleClose={handleClose} />
//     </Box>
//   );
// };

// export default Roles;
