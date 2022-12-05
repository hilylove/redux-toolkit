import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "anne",
    email: "anne@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
    addHello: (state, action) => {
      state.name = "Hello " + action.payload.name;
    },
  },
});

export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;
