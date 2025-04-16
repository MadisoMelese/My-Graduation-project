import { Link } from "react-router-dom"

const ProdictManagement = () => {
  const products = [
    {
      _id:1234,
      name:"Shirt",
      price:123,
      sku:"345654"
    },
    {
      _id:5498,
      name:"Jeans",
      price:153,
      sku:"78698"
    },
  ]

  const handleDelete = (productId)=>{
    if(window.confirm("are you sure you want to delete the product?")){
    console.log(`product with id ${productId} deleted successfully`)
    }
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length>0 ?products.map((product)=>(
              <tr 
              key={product._id}
              className="border-b border-b-gray-300 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{product.name}</td>
                <td className="py-3 px-4">{product.price}</td>
                <td className="py-3 px-4">{product.sku}</td>
                <td className="py-3 px-4">
                  <Link 
                  to={`/admin/products/${product._id}/edit`}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600">Edit</Link>
                  <button
                  onClick={()=>handleDelete(product._id)}
                  className="bg-red-500 text-white px-2  hover:bg-red-600 rounded"
                  >Delete</button>
                </td>
              </tr>
            )):
            <tr>
              <td className="p-5 text-2xl text-center font-semibold" colSpan={4}>No products found.</td>
            </tr>
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProdictManagement
