import React from 'react'
import {IconButton } from '@mui/material';

import "./home.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Home({build}) {
    console.log(build[0] && JSON.parse(build[0].details))
    const cate = ["Commercial Office","Commercial Land","Commercial Building","Industrial Building","Co-working Space","Private Office","Meeting Room"]
    function truncate(string,n){
        return string?.length>n ? string.substr(0,n-1)+'....' : string;
    }
  return (
    <div className="home">
       {cate.map((value2,index) =>{
      return(


 <div key={index} className='main_container' >
   <h3>{value2}</h3>
 <div className='scroll'>

{ build[0] && build?.map(value=> {
          if(value2==JSON.parse(value.propertyType).name) 
        return (
       
          
            <div key={value?.id} className='build_items'> <img alt={value?.id} src={JSON.parse(value.images)[0]}/>
            <div className='menu_items_sub'>
                    <p>{JSON.parse(value.details).title}</p> 
                    <IconButton aria-label="heart"    size="small">
<FavoriteBorderIcon className='rate'/>


</IconButton>
                    </div>
                    <p>{JSON.parse(value.details)?.price?.rate}{JSON.parse(value.details)?.price?.type}</p>
                    <span className='light_discription'>{truncate(JSON.parse(value.details).property_add,60)}</span>
                    <div className="button_main">
                    <button >Explore Now</button>
                    </div>
                 
            </div>
         
        )
  

})}


 </div>
</div>  )})}
    </div>
   
  )
}

export default Home