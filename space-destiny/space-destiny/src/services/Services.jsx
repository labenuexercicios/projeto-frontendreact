
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import '../services/services.css'
import launch from '../../src/Images/back/rocket1.gif';
import  returns from '../../src/Images/back/easy-returns.gif';
import serviceData from '../Datas/serviceData'

const Services = () => {
  return ( 
  <section className="services">
    <Container>
        <Row>
            {serviceData.map((item,index) => (
                    <Col lg='3' md='4' key={index}>
                    <motion.div 
                    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                    className="service__item"
                    style={{background: `${item.bg}`}}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                        </div>
                        </motion.div>
                </Col>
                ))}
        </Row>
    </Container>
  </section>
  );
};

export default Services;