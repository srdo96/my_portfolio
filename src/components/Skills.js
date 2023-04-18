const techs = [
  "html",
  "css",
  "JavaScript",
  "TypeScript",
  "React js",
  "Tailwind",
  "Bootstrap",
  "PrimeReact",
  "Firebase",
  "Axios",
  "React Router",
  "Mongodb",
  "Express js",
  "linux",
];

const Skills = () => {
  return (
    <>
      <h2 className=" mt-5 mb-2 text-lg font-bold uppercase text-dark/75">
        Skills
      </h2>
      {/* <h2 className="font-bold text-6xl mt-64 w-full text-center ">Skills</h2> */}
      <p className="font-medium">Here is the list of skill I know well.</p>
      <div className=" mt-4 ">
        {techs.map((tech, index) => (
          <div
            key={index}
            className=" inline-block m-2 px-3 border-2 border-solid rounded-lg  border-purple-600 font-medium uppercase text-center text-cyan-600"
          >
            {tech}
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
