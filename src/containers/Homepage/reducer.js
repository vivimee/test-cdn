import createReducer from '../../core/createReducer';
import homeConstant from './constant';

const initialState = {
  name: 'initial name',
};

const homeReducers = createReducer(initialState, {
  [homeConstant.SET_NAME]: (state, action) => ({
    ...state,
    name: action.data,
  }),
});

export default homeReducers;
