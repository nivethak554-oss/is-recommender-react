function Hero() {
  const goToDemo = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12"
    >
      <p className="text-blue-400 font-semibold mb-4 tracking-wider uppercase">
        AI-Powered Indian Standards
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white max-w-4xl">
        Find the Right <span className="text-blue-400">IS Standard</span> Instantly
      </h1>

      <p className="text-gray-300 max-w-2xl mb-8 text-lg">
        An AI-powered recommendation engine that helps users discover relevant Indian Standards quickly and accurately.
      </p>

      <button
        onClick={goToDemo}
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg"
      >
        Try Recommendation
      </button>
    </section>
  );
}

export default Hero;