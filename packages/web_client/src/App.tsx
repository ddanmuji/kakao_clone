import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyle, theme } from './styles';
import RouterConfig from './libs/RouterConfig';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={<span>loading...</span>}>
        <RouterConfig />
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
