function ItemCard({ item, onDelete }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>

      <p><strong>Category:</strong> {item.category}</p>

      {/* ✅ NEW FIELD DISPLAY */}
      <p><strong>Serial Number:</strong> {item.serialNumber}</p>

      <p><strong>Price:</strong> ${item.price}</p>

      <p>{item.description}</p>

      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} width="100" />
      )}

      <button onClick={() => onDelete(item._id)}>Delete</button>
    </div>
  );
}

export default ItemCard;