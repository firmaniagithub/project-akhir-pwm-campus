import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                className="search-bar"
                placeholder="Cari kampus..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}
