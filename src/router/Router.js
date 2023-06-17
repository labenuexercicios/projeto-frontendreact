import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {HomePage} from "../pages/HomePage/HomePage";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/homepage" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router