import { createSelector } from "reselect";

const selectHide = state => state.hide;

export const selectHideSelector = createSelector(
  [selectHide],
  hide => hide.goHide
);
