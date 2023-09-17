import React, {useState, useEffect} from 'react'
import Header from '../Header'

function Electronics() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error))
  }, []) // The empty array [] means this effect runs once, like componentDidMount

  // Filter products by category
  const mensClothsProducts = products.filter(
    product => product.category === 'electronics',
  )

  return (
    <div>
      <Header />
      <h2>Electronics</h2>
      <ul>
        {mensClothsProducts.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p> {product.title}</p>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Electronics
