import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchContacts, deleteContact, addContact, updateContact} from '../features/contacts/contactSlice';
import { Typography, CircularProgress } from '@mui/material';
import './style.sass';
import {ContactCard, ContactForm, ContactInput} from "../components/index.js";

export default function ContactPage() {
    const dispatch = useDispatch();
    const { contacts, loading, error, searchQuery } = useSelector(state => state.contacts);
    const [editingContact, setEditingContact] = useState(null);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleSubmit = (data) => {
        if (editingContact) {
            dispatch(updateContact(data));
        } else {
            dispatch(addContact(data));
        }
        setEditingContact(null);
    };

    const handleEdit = (contact) => {
        setEditingContact(contact);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const filtered = contacts.filter((c) =>
        (`${c.firstName} ${c.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="contact-page">
            <Typography variant="h4" className="page-title">Quản lý Danh bạ</Typography>

            <div className="top-bar">
                <ContactInput />
            </div>

            <div className="form-container">
                <ContactForm
                    editingContact={editingContact}
                    onSubmit={handleSubmit}
                    onCancel={() => setEditingContact(null)}
                />
            </div>

            {loading ? (
                <div className="status-msg"><CircularProgress /> Loading...</div>
            ) : error ? (
                <div className="status-msg error">Lỗi: {error}</div>
            ) : (
                <div className="contact-list">
                    {filtered.length > 0 ? (
                        filtered.map((contact) => (
                            <ContactCard
                                key={contact.id}
                                contact={contact}
                                onEdit={() => handleEdit(contact)}
                                onDelete={(id) => {
                                    if (window.confirm('Bạn có chắc muốn xoá?')) {
                                        dispatch(deleteContact(id));
                                    }
                                }}
                            />
                        ))
                    ) : (
                        <div className="status-msg">Không tìm thấy liên hệ</div>
                    )}
                </div>
            )}
        </div>
    );
}