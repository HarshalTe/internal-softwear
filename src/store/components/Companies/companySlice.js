import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from 'shared/baseURL';

// Async Thunk to POST data to the API
export const createCompany = createAsyncThunk(
    'company/createCompany',
    async (companyData, { rejectWithValue }) => {
        let token = localStorage.getItem('token')
        try {
            const response = await fetch(`${baseUrl}/companies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token} `
                },
                body: companyData,
            });

            if (!response.ok) {
                throw new Error('Failed to post data');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const companySlice = createSlice({
    name: 'company',
    initialState: {
        companyData: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCompany.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.companyData = action.payload;
                state.error = null;
            })
            .addCase(createCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default companySlice.reducer;
