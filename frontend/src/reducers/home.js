import { createReducer } from 'redux-immutablejs';
import actionTypes from 'frontend/src/constants';
import Immutable from 'immutable';
// import { Role } from 'frontend/src/mndels'
// import { convertArrayToRecordMap } from 'src/Utils/Utils';
import { initialState } from 'frontend/src/models';

export default createReducer(initialState, {

  [actionTypes.CONST_TEMP_REQUEST]: (state, action) => state.merge({

  }),
  [actionTypes.CONST_TEMP_SUCCESS]: (state, action) => {
    return state.merge({
    })
  },
  [actionTypes.CONST_TEMP_FAILED]: (state, action) => {
    return state.merge({
    });
  },
  [actionTypes.TEST_HOME]: (state, action) => {
    return state.merge({
      testResult: action.result,
    });
  },
})
