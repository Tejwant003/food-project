import React from 'react'

const MenuCard = ({menudata}) => {
  return (

    <>
    <section className='main-card--cointainer'>
    {menudata.map((curelem)=>{
        const{id,name,image,category, description}= curelem;
        return(
   <>
         <div className="card-container" key={curelem.id}>
      <div className="card">
        <div className='card-body'>
          <span className='card-number card-circle subtle'>{id}</span>
        <span className='card-author subtle' >{name}</span>
       <h2 className='card-title'>{category}</h2>
       <span className='card-Description subtle'>{description}</span>
        <div className='card-read'>Read</div>
        </div>
        <img src={image} alt='images' className='card-media'/>
      </div>
    </div>
    </> )})}
    </section>
    </>
  )
}

export default MenuCard