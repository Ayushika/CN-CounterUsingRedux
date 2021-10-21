/** @format */

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREEMENT_COUNT":
      return action.payload;
    case "DECREEMENT_COUNT":
      return action.payload;
    default:
      return state;
  }
};
