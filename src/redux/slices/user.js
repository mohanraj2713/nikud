import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: null,
    user: null,
    permission: []
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        setUser(state, action) {
            console.log("USER SLICE", state, action)
            const { user, permission } = action.payload;
            state.isLoading = false
            state.user = user
            state.permission = permission
        },

    },
});

// Reducer
export default slice.reducer;

export const {
    setUser
} = slice.actions;
