import { useEffect, useRef, useState } from "react";
import Fuse from "fuse.js";

const data = [
  {
    name: "Lucy Women Special Saving",
    type: "Account",
    address: "/services/asset",
  },
  { name: "Business Banking", type: "Service", address: "/services/asset" },
  { name: "Mobile App", type: "Service", address: "/services/asset" },
  { name: "ATM Locator", type: "Tool", address: "/services/asset" },
  { name: "Loan Services", type: "Loan", address: "/services/asset" },
];

const fuse = new Fuse(data, {
  keys: ["name", "type"],
  threshold: 0.3,
});

const NavigationSearch = ({ setOpenSearchBar, openSearchBar }) => {
  const [query, setQuery] = useState("");
  const modalRef = useRef(null); // reference to the search box container

  const results = query ? fuse.search(query).map((r) => r.item) : [];

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpenSearchBar(true);
      } else if (e.key === "Escape") {
        setOpenSearchBar(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenSearchBar(false);
        setQuery("");
      }
    };

    if (openSearchBar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearchBar]);

  if (!openSearchBar) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 backdrop-blur-sm bg-black/30">
      <div
        ref={modalRef}
        className="relative w-full max-w-[75%] h-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-4 border-b flex justify-between items-center">
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-lg px-4 py-2 border rounded-md focus:outline-none"
            placeholder="Search services, tools, or loans..."
          />
          <button
            onClick={() => setOpenSearchBar(false)}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            esc
          </button>
        </div>

        {results.length > 0 ? (
          <ul className="max-h-60 overflow-y-auto divide-y">
            {results.map((item, index) => (
              <a key={index} href={item.address}>
                <li  className="p-4 hover:bg-gray-50">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.type}</div>
                </li>
              </a>
            ))}
          </ul>
        ) : (
          <div className="p-6 text-center h-60 text-gray-400">
            No recent searches
          </div>
        )}

        <div className="text-sm text-gray-400 text-right p-2 border-t w-full ml-auto pr-4">
          Search powered by <span className="font-semibold">Fuse.js</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationSearch;
