import React from 'react';
import JobBrief from './JobBrief'
import jobs from './jobs';



class JobBriefList extends React.Component {
  
  // const obj = jobs.map((data)=>data)
render(){
  const obj = jobs.map((data)=><JobBrief {...data}/>)

  return (
     <>


   <div>
     {obj}
   </div>
  
   

  {/* <JobBrief prop={...obj}/> */}
  {/* {job.map((data)=><JobBrief prop="data"/>)} */}

  

   
    </>

  );
}
}

export default JobBriefList;
