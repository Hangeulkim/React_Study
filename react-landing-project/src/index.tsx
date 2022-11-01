import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import App from './App';


render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>,
  
  document.getElementById('root')
);
