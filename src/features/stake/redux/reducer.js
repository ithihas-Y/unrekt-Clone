import initialState from './initialState';
import { reducer as fetchPoolsInfoReducer} from './fetchPoolsInfo';
import { reducer as checkApprovalReducer} from './checkApproval';
import { reducer as fetchBalanceReducer} from './fetchBalance';
import { reducer as fetchCurrentlyStakedReducer } from './fetchCurrentlyStaked';
import { reducer as fetchRewardsAvailableReducer } from './fetchRewardsAvailable';
import { reducer as fetchRewardsAvailable2Reducer } from './fetchRewardsAvailable2';
import { reducer as fetchHalfTimeReducer } from './fetchHalfTime';
import { reducer as fetchCanWithdrawTimeReducer } from './fetchCanWithdrawTime';
import { reducer as fetchApprovalReducer } from './fetchApproval';
import { reducer as fetchStakeReducer } from './fetchStake';
import { reducer as fetchStake2Reducer } from './fetchStake2';
import { reducer as fetchWithdrawReducer } from './fetchWithdraw';
import { reducer as fetchWithdraw2Reducer } from './fetchWithdraw2';
import { reducer as fetchClaimReducer } from './fetchClaim';
import { reducer as fetchExitReducer } from './fetchExit';


const reducers = [
  fetchPoolsInfoReducer,
  checkApprovalReducer,
  fetchBalanceReducer,
  fetchCurrentlyStakedReducer,
  fetchRewardsAvailableReducer,
  fetchRewardsAvailable2Reducer,
  fetchHalfTimeReducer,
  fetchCanWithdrawTimeReducer,
  fetchApprovalReducer,
  fetchStakeReducer,
  fetchStake2Reducer,
  fetchWithdrawReducer,
  fetchWithdraw2Reducer,
  fetchClaimReducer,
  fetchExitReducer
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}