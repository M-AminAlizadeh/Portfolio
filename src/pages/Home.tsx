import ThreeScene from '../ThreeScene'
import { TypeAnimation } from 'react-type-animation'

function Home() {
  return (
    <div className="flex justify-between">
      <article>
        <h1>Hello I&apos;m Amin</h1>
        <p>
          I&apos;m a
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1500,
              'Frontend Developer',
              1500,
              'Fullstack Developer',
              1500,
              'Backend Developer',
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-blue-500"
          />
        </p>
      </article>
      <ThreeScene />
    </div>
  )
}

export default Home
