import styled from 'styled-components';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Main from './pages/Main';
const StyledWrapper = styled.div`
  
`;

function App() {

  return (
    <StyledWrapper>

     

      <Switch>

      <Route path="/register">
            <RegisterPage />
        </Route>
      <Route path="/login">
            <LoginPage />
        </Route>

        <Route path="/">
            <Main/>
        </Route>


      </Switch>

    </StyledWrapper>
  );
}

export default App;
