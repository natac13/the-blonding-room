import '@fontsource/montserrat/latin.css'
import '@fontsource/parisienne/latin.css'
import Wrapper from './src/components/App/Wrapper'
// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Wrapper {...props}>{element}</Wrapper>
}
