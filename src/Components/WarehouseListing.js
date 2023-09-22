import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Sample warehouse data (you can load this from an API or database)
const warehouses = [
  {
    name: "Warehouse-165",
    code: "W-00001",
    id: 1,
    city: "Delhi",
    space_available: 1234,
    type: "Leasable Space",
    cluster: "cluster-a-32",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-276",
    code: "W-00002",
    id: 2,
    city: "Chennai",
    space_available: 124,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-3039",
    code: "W-00003",
    id: 3,
    city: "Indore",
    space_available: 134,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-324",
    code: "W-00004",
    id: 4,
    city: "Chennai",
    space_available: 12,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-5454",
    code: "W-00005",
    id: 5,
    city: "Chennai",
    space_available: 1243434,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-4345",
    code: "W-00006",
    id: 6,
    city: "Chennai",
    space_available: 1,
    type: "Leasable Space",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-3455",
    code: "W-00007",
    id: 7,
    city: "Mumbai",
    space_available: 4,
    type: "Leasable Space",
    cluster: "cluster-a-2",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-23455",
    code: "W-00008",
    id: 8,
    city: "Bangalore",
    space_available: 3456,
    type: "Warehouse Service",
    cluster: "cluster-a-21",
    is_registered: true,
    is_live: true,
  },
  {
    name: "Warehouse-6457",
    code: "W-00009",
    id: 9,
    city: "Bangalore",
    space_available: 1234545,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  },
  {
    name: "Warehouse-32456",
    code: "W-000010",
    id: 10,
    city: "Guwahati",
    space_available: 121234,
    type: "Warehouse Service",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: true,
  },
  {
    name: "Warehouse-3245678",
    code: "W-000011",
    id: 11,
    city: "Delhi",
    space_available: 98,
    type: "Leasable Space",
    cluster: "cluster-v-2",
    is_registered: true,
    is_live: false,
  },
];

const WarehouseListing = () => {
  const [searchInput, setSearchInput] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [clusterFilter, setClusterFilter] = useState("");
  const [spaceFilter, setSpaceFilter] = useState(0);
  const [filteredWarehouses, setFilteredWarehouses] = useState(warehouses);
  const [uniqueCities, setUniqueCities] = useState([]);

  useEffect(() => {
    filterWarehouses();
  }, [searchInput, cityFilter, clusterFilter, spaceFilter]);

  useEffect(() => {
    // Extract unique city names from warehouses
    const cities = [...new Set(warehouses.map((warehouse) => warehouse.city))];
    // Add an "All" option to the beginning
    setUniqueCities(["All", ...cities]);
  }, []);

  const filterWarehouses = () => {
    const filtered = warehouses.filter((warehouse) => {
      const nameMatch = warehouse.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const cityMatch = !cityFilter || warehouse.city === cityFilter;
      const clusterMatch =
        !clusterFilter || warehouse.cluster === clusterFilter;
      const spaceMatch = warehouse.space_available >= spaceFilter;
      return nameMatch && cityMatch && clusterMatch && spaceMatch;
    });
    setFilteredWarehouses(filtered);
  };

  return (
    <div>
      <h1>Warehouse Listing</h1>
      <input
        type="text"
        placeholder="Search by Warehouse Name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="filters">
        <label>City:</label>
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          {uniqueCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <label>Cluster:</label>
        <select
          value={clusterFilter}
          onChange={(e) => setClusterFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="cluster-a-32">cluster-a-32</option>
          <option value="cluster-a-1">cluster-a-1</option>
          <option value="cluster-a-21">cluster-a-21</option>
          <option value="cluster-a-2">cluster-a-2</option>
          <option value="cluster-v-2">cluster-v-2</option>
          {/* Add dynamic cluster options here */}
        </select>
        <label>Space Available:</label>
        <input
          type="number"
          placeholder="Min Space"
          value={spaceFilter}
          onChange={(e) => setSpaceFilter(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div id="warehouseList">
        {filteredWarehouses.map((warehouse) => (
          <div key={warehouse.name}>
            <p>Name: {warehouse.name}</p>
            <p>City: {warehouse.city}</p>
            <p>Cluster: {warehouse.cluster}</p>
            <p>Space Available: {warehouse.space_available}</p>
            <Link to= {`/warehouse/${warehouse.id}`} state={{warehouse }}>
            View Details
          </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseListing;
