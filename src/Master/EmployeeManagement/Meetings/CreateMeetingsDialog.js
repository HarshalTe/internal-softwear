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

const CreateMeetingsDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Meetings</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Company Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Is Client" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Client Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Date Time" variant="outlined" type="time" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Agenda" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Outcome" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Status" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Expected Duration" variant="outlined" type="time" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Final Duration" variant="outlined" type="time" size="small" InputLabelProps={{ shrink: true }} />
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

export default CreateMeetingsDialog;
