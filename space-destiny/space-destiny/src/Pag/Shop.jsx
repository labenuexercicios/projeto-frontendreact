import React, {useState} from "react";

import CommonSection from "../Comp/UI/CommonSection";
import Helmet from '../Comp/Helmet/Helmet';
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../Datas/products"
import ProductsList from "../../src/Comp/UI/ProductsList";

const Shop = () =>{

    const [productsData, setProductsData] = useState(products);

    const handleFilter = (e) => {

        const filterValue = e.target.value;
        if(filterValue==="travel"){
        const filteredProducts = products.filter(item=> item.category==="travel")

        setProductsData(filteredProducts);
        }

        if(filterValue==="Orbital travel"){
            const filteredProducts = products.filter(item=> item.category==="Orbital travel")
    
            setProductsData(filteredProducts);
            }

        if(filterValue==="Personalized travel"){
            const filteredProducts = products.filter(item=> item.category==="Personalized travel")
    
            setProductsData(filteredProducts);
            }
        
        if(filterValue==="Commercial travel"){
            const filteredProducts = products.filter(item=> item.category==="Commercial travel")
    
            setProductsData(filteredProducts);
            }
        
        if(filterValue==="Secure travel"){
            const filteredProducts = products.filter(item=> item.category==="Secure travel")
    
            setProductsData(filteredProducts);
            }

        if(filterValue==="Sustainable travel"){
            const filteredProducts = products.filter(item=> item.category==="Sustainable travel")
    
            setProductsData(filteredProducts);
            }
        
        if(filterValue==="Luxury travel"){
            const filteredProducts = products.filter(item=> item.category==="Luxury travel")
    
            setProductsData(filteredProducts);
            }

    }

    const handleSearch = e =>{
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }
    return (
    <Helmet title='Shop'>
    <CommonSection title={'Products'}/>

    <section>
        <Container>
            <Row>
                <Col lg='3' md='3'>
                    <div className="filter__widget">
                        <select onChange={handleFilter}>
                            <option>Filter by Category</option>
                            <option value="travel">Travel</option>
                            <option value="Orbital travel">Orbital travel</option>
                            <option value="Personalized travel">Personalized travel</option>
                            <option value="Commercial travel">Commercial travel</option>
                            <option value="Secure travel">Secure travel</option>
                            <option value="Sustainable travel">Sustainable travel</option>
                            <option value="Luxury travel">Luxury travel</option>
                        </select>
                    </div>
                </Col>
                <Col lg='3' md='3'>
                <div className="filter__widget">
                        <select>
                            <option>Sort by</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="search__box">
                        <input 
                        type="text" 
                        placeholder="Search..." 
                        onChange={handleSearch}
                        />
                        <span><i class="ri-search-eye-line"></i>
                        </span>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <section className="pt-0">
        <Container>
            <Row>
                {productsData.length === 0? (<h1 className="text-center fs-4">No products are found!</h1>
                ) : (
                <ProductsList data={productsData}/>
                )}
            </Row>
        </Container>
    </section>
    </Helmet>
    );
};
export default Shop