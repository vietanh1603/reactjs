import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../features/contacts/contactSlice.js';

export default function ContactInput() {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.contacts.searchQuery);

    return (
        <TextField
            label="Tìm kiếm theo tên hoặc email"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            fullWidth
            size="small"
            variant="outlined"
        />
    );
}
