import styled from 'styled-components'

const StyledIntroduction = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100vh;
  padding: 1rem;

  h1 {
    text-align: center;
  }

  p {
    text-align: justify;
  }

  .img-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;
    width: 100%;

    img {
      max-height: 100%;
      max-width: 100%;
      position: absolute;
    }
  }
`

export default function Introduction() {
  return (
    <StyledIntroduction>
      <h1>Jumper's knee</h1>
      <p>
        <strong>Jumper's knee</strong>, also known as patellar tendinopathy or
        patellar tendinitis, is an overuse injury of the patellar tendon that is
        common in runners and other athletes. Relatively sufficient rest, but
        especially a gradual increase in training, is essential to alleviate the
        symptoms.
      </p>
      <div className="img-container">
        <img alt="" src="/jumpersknee.jpg" />
      </div>
    </StyledIntroduction>
  )
}
