import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={ styles.header }>
      <h1>Cadastro de Desenvolvedor</h1>
      <p>Faça seu cadastro na lista e receba um emprego instantaneamente.</p>
    </header>
  )
}

export default Header
