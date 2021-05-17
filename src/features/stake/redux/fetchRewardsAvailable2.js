import { useCallback } from 'react';
import BigNumber from "bignumber.js";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  STAKE_FETCH_REWARDS_AVAILABLE2_BEGIN,
  STAKE_FETCH_REWARDS_AVAILABLE2_SUCCESS,
  STAKE_FETCH_REWARDS_AVAILABLE2_FAILURE,
} from './constants';

export function fetchRewardsAvailable2(index) {
  return (dispatch, getState) => {
    // optionally you can have getState as the second argument
    dispatch({
      type: STAKE_FETCH_REWARDS_AVAILABLE2_BEGIN,
      index
    });
    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const { home, stake } = getState();
      const { address, web3 } = home;
      const { pools } = stake;
      const { earnContractAbi, earnContractAddress } = pools[index];
      const contract = new web3.eth.Contract(earnContractAbi, earnContractAddress);
      contract.methods.rewardPerToken1().call({ from: address }).then(
        data => {
          dispatch({
            type: STAKE_FETCH_REWARDS_AVAILABLE2_SUCCESS,
            data: new BigNumber(data).toNumber(),
            index
          });
          resolve(data);
        },
      ).catch(
        // Use rejectHandler as the second argument so that render errors won't be caught.
        error => {
          dispatch({
            type: STAKE_FETCH_REWARDS_AVAILABLE2_FAILURE,
            index
          });
          reject(error.message || error);
        }
      )
    });
    return promise;
  }
}


export function useFetchRewardsAvailable2() {
  // args: false value or array
  // if array, means args passed to the action creator
  const dispatch = useDispatch();

  const { rewardsAvailable2, fetchRewardsAvailable2Pending } = useSelector(
    state => ({
      rewardsAvailable2: state.stake.rewardsAvailable2,
      fetchRewardsAvailable2Pending: state.stake.fetchRewardsAvailable2Pending,
    })
  );

  const boundAction = useCallback(
    data => dispatch(fetchRewardsAvailable2(data)),
    [dispatch],
  );

  return {
    rewardsAvailable2,
    fetchRewardsAvailable2: boundAction,
    fetchRewardsAvailable2Pending
  };
}

export function reducer(state, action) {
  const { rewardsAvailable2, fetchRewardsAvailable2Pending } = state;
  switch (action.type) {
    case STAKE_FETCH_REWARDS_AVAILABLE2_BEGIN:
      // Just after a request is sent
      fetchRewardsAvailable2Pending[action.index] = true;
      return {
        ...state,
        fetchRewardsAvailable2Pending,
      };

    case STAKE_FETCH_REWARDS_AVAILABLE2_SUCCESS:
      // The request is success

      rewardsAvailable2[action.index] = action.data;
      fetchRewardsAvailable2Pending[action.index] = false;
      return {
        ...state,
        rewardsAvailable2,
        fetchRewardsAvailable2Pending,
      };

    case STAKE_FETCH_REWARDS_AVAILABLE2_FAILURE:
      // The request is failed
      fetchRewardsAvailable2Pending[action.index] = false;
      return {
        ...state,
        fetchRewardsAvailable2Pending,
      };

    default:
      return state;
  }
}