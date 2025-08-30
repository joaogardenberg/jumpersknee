import Section from './Section.styled'

export default function Information() {
  return (
    <>
      <Section>
        <h2>What is jumper's knee?</h2>
        <p>
          Jumper's knee, also known as jumper's knee or patellar tendinopathy,
          is an overuse injury of the patellar tendon that is common in athletes
          who experience peak loads, such as soccer players, volleyball players,
          handball players, runners, hockey players, and others. The quadriceps
          muscle originates in the pelvis and runs downwards towards the
          kneecap. The quadriceps tendon attaches just below the kneecap (tibial
          tuberosity).
        </p>
        <div className="img-container">
          <img alt="" draggable={false} src="/images/jumpers_knee.jpg" />
        </div>
      </Section>
      <Section>
        <h3>The cause of jumper's knee</h3>
        <p>
          Excessive peak loading can irritate the attachment of this patellar
          tendon. This can also be caused by a reduced physical capacity, such
          as stress, increased exercise, or suddenly returning to exercise after
          a year of inactivity.
        </p>
        <p>
          Typical activities that cause problems include climbing stairs,
          cycling with resistance, squatting, rising from a chair, bending over,
          kneeling, jumping, and landing. These can cause the patellar tendon to
          thicken and deteriorate (tendinopathy).
        </p>
        <div className="img-container">
          <img alt="" draggable={false} src="/images/chair_stand_up_pain.jpg" />
        </div>
      </Section>
      <Section>
        <h3>The symptoms of a jumper's knee</h3>
        <p>
          This can eventually lead to pain in the patellar tendon (under the
          kneecap). Stiffness and/or initial pain when starting a movement can
          occur. Initially, these complaints may subside after warming up (the
          muscles are warm). Over time, it can even cause constant pain.
          Athletes who regularly jump and land can experience significant
          discomfort and discomfort from this.
        </p>
        <div className="img-container">
          <img
            alt=""
            draggable={false}
            src="/images/volleyball_jump_pain.jpg"
          />
        </div>
      </Section>
      <Section>
        <h3>The treatment of a jumper's knee</h3>
        <p>
          The most important thing for jumper's knee is to temporarily relieve
          the peak load of jumping and landing. This gives the patellar tendon
          more time to fully recover. Parallel to this rest period, a
          strengthening training program for the patellar tendon, gluteal
          muscles, and core should be started immediately to improve the quality
          of the patellar tendon and optimize the function of the lower chain.
          The recovery period generally ranges from 6 weeks to 12 months,
          depending on the severity.
        </p>
        <div className="img-container">
          <img alt="" draggable={false} src="/images/resting_hopeful.jpg" />
        </div>
      </Section>
      <Section>
        <h3>Synonyms</h3>
        <p>
          Jumper's knee, patellar tendinopathy, patellar tendinitis, knee tendon
          pain, pain under the kneecap
        </p>
        <h3>Advice</h3>
        <p>
          Above are some exercises you can use for this problem. If you have any
          questions about the exercise, are unsure how to perform it, or are
          unsure if it's right for you, always consult a qualified
          physiotherapist!
        </p>
        <div className="img-container">
          <img alt="" draggable={false} src="/images/physiotherapist.jpg" />
        </div>
      </Section>
    </>
  )
}
