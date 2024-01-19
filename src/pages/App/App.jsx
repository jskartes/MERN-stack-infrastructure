import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.scss';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

const App = () => {
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar
            username={user.name}
            setUser={setUser}
          />
          <Routes>
            <Route
              path='/orders'
              element={<OrderHistoryPage />}
            />
            <Route
              path='/orders/new'
              element={<NewOrderPage />}
            />
          </Routes>
        </>
      ) : <AuthPage setUser={setUser} />}
    </main>
  );
}

export default App;
