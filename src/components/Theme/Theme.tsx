import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import styles from './Theme.module.css'

type Props = {
  children: React.ReactNode;
}

const Theme = ( { children }: Props ) => {
  return (
    <section className={ styles.container }>
      <div className={ styles.theme }>
        <Header />

        <div className={ styles.steps }>
          <Sidebar />

          <div className={ styles.pages }>
          { children }
        </div>
        </div>
      </div>
    </section>
  )
}

export default Theme
