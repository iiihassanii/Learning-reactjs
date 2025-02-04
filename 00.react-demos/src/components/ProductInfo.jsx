const ProductInfo = () => {
  const product = {
    name: 'Laptop',
    price: '3500',
    availability: 'In stock'
  }
  return (
    <div>
      product info:
      <p>name = {product.name}</p>
      <p>price = {product.price}</p>
      <p>availability = {product.availability}</p>
    </div>
  )
}

export default ProductInfo