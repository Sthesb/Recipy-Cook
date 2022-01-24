import { Link } from 'react-router-dom'
// styles
import './Navbar.css'
// componets
import SearchBar  from '../SearchBar/SearchBar'

// Hooks
import { useTheme } from '../../Hooks/useTheme'

export default function Navbar() {
    const { color } = useTheme()
    return (
        <div className="navbar" style={{ background : color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Recipy-Cook</h1>
                </Link>
                <SearchBar />
                <Link to="/create">Create New Recipe</Link>
                
            </nav>
        </div>
    )
}
