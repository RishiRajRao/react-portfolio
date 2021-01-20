import React from 'react';

class JobBrief extends React.Component {
    constructor(props)
    {
        super(props);
    }
    
render(){
    
    return(

<>
        
        <div style={{maxWidth:"20vw",border:"2px solid black",margin:"5px"}}>
        <h1>{this.props.name}</h1>
        <h3><span>{this.props.location.city}</span>,&nbsp;
        <span>{this.props.location.country}</span></h3>
        <img src={this.props.logo} alt="image"style={{display:"block"}}></img>
        <p>{this.props.description}</p>
        <p>Salary:{this.props.salary}</p>
        </div>
</>

    );
}
    
}
export default JobBrief;