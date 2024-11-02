const Intro = () => {
  return (
    <section className="mt-16 flex flex-wrap gap-10">
      <figure className="md:w-1/3 flex-1 mb-10">
        <img
          src="https://res.cloudinary.com/de0okmdyb/image/upload/v1730567308/IMG-20241004-WA0007_1_avkrgp.svg"
          alt="A profile picture of the developer"
        />
        <figcaption>
          <ul className="md:pl-8">
            <li className="list-disc mt-3">My Portfolio</li>
          </ul>
        </figcaption>
      </figure>
      <div className="md:w-2/3 flex flex-col gap-3">
        <h1 className="text-3xl">RIDWAN ADEBOSIN</h1>
        <div className="pb-4">
          <p className="pb-2 text-xl">Frontend Developer</p>
          <p className="grid gap-3">
            <p className="leading-1">
              Utilizing HTML, CSS, JavaScript, React, and TypeScript, along with
              proficient use of GitHub, I craft not just apps, but
              standards-compliant applications prioritizing accessibility for
              keyboard and onscreen users, and ensure passing tests prior to
              deployment. Transitioning from the Medical field to software
              development, I've leveraged essential soft skills honed as a
              Medical Laboratory Technician, such as empathy, communication, and
              attention to detail.
            </p>
            <p>
              These skills prove invaluable in coding, brainstorming, bug
              fixing, testing, and crafting human-centered applications to
              tackle real-world issues.
            </p>
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <h1>7+</h1>
            <p>Years of experience</p>
          </div>
          <div>
            <h1>15+</h1>
            <p>Projects completed</p>
          </div>
          <div>
            <h1>8+</h1>
            <p>Clients Satisfied</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
