import React from 'react'
import { useForm } from '../../contexts/FormContext';
import styles from './Sidebar.module.css'
import TabSidebar from './TabSidebar/TabSidebar'

const Sidebar = () => {
  const { state } = useForm();

  return (
    <nav className={ styles.sidebar }>
      <TabSidebar
          title='Pessoal'
          description='Se identifique'
          icon='profile'
          path='/'
          active={ state.currentStep === 1 }
        />

        <TabSidebar
          icon='book'
          title='Profissional'
          description='Seu nível'
          path='/steptwo'
          active={ state.currentStep === 2 }
        />

        <TabSidebar
          icon='email'
          title='Contato'
          description='Como te achar'
          path='/stepthree'
          active={ state.currentStep === 3 }
      />
    </nav>
  )
}

export default Sidebar
