import React from 'react'

function TopButtons(props) {

    const cities= [
        {
            key: 1,
            id: 1,
            title: 'London'
        
        },
        {
            key: 2,
            id: 2,
            title: 'New York'
        
        },
        {
            key: 3,
            id: 3,
            title: 'Paris'
        
        },
        {
            key: 4,
            id: 4,
            title: 'New Delhi'
        
        },
        {
            key: 5,
            id: 5,
            title: 'Toronto'
        
        }
    ]
    function clickHandler(eee){
        const country= eee.target.name;
        props.clickHandler(country);
    }
  return (
    <div className="flex justify-around items-center my-6">
    {cities.map((item)=>{
        return <button onClick={clickHandler} name= {item.title}className='text-white text-lg font-medium'>{item.title}</button>
    })}</div>
  )
}

export default TopButtons;