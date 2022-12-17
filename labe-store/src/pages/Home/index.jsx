import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import ProminenceCard from "../../components/prominenceCard";
import Section from "../../components/Section";

const Home = ({ prodShopping, setProdShopping }) => {
    return (
        <div>
            <Header />
            <ProminenceCard />
            <Section
                prodShopping={prodShopping}
            />
            <Footer />
        </div>
    )
}

export default Home
