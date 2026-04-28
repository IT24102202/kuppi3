import { useState } from "react";

function ItemForm({ onSubmit, submitText }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    serialNumber: "", // ✅ NEW
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />

      {/* ✅ SERIAL NUMBER FIELD */}
      <input
        name="serialNumber"
        placeholder="Serial Number"
        value={formData.serialNumber}
        onChange={handleChange}
        required
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default ItemForm;