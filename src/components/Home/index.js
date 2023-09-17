import React, {useState, useEffect} from 'react'

import Header from '../Header'

import './index.css'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error))
  }, []) // The empty array [] means this effect runs once, like componentDidMount

  return (
    <div>
      <Header />
      <h2>Product List</h2>
      <ul className="row">
        {products.map(product => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="100"
              height="100"
            />
            <p> {product.title}</p>
            {product.name} - {product.price}
            <p>{product.description} </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
