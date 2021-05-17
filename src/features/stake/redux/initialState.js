import { yCurveFiRewardsABI, balancerRewardsABI, governanceABI, staking1 } from "../../configure";

const pools = [
	{
		name: 'DRAX',
		token: '',
		tokenDecimals: 18,
		tokenAddress: '0xe2b37dd9a7dc19e49ee19a59312035241cbd717d',
		earnedToken: 'DRAX',
		earnedToken2: 'DMAGIC',
		earnedTokenDecimals: 18,
		earnedTokenAddress: '0xe2b37dd9a7dc19e49ee19a59312035241cbd717d',
		earnContractAddress: '0x70186F21484A526DB436F02E2cd6df0306876F93',
		earnContractAbi: staking1
	},
	{
		name: 'DMAGIC',
		token: 'Stake dMagic & Boost your Stakings',
		tokenDecimals: 18,
		tokenAddress: '0x5b7c755894e4685eb5361da5a50331878203ce40',
		earnedToken: 'DRAX',
		earnedToken2: '',
		earnedTokenDecimals: 18,
		earnedTokenAddress: '0x5b7c755894e4685eb5361da5a50331878203ce40',
		earnContractAddress: '0x70186F21484A526DB436F02E2cd6df0306876F93',
		earnContractAbi: staking1
	},


];

const poolsInfo = [{
	name: "DRAX",
	staked: 0,
	tvl: 0,
	apy: 0,
},{
	name: "DMAGIC",
	staked: 0,
	tvl: 0,
	apy: 0,
}]


const allowance = [0,0];
const balance = [0,0];
const currentlyStaked = [0,0];
const rewardsAvailable = [0,0];
const rewardsAvailable2 = [0,0];
const halfTime = [0,0];
const canWithdrawTime = [0,0];


const initialState = {
	pools,
	allowance,
	currentlyStaked,
	rewardsAvailable,
	rewardsAvailable2,
	halfTime,
	canWithdrawTime,
	balance,
	poolsInfo,
	fetchPoolsInfoPending: false,
	checkApprovalPending: [false,false],
	fetchBalancePending: [false,false],
	fetchCurrentlyStakedPending: [false,false],
	fetchRewardsAvailablePending: [false,false],
	fetchRewardsAvailable2Pending: [false,false],
	fetchHalfTimePending: [false,false],
	fetchCanWithdrawTimePending: [false,false],
	fetchApprovalPending: [false,false],
	fetchStakePending: [false,false],
	fetchWithdrawPending: [false,false],
	fetchWithdraw2Pending: [false,false],
	fetchClaimPending: [false,false],
	fetchExitPending: [false,false]
};

export default initialState;