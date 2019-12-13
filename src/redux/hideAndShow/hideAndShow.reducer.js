import HideAndShow from "./hideAndShow.types";

const init = {
  goHide: true
};

const hideReducer = (state = init, action) => {
  switch (action.type) {

    case HideAndShow.HIDE_OR_SHOW:
        console.log("--------------" + state.goHide)
      return {
        ...state,
        goHide: !state.goHide
      };
    default:
      return state;
  }
};

export default hideReducer;
