import React from 'react'
import Logo from "../../assets/logos/coffee_logo.png" ;
const Navbar = () => {
  return (
    <div className= "bg-gradient-to-r from-secondary to-secondary/90 text-white" >
        <div className="container py-2">
            <div className="flex">
                {/*Logo section*/}
                <div>
                    <a href="#"> 
                        <img src="Logo" alt="Logo" />
                        
                        Drip & Sip</a>
                </div>
                {/*Links section*/}
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar