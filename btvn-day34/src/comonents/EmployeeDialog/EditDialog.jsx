import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

const EditDialog = ({open, onClose, employee, onUpdate}) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: ''
    });

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name,
                age: employee.age,
                address: employee.address
            });
        }
    }, [employee]);

    const handleChange = (event) => {
        const inputElement = event.target;
        const inputName = inputElement.name;
        const inputValue = inputElement.value;

        setFormData((previousData) => ({
            ...previousData,
            [inputName]: inputValue
        }));
    }

    const handleSubmit = () => {
        if (!formData.name || !formData.age || !formData.address) {
            alert('!');
            return;
        }

        onUpdate({
            ...employee,
            ...formData,
            age: parseInt(formData.age)
        });
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{fontWeight: 600, fontSize: '18px', textAlign: 'center'}}>
                Edit Employee
            </DialogTitle>
            <DialogContent>
                <TextField
                    sx={{margin:'10px 0'}}
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    sx={{margin:'10px 0'}}
                    margin="dense"
                    name="age"
                    label="Age"
                    type="number"
                    fullWidth
                    value={formData.age}
                    onChange={handleChange}
                />
                <TextField
                    sx={{margin:'10px 0'}}
                    margin="dense"
                    name="address"
                    label="Address"
                    type="text"
                    fullWidth
                    value={formData.address}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Hủy</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditDialog;