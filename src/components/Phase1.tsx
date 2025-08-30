import Videos, { type Video } from './Videos'
import StyledPhase from './Phase.styled'

export default function Phase1() {
  const videos: Video[] = [
    {
      title: 'Fire hydrant',
      subtitle: '12x • 3 sets',
      description:
        'Fire hydrant: Stand upright with a rubber band just above your knees and your hands on your hips. Now lift one leg off the ground and simultaneously rotate your knee outward. Return to the starting position and repeat.',
      src: 'https://videos.ctfassets.net/dm3qxcje484f/3d6M4dZHrzrcQ41bctP94d/ac5cb3d7be2cb993412f2ce9bd5fabf0/Gluteaal_-_In_stand_-_Fire_hydrant_-_Fysioefeningen.nl_-_Breda.mp4',
    },
    {
      title: 'Wall slide',
      subtitle: '12x • 3 sets',
      description:
        'Wall slide, stand with your back against a door, then slide down the wall until your knees are bent, come back up through the door and repeat the movement.',
      src: 'blob:https://www.fysioefeningen.nl/2088891d-aa22-4c2e-9977-2b2b876710b9',
    },
    {
      title: 'Standing Diver (hamstring)',
      subtitle: '12x • 3 sets',
      description:
        'The diver exercise is a type of exercise that targets the abdominal muscles, specifically the rectus abdominis (also known as the "six-pack" muscle). The exercise is often performed in a controlled, slow, and precise manner.',
      src: 'https://videos.ctfassets.net/dm3qxcje484f/1Tnlvf09SGSpr6hzm0Pz7r/32e2be94ae868a72e468e0fe40b2f3ca/Hamstring_-_In_stand_-_Diver_-_Fysioefeningen.nl_-_Breda.mp4',
    },
    {
      title: 'Star excursion balance',
      subtitle: '15x • 3 sets',
      description:
        "Stand on one leg and tap the ground in various directions, trying not to rest on the leg that's touching the ground. Directions are shown in the video instructions.",
      src: 'blob:https://www.fysioefeningen.nl/6e64cf40-40fa-429b-87fc-a87286977a55',
    },
  ]

  return (
    <>
      <StyledPhase>
        <h2>Phase 1 of recovery</h2>
        <h4>
          In this phase the goal is to start exercises for the patellar tendon within the limits of
          pain.
        </h4>
      </StyledPhase>
      <Videos videos={videos} />
    </>
  )
}
