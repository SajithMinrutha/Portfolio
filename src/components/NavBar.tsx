function NavBar() {
  return (
    <>
      <main>
        <nav>
          <ul className="flex flex-row justify-around p-2 text-center items-center my-5 r ">
            <div>
              <li className="text-2xl font-bold text-white">Sajith Minrutha</li>
            </div>
            <div className="flex flex-row justify-around text-center items-center  gap-10 ml-10">
              <li>Home</li>
              <li>About</li>
              <li>Education</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Experince</li>
              <li>Blogs</li>
            </div>
          </ul>
        </nav>
      </main>
    </>
  );
}
export default NavBar;
