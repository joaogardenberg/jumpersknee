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

      h4,
      p {
        filter: drop-shadow(0 0 2px #222);
        text-shadow: 0 0 2px #222;
      }

      h4 {
        left: 0.5rem;
        position: absolute;
        top: 0.5rem;
        z-index: 1;
      }

      .info {
        align-items: flex-start;
        background-color: #222222bb;
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

        h5 {
          background-color: #ffffddaa;
          border-radius: 8px;
          color: #222;
          padding: 0.125em 0.25em;
        }
      }

      &:hover .info {
        opacity: 1;
        padding-top: 2.5rem;
      }
    }
  }
`

export default function Exercises({ exercises }: ExercisesProps) {
  if (!exercises) return null

  return (
    <StyledExercises>
      <ol className="exercise-list">
        {exercises.map((exercise) => (
          <li className="exercise-item" key={exercise.title}>
            <h4>{exercise.title}</h4>
            <img alt="" className="exercise" src={exercise.src} />
            <div className="info">
              <h5>{exercise.subtitle}</h5>
              <p>{exercise.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </StyledExercises>
  )
}
