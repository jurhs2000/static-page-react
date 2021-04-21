import React from 'react'
import styles from './section-link-button.css'
import PropTypes from 'prop-types'

const ASSETS_FOLDER = 'footer'

const SectionLinkButton = ({ svgPaths, sectionName, backgroundImage, colorHover, isActive }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${require(`../../assets/${ASSETS_FOLDER}/${backgroundImage}`)})` }}>
      <div className={`${styles['hover-background']} ${isActive ? styles['hover-background-active'] : ''}`} style={{ backgroundColor: `#${colorHover}` }} />
      <svg viewBox={(sectionName === 'Music') ? '0 0 240 240' : '0 0 78 78'} width="26" height="26" style={{ fill: isActive ? `#${colorHover}` : '' }}>
        {
          svgPaths.map((figure, index) => (figure.type === 'path') ? <path key={index} d={figure.d} /> : <circle key={index} cx={figure.cx} cy={figure.cy} r={figure.r} />)
        }
      </svg>
      <p style={{ color: isActive ? `#${colorHover}` : '' }}>{sectionName}</p>
    </div>
  )
}

SectionLinkButton.propTypes = {
  svgPaths: PropTypes.array.isRequired,
  sectionName: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  colorHover: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
}

SectionLinkButton.defaultProps = {
  backgroundImage: 'globalfooter-nav__item--top_pc.png',
  colorHover: '727272',
}

export default SectionLinkButton
