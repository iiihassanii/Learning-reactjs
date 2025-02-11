import { useState } from "react";

const Shoppinglist = () => {
  const [shopList, setShopList] = useState([]); 
  const [itemData, setItemData] = useState({ name: "", quantity: "" }); 

  const handleChange = e =>{
    const {name, value } = e.target
    setItemData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const addToList = e =>{
    e.preventDefault(); 
    setShopList((prev) => [
      ...prev, itemData
    ])
    setItemData({ name: "", quantity: "" });
  }

  return (
    <div>
      <form onSubmit={addToList}>
        <input
          type="text"
          name="name"
          value={itemData.name}
          onChange={handleChange}
          placeholder="Item name"
        />
        <input
          type="text"
          name="quantity"
          value={itemData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <button type="submit">Add item</button>
      </form>

      <div>
        <h1>!!!SHOP!!!</h1>
        {shopList.map((item, index) => (
          <p key={index}>
            {item.name} - {item.quantity}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Shoppinglist;
