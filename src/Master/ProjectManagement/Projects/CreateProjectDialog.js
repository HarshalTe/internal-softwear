import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios"; // Import axios

const CreateProjectDialog = ({ open, handleClose }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    company_id: "",
    service_id: "",
    client_id: "",
    invoice_id: "",
    name: "",
    start_date: "",
    end_date: "",
    cost: "",
    test_url: "",
    live_url: "",
    db_design_url: "",
    payment_received: "",
    payment_received_percentage: "",
    created_at: "",
    updated_at: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

// Handle form submission
const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://aihika.in/internal-software/public/api/v1/projects",
        formData,
        {
          headers: {
            Authorization: `Bearer 10|itiXfO4roWcuRonfrX1LvAKau9IG4QhNCHqGWXWSd50dd672`, 
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Project created successfully:", response.data);
      handleClose();  
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };
  

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Project</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Company Id"
              name="company_id"
              value={formData.company_id}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Service Id"
              name="service_id"
              value={formData.service_id}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Client Id"
              name="client_id"
              value={formData.client_id}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Invoice Id"
              name="invoice_id"
              value={formData.invoice_id}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Start Date"
              name="start_date"
              type="date"
              value={formData.start_date}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="End Date"
              name="end_date"
              type="date"
              value={formData.end_date}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Cost"
              name="cost"
              value={formData.cost}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Test Url"
              name="test_url"
              value={formData.test_url}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Live Url"
              name="live_url"
              value={formData.live_url}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Db Design Url"
              name="db_design_url"
              value={formData.db_design_url}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Payment Received"
              name="payment_received"
              value={formData.payment_received}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Payment Received Percentage"
              name="payment_received_percentage"
              value={formData.payment_received_percentage}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Created At"
              name="created_at"
              type="date"
              value={formData.created_at}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Updated At"
              name="updated_at"
              type="date"
              value={formData.updated_at}
              onChange={handleInputChange}
              variant="outlined"
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProjectDialog;