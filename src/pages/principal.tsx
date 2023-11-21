import Megasena from "../componets/Megasena/index";
import Lotofacil from "../componets/Lotofacil";
import Quinasena from "../componets/Quina";
import Navbar from "../componets/Navbar/index";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Carregando from "../componets/Carregando";
import Timemania from "../componets/timemania";


export default function Principal() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Rotas />
            </BrowserRouter>
        </>
    )
}

function Rotas() {
    return (
        <Routes>
            <Route path="*" element={<Carregando />} />
            <Route path="/Mega" element={<Megasena />} />
            <Route path="/Loto" element={<Lotofacil />} />
            <Route path="/Quina" element={<Quinasena />} />
            <Route path="/Timemania" element={<Timemania />} />
        </Routes>
    );
}
