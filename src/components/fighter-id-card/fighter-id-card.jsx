/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import styles from './fighter-id-card.css'
import PropTypes from 'prop-types'
const ASSETS_FOLDER = 'fighters'
const NO_DLC_FIGHTERS_NUM = 69

const FighterIdCard = ({ displayNum, displayName, file, color, series, dlc }) => {
  return (
    <div
      className={styles.container}
      style={dlc ? { backgroundImage: `url(${require(`../../assets/${ASSETS_FOLDER}/bg_dlc${((parseInt(displayNum) - NO_DLC_FIGHTERS_NUM) === 1) ? '' : (parseInt(displayNum) - NO_DLC_FIGHTERS_NUM)}.webp`)})` } : {}}>
      <div className={styles.info} style={{ backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/thumb_h/${file}.png)` }}>
        <p>{displayNum}</p>
        <p>{displayName}</p>
      </div>
      <svg>
        {
          series.map((path, index) => <path key={index} d={path} />)
        }
      </svg>
    </div>
  )
}

FighterIdCard.propTypes = {
  displayNum: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  series: PropTypes.array,
  dlc: PropTypes.bool.isRequired,
}

FighterIdCard.defaultProps = {
  series: [],
}

export default FighterIdCard
