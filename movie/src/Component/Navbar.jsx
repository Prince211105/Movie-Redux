
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            
            <Link to='/movies' className="navLink">Home</Link>
            <Link to='/movies/Watchletter' className="navLink">Watch letter</Link>
        </div>
    )
}

export default Navbar