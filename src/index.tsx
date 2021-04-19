import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';
import { Card, Content, Title, Numbers,  Grid, NewButton } from 'components';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from 'core'

const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
      <NewButton/>
        <Grid/>
        <Numbers />
      </Card>
    </Content>
    </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();