import Section from './Section.styled'

export default function Introduction() {
  return (
    <Section>
      <h1>Jumper's knee</h1>
      <p>
        <strong>Jumper's knee</strong>, also known as patellar tendinopathy or
        patellar tendinitis, is an overuse injury of the patellar tendon that is
        common in runners and other athletes. Relatively sufficient rest, but
        especially a gradual increase in training, is essential to alleviate the
        symptoms.
      </p>
      <div className="img-container">
        <img alt="" draggable={false} src="/images/jumpers_knee.jpg" />
      </div>
    </Section>
  )
}
