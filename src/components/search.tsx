import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const router = useRouter();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Handle click outside the search component
  useEffect(() => {
    function handleClickOutside(event:any) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Debounce search function
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        fetchSuggestions();
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  const fetchSuggestions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      if (data.success && data.results) {
        setSuggestions(data.results);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim()) {
      setShowSuggestions(true);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    searchInputRef.current.focus();
  };

  const handleSuggestionClick = (route:any) => {
    // In a real application, you'd use a router like this:
    router.push(route);
    
    // For demonstration, we'll use window.location
    console.log(`Redirecting to: ${route}`);
    // window.location.href = route;
    
    // Close suggestions after selection
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto" ref={searchContainerRef}>
      <div className="relative text-zinc-900">
        <div className="relative flex items-center">
          <div className="absolute left-3 text-gray-400">
            <Search size={18} />
          </div>
          
          <input
            ref={searchInputRef}
            type="text"
            className="w-full h-9 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A1818] focus:border-transparent"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            onFocus={() => query.trim() && setShowSuggestions(true)}
          />
          
          {query && (
            <button 
              className="absolute right-3 text-gray-400 hover:text-[#4A1818]"
              onClick={clearSearch}
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        {showSuggestions && (
          <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 max-h-60 overflow-y-auto text-zinc-900">
            {loading ? (
              <div className="p-3 text-center text-gray-500">Loading...</div>
            ) : suggestions.length > 0 ? (
              suggestions.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleSuggestionClick(item.route)}
                >
                  {item.name}
                </div>
              ))
            ) : (
              <div className="p-3 text-center text-gray-500">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}