
import React from 'react';
import Line  from './components/Line';



const App = () => {
  const data=[
    {
        id:1,
        title:"标题一",
        count:10,
        color:'#0695ED',
        
        
    },
    {
        id:2,
        title:"标题二",
        count:29,
        color: '#F64201',
    },
    {
      id:3,
      title:"标题哦",
      count:50,
      color: '#5E17D6',
      
    },
    {
      id:4,
      title:"所有权侵权",
      count:100,
      color:'#00F8ED',
      
    },
    {
      id:5,
      title:"标题五",
      count:29, 
      color: '#DAA522',
      
    },
    {
      id:6,
      title:"第六题",
      count:61,
      color: '#DA48DB' ,
      
    },
    {
      id:7,
      title:"标题够了",
      count:79.8,
      color: '#3DDB38',
    },
]

    
  return (
    <div>
      <Line data={data}/>
     
    </div>

    
  );
}


export default App;