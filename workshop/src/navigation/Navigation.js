import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate, useMatch } from 'react-router-dom'
import { Menu, MenuItem } from '@dhis2/ui'

const NavigationItem = ({ path, label }) => {
    const navigate = useNavigate()
    const routeMatch = useMatch(path)
    const isActive = Boolean(routeMatch)

    const onClick = () => navigate(path)

    return <MenuItem label={label} active={isActive} onClick={onClick} />
}

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export const Navigation = () => (
    <Menu>
        <NavigationItem label="Home" path="/" />

        <NavigationItem label="Attributes" path="/attributes" />

        <NavigationItem label="Form" path="/form" />
    </Menu>
)
