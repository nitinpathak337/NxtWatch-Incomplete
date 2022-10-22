import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4%;
  background-color: ${props => (props.theme === true ? 'black' : 'white')};
  @media screen and (min-width: 768px) {
    padding: 2%;
  }
`

export const NavLogo = styled.img`
  width: 24%;
  @media screen and (min-width: 768px) {
    width: 12%;
  }
`
export const NavItems = styled.div``

export const ThemeButton = styled.button``

export const ThemeImage = styled.img``
