import React, {useEffect, useState} from 'react';
import { Text } from '@chakra-ui/layout';
import web3 from './web3';
import MintSlime from './components/MintSlime';
import './App.css';

function App() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    async function loadBlockchainData() {
      let accounts =  await web3.eth.getAccounts();
      setAccount(accounts[0]);

    }
    loadBlockchainData()
  })

  return (
    <div className="App">
      <h3>`Current Account: {account}`</h3>
      <Text
        bgGradient='linear(to-l, #4EA5D9, #2A4494)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Slime NFT Minter
      </Text>
      <MintSlime></MintSlime> 
    </div>
  );
}

export default App;
