import { useState } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

export interface Exercise {
  title: string
  subtitle: string
  description: string
  src: string
}

interface ExercisesProps {
  exercises?: Exercise[]
}

const StyledExercises = styled.section`
  height: 100dvh;

  .exercise-list {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;

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
        background-color: #ffffddbb;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        height: 100%;
        opacity: 0;
        padding: 100% 0.5rem 0.5rem;
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
          padding: 0.125em 0.25em;
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
            padding-top: 0.5rem;
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
            padding-top: 0.5rem;
          }
        }
      }
    }
  }
`

export default function Exercises({ exercises }: ExercisesProps) {
  const [current, setCurrent] = useState<number>()

  if (!exercises) return null

  return (
    <StyledExercises>
      <ol className="exercise-list">
        {exercises.map((exercise, index) => (
          <li
            className={classNames('exercise-item', {
              'touch-active': current === index,
            })}
            key={exercise.title}
            onTouchStart={() =>
              current === index ? setCurrent(undefined) : setCurrent(index)
            }
          >
            <h4>{exercise.title}</h4>
            <img alt="" className="exercise" src={exercise.src} />
            <div className="info">
              <h4>{exercise.title}</h4>
              <h5>{exercise.subtitle}</h5>
              <p>{exercise.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </StyledExercises>
  )
}
