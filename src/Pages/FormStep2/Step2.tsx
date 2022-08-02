import React from 'react'
import styles from './Step2.module.css'
import { useNavigate } from 'react-router-dom'
import { FormActions, useForm } from '../../contexts/FormContext'
import Theme from '../../components/Theme/Theme'
import Select from '../../components/Forms/Select/Select'
import { Link } from 'react-router-dom'

const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch }     = useForm();

  React.useEffect(() => {
    if( state.name === '' ) {
      navigate( - 1)
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [dispatch, navigate, state.name])

  const handleNextStep = () => {
    if( state.name !== '' ) {
      navigate('stepthree')
    } else {
      alert('Preencha os dados.')
    }
  }

  const setLevel = ( level: number ) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <div className={ styles.stepOne }>
        <p className={ styles.stepP }>Passo 2/3</p>
        <h1 className={ styles.stepH1 }>{ state.name }, o que melhor descreve você?</h1>
        <p className={ styles.stepP }>Escolha a opção que melhore descreva seu momento, profissional.</p>

        <hr />

        <Select
          icon='🥳'
          title='Sou iniciante'
          description='Comecei a programar há menos de 2 anos'
          selected={ state.level === 0 }
          onClick={ () => setLevel( 0 ) }
        />

        <Select
          icon='😎'
          title='Sou Programador'
          description='Já programo há 2 anos ou mais'
          selected={ state.level === 1 }
          onClick={ () => setLevel( 1 ) }
        />
        <Link className='link' to="/">Voltar</Link>
        <button onClick={ handleNextStep }>Próximo</button>
      </div>
    </Theme>
  )
}

export default Step2
