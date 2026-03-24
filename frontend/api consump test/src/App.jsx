import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // ================= FETCH API =================
  useEffect(() => {
    axios.get("https://api.citybik.es/v2/networks")
      .then(res => {
        setData(res.data.networks);
        setFiltered(res.data.networks);
      });
  }, []);

  // ================= FILTER =================
  useEffect(() => {

    let temp = data;

    // search by company
    if (search) {
      temp = temp.filter(item =>
        item.company?.join(" ").toLowerCase().includes(search.toLowerCase())
      );
    }

    // filter by country
    if (country) {
      temp = temp.filter(item =>
        item.location.country === country
      );
    }

    setFiltered(temp);
    setCurrentPage(1);

  }, [search, country, data]);


  // ================= PAGINATION =================
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentData = filtered.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filtered.length / recordsPerPage);


  // ================= COUNTRY LIST =================
  const countries = [...new Set(data.map(d => d.location.country))];


  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">🚴 Bike Networks</h2>

      {/* SEARCH + FILTER */}
      <div className="row mb-3">

        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Search by company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6">
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

      </div>


      {/* TABLE */}
      <table className="table table-bordered table-striped text-center">
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

        <span> Page {currentPage} of {totalPages} </span>

        <button
          className="btn btn-primary m-1"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default App;