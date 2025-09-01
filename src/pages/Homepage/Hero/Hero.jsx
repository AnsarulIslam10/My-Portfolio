import { FaCode, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import riyad from "../../../assets/2.jpg";
import back from "../../../assets/back.jpg";

const Hero = () => {
  const [text1] = useTypewriter({
    words: [
      "Frontend Developer",
      "React & JavaScript Enthusiast",
      "Aspiring MERN Stack Developer",
    ],
    loop: true,
  });

  return (
    <div
      className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 text-white py-20 px-6"
      style={{
        backgroundImage: `url(${back})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center md:text-left md:max-w-xl">
        <h2 className="text-xl font-bold text-cyan-500">Hello, I'm</h2>
        <h1 className="text-5xl font-extrabold text-cyan-500 mb-4">
          Ansarul Islam
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl flex items-center gap-1 font-semibold text-cyan-200 mb-4">
          <FaCode />‎ {text1}
        </h2>
        <p className="max-w-lg mt-4 text-gray-300 text-lg">
          Passionate about creating interactive and user-friendly web
          experiences. Let's collaborate and turn ideas into reality!
        </p>

        <h3 className="uppercase mt-6 mb-4 text-gray-300">Connect with me</h3>
        <div className="flex justify-center md:justify-start text-4xl text-cyan-500 gap-6 mb-6">
          <a
            href="https://www.facebook.com/ansarulislamriyad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
          <a
            href="https://github.com/AnsarulIslam10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansarul-islam10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer hover:scale-125 transition-all duration-200" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Download Resume */}
          <a
            href="https://drive.google.com/uc?export=download&id=1SYScigjfewK8LriSF6zWz9PZsqd2EYKL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="shiny-button btn text-gray-900 font-bold uppercase rounded-md hover:bg-cyan-600 border-none bg-cyan-500">
              Download Resume
            </button>
          </a>

          {/* Preview Resume */}
          <a
            href="https://drive.google.com/file/d/1SYScigjfewK8LriSF6zWz9PZsqd2EYKL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="shiny-button btn btn-outline border-cyan-500 text-cyan-500 hover:text-cyan-600 font-bold uppercase rounded-md hover:bg-transparent">
              Preview Resume
            </button>
          </a>
        </div>
      </div>

      <div className="relative animate__animated animate__zoomIn z-10 mt-6 md:mt-0 sm:w-[380px] sm:h-[380px] rounded-3xl">
        {/* <div className="absolute inset-0 rounded-3xl  "></div> */}
        <img
          className="relative border-[4px] border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 w-52 sm:w-full h-full object-cover rounded-3xl"
          src={riyad}
          alt="Ansarul Islam"
        />
      </div>
    </div>
  );
};

export default Hero;
