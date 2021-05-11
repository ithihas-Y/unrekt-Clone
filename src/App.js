import './App.css';
import 'semantic-ui-css/semantic.min.css'
import _fetch from 'isomorphic-fetch';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
import { Container,Message } from 'semantic-ui-react';

const apiHost = 'https://api.covalenthq.com';

const provider = new Web3.providers.HttpProvider(
    "https://bsc-dataseed.binance.org/"
    //https://rpc-mainnet.maticvigil.com for matic
);

const provider2 = new Web3.providers.HttpProvider("https://rpc-mainnet.maticvigil.com/");
const web3 = new Web3(provider);

const apiKey =  'ckey_23a0368bd5084cc3a66b2f84421';



let tokenBalancesAddresses=[];
let chain_id = 56; //137 for matic chain
let TXBLocks =[];
let transfers =[];
let TxHashs =[];
let events =[];
let allApprovals =[];
let FinalApprovals =[];


function getApprovals(address){
  _fetch(apiHost+`/v1/${chain_id}/address/${address}/balances_v2/`).then(
    response => response.json()
).then(async (balances)=> {
        balances.data.items.forEach(element => {
            tokenBalancesAddresses.push([element.contract_name,element.contract_address])
        });
        const CA = tokenBalancesAddresses;
        for (let i = 0; i < CA.length; i++) {
            const element = CA[i];
            await _fetch(apiHost+`/v1/${chain_id}/address/${address}/transfers_v2/?contract-address=${element[1]}`).then(
                response=>{response.json().then(data=> {transfers.push(data.data.items)});
                }
            )
        }
        for (let i = 0; i < transfers.length; i++) {
            const element = transfers[i];
            for (let j = 0; j < element.length; j++) {
                const inner = element[j];
                TXBLocks.push(inner.transfers);
            }
            
        }
        TXBLocks.forEach(element => {
            element.forEach(i=>{
                TxHashs.push(i.tx_hash);
            })
        });
        for (let i = 0; i < TxHashs.length; i++) {
            const element = TxHashs[i];
            await _fetch(apiHost+`/v1/${chain_id}/transaction_v2/${element}/`).then(
                response=>{response.json().then(data=> events.push(data.data.items))}
            )
            
        }

        events.forEach(j=>{
            j.forEach(k=>{
                k.log_events.forEach(l=>{
                    if(l.decoded !=null){
                        if(l.decoded.name == 'Approval'){
                            allApprovals.push([l.tx_hash,l.sender_address,l.block_height,l.decoded.params[1].value,l.decoded.params[2].value/10**18]);
                        }
                    }
                })
            })
        })
        //console.log(allApprovals)
        for (let i = 0; i < allApprovals.length; i++) {
            const element = allApprovals[i];
            if(FinalApprovals=[]){
                FinalApprovals.push(element)
            }else{
                if(!(element[1]===FinalApprovals[i][1])){
                    FinalApprovals.push(element)

                }
            }

            
        }
        console.log(allApprovals)
    }
)
}

function App() {

  const [address,setAddress] = useState('');
  useEffect(()=>{},allApprovals);

  return (
    <div className="App">
      <input placeholder='wallet address' onChange={(data=>{setAddress(data)})}></input>
      <button onClick={()=>{chain_id=137;web3.setProvider(provider2)}}>change to matic Network</button>
      <button onClick={()=>{chain_id=56;web3.setProvider(provider)}}>Change to Binance chain</button>
      <button onClick={()=>{getApprovals(address.target.value)}}>Get Approvals</button>
      <Message>wait 30 seconds,check console</Message>
      <Container>
      {allApprovals && allApprovals.map((i)=>{
          return <Message>{'TxnHash//'+i[0]+'TokenContract//'+i[1]+'Block//'+i[2]+'SpenderAdress//'+i[3]+'//Amount//'+i[4]}</Message>
        })}
      </Container>

    </div>
  );
}

export default App;
