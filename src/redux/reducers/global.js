import createReducer from '../../core/createReducer';

const initialState = {
  appGlobalData: null,
};

const SET_APP_DATA = 'SET_APP_DATA';

export default createReducer(initialState, {
  [SET_APP_DATA](state, action) {
    return {
      ...state,
      appGlobalData: action.data,
    };
  },
});
