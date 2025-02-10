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

const CreateProjectResourcesDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Project Resource</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Project Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
             <TextField fullWidth label="Resource Document" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
         </Grid>
         <Grid item xs={6}>
             <TextField fullWidth label="Build" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
         </Grid>
         <Grid item xs={6}>
             <TextField fullWidth label="Apk" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
         </Grid>
         <Grid item xs={6}>
             <TextField fullWidth label="Api Collection" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
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

export default CreateProjectResourcesDialog;
