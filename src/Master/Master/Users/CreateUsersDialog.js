import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

const CreateUsersDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Company Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Roll Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Email" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Mobile Number" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Designation" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Alternate Number" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Home Number" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Joining Date" variant="outlined" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Leaves Left" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Date Of Birth" variant="outlined" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Leaves Left" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Date Of Birth" variant="outlined" type="date" size="small" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
              <TextField fullWidth label="Profile" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
          </Grid>
          <Grid item xs={6}>
               <TextField fullWidth label="Adhar Front" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
          </Grid>
          <Grid item xs={6}>
               <TextField fullWidth label="Adhar Back" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
          </Grid>
          <Grid item xs={6}>
               <TextField fullWidth label="Pan Card" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
          </Grid>
          <Grid item xs={6}>
               <TextField fullWidth label="Experience Letter" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
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

export default CreateUsersDialog;