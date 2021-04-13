import React from 'react'
import styles from './new-fighter-background.css'

const NewFighterBackground = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img />
        <img />
        <img />
      </div>
      <div className={styles['new-fighter-name']}>
        <img />
        <img />
        <img />
      </div>
      <img className={styles['new-fighter-image']} />
    </div>
  )
}

export default NewFighterBackground
