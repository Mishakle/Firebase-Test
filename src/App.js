import React from 'react';
import SignUp from './components/SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <BrowserRouter>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Dashboard} />
                <Route path='/signup' component={SignUp} />
                <Route path='/login' component={Login} />
              </Switch>
            </AuthProvider>
          </BrowserRouter >
        </div>
      </Container>
    
  );
}

export default App;
