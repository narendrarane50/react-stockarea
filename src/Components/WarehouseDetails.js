// WarehouseDetails.js
import React from 'react';

import { useLocation } from 'react-router-dom';

const WarehouseDetails = () => {
//   const { id } = useParams();
//   const [error, setError] = useState('');

  const location = useLocation();
  const { warehouse } = location.state || {};
//   console.log('Received Warehouse Data:', warehouse.name);

  if (!warehouse) {
    return <div>No warehouse data found.</div>;
  }




  const handleEdit = () => {
    // Implement edit functionality here
  };

  if (!warehouse) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
      <h1>Warehouse Details</h1>
      <p>Name: {warehouse.name}</p>
      <p>City: {warehouse.city}</p>
      <p>Space Available: {warehouse.space_available}</p>
      {/* Add more fields as needed */}
    </div>
    </div>
  );
};

export default WarehouseDetails;
