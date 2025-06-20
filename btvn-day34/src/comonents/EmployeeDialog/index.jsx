import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField} from '@mui/material';
import { useState } from 'react';

const EmployeeDialog = ({open, handleOpen, handleClose, setEmployees}) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.address) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

// them nhan vien moi
    setEmployees(prev => [
      ...prev,
      {
        id: prev.length + 1,
        ...formData,
        age: parseInt(formData.age)
      }
    ]);

    // reset form
    setFormData({
      name: '',
      age: '',
      address: ''
    });
    handleClose();
  };

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
      }}>
        <div style={{ flex: 1 }}></div>
        <h1 style={{ flex: 2, textAlign: 'center' }}>Danh sách nhân viên</h1>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            onClick={handleOpen}
          >
            Add New
          </Button>
        </div>
      </div>

      <Dialog
        open={open}
        maxWidth="sm"
        fullWidth
        onClose={handleClose}
      >
        <DialogTitle sx={{fontWeight:600, fontSize:'18px', textAlign:'center'}}>
          Employee Form
        </DialogTitle>
        <DialogContent>
          <TextField
            sx={{margin:'10px 0'}}
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            sx={{margin:'10px 0'}}
            fullWidth
            id="age"
            type="number"
            label="Age"
            variant="outlined"
            value={formData.age}
            onChange={handleChange}
          />
          <TextField
            sx={{margin:'10px 0'}}
            fullWidth
            id="address"
            label="Address"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeDialog;