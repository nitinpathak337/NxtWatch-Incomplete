import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavbarContainer,
  NavLogo,
  NavItems,
  ThemeButton,
  ThemeImage,
} from './styledComponent'

const Navbar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {onToggleTheme, isDarkTheme} = value

      return (
        <NavbarContainer theme={isDarkTheme}>
          <NavLogo
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
          />
          <NavItems>
            <ThemeButton>
              <ThemeImage src="" />
            </ThemeButton>
          </NavItems>
        </NavbarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Navbar
