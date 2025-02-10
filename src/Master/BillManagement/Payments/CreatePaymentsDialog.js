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

const CreatePaymentsDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add Payment</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Company Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Invoice Id" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Amount" variant="outlined" size="small" />
          </Grid>
           <Grid item xs={6}>
                <TextField fullWidth label="Date" variant="outlined" type="Date" size="small" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={6}>
            <TextField fullWidth label="Type" variant="outlined" size="small" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Payment Mode" variant="outlined" size="small" />
          </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="File" variant="outlined" type="file" size="small" InputLabelProps={{ shrink: true }} inputProps={{ accept: "image/*" }}/>
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

export default CreatePaymentsDialog;
