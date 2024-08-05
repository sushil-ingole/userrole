import { createSlice } from "@reduxjs/toolkit";

export interface IUserRole {
    username: string;
    role: string;
}

const mockInitialState: IUserRole = {
    username: "",
    role: ""
}

const roleSlice = createSlice({
    name: 'role',
    initialState: mockInitialState,
    reducers: {
        role: (state, action: {payload: IUserRole}) => {
            console.log(action);
            state.username = action.payload.username;
            state.role = action.payload.role;
        }
    }
});

export const { role } = roleSlice.actions;
export default roleSlice.reducer;