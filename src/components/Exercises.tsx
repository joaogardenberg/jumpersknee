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
  height: 100vh;

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

      .exercise {
        max-height: 100%;
        max-width: 100%;
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
            <img alt="" className="exercise" src={exercise.src} />
          </li>
        ))}
      </ol>
    </StyledExercises>
  )
}
