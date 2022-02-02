import React from 'react'

import Menu from './menu'

import './Header.css'

const Header = () => {
    return(  
    <>  
        <div className = "header">
        <img
          width="60px"
          src="https://img.elo7.com.br/product/zoom/1C56B29/exemplo-de-logo-desenho.jpg"
        />
        <Menu />
        
      </div>
      <div className="cabecalho"><h2>Lista de Usuários</h2></div>
      
    </>
    )
    
    };

export default Header;