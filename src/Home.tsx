import { Link } from "react-router-dom"

const Home = () => {
    return <div className="main-menu">
        <Link to="/fake-store">Fake Store</Link><br />
        <Link to="/pokemon-search">Pokemon Search</Link><br />
        <Link to="/todo-usecontext-ts">TODO (TS, useContext)</Link><br />
        <Link to="/others">Others</Link>
    </div>
}

export default Home