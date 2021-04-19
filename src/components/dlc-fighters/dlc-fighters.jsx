import React from 'react'
import styles from './dlc-fighters.css'
import FIGHTERS from '../../assets/fighters/fighters.json'
import SERIES from '../../assets/fighters/series.json'
import FighterIdCard from '../fighter-id-card/fighter-id-card'

const DlcFighters = () => {
  return (
    <section className={styles.container}>
      {
        FIGHTERS.fighters.filter(fighter => fighter.dlc === 1).map(fighter => (
          <FighterIdCard
            key={fighter.id}
            displayNum={fighter.displayNum}
            displayName={fighter.displayName.en_US}
            file={fighter.file}
            color={fighter.color}
            series={SERIES[fighter.series]}
            dlc={true}
          />
        ))
      }
    </section>
  )
}

export default DlcFighters
