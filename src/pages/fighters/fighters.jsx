import React from 'react'
import styles from './fighters.css'
import FightersBackground from '../../components/fighters-background/fighters-background'
import NewFighterBackground from '../../components/new-fighter-background/new-fighter-background'

const Fighters = () => {
  return (
    <div className={styles.container}>
      <FightersBackground />
      <NewFighterBackground />
    </div>
  )
}

export default Fighters
