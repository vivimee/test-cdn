import homeConstant from './constant';

const homeActions = {
  setName: name => ({ type: homeConstant.SET_NAME, data: name }),
  fetchName: () => async (dispatch) => {
    const fetchNamePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('this is fetchName');
      }, 3000);
    });
    const name = await fetchNamePromise;
    dispatch({ type: homeConstant.SET_NAME, data: name });
  },
};

export default homeActions;
