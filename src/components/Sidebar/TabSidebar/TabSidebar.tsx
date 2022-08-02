import React from 'react'
import styles from './TabSidebar.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Head } from '../../../svgs/profile.svg'
import { ReactComponent as Book } from '../../../svgs/book.svg'
import { ReactComponent as Email } from '../../../svgs/mail.svg'


type Props = {
  title?: string;
  description?: string;
  icon?: string;
  path: string;
  active?: boolean;
}

const TabSidebar = ( { title, description, icon, path, active }: Props ) => {
  return (
    <div className={ styles.container }>
      <Link to={ path }>
        <div className={ styles.info }>
          <h4 className={ styles.title }>{ title }</h4>
          <p className={ styles.description }>{ description }</p>
        </div>
        <div className={`${ styles.icon } ${ active && styles.active}`}>
          { icon === 'profile' && <Head fill="#fff" width={ 24 } height={ 24 } /> }
          { icon === 'book' && <Book fill="#fff" width={ 24 } height={ 24 } /> }
          { icon === 'email' && <Email fill="#fff" width={ 24 } height={ 24 } /> }
        </div>
        <span className={`${styles.point} ${ active && styles.active}` }></span>
      </Link>
    </div>
  )
}

export default TabSidebar
