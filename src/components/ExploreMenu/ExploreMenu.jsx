import React from "react";
import './ExploreMenu.css'
import { menu_list } from "../../assets/assets";
const ExploreMenu = (category,setCategory) =>
{
    return(
        <div className="explore-menu" id="explore-menu">
            <h1>Explore Our Menu</h1>
            <p className="explore-menu-text">A food delivery e-commerce website serves as a convenient platform for users to explore, order, and enjoy their favorite meals from a wide variety of restaurants.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-items" key={index}>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    ) 
                })}
            </div>
            <hr/>

        </div>
    )
}
export default ExploreMenu