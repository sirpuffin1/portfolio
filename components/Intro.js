import styles from "./Intro.module.css"
const Intro = () => {
    return (
        <div className="p-4  bg-blue-600/20 w-full text-center rounded-lg border-double border-8  shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center content-center" >
        <h1 className={[styles.textStroke,"text-blue-900 animate__animated animate__fadeInLeft text-6xl font-bold float-left"].join(" ")}>Howdy</h1>
        
        <p className={["text-white  text-5xl font-bold mt-4", styles.textStroke].join(" ")}>I&apos;m Angel Cruz</p>
        <p className={["text-white  text-5xl font-bold mt-4", styles.textStroke].join(" ")}>and I&apos;m currently a MEAN stack apprentice at <a className="text-black" href="https://bitwiseindustries.com/">Bitwise Industries</a></p>
        <a href="https://drive.google.com/file/d/1OEP6vRPZu3jY4_1t76YDtSP0Qvu_bd_Z/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-700 hover:bg-transparent text-white font-bold h-16 w-32 border-2 border-black rounded mt-5">

  My Resume
</button>
</a>
        
        </div>
    );
}

export default Intro;