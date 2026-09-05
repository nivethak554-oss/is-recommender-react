function Hero() {
  const goToDemo = () => {
    document.getElementById("demo").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white"
    >
      <p className="text-blue-400 font-semibold mb-4 tracking-wider">
        AI-POWERED INDIAN STANDARDS
      </p>

      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
        Find the Right
        <span className="text-blue-400"> IS Standard </span>
        <br />Instantly
      </h1>

      <p className="text-gray-300 max-w-2xl mb-8 text-lg">
        An AI-powered recommendation engine that helps users
        discover relevant Indian Standards quickly and accurately.
      </p>

      <button
        onClick={goToDemo}
        className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 font-semibold shadow-lg"
      >
        Try Recommendation
      </button>
    </section>
  );
}

export default Hero;