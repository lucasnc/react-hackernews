import React from 'react';
import '../src/assets/styles/global.css';
import AppContainer from './components/AppContainer';
import Container from './components/Container';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <AppContainer>
      <Header>
        <Container>
          Hacker News
        </Container>
      </Header>
      <Routes />
    </ AppContainer>
  );
}

export default App;
