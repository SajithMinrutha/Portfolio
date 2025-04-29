function Skills() {
  const ListOfLanguages: string[] = [
    "REACT JS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "GIT",
    "JAVA",
    "Python",
    "DJANGO",
    "PYTHON",
    "C++",
    "SOLDITY",
    "MYSQL",
    "MONGODB",
    "FIREBASE",
    "EXPRESS JS",
    "NODE JS",
    "ZUSTAND",
    "HTML",
    "CSS",
  ];
  const ListOfImages: string[] = [
    "/images/react.png",
    "/images/javascript.png",
    "/images/typescript.png",
    "/images/git.png",
    "/images/java.png",
    "/images/python.png",
    "/images/django.png",
    "/images/python.png",
    "/images/c++.png",
    "/images/solidity.png",
    "/images/mysql.png",
    "/images/mongodb.png",
    "/images/firebase.png",
    "/images/express.png",
    "/images/nodejs.png",
    "/images/zustand.png",
    "/images/html.png",
    "/images/css.png",
  ];

  return (
    <>
      <div className="default-flex flex-col my-5">
        <h1 className="text-3xl font-mono">Skills</h1>
        <div className="grid grid-cols-4 gap-4 mt-5 flex-grow">
          {ListOfLanguages.map((element) => {
            return <h3>{element}</h3>;
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
