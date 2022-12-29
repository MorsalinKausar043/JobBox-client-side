import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const initialState = {
    isLoading: true,
    isError : false,
    errorMassage: "",
    email:"",
    role:""
};

export const createUser = createAsyncThunk("auth/createUser", async ({email,password}) =>{
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
});

export const signInUser = createAsyncThunk("auth/singInUser", async ({email,password}) =>{
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
})

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        saveUser : ( state,action) =>{
            state.email = action.payload;
        },
        logOutUser : ( state) =>{
            state.email = "";
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(createUser.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
            state.errorMassage = "";
        })
        builder.addCase(createUser.fulfilled , (state,action) =>{
            state.isLoading = false;
            state.isError = false;
            state.errorMassage = "";
            state.email = action.payload;
        })
        builder.addCase(createUser.rejected , (state,action) =>{
            state.isLoading = false;
            state.isError = true;
            state.errorMassage = action.error.message;
            state.email = "";
        })
        builder.addCase(signInUser.pending, (state) =>{
            state.isLoading = true;
            state.isError = false;
            state.errorMassage = "";
        })
        builder.addCase(signInUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isError = false;
          state.errorMassage = "";
          state.email = action.payload;
        });
        builder.addCase(signInUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.errorMassage = action.error.message;
          state.email = "";
        });
    }
    
});

export const { saveUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;