import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);

  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // ================= API =================
  useEffect(() => {
    setLoading(true);

    axios.get("https://api.citybik.es/v2/networks")
      .then(res => {
        setData(res.data.networks);
        setFiltered(res.data.networks);
        setLoading(false);
      });
  }, []);

  // ================= DEBOUNCE =================
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // ================= FILTER + SORT =================
  useEffect(() => {

    let temp = [...data];

    // search
    if (debouncedSearch) {
      temp = temp.filter(item =>
        item.company?.join(" ").toLowerCase()
          .includes(debouncedSearch.toLowerCase())
      );
    }

    // country
    if (country) {
      temp = temp.filter(item =>
        item.location.country === country
      );
    }

    // sorting
    temp.sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

    setFiltered(temp);
    setCurrentPage(1);

  }, [debouncedSearch, country, sortOrder, data]);

  // ================= PAGINATION =================
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentData = filtered.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filtered.length / recordsPerPage);

  // ================= COUNTRY =================
  const countries = [...new Set(data.map(d => d.location.country))];

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">🚴 Bike Networks</h2>

      {/* CONTROLS */}
      <div className="row mb-3">

        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">All Countries</option>
            {countries.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Sort A → Z</option>
            <option value="desc">Sort Z → A</option>
          </select>
        </div>

      </div>

      {/* LOADER / SKELETON */}
      {loading ? (
        <div className="text-center">
          <h4>Loading...</h4>

          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="bg-light p-3 mb-2 rounded">
              Loading row...
            </div>
          ))}
        </div>
      ) : (

        <>
          {/* TABLE */}
          <table className="table table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Country</th>
                <th>Company</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.location.city}</td>
                  <td>{item.location.country}</td>
                  <td>{item.company?.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="text-center">

            <button
              className="btn btn-primary m-1"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>

            <span> Page {currentPage} / {totalPages} </span>

            <button
              className="btn btn-primary m-1"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default App;