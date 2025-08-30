import Exercises, { type Exercise } from './Exercises'
import Section from './Section.styled'

export default function Phase1() {
  const exercises: Exercise[] = [
    {
      title: 'Squat jump on step',
      subtitle: '12x • 3 sets',
      description:
        "Stand hip-width apart and lower yourself into a squat position as if you were sitting down, making sure your knees don't extend past your toes. Lower yourself completely and jump up, then immediately lower yourself again and repeat.",
      src: '/images/phases/3/squat_jump_on_step.gif',
    },
    {
      title: 'Switch jump',
      subtitle: '12x • 3 sets',
      description:
        'Place one foot on a small platform. Then make a small jump, switching your feet. Repeat the movement.',
      src: '/images/phases/3/switch_jump.gif',
    },
    {
      title: 'Single leg box jump',
      subtitle: '12x • 3 sets',
      description:
        'Stand on one leg in front of a box, bend your knees, and jump onto the box. Repeat the movement.',
      src: '/images/phases/3/single_leg_box_jump.gif',
    },
  ]

  return (
    <>
      <Section>
        <h2>Phase 3 of recovery</h2>
        <h4>In this phase the goal is to build up to sports activities.</h4>
        <div className="img-container">
          <img alt="" draggable={false} src="/images/phases/3/phase.jpg" />
        </div>
      </Section>
      <Exercises exercises={exercises} />
    </>
  )
}
