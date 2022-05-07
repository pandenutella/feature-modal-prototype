import { createSlice } from "@reduxjs/toolkit";

const featuresSlice = createSlice({
  name: "features",
  initialState: {
    data: [],
    visible: false,
  },
  reducers: {
    showFeatureTips: (state, { payload }) => {
      state.data = payload.map((key) => ({ key, doNotShowAgain: false }));
      state.visible = true;
    },
    setDoNotShowAgain: (state, { payload }) => {
      state.data = state.data.map((feature) => {
        if (payload.key !== feature.key) return feature;

        return { ...feature, doNotShowAgain: payload.doNotShowAgain };
      });
    },
    hideFeatureTips: (state) => {
      state.data = [];
      state.visible = false;
    },
  },
});

export const { showFeatureTips, setDoNotShowAgain, hideFeatureTips } =
  featuresSlice.actions;
export default featuresSlice.reducer;
