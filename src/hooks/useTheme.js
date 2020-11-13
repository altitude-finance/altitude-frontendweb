import { useContext } from 'react'
import { ThemeContext } from 'contexts/Theme'

export const useTheme = () => {
  const theme = useContext(ThemeContext)

  return theme
}
