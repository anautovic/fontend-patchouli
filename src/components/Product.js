import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <div>
            
           <Card  className = "my-3 p-3">
               <Link to={`https://radianapp.herokuapp.com/product/${product._id}`}>
<Card.Img src= {product.image} variant= "top" />
               </Link>
               <Card.Body>
               <Link to={`https://radianapp.herokuapp.com/product/${product._id}`}>
<Card.Title as='div'> 
    <strong>{product.name}</strong>
</Card.Title>
               </Link> 
               <Card.Text as ='div'>
<Rating value={product.rating} text= {`${product.numReviews} review`} />
               </Card.Text>
               <Card.Text as='h3'> fcfa{product.price} </Card.Text>
               </Card.Body>
               </Card> 
        </div>
        
    )
}

export default Product
