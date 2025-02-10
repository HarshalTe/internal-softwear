import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Grid, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createCompany } from "store/components/Companies/companySlice";

const CreateCompanyDialog = ({ open, handleClose }) => {  
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState({
    name: '',
    founder_name: '',
    gst_no: '',
    address: '',
    account_no: '',
    ifsc_code: '',
    branch_name: ''
  });
  
  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(inputValue).forEach(key => {
      formData.append(key, inputValue[key]);
    });
    dispatch(createCompany(formData));   // Assuming the API accepts FormData in your action
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Expense Types</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                size="small"
                name="name"
                value={inputValue.name}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Founder Name"
                variant="outlined"
                size="small"
                name="founder_name"
                value={inputValue.founder_name}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="GST No"
                variant="outlined"
                size="small"
                name="gst_no"
                value={inputValue.gst_no}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                size="small"
                name="address"
                value={inputValue.address}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Account No"
                variant="outlined"
                size="small"
                name="account_no"
                value={inputValue.account_no}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="IFSC Code"
                variant="outlined"
                size="small"
                name="ifsc_code"
                value={inputValue.ifsc_code}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Branch Name"
                variant="outlined"
                size="small"
                name="branch_name"
                value={inputValue.branch_name}
                onChange={handleInput}
              />
            </Grid>
            <Grid item xs={6}>
              <input type="submit" />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error" variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateCompanyDialog;
