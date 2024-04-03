
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <Link to='/movies' className="navLink">Home</Link>
            <Link to='/movies/Watchletter' className="navLink">Watch letter</Link>
            {/* <Link to='/login' className="navLink">Login</Link>
            <Link to='/singup' className="navLink">Singup</Link> */}
        </div>
    )
}

export default Navbar