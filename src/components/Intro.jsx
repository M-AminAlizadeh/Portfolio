const Intro = () => (
  <section className="border">
    <div className="bg-intro-bg-shapes h-screen bg-no-repeat bg-cover w-12/12 m-auto flex flex-col justify-center ">
      <div className="w-10/12 m-auto flex flex-col gap-y-5">
        <h1 className="font-black text-5xl">
          Hey I’m Amin
          <br />
          Glad to see you!
        </h1>
        <p className="w-11/12 text-lg">
          Crafting Digital Experiences: Elevate Your Vision with a Full-Stack Developer
          Ready to Transform Ideas into Reality!
          Explore My Portfolio and Let&apos;s Create Something Remarkable Together!
        </p>
        <span>LET&apos;S CONNECT</span>
        <div className="flex gap-2">
          <a href="https://www.linkedin.com/in/m-amin-alizadeh/">
            <img src="https://img.icons8.com/fluency/30/linkedin-circled.png" alt="linkedin" />
          </a>
          <a href="https://github.com/m-aminalizadeh">
            <img src="https://img.icons8.com/glyph-neue/30/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
