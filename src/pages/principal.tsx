import Megasena from "../componets/paginaFeita/Megasena/index";
import Lotofacil from "../componets/paginaFeita/Lotofacil";
import Quinasena from "../componets/paginaFeita/Quina";
import Navbar from "../componets/Navbar/index";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Carregando from "../componets/Carregando";
import Timemania from "../componets/paginaFeita/timemania";
import PaginasFragmentadas from "../componets/PaginasFragmentadas/index";


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
            <Route path="/Mega" element={<PaginasFragmentadas />} />
            <Route path="/Quina" element={<Quinasena />} />
            <Route path="/Timemania" element={<Timemania />} />
        </Routes>
    );
}
