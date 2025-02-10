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

const CreateClientsDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Clients</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Company Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Name" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Billing Name" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Email" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="GST No" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Phone Number" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Date Of Birth" variant="outlined" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Latitude" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Longitude" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Created At" variant="outlined" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Created At" variant="outlined" type="time" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Updated At" variant="outlined" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Updated At" variant="outlined" type="time" size="small" InputLabelProps={{ shrink: true }} />
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

export default CreateClientsDialog;
