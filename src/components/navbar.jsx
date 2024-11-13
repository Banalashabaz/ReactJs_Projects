import React from 'react'
function Navbar() {
    return ( 
        <header>
        <div id="navbar" class="container-fluid ">
            <div id="company">Travel Career</div>
            <div id="list" ><ul>
       
                <li><a href="#myCarousel">Home</a></li>
                <li><a href="#search-container" >Search</a></li>
                <li><a href="#places" >Popular Places</a></li>
                <li><a href="#gallery" >Gallary</a></li>
                <li><a href="#contacts"   >Contact</a></li>
            </ul></div>
        </div>
    </header>
     );
}

export default Navbar;