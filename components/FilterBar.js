import { useState, useEffect } from "react";

export default function FilterBar({ products, onFilter }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {

    if (search.trim()) {
      products = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      products = products.filter((p) => p.category === category);
    }

    if (minPrice) {
      products = products.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      products = products.filter((p) => p.price <= Number(maxPrice));
    }

    onFilter(products);
  }, [search, category, minPrice, maxPrice, products]);

  return (
    <div className="flex flex-wrap justify-around items-center p-4 bg-gray-100 rounded-md">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-1/3"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded px-5"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border p-2 rounded w-32"
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border p-2 rounded w-32"
      />
    </div>
  );
}
