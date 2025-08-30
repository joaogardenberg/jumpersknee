import Exercises, { type Exercise } from './Exercises'
import Section from './Section.styled'

export default function Phase1() {
  const exercises: Exercise[] = [
    {
      title: 'Running Man',
      subtitle: '12x • 3 sets',
      description:
        'Stand on a scooter. Lift one leg and follow your arms through the movement. Bend the leg still on the scooter and touch the ground behind you with the lifted leg. As you move the leg back, follow your arms through the movement. Repeat this movement.',
      src: '/images/phases/2/running_man.gif',
    },
    {
      title: 'Lateral step down',
      subtitle: '12x • 3 sets',
      description:
        'Stand on a raised platform with your affected leg and place your hands on your hips. Bend your knees to a 45-degree angle (with your heel toward the floor) and then come back up.',
      src: '/images/phases/2/lateral_step_down.gif',
    },
    {
      title: 'Single leg squat TRX',
      subtitle: '15x • 3 sets',
      description:
        'Stand with your back to the TRX and place one foot in one handle of the TRX. Extend the other leg slightly forward, then lower down through the front leg and come back up.',
      src: '/images/phases/2/single_leg_squat.gif',
    },
    {
      title: 'Hip lock step up on the box',
      subtitle: '15x • 3 sets',
      description:
        'Stand hip-width apart behind the box, then raise your knees and ankles as high as possible. Then lunge forward, landing with the foot of your raised leg on the box. Then step onto the box and lift your standing leg.',
      src: '/images/phases/2/hip_lock_step_up_box.gif',
    },
    {
      title: 'Lunge with pallof press rotation',
      subtitle: '12x • 3 sets',
      description:
        'Lunge with a Pallof press rotation, form a lunge. Then, push the elastic out at chest height and rotate your torso to the same side as the leg you stepped out with.',
      src: '/images/phases/2/lunge_with_pallof_press.gif',
    },
  ]

  return (
    <>
      <Section>
        <h2>Phase 2 of recovery</h2>
        <h4>
          In this phase, the goal is to strengthen the tendons and muscles
          around the knee through exercises. It's important to gradually
          increase the load.
        </h4>
        <div className="img-container">
          <img alt="" draggable={false} src="/images/phases/2/phase.jpg" />
        </div>
      </Section>
      <Exercises exercises={exercises} />
    </>
  )
}
