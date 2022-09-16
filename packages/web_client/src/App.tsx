import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from './styles';
import RouterConfig from './libs/RouterConfig';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Suspense fallback={<span>loading...</span>}>
          <RouterConfig />
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
