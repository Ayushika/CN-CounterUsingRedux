/** @format */

export const increement = (value) => async (dispatch) => {
  try {
    dispatch({ type: "INCREEMENT_COUNT", payload: value + 1});
  } catch (error) {
    console.log(error.message);
  }
};

export const decreement = (value) => async (dispatch) => {
  try {
    dispatch({ type: "DECREEMENT_COUNT", payload: value - 1});
  } catch (error) {
    console.log(error.message);
  }
};
