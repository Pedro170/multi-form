import React from 'react'
import styles from './Select.module.css'

type Props = {
  title?: string;
  description?: string;
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

const Select = ( { title, description, icon, selected, onClick }: Props ) => {
  return (
    <div
      className={`${ styles.select } ${ selected && styles.selected }` }
      onClick={ onClick }
    >
        <span className={ styles.icon }>{ icon }</span>
      <div className={ styles.info }>
        <h4 className={ styles.title } >{ title }</h4>
        <p className={ styles.description }>{ description }</p>
      </div>
    </div>
  )
}

export default Select
