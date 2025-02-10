import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const CreateAddOnServicesDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Add On Services</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Project Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Name" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Fees" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Description" variant="outlined" size="small" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error" variant="outlined">Cancel</Button>
        <Button onClick={handleClose} color="primary" variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateAddOnServicesDialog;
