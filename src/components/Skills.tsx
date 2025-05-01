import Image from "next/image";

function Skills() {
  type Skill = {
    name: string;
    image: string;
  };

  const skills: Skill[] = [
    { name: "REACT JS", image: "/react-original.svg" },
    { name: "JAVASCRIPT", image: "/javascript-original.svg" },
    { name: "TYPESCRIPT", image: "/typescript-original.svg" },
    { name: "GIT", image: "/git-original.svg" },
    { name: "JAVA", image: "/java-original.svg" },
    { name: "PYTHON", image: "/python-original.svg" },
    { name: "DJANGO", image: "/django-original.svg" },
    { name: "C++", image: "/c-original.svg" },
    { name: "SOLIDITY", image: "/solidity.svg" },
    { name: "MYSQL", image: "/mysql-original.svg" },
    { name: "MONGODB", image: "/mongodb-original.svg" },
    { name: "FIREBASE", image: "/firebase-original.svg" },
    { name: "EXPRESS JS", image: "/express-original.svg" },
    { name: "NODE JS", image: "/nodejs-original.svg" },
    { name: "ZUSTAND", image: "/zustand.svg" },
    { name: "HTML", image: "/html5-original.svg" },
    { name: "CSS", image: "/css3-original.svg" },
    { name: "TAILWIND CSS", image: "/tailwindcss-original.svg" },
    { name: "BOOTSTRAP", image: "/bootstrap-original.svg" },
    { name: "SASS", image: "/sass-original.svg" },
    { name: "NEXT JS", image: "/nextjs-original.svg" },
    { name: "REDUX", image: "/redux-original.svg" },
    { name: "GRAPHQL", image: "/graphql-original.svg" },
  ];

  return (
    <div className="grid grid-cols-1 justify-items-center items-center mt-10">
      <h1 className="text-3xl font-secondary">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3"
          >
            <Image src={skill.image} width={80} height={80} alt={skill.name} />
            <h3 className="text-center text-sm sm:text-base">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
