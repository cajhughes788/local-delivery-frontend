import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function TrackOrderPage() {
  const { orderId } = useParams();
  const [status, setStatus] = useState('');
  const [eta, setEta] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/orders/${orderId}`);
        setStatus(res.data.status);
        setEta(res.data.estimated_delivery_time);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Error fetching order');
      }
    };

    fetchOrder();
  }, [orderId]);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Track My Order</h1>

      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <>
          <p className="text-gray-700 mb-2">
            <strong>Status:</strong> {status || 'Loading...'}
          </p>
          <p className="text-gray-700">
            <strong>Estimated Arrival:</strong>{' '}
            {eta ? new Date(eta).toLocaleTimeString() : 'TBD'}
          </p>
        </>
      )}
    </div>
  );
}
