import createReducer from '../../core/createReducer';
import detailContanst from './constant';

const initialState = {
  id: 'initial id',
};

const detailReducers = createReducer(initialState, {
  [detailContanst.SET_ID]: (state, action) => ({
    ...state,
    id: action.data,
  }),
});

export default detailReducers;
