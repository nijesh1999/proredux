import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "covid_data",
  initialState: {
    data: [],
    total: 0,
  },
  reducers: {
    addData(state, action) {
      state.data = [...action.payload];
    },
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
