import Cloud from "./Cloud";
import styles from "./Card.module.css"
const Card = (props) => {
    const liveSite = "Live Site"
    const gitHub = "GitHub"
    return (
        <div className={styles.floating}>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={props.imgUrl} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 border-b-indigo-500">{props.description}</p>
        <div>
            {props.tools.map((tool) => (
                <ul key={tool} className="inline-flex  ">
                    <li key={`${tool}s`} className={`${tool} text-3xl p-3`}></li>
                </ul>
                
            ))}
        </div>
        <div className="flex flex-row  ">
        <Cloud url={props.gitHubLink} text={gitHub}/>
        <Cloud url={props.liveSiteLink} text={liveSite}/>

        </div>

    </div>
</div>
        </div>
    );
}

export default Card;