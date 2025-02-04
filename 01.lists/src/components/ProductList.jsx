const ProductList = () => {
  const products = [
    {
      id:"1",
      product:"Iphone",
      prive:"2500"
    },
    {
      id:"2",
      product:"Laptop",
      prive:"3200"
    },
    {
      id:"3",
      product:"Tv",
      prive:"2800"
    },
  ]
  return (
    <div>
      {products.map(product=> (
        <ul key={Math.random()}>
          <li>Id: {product.id}</li>
          <li>Product: {product.product}</li>
          <li>Price: {product.prive}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductList