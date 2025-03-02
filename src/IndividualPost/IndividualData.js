import React from 'react'
import { useLocation } from 'react-router-dom'
import { Carousel } from 'antd';


function IndividualData() {
    const location = useLocation();
    console.log(location.state); // To check the structure of the state being passed
    
    return (
      <>
        <div className='bg-black ' >
        <Carousel arrows infinite={true} dots={false} >
        {location.state.map(item => (
            <div className='w-[100%] ' >
              <div className='w-[100%] flex justify-center '>
<img src={item.post} alt="" className='w-[400px] h-[400px]'/>
</div>
              
            </div>
           
          ))
        }
         </Carousel>
         </div>
      </>
    )};
    

export default IndividualData