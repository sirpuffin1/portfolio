const Cloud = (props) => {
    return (
        <div >
<svg  viewBox='0 0 105 105' width="60" height="60">
<a href={props.url} target="_blank" rel="noopener noreferrer">
  <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' fill="#60A5FA" stroke="black" strokeWidth="5"/>
          
           <text x="50%" y="69%" fill="white" alignmentBaseline="hanging" textAnchor="middle">{props.text}</text>
           </a>
           
</svg>
</div>
    );
}

export default Cloud;