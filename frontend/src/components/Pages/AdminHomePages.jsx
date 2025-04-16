import { Link } from "react-router-dom"

const AdminHomePage = () => {

  const orders = [
    {
      _id: 12345,
      user:{
        name: "John Doe",
      },
     totalPrice: 100,
     status:"Processing",
  },

    {
      _id: 54321,
      user:{
        name: "Madiso Melese",
      },
     totalPrice: 100,
     status:"Processing",
  },

    {
      _id: 56789,
      user:{
        name: "John Doe",
      },
     totalPrice: 300,
     status:"Processing",
  },
  ]
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl">$1000</p>
 
        </div>

        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl">200</p>
          <Link to={"/admin/orders"} className="text-blue-500 hover:underline">Manage Orders</Link>
        </div>

        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">100</p>
          <Link to={"/admin/products"} className="text-blue-500 hover:underline">Manage Products</Link>
        </div>
      </div>

{/* Recent orders page */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">status</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="border-b border-gray-300 hover:bg-gray-50 cursor-pointer">
                    <td className=" py-3 px-4">#{order._id}</td>
                    <td className="py-3 px-4">{order.user.name}</td>
                    <td className="py-3 px-4">{order.totalPrice}</td>
                    <td className="py-3 px-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No Recent orders 
                  </td>
                </tr>
              )}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminHomePage
