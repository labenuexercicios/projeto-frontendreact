import React from "react";
import Filters from "../../components/filters";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import { Main } from "./styled";

const Home = () => {
    return (
        <div>
            <Header />
            <Main>
                <Filters />
            </Main>
            <Footer />
        </div>
    )
}

export default Home
