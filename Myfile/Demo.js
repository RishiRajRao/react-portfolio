import React,{ Component } from "react";




class Demo extends Component {
  render(){
    return (
    <div style={{padding:"30px"}}>
    <div> 
        
        <h1>Exercise 1: understanding JSX</h1>
        <p>You need to convert this html code into JSX.</p>
    </div>
    
   <div>
     <h2>MentorStudents Job-Portal</h2>
    <img src="https://picsum.photos/id/180/500/200" style={{display:'block'}} ></img><br/><br/>
    <label for="what">What</label>
    <input type="text" id="what"placeholder="Job title,keywords or company"></input>&nbsp;&nbsp;
    &nbsp;&nbsp;
    <label for="where">Where</label>
    <input type="text" id="where" placeholder=" Enter city"></input>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button type="submit" style={{color:"blue"}}>Find jobs</button>
  </div>
<div style={{maxWidth:"20vw"}}>
  <div>
     <h4>Full-stack developer</h4>
      <h5>Delhi</h5>
      <img src="https://picsum.photos/id/180/200/100"  ></img>
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div className="salary">Salary: 30K - 40K</div>
      <button style={{backgroundColor:"blue", color:"white"}}>Apply</button>&nbsp;&nbsp;
      <button style={{backgroundColor:"red", color:"white"}}>Not interested</button>
      <hr/>
  </div>

  <div>
      <h4>Front-end developer</h4>
      <h5>Pune</h5>
      <img src="https://picsum.photos/id/180/200/100" className="job-post-image"/>
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div class="salary">Salary: 15K - 30K</div>
      <button style={{backgroundColor:"blue", color:"white"}}>Apply</button>&nbsp;&nbsp;
      <button style={{backgroundColor:"red", color:"white"}}>Not interested</button>
      <hr/>
  </div>

    <div>
      <h4>Back-end developer</h4>
      <h5>Mumbai</h5>
      <img src="https://picsum.photos/id/180/200/100" className="job-post-image"/>
      <p>
        Company looking for some crazy people, we are looking for challenge accepter who move with "I can do" attitude.
        Quick decision makers, living with the passion of work, never feeling or saying "I am tired"
      </p>
      <div class="salary">Salary: 20K - 30K</div>
      <button  style={{backgroundColor:"blue", color:"white"}}>Apply</button>&nbsp;&nbsp;
      <button style={{backgroundColor:"red", color:"white"}}>Not interested</button>
      <hr/>
    </div>
    </div>

    <div class="pagination" style={{marginTop:"20px"}}>
    <button> &lt; Prev  </button>&nbsp;&nbsp;
    <button>Next &gt; </button>
  </div>
  

     </div>


    );
  }
  }
  export default Demo;