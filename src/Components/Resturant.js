import React, {useState} from 'react'
import MenuCard from './MenuCard'
import Menu from './MenuApi'
import Nvabar from './Nvabar'
import './Style.css'
import './MenuApi'

//getting unique values
const uniqueList= [...new Set(Menu.map((curele)=>{
     return curele.category;})), "All"];


console.log(uniqueList);


const Resturant = () => {

  const[menudata,setmenuData]=useState(Menu);
const[menuList, setMenuList]=useState(uniqueList);
 
// filtering the category
  const filterItem =(category)=>{
if(category==="All"){
  setmenuData(Menu);
  return;
}
else{
const updatedList= Menu.filter((curele)=>{ 
  return curele.category===category;
})
setmenuData(updatedList);
  }
  }
  return (
    <>
   <Nvabar filterItem={filterItem} menuList={menuList}/>
  <MenuCard menudata={menudata} />
  </>
  )
}

export default Resturant