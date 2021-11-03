import logo from '../logo3.png';
import './paginaprincipal.css';
import React from 'react';
import { Link } from 'react-router-dom'

function paginaprincipal() {
  return (
    <div className="BGW">
        <header className='Navbar'>
            
            <div>
                <img src ={logo} className="LogoP"/>
                <br />
                <p className='TextoKitchen'>Kitchen Net</p>
                
            </div>
            <p>
            Denuncias Pendentes
            </p>

            <p>
            Logado como:
            Alterar Senha
            Sair          
            </p>
            
        </header>
    </div>
  );
}

export default paginaprincipal;
