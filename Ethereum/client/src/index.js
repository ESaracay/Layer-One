import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {DAppProvider} from '@usedapp/core';

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config = {{}}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
