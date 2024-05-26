import { createSlice } from "@reduxjs/toolkit";

const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  // It's just a fancy name to say. I'm going to take an old state and perform some action to get new bit of state
  reducers: {
    adopt(state, action) {
      state.value = action.payload;
    },
  },
});

// This is a pattern from their docs
export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
