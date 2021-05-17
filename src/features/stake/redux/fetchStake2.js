import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  STAKE_FETCH_STAKE2_BEGIN,
  STAKE_FETCH_STAKE2_SUCCESS,
  STAKE_FETCH_STAKE2_FAILURE,
} from './constants';
import { enqueueSnackbar } from '../../common/redux/actions'

export function fetchStake2(index, amount) {
  return (dispatch, getState) => {
    // optionally you can have getState as the second argument
    dispatch({
      type: STAKE_FETCH_STAKE2_BEGIN,
      index
    });
    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise(async (resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const { home, stake } = getState();
      const { address, web3 } = home;
      const { pools } = stake;
      const { earnContractAbi, earnContractAddress } = pools[index];
      const contract = new web3.eth.Contract(earnContractAbi, earnContractAddress);

      contract.methods.stakeMultiplier(amount).send({ from: address}).on(
        'transactionHash', function(hash){
          dispatch(enqueueSnackbar({
            message: hash,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'success'
            },
            hash
          }));
        })
        .on('receipt', function(receipt){
          dispatch(enqueueSnackbar({
            key: new Date().getTime() + Math.random(),
            message: 'success',
            options: {
              variant: 'success',
            },
          }));
          dispatch({ type: STAKE_FETCH_STAKE2_SUCCESS, index });
          resolve();
        })
        .on('error', function(error) {
          dispatch(enqueueSnackbar({
            message: error.message || error,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'error'
            },
          }));
          dispatch({ type: STAKE_FETCH_STAKE2_FAILURE, index });
          resolve();
        })
        .catch((error) => {
          dispatch({ type: STAKE_FETCH_STAKE2_FAILURE, index });
          reject(error)
        })
    });
    return promise;
  }
}


export function useFetchStake2() {
  // args: false value or array
  // if array, means args passed to the action creator
  const dispatch = useDispatch();

  const { fetchStakePending2 } = useSelector(
    state => ({
      fetchStakePending2: state.stake.fetchStakePending2,
    })
  );

  const boundAction = useCallback(
    (data, amount) => dispatch(fetchStake2(data, amount)),
    [dispatch],
  );

  return {
    fetchStake2: boundAction,
    fetchStakePending2
  };
}

export function reducer(state, action) {
  const { fetchStakePending2 } = state;
  switch (action.type) {
    case STAKE_FETCH_STAKE2_BEGIN:
      // Just after a request is sent
      fetchStakePending2[action.index] = true;
      return {
        ...state,
        fetchStakePending2
      };

    case STAKE_FETCH_STAKE2_SUCCESS:
      // The request is success
      fetchStakePending2[action.index] = false;
      return {
        ...state,
        fetchStakePending2
      };

    case STAKE_FETCH_STAKE2_FAILURE:
      // The request is failed
      fetchStakePending2[action.index] = false;
      return {
        ...state,
        fetchStakePending2
      };

    default:
      return state;
  }
}