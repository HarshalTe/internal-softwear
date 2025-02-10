import React, { useState } from 'react';
import { ChevronDown, Pencil } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button,
  Typography,
  Box
} from '@mui/material';

const Permissions = () => {
  const [selectedUser, setSelectedUser] = useState('userTest');
  
  const permissions = [
    {
      page: 'Dashboard',
      create: true,
      view: true,
      edit: true,
      delete: true
    }
    // Add more pages as needed
  ];

  return (
    <Paper className="w-full">
      {/* Header */}
      <Box className="bg-cyan-500 p-4">
        <Typography variant="h6" className="text-white font-normal">
          Page Rights
        </Typography>
      </Box>

      {/* Controls */}
      <div className='container'>
          <div className='row'>
              <div className='col'>
              <Box className="relative flex-1">
          <Select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full bg-white"
            variant="outlined"
            size="small"
            sx={{ width: '910px' }} // Set the width here
          >
            <MenuItem value="userTest">userTest</MenuItem>
            <MenuItem value="user2">user2</MenuItem>
            <MenuItem value="user3">user3</MenuItem>
          </Select>
        </Box>
              </div>
              <div className='col'>
              <Button 
          variant="contained" 
          className="bg-orange-500 hover:bg-orange-600"
          startIcon={<Pencil className="w-4 h-4" />}
        >
          BULK APPROVAL
        </Button>
              </div>
          </div>
      

        
      </div>

      {/* Table */}
      <Box className="px-4 pb-4">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Pages</TableCell>
                <TableCell align="center">Create</TableCell>
                <TableCell align="center">View</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default Permissions;