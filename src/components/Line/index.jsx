import React from 'react'
import "./line.css"

export default function Line({data}) {
  // const sortedData = data?.sort((a, b) => b.count - a.count); 
  return (
    <div className='boxAll'>
        { 
            data?.map(i=>(
              <>
            <div key={i.id } className="lineAll"> 
            <div className='linehead'> No.{ i.id }  <div className='linetitle'>{i.title}</div></div>
            <div style={{width: `${i.count}%`, backgroundColor: i.color }} className="Line">
              <div style={{width: i.count}} className="paintLine">
              </div>
            </div>
            <h1 className='lineCountH1'>
            {i.count}
            </h1>
        </div>
        <div className='lineAnimationBotton'>
              </div> 
            </>
            ))
        }
    </div>
  )
}
