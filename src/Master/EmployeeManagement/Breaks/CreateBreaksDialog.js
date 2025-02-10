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

const CreateBreaksDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Breaks</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="User Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Date" variant="outlined" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Start Time" variant="outlined" type="time" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="End Time" variant="outlined" type="time" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Reason" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Is Approved" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Type" variant="outlined" size="small" />
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

export default CreateBreaksDialog;
