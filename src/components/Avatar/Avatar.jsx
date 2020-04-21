import React from 'react'
import PropTypes from 'prop-types'

import { getColorAvatarBllock } from 'utils/helpers'

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img src={user.avatar} alt={user.fullName} />
  } else {
    const colors = getColorAvatarBllock()
    const firstNameChar = []
    user.fullName.split(' ').forEach(e => {
      firstNameChar.push(e[0])
    })

    return (
      <div
        className="dialogs-item__sub-avatar"
        style={{
          background: `linear-gradient(-45deg,${colors.firstColor}, ${colors.secondColor}`,
        }}
      >
        {firstNameChar}
      </div>
    )
  }
}

Avatar.propTypes = {
  user: PropTypes.object,
}

export default Avatar
