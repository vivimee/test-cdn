import detailContanst from './constant';

const detailActions = {
  setId: id => ({ type: detailContanst.SET_ID, data: id }),
  fetchId: () => async (dispatch) => {
    const fetchidPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('this is fetchName');
      }, 3000);
    });
    const id = await fetchidPromise;
    dispatch({ type: detailContanst.SET_ID, data: id });
  },
};

export default detailActions;
