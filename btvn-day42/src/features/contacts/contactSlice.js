
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contactAPI from "../../api/contactAPI.js";


// GET
export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const res = await contactAPI.getAll();
        return res.data;
    }
);

// POST
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact) => {
        const res = await contactAPI.create(newContact);
        return res.data;
    }
);

// PUT
export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async (updatedContact) => {
        const res = await contactAPI.update(updatedContact);
        return res.data;
    }
);

// DELETE
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id) => {
        await contactAPI.remove(id);
        return id;
    }
);
const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        loading: false,
        error: null,
        searchQuery: '',
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.push(action.payload);
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                const index = state.contacts.findIndex(c => c.id === action.payload.id);
                if (index !== -1) state.contacts[index] = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter(c => c.id !== action.payload);
            });
    },
});

export const { setSearchQuery } = contactSlice.actions;
export default contactSlice.reducer;
