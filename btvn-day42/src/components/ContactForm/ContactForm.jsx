import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './style.sass'


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    image: '', // chứa base64
};

export default function ContactForm({ onSubmit, editingContact, onCancel }) {
    const [formData, setFormData] = useState(initialState);
    const [avatarPreview, setAvatarPreview] = useState(null);

    useEffect(() => {
        if (editingContact) {
            setFormData(editingContact);
            setAvatarPreview(editingContact.image);
        } else {
            setFormData(initialState);
            setAvatarPreview(null);
        }
    }, [editingContact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAvatarUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prev) => ({ ...prev, image: reader.result }));
            setAvatarPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, image } = formData;
        if (!firstName || !lastName || !email || !phone || !image) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }
        onSubmit(formData);
        // reset form
        if (!editingContact) {
            setFormData(initialState);
            setAvatarPreview(null);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // UX
        }
    };

    return (
        <Box className="contact-form">
            <Typography variant="h6">{editingContact ? 'Chỉnh sửa liên hệ' : 'Thêm mới liên hệ'}</Typography>
            <form onSubmit={handleSubmit}>
                <TextField size="small" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth margin="dense" />
                <TextField size="small" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth margin="dense" />
                <TextField size="small" label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="dense" />
                <TextField size="small" label="Phone" name="phone" value={formData.phone} onChange={handleChange} fullWidth margin="dense" />

                <Box mt={2} mb={1}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarUpload}
                        style={{ display: 'none' }}
                        id="avatar-upload"
                    />
                    <label htmlFor="avatar-upload">
                        <Button size="small" variant="outlined" component="span">
                            Tải lên ảnh đại diện
                        </Button>
                    </label>
                </Box>


                {avatarPreview && (
                    <Box mb={2} textAlign="center">
                        <img src={avatarPreview} alt="Avatar preview" width={100} height={100} style={{ borderRadius: '50%' }} />
                    </Box>
                )}

                <Box mt={2} display="flex" gap={1}>
                    <Button type="submit" variant="contained" color="primary">
                        {editingContact ? 'Lưu' : 'Thêm'}
                    </Button>
                    {editingContact && (
                        <Button variant="outlined" color="secondary" onClick={onCancel}>
                            Hủy
                        </Button>
                    )}
                </Box>
            </form>
        </Box>
    );
}
