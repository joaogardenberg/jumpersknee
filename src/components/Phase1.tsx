import Exercises, { type Exercise } from './Exercises'
import Section from './Section.styled'

export default function Phase1() {
  const exercises: Exercise[] = [
    {
      title: 'Fire hydrant',
      subtitle: '12x • 3 sets',
      description:
        'Stand upright with a rubber band just above your knees and your hands on your hips. Now lift one leg off the ground and simultaneously rotate your knee outward. Return to the starting position and repeat.',
      src: '/images/phases/1/fire_hydrant.gif',
    },
    {
      title: 'Wall slide',
      subtitle: '12x • 3 sets',
      description:
        'Stand with your back against a door, then slide down the wall until your knees are bent, come back up through the door and repeat the movement.',
      src: '/images/phases/1/wall_slide.gif',
    },
    {
      title: 'Standing Diver (hamstring)',
      subtitle: '12x • 3 sets',
      description:
        'The diver exercise is a type of exercise that targets the abdominal muscles, specifically the rectus abdominis (also known as the "six-pack" muscle). The exercise is often performed in a controlled, slow, and precise manner.',
      src: '/images/phases/1/standing_diver.gif',
    },
    {
      title: 'Star excursion balance',
      subtitle: '15x • 3 sets',
      description:
        "Stand on one leg and tap the ground in various directions, trying not to rest on the leg that's touching the ground. Directions are shown in the video instructions.",
      src: '/images/phases/1/star_excursion_balance.gif',
    },
  ]

  return (
    <>
      <Section>
        <h2>Phase 1 of recovery</h2>
        <h4>
          In this phase the goal is to start exercises for the patellar tendon
          within the limits of pain.
        </h4>
        <div className="img-container">
          <img alt="" draggable={false} src="/images/phases/1/phase.jpg" />
        </div>
      </Section>
      <Exercises exercises={exercises} />
    </>
  )
}
