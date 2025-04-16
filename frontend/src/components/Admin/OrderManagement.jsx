const OrderManagement = () => {
  const orders = [
    {
      _id: 123,
      user: {
        name: "John Doe",
      },
      totalPrice: 234,
      status: "Processing",
    },
    {
      _id: 456,
      user: {
        name: "John Doe",
      },
      totalPrice: 234,
      status: "Processing",
    },
  ];

                      
  const handleStatusChange = (orderID, status)=>{
    console.log(orderID, status)
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <td className="py-3 px4">Order ID</td>
              <td className="py-3 px4">Customer</td>
              <td className="py-3 px4">Total Price</td>
              <td className="py-3 px4">Status</td>
              <td className="py-3 px4">Actions</td>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-300 hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">${order.totalPrice}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e)=>handleStatusChange(order._id, e.target.value)}
                      className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                    onClick={()=>handleStatusChange(order._id, "Delivered")}
                     className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Mark as Delivered</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}
                className="p-4 text-center text-gray-500"
                >No Orders Found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
