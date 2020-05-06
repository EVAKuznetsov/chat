import React from 'react'
import PropTypes from 'prop-types'

import readedSvg from 'assets/img/readed.svg'
import noReadedSvg from 'assets/img/noreaded.svg'

const IconStatus = ({ show, readed = false, className }) => {
  return (
    <>
      {show &&
        (readed ? (
          <img
            src={readedSvg}
            className={className}
            alt="message checked icon"
          />
        ) : (
          <img
            src={noReadedSvg}
            className={className}
            alt="message didn't check icon"
          />
        ))}
      {null}
    </>
  )
}

IconStatus.propTypes = {
  date: PropTypes.string,
  className: PropTypes.string,
}
export default IconStatus
