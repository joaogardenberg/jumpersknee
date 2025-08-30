import Videos, { type Video } from './Videos'
import Section from './Section.styled'

export default function Phase1() {
  const videos: Video[] = [
    {
      title: 'Jumping squat',
      subtitle: '12x • 3 sets',
      description:
        "Jumping squat: Stand hip-width apart and lower yourself into a squat position as if you were sitting down, making sure your knees don't extend past your toes. Lower yourself completely and jump up, then immediately lower yourself again and repeat.",
      src: 'blob:https://www.fysioefeningen.nl/fe5267a1-5f44-4520-90cd-5401ec31f463',
    },
    {
      title: 'Squat jump on step',
      subtitle: '12x • 3 sets',
      description:
        "Squat jump onto the step, standing hip-width apart. Squat down as if you were sitting down, making sure your knees don't extend past your toes. Squat down completely and then jump onto the step.",
      src: 'blob:https://www.fysioefeningen.nl/0e3050ec-fab7-408d-972d-d3c0c33eecdf',
    },
    {
      title: 'Switchjump',
      subtitle: '12x • 3 sets',
      description:
        'Switch jump: place one foot on a small platform. Then make a small jump, switching your feet. Repeat the movement.',
      src: 'blob:https://www.fysioefeningen.nl/a9c43e85-6dd7-4721-89ad-2fd75665e869',
    },
    {
      title: 'Single leg box jump',
      subtitle: '12x • 3 sets',
      description:
        'Single-leg box jump: stand on one leg in front of a box, bend your knees, and jump onto the box. Repeat the movement.',
      src: 'https://videos.ctfassets.net/dm3qxcje484f/2Hab2iHfvpi6a6OHoEHeuo/29f60c2cd90a890ddb25383b6cd9b2d2/Benen_-_Staande_-_Single_leg_box_jump_-_Fysioefeningen.nl_-_Breda.mp4',
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
      <Videos videos={videos} />
    </>
  )
}
