import { Link } from "react-router-dom"

const Home = () => {
    return <div className="main-menu">
        <Link to="/fake-store">Fake Store</Link><br />
        <Link to="/pokemon-search">Pokemon Search</Link><br />
        <Link to="/todo-context-reducer-typescript">Todo (Context, Reducer, TS)</Link><br />
        <Link to="/tirtagracia">Tirtagracia</Link><br />
        <Link to="/others">Others</Link>
    </div>
}

export default Home