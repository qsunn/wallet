import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const StyledNavLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 400;
`