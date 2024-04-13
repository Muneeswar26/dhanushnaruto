import {Link, withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const Header = props => {
  const logoutButton = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <div className="nav-card">
        <Link to="/">
          <h1 className="nav-logo">Travel Trip</h1>
        </Link>

        <div>
          <Link to="/" className="Home-nav">
            Home
          </Link>
          <Link to="/my-trips" className="Home-nav">
            My Trips
          </Link>
        </div>

        <Link to="/login">
          <button className="logout-btn" type="button" onClick={logoutButton}>
            Logout
          </button>
        </Link>
      </div>
    </nav>
  )
}
export default withRouter(Header)
