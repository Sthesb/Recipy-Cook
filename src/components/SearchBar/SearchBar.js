import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {
    const [ search, setSearch ] = useState('')
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${search}`)
        setSearch('')

    }
    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input type="text" 
                    id="search" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search} 
                    required 
                />
            </form>
        </div>
    )
}
