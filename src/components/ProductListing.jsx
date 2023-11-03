import React, {useEffect, useState} from 'react';




function ProductListing() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

useEffect(() => {
  async function fetchProducts() {
    try {
      const response = await fetch(
        ('https://fakestoreapi.com/products')
      );
      const data = await response.json();
     
      setProducts(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }
  fetchProducts();
}, []);
return (
  <div>
    <h1>ProductList</h1>
    {error ? (
      <p>Error loading products.</p>
    ) : (
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}

      </ul>
    )

    }
  </div>
)

}
export default ProductListing;



