import { createSlice } from "@reduxjs/toolkit";

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: {
    value: {
      animal: "",
      breed: "",
      location: "",
    },
  },
  reducers: {
    all: (state, action) => {
      state.value = action.payload;
    },
  },
});
// function all(state) {
//     return { type: "all", payload : state }
// }

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
