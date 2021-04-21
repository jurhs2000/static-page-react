import React from 'react'
import BottomBar from '../../components/bottom-bar/bottom-bar'
import DisplayFighters from '../../components/display-fighters/display-fighters'
import DlcFighters from '../../components/dlc-fighters/dlc-fighters'
import FightersBackground from '../../components/fighters-background/fighters-background'
import Footer from '../../components/footer/footer'
import TopBar from '../../components/top-bar/top-bar'
import styles from './fighters.css'

const Fighters = () => {
  return (
    <div className={styles.container}>
      <TopBar />
      <FightersBackground />
      <div className={styles.elevation}>
        <div className={styles['content-fit-center']}>
          <DlcFighters />
          <DisplayFighters />
        </div>
        <BottomBar />
        <Footer />
      </div>
    </div>
  )
}

export default Fighters
