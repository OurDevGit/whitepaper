import React from 'react'
import PropTypes from 'prop-types'

import './style.less'

const colorSchema = {
  offline: {
    secondary : 'rgba(158, 158, 158, 0.6)',
    primary   : '#EEEEEE'
  },
  online: {
    secondary : 'rgba(59, 232, 218, 0.4)',
    primary   : '#00D1c1'
  }
}

const AvartarBadge = ({ status }) => (
  <div className="badge" style={{ backgroundColor: colorSchema[status].secondary }}>
    <div className="badge-inner" style={{ backgroundColor: colorSchema[status].primary }} />
  </div>
)

const Avartar = ({ firstName, lastName, status }) => (
  <div className="avatar">
    <div className="avatar-main">
      <div className="short-username">{firstName[0]}{lastName[0]}</div>
      <AvartarBadge status={status || 'online'} />
    </div>
  </div>
)

Avartar.propTypes = {
  firstName : PropTypes.string.isRequired,
  lastName  : PropTypes.string.isRequired,
  status    : PropTypes.string,
}

AvartarBadge.propTypes = {
  status: PropTypes.string
}

export default Avartar
