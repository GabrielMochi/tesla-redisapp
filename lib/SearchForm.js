import { useState } from "react";

export default function SearchForm() {
  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const { value: q } = event.target;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });
      const response = await fetch(`/api/search?${params}`);
      const cars = await response.json();

      setHits(cars);
    }
  }

  return (
    <div>
      <input onChange={search} type="text" />
      <ul>
        {hits.map((hit) => (
          <li key={hit.entityId}>
            {hit.make} {hit.model}
          </li>
        ))}
      </ul>
    </div>
  );
}
