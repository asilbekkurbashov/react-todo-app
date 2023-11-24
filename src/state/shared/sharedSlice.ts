import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_SharedType } from "./sharedType";

const initialState: I_SharedType = {
  isModal: false,
  search: "",
  drawerLeft: false,
  drawerRight: false,
};

const sharedSlice = createSlice({
  name: "sharedSlice",
  initialState,
  reducers: {
    setIsModal: (state,{payload}:PayloadAction<boolean>) => {
      state.isModal = payload;
    },
    setDrawerLeft: (state, { payload }: PayloadAction<boolean>) => {
      state.drawerLeft = payload;
    },
    setDrawerRight: (state, { payload }: PayloadAction<boolean>) => {
      state.drawerRight = payload;
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
  },
});

export const { reducer: SharedSliceReducer } = sharedSlice;
export const { actions: SharedSliceActions } = sharedSlice;
