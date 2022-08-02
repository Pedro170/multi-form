import React from 'react'
import styles from './Step1.module.css'
import { useNavigate } from 'react-router-dom'
import { FormActions, useForm } from '../../contexts/FormContext'
import Theme from '../../components/Theme/Theme'

const Step1 = () => {
  const navigate = useNavigate();
  const { state, dispatch }     = useForm();

  React.useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [ dispatch ])

  const handleNextStep = () => {
    if( state.name !== '' ) {
      navigate('/steptwo')
    } else {
      alert('Preencha os dados.')
    }
  }

  const handleNameChange = ( { target }: React.ChangeEvent< HTMLInputElement > ) => {
    dispatch({
      type: FormActions.setName,
      payload: target.value
    })
  }

  return (
    <Theme>
      <div className={ styles.stepOne }>
        <p>Passo 1/3 - { state.currentStep }</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label htmlFor="nome">Seu nome completo
          <input
            id="nome"
            type="text"
            value={ state.name }
            autoFocus
            onChange={ handleNameChange }
          />
        </label>
        <button onClick={ handleNextStep }>Próximo</button>
      </div>
    </Theme>
  )
}

export default Step1
