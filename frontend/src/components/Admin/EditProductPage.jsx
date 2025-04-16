import { useState } from "react";
import FormInput from "./FormInput";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket",
      },
      {
        url: "https://picsum.photos/500/500?random=3",
        altText: "Stylish Jacket",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    // You can handle the image upload logic here
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
   console.log(productData)
  }

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>

      {/* form */}
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <FormInput
          label="Product Name"
          name="name"
          value={productData.name}
          onChange={handleChange}
          type="text"
        />

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            rows={4}
            required
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        {/* Price */}
        <FormInput
          label="Price"
          name="price"
          value={productData.price}
          onChange={handleChange}
          type="number"
        />

        {/* Count in Stock */}
        <FormInput
          label="Count in Stock"
          name="countInStock"
          value={productData.countInStock}
          onChange={handleChange}
          type="number"
        />
        {/* SKU */}
        <FormInput
          label="SKU"
          name="sku"
          value={productData.sku}
          onChange={handleChange}
          type="text"
        />

        {/* Sizes */}
        <FormInput
          type="text"
          label="Sizes (separated-by-comma)"
          name="sizes"
          value={productData.sizes.join(", ")}
          onChange={(e) =>
            setProductData({
              ...productData,
              sizes: e.target.value.split(",").map((size) => size.trim()),
            })
          }
        />

        {/* Colors */}
        <FormInput
          type="text"
          label="Colors (separated-by-comma)"
          name="colors"
          value={productData.colors.join(", ")}
          onChange={(e) =>
            setProductData({
              ...productData,
              colors: e.target.value.split(",").map((color) => color.trim()),
            })
          }
        />

        {/* Image upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            name="images"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText}
                  className="size-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button 
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
