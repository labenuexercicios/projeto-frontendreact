
import React from 'react'

import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';

const ProductCard = ({item}) => {

const dispatch = useDispatch()

const addToCart = () =>{
  dispatch(cartActions.addItem({
    id: item.id,
    productName: item.productName,
    price: item.price,
    imgUrl: item.imgUrl,
    })
  );
  
  toast.success("Product added successfully")
};

  return (
    <Col lg='3' md='2'>
    <div className="product__item">
        <div className="product__img">
        <motion.img
    whileHover={{scale: 1.1}}
     src={item.imgUrl} alt=""/>
 
        </div>
        <div className="p-2 product__info">
        <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span>{item.shortDesc}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">${item.price}</span>
            <motion.h4 whileTap={{scale: 1.2}} onClick={addToCart}>
                <i className="ri-add-circle-line"></i>
                </motion.h4>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard