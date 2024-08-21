import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search order number"
        value={query}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 focus:w-72 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 sm:w-64 transition-all duration-300 "
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
