import styled from 'styled-components'

export default styled.section`
  align-items: center;
  display: flex;
  height: 100dvh;
  justify-content: center;
  position: relative;

  .exercise-list {
    display: flex;
    flex-wrap: wrap;
    height: 100dvh;
    width: 100dvw;

    .exercise-item {
      align-items: center;
      display: flex;
      flex: 1;
      height: 100%;
      justify-content: center;
      position: relative;

      .exercise {
        max-height: 100%;
        max-width: 100%;
      }

      > h4 {
        filter: drop-shadow(0 0 2px #222);
        left: 0.5rem;
        position: absolute;
        text-shadow: 0 0 2px #222;
        top: 0.5rem;
        transition: all 300ms ease-in-out;
        z-index: 1;
      }

      .info {
        align-items: flex-start;
        background-color: #ffffdd99;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: 100%;
        opacity: 0;
        padding: 0.5rem;
        pointer-events: none;
        position: absolute;
        transition: all 300ms ease-in-out;
        width: 100%;

        h4 {
          color: #222;
        }

        h5 {
          background-color: #222222aa;
          border-radius: 8px;
          padding: 0.25rem 0.5rem;
        }

        p {
          color: #222;
        }
      }

      @media (hover: hover) {
        &:hover {
          > h4 {
            opacity: 0;
          }

          .info {
            opacity: 1;
          }
        }
      }

      @media (hover: none) {
        &.touch-active {
          > h4 {
            opacity: 0;
          }

          .info {
            opacity: 1;
          }
        }
      }

      @media (max-width: 1000px) {
        h4 {
          font-size: 0.75rem;
        }

        h5 {
          font-size: 0.625rem;
          padding: 0.125rem 0.25rem !important;
        }

        p {
          font-size: 0.625rem;
        }
      }
    }

    &.portrait {
      height: 100dvw;
      position: absolute;
      rotate: 90deg;
      width: 100dvh;
    }
  }
`
