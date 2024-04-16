import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../services";

// Get user from localStorage
// const user = localStorage.getItem("user");

type USER = {
  email: string;
  password: string;
  type: string;
};

interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (user: USER, thunkAPI) => {
    try {
      // console.log("user slice", user);
      return await loginUser(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
// export const getLoggedInUserPermission = createAsyncThunk(
//   "auth/getLoggedInUserPermission",
//   async (id: string, thunkAPI) => {
//     try {
//       // console.log("user slice", user);
//       return await getOneRole(id);
//     } catch (error: any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await authService.logout();
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    signout(state) {
      state.isLoggedIn = false;
      state.user = null;
      // state.role = null;
      state.error = null;
      state.loading = false;

      localStorage.removeItem("token");
    },

    updateUser(
      state,
      action: {
        payload: {
          name: string;
          image?: string;
          phoneNumber: string;
          email: string;
          nationalId: string;
        };
      }
    ) {
      state.user = { ...state.user, ...action.payload };
    },
    // console.log(action.payload);
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("user", action.payload.data.user);
        state.isLoggedIn = true;
        state.user = action.payload.data.user;
        state.loading = false;

        localStorage.setItem(
          "token",
          JSON.stringify(`Bearer ${action.payload.data.token}`)
        );
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    // .addCase(getLoggedInUserPermission.fulfilled, (state, action) => {
    //   // const permissions = flattenPermissions(action.payload.data);
    //   // console.log("permissions: ", permissions);
    //   state.role = action.payload.data;
    //   console.log("stat", state);
    // });
  },
});

export const { signout, updateUser } = authSlice.actions;
export default authSlice.reducer;
