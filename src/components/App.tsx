import styled from 'styled-components'
import Introduction from './Introduction'
import Phase1 from './Phase1'
import Phase2 from './Phase2'
import Phase3 from './Phase3'
import Information from './Information'

const StyledApp = styled.div``

export default function App() {
  return (
    <StyledApp>
      <Introduction />
      <Phase1 />
      <Phase2 />
      <Phase3 />
      <Information />
    </StyledApp>
  )
}
