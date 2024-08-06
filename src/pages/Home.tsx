import ThreeScene from '../ThreeScene'
import { TypeAnimation } from 'react-type-animation'

function Home() {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <ThreeScene />
      </div>
      <article className="relative p-5">
        <h1 className="text-3xl">
          Hello👋🏼
          <div>Welcome to my portfolio</div>
          <br />
          I&apos;m
          <TypeAnimation
            sequence={['Amin Alizadeh', 2000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="m-1 bg-red-500 px-1 text-white"
          />
        </h1>
        <p className="text-3xl">
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
            className="text-blue-500 m-1 text-3xl font-bold"
          />
        </p>
      </article>
    </div>
  )
}

export default Home
