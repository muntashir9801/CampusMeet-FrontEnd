import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/axios";
import { toast } from "react-toastify";




const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    user: JSON.parse(localStorage.getItem("user")) || null

};

export const login = createAsyncThunk(
    "/auth/login",
    async (data) => {
        try {
            toast.info("Logging in...");
            const response = await instance.post("/auth/signin", data);
            toast.success("Login successful");
            return response.data;
        }
        catch (error) {
            toast.error(error?.response?.data?.message);
            return error?.response?.data;
        }
    }
);

export const signUp = createAsyncThunk(
    "/users/signup",
    async (data) => {
        try {
            toast.info("Registering...");
            const response = await instance.post("/users/signup", data);
            toast.success("Registration successful");
            return response.data;
        }
        catch (error) {
            toast.error(error?.response?.data?.message);
            
            return error?.response?.data;
           
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            toast.info("Logging out...");
            const response = await instance.delete("/auth/signout");
            toast.success("Logout successful");
            return response.data;
        }
        catch (error) {
            toast.error(error?.response?.data?.message);
           
            return error?.response?.data;
            
        }
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateUserData: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        }

    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            if(action.payload.success){
                state.isLoggedIn = true;
                state.user = action.payload.data;
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("user", JSON.stringify(action?.payload?.data));
            }
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            if(action.payload.success){
                state.isLoggedIn = false;
                state.user = null;
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("user");
            }

        });


    }
});

export const { updateUserData } = authSlice.actions;

export const authReducer = authSlice.reducer;
