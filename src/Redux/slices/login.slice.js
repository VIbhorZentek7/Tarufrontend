import { createSlice } from '@reduxjs/toolkit';
export const loginSlice = createSlice({
	name: 'Login',
	initialState: {
		isAuthenticated: '',
		status: '',
		success: '',
		type: ''
	},
	reducers: {
		loginData: (state, action) => {
			return action.payload;
		}
	}
});
export const { loginData } = loginSlice.actions;
export default loginSlice.reducer;

// let slicename = createSlice({
// 	name:"",
// 	initalState:{}
// 	reducers:{
// 		functions
// 	}
// })
//export const {fuction1 , function2...}= slicename.actions
//export default slicename.reducer
