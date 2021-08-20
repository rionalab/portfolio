import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>RionaLab</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Navbar