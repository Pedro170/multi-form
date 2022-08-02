import React from 'react'
import styles from './Form.module.css'
import Button from './Buttons/Button'
import Input from './Inputs/Input'

const Form = () => {
  return (
    <form className={ styles.form }>
      <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

      <hr />

      <Input />
      <Button />
    </form>
  )
}

export default Form
