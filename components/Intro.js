import styles from "./Intro.module.css";
import Link from 'next/link';

const Intro = () => {
  return (
    <div className="p-4  bg-blue-600/20 w-full text-center rounded-lg border-double border-8  shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center content-center">
      <h1
        className={[
          styles.textStroke,
          "text-blue-900 animate__animated animate__fadeInLeft text-6xl font-bold float-left",
        ].join(" ")}
      >
        Howdy
      </h1>

      <p
        className={[
          "text-white  text-5xl font-bold mt-4",
          styles.textStroke,
        ].join(" ")}
      >
        I&apos;m Angel Cruz
      </p>
      <p
        className={[
          "text-white  text-5xl font-bold mt-4",
          styles.textStroke,
        ].join(" ")}
      >
        and I&apos;m YOUR full-stack developer
      </p>

      <div>
        <a
          href="https://github.com/sirpuffin1"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5"
        >
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 ">
            My GitHub
          </button>
        </a>
        <Link href='/projects'>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 ">
            My Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
