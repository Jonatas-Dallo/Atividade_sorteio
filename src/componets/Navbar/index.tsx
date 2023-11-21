import { Link } from 'react-router-dom';
import './style.css';
import React, { useState } from 'react';


function Navbar() {
    const [selecionado, setSelecionado] = useState('')

    return (
        <>
            <div className='NavbarContainer'>
                <div className='Navbar'>
                    <div className='NavbarItem'>
                        {selecionado == 'Mega-sena' ? (
                            <Link to="Mega" className='selecionado'>Megasena</Link>
                        ) : <Link to="Mega" className='mega' onClick={() => { setSelecionado('Mega-sena') }}>Megasena</Link>}
                    </div>

                    <div className='NavbarItem'>
                        {selecionado == 'Lotofacil' ? (
                            <Link to="Lotofacil" className='selecionado'>Lotofácil</Link>
                        ) : <Link to="Lotofacil" className='loto' onClick={() => { setSelecionado('Loto') }}>Lotofácil</Link>}
                    </div>
                    <div className='NavbarItem'>
                        {selecionado == 'Quina' ? (
                            <Link to="Quina" className='selecionado'>Quina</Link>
                        ) : <Link to="Quina" className='quina' onClick={() => { setSelecionado('Quina') }}>Quina</Link>}
                    </div>
                    <div className='NavbarItem'>
                        {selecionado == 'Timemania' ? (
                            <Link to="Timemania" className='selecionado'>Timemania</Link>
                        ) : <Link to="Timemania" className='timemania' onClick={() => { setSelecionado('Timemania') }}>Timemania</Link>}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Navbar;


