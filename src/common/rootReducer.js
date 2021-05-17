import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from './history';
import homeReducer from 'features/home/redux/reducer';
// import rektReducer from 'features/rekt/redux/reducer';
import commonReducer from 'features/common/redux/reducer';
//import reverseReducer from 'features/reverse/redux/reducer';

const reducerMap = {
  router: connectRouter(history),
  home: homeReducer,
  //vault: vaultReducer,
    //rekt: rektReducer,
  //swapliq: swapliqReducer,
  //liquidity: liquidityReducer,
  common: commonReducer,
  //reverse: reverseReducer,
};

export default combineReducers(reducerMap);
