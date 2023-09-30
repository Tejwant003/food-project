import React from 'react'
// import './Style.css'
// import MenuCard from './MenuCard'

const Nvabar = ({filterItem, menuList}) => {
 
  return (
    <>
     <nav className='navbar'>
    <div className='btn-group__item'>
      
    {menuList.map((curelement)=> {
   return <button className='btn-group__item' onClick={()=>{filterItem(curelement)}}>{curelement}</button>
    })}

</div>
</nav>
</>
 
  )
}

export default Nvabar