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

      .info,
      .hidden-info {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        left: 0;
        padding: 0.5rem;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 300ms ease-in-out;
        z-index: 1;

        h5 {
          border-radius: 8px;
          padding: 0.25rem 0.5rem;
        }
      }

      .info {
        h4 {
          filter: drop-shadow(0 0 2px #222);
          text-shadow: 0 0 2px #222;
        }

        h5 {
          background-color: #ffffddaa;
          color: #222;
        }
      }

      .hidden-info {
        background-color: #ffffdd99;
        height: 100%;
        opacity: 0;
        width: 100%;

        h4 {
          color: #222;
        }

        h5 {
          background-color: #222222aa;
        }

        p {
          color: #222;
        }
      }

      @media (hover: hover) {
        &:hover {
          .info {
            opacity: 0;
          }

          .hidden-info {
            opacity: 1;
          }
        }
      }

      @media (hover: none) {
        &.touch-active {
          .info {
            opacity: 0;
          }

          .hidden-info {
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
