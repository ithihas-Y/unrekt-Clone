import Web3 from "web3";
import "isomorphic-fetch";

const provider = new Web3.providers.HttpProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
const provider2 = new Web3.providers.HttpProvider(
  "https://bsc-dataseed.binance.org/"
);
const web3 = new Web3(provider2);



//contract.getPastEvents('allEvents',{fromBlock:0,toBlock:'latest'}).then(console.log)


//web3.eth.getPastLogs({address:'0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',fromBlock:7250190}).then(console.log)




let index = "0000000000000000000000000000000000000000000000000000000000000000";
let key = "000000000000000000000000318716957fEa4B682cB492252926cdD9AbD59F8a";

//web3.eth
  //.getPastLogs({ address: "0x318716957fEa4B682cB492252926cdD9AbD59F8a" })
  //.then(console.log);


//fetch('http://api.covalenthq.com/v1/56/address/0xd4CFEC77CDc21573982EC85cf33Cfde6Cc677e74/transactions_v2/').then(
//data=> console.log(data)
//)

//web3.eth.getStorageAt('0x466a67dd03EE80539372cAF7DcA7bFAB5f29d92a',web3.utils.soliditySha3({type:'bytes',value:"000000000000000000000000318716957fEa4B682cB492252926cdD9AbD59F8a"},{type:'uint',value:index})).then(
//(data)=>{console.log(web3.utils.hexToNumber(data)+'//mapping')}
//)



for (let index = 0; index < 20; index++) {
  web3.eth.getStorageAt('0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',index).then(data=> console.log(data+' at index'+'//'+index))

}

//web3.eth.getCode("0x466a67dd03EE80539372cAF7DcA7bFAB5f29d92a").then(data=>console.log('//'+data+'//'))

//web3.eth.getStorageAt("0x466a67dd03EE80539372cAF7DcA7bFAB5f29d92a",2).then(
//data=> console.log(data+'//array')
//)
