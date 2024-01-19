import SignupForm from '../../components/SignupForm/SignupForm';
import LoginForm from '../../components/LoginForm/LoginForm';

const AuthPage = ({ setUser }) => (
  <main>
    <h1>AuthPage</h1>
    <SignupForm setUser={setUser} />
    <LoginForm setUser={setUser} />
  </main>
);

export default AuthPage;
