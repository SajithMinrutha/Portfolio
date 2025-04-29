import Links from "./Links";

function LandingPage() {
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center my-20 text-4xl">Sajith Minrutha</h1>
          <p>This is my picture.</p>
          <Links />
        </div>
      </main>
    </>
  );
}

export default LandingPage;
