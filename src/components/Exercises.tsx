import { useEffect, useState } from 'react'
import classNames from 'classnames'
import StyledExercises from './Exercises.styled'

export interface Exercise {
  title: string
  subtitle: string
  description: string
  src: string
}

interface ExercisesProps {
  exercises?: Exercise[]
}

export default function Exercises({ exercises }: ExercisesProps) {
  const [current, setCurrent] = useState<number>()
  const [portrait, setPortrait] = useState(false)

  useEffect(() => {
    const onResize = () => {
      setPortrait(window.innerHeight > window.innerWidth)
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (!exercises) return null

  return (
    <StyledExercises>
      <ol className={classNames('exercise-list', { portrait })}>
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
