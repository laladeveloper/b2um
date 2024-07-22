import React from 'react';

const MyOrders = () => {
  const orders = [
    {
      id: '123456',
      date: '2024-07-21',
      status: 'Processing',
      total: '$100',
      items: [
        { name: 'Product 1', price: '$50', quantity: 1 },
        { name: 'Product 2', price: '$50', quantity: 1 },
      ],
    },
    {
      id: '789012',
      date: '2024-07-20',
      status: 'Shipped',
      total: '$200',
      items: [
        { name: 'Product 3', price: '$100', quantity: 1 },
        { name: 'Product 4', price: '$100', quantity: 1 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md rounded-lg mb-6 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Order #{order.id}</h2>
              <p className="text-gray-600">Date: {order.date}</p>
              <p className="text-gray-600">Status: {order.status}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-bold">Total: {order.total}</p>
            </div>
          </div>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">View</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
