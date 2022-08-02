import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import styles from './Step3.module.css'

const Step3 = () => {
  const navigate = useNavigate();
  const { state, dispatch }     = useForm();

  React.useEffect(() => {
    if( state.name === '' ) {
      navigate( - 1)
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  }, [dispatch, navigate, state.name])

  const handleNextStep = () => {
    if( state.email !== '' && state.github !== '') {
      console.log( state )
      alert('Cadastro efetuado com sucesso! 😄')
    } else {
      alert('Para finalizar o cadastro é obrigatório preencher o email e github.')
    }
  }

  const handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: target.value
    })
  }

  const handleGitHubChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: target.value
    })
  }

  return (
    <Theme>
      <div className={ styles.stepOne }>
        <p className={ styles.stepP }>Passo 2/3</p>
        <h1 className={ styles.stepH1 }>{ state.name }, onde te achamos?</h1>
        <p className={ styles.stepP }>Preencha com seus contatos.</p>

        <hr />

        <label htmlFor="email">Qual seu e-mail?
          <input
            id="email"
            type="email"
            value={ state.email }
            autoFocus
            onChange={ handleEmailChange }
          />
        </label>

        <label htmlFor="url">Qual seu GitHub?
          <input
            id="url"
            type="url"
            value={ state.github }
            autoFocus
            onChange={ handleGitHubChange }
          />
        </label>

        <Link className='link' to="/steptwo">Voltar</Link>
        <button onClick={ handleNextStep }>Finalizar Cadastro</button>
      </div>
    </Theme>
  )
}

export default Step3
