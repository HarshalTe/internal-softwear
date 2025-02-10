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
import CreateCompanyDialog from "./CreateCompanyDialog";

const Companies = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://aihika.in/internal-software/public/api/v1/companies", {
        headers: {
          Authorization: `Bearer 16|0DUTpP3lAlOkGC5PZVvOPtt0lG2hfCkePfStvx5O4ff41c5d`,
        },
      });

      const transformedData = response?.data?.data.map(company => ({
        id: company.id,
        name: company.name,
        founder_name: company.founder_name,
        gst_no: company.gst_no,
        address: company.address,
        anniversary_date: company.anniversary_date,
        bank_name: company.bank_name,
        account_no: company.account_no,
        ifsc_code: company.ifsc_code,
        logo: company.logo,
        sign: company.sign,
        stamp: company.stamp,
        branch_name: company.branch_name,
        createdAt: company.created_at,
        updatedAt: company.updated_at,
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

  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "founder_name", headerName: "Founder Name", flex: 1 },
    { field: "gst_no", headerName: "GST No", flex: 1.5 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "anniversary_date", headerName: "Anniversary Date", flex: 1 },
    { field: "bank_name", headerName: "Bank Name", flex: 1 },
    { field: "account_no", headerName: "Account No", flex: 1 },
    { field: "ifsc_code", headerName: "IFSC Code", flex: 1 },
    { field: "branch_name", headerName: "Branch Name", flex: 1 },
    { field: "createdAt", headerName: "Created At", flex: 1 },
    { field: "updatedAt", headerName: "Updated At", flex: 1 },
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
              Companies Details
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
                    <IconButton>
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

      <CreateCompanyDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Companies;










































// import axios from "axios";  // Import axios for making API calls
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
// import CreateCompanyDialog from "./CreateCompanyDialog";

// const Companies = () => {
//   const [open, setOpen] = useState(false);
//   const [rows, setRows] = useState([]);  // State to store fetched rows
//   const [loading, setLoading] = useState(true);  // State to track loading status

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   // Fetch data from API when component mounts
//   const fetchData = async () => {
//     setLoading(true); // Start loading
//     try {
//       const response = await axios.get("https://aihika.in/internal-software/public/api/v1/companies", {
//         headers: {
//           Authorization: `Bearer 16|0DUTpP3lAlOkGC5PZVvOPtt0lG2hfCkePfStvx5O4ff41c5d`,  // Replace YOUR_API_KEY with your actual API key
//         },
//       });
//       console.log(response?.data?.data?.length)
//       setRows(response?.data?.data)



//       // Mapping API response to match DataGrid's expected format
//       const transformedData = response?.data?.data.map(company => {
//         return (
//           {
//             id: company.id,
//             name: company.name,
//             founder_name: company.founder_name,  
//             gst_no: company.gst_no,
//             address: company.address,
//             gstNo: company.gstNo,
//             anniversary_date: company.anniversary_date,
//             bank_name: company.bank_name,
//             account_no: company.account_no,
//             ifsc_code: company.ifsc_code,
//             logo: company.logo,
//             sign: company.sign,
//             stamp: company.stamp,
//             branch_name: company.branch_name,
//             createdAt: company.created_at,
//             updatedAt: company.updated_at,
//           }
//         )
//       });
//       console.log("---------------",transformedData)
//       setRows(transformedData);  // Set the fetched data to rows
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   useEffect(() => {
//     fetchData();  // Fetch data when the component mounts
//   }, []);

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
//     { field: "founder_name", headerName: "Founder Name", flex: 1 },
//     { field: "gst_no", headerName: "GST No", flex: 1.5 },
//     { field: "address", headerName: "Address", flex: 1 },
//     { field: "anniversary_date", headerName: "Anniversary Date", flex: 1 },
//     { field: "bank_name", headerName: "Bank Name", flex: 1 },
//     { field: "account_no", headerName: "Account No", flex: 1 },
//     { field: "ifsc_code", headerName: "IFSC Code", flex: 1 },
//     { field: "logo", headerName: "Logo", flex: 1 },
//     { field: "sign", headerName: "Sign", flex: 1 },
//     { field: "stamp", headerName: "Stamp", flex: 1 },
//     { field: "branch_name", headerName: "Branch Name", flex: 1 },
//     { field: "createdAt", headerName: "Created At", flex: 1 },
//     { field: "updatedAt", headerName: "Updated At", flex: 1 },
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

//       <Box sx={{ flexGrow: 1, overflowX: "auto", p: 2, "& .MuiDataGrid-root": { height: "100%", minWidth: 2500 } }}>
//         <DataGrid
//           rows={rows}  // Display the rows fetched from the API
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5, 10, 20]}
//           components={{ Toolbar: CustomToolbar }}
//           loading={loading}  // Show loading spinner while fetching data
//           disableSelectionOnClick
//         />
//       </Box>

//       <CreateCompanyDialog open={open} handleClose={handleClose} />
//     </Box>
//   );
// };

// export default Companies;






