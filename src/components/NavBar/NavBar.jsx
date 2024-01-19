import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

const NavBar = ({ username, setUser }) => {
  const handleLogout = () => {
    usersService.logout();
    setUser(null);
  }

  return (
    <nav>
      <span>Welcome, <strong>{username}</strong>!</span>
      &nbsp; | &nbsp;
      <Link to='/orders'>Order History</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/new'>New Order</Link>
      &nbsp; | &nbsp;
      <Link to='#' onClick={handleLogout}><strong>Log Out</strong></Link>
    </nav>
  );
}

export default NavBar;
