import styled from 'styled-components'

export default styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100dvh;
  padding: 1rem;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
