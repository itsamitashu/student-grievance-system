import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [grievances, setGrievances] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: ""
  });

  const [searchTitle, setSearchTitle] = useState("");

  const backendURL = "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fetchGrievances = async () => {
    try {
      const res = await axios.get(
        `${backendURL}/api/grievances`
      );
      setGrievances(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGrievances();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${backendURL}/api/grievances`,
        formData
      );

      alert("Grievance Submitted Successfully");

      setFormData({
        title: "",
        description: "",
        category: ""
      });

      fetchGrievances();

    } catch (error) {
      alert("Failed to Submit");
    }
  };

  const deleteGrievance = async (id) => {
    try {
      await axios.delete(
        `${backendURL}/api/grievances/${id}`
      );

      alert("Deleted Successfully");
      fetchGrievances();

    } catch (error) {
      alert("Delete Failed");
    }
  };

  const updateStatus = async (id) => {
    try {
      await axios.put(
        `${backendURL}/api/grievances/${id}`,
        {
          status: "Resolved"
        }
      );

      alert("Status Updated");
      fetchGrievances();

    } catch (error) {
      alert("Update Failed");
    }
  };

  const searchGrievance = async () => {
    try {
      const res = await axios.get(
        `${backendURL}/api/grievances/search?title=${searchTitle}`
      );

      setGrievances(res.data);

    } catch (error) {
      alert("Search Failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Student Grievance Dashboard</h1>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

      <h2>Submit Grievance</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Grievance Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">
            Select Category
          </option>

          <option value="Academic">
            Academic
          </option>

          <option value="Hostel">
            Hostel
          </option>

          <option value="Transport">
            Transport
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <button type="submit">
          Submit Grievance
        </button>
      </form>

      <h2>Search Grievance</h2>

      <input
        placeholder="Search by Title"
        value={searchTitle}
        onChange={(e) =>
          setSearchTitle(e.target.value)
        }
      />

      <button onClick={searchGrievance}>
        Search
      </button>

      <button onClick={fetchGrievances}>
        Show All
      </button>

      <h2>All Grievances</h2>

      {grievances.map((item) => (
        <div
          key={item._id}
          className="grievance-card"
        >
          <h3>{item.title}</h3>

          <p>
            <strong>Description:</strong>{" "}
            {item.description}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {item.category}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {item.status}
          </p>

          <button
            className="action-btn"
            onClick={() =>
              updateStatus(item._id)
            }
          >
            Mark Resolved
          </button>

          <button
            className="action-btn"
            onClick={() =>
              deleteGrievance(item._id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;