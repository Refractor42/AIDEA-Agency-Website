import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AllTheProviders } from './test-utils';
import App from './App';

test('renders without crashing', () => {
  render(
    <AllTheProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AllTheProviders>
  );
});