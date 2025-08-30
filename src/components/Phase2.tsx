import Videos, { type Video } from './Videos'
import Section from './Section.styled'

export default function Phase1() {
  const videos: Video[] = [
    {
      title: 'Running Man',
      subtitle: '12x • 3 sets',
      description:
        'Stand on a scooter. Lift one leg and follow your arms through the movement. Bend the leg still on the scooter and touch the ground behind you with the lifted leg. As you move the leg back, follow your arms through the movement. Repeat this movement.',
      src: 'https://videos.ctfassets.net/dm3qxcje484f/3AYcRqVhccF6cMqffG948L/9a8000c8fb3f4dbc8511ce487f5a6639/Gluteaal_-_Staand_-_Running_men_-_Fysioefeningen.nl_-_Breda.mp4',
    },
    {
      title: 'Lateral step down',
      subtitle: '12x • 3 sets',
      description:
        'Lateral step down: Stand on a raised platform with your affected leg and place your hands on your hips. Bend your knees to a 45-degree angle (with your heel toward the floor) and then come back up.',
      src: 'blob:https://www.fysioefeningen.nl/e30b49a3-65df-424d-a9cf-b7b377fad812',
    },
    {
      title: 'Single leg squat TRX',
      subtitle: '15x • 3 sets',
      description:
        'Stand with your back to the TRX and place one foot in one handle of the TRX. Extend the other leg slightly forward, then lower down through the front leg and come back up.',
      src: 'blob:https://www.fysioefeningen.nl/0a59ca67-35ae-47de-93a0-af64e1934ce1',
    },
    {
      title: 'Hip lock step up on the box',
      subtitle: '15x • 3 sets',
      description:
        'Stand hip-width apart behind the box, then raise your knees and ankles as high as possible. Then lunge forward, landing with the foot of your raised leg on the box. Then step onto the box and lift your standing leg.',
      src: 'https://videos.ctfassets.net/dm3qxcje484f/5bnylHbDGKpmQ6aQI5K9GK/4981a284a29ce11d5666589145f40c2a/Gluteaal_-_In_stand_op_box_-_E__e__n_been_step_off_back_-_Fysioefeningen.nl_-_Breda.mp4',
    },
    {
      title: 'Lunge with pallof press rotation',
      subtitle: '12x • 3 sets',
      description:
        'Lunge with a Pallof press rotation, form a lunge. Then, push the elastic out at chest height and rotate your torso to the same side as the leg you stepped out with.',
      src: 'blob:https://www.fysioefeningen.nl/b0ec8589-c247-42eb-a37d-86d3ee4ee506',
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
      <Videos videos={videos} />
    </>
  )
}
