import React from 'react'
function Cards(props) {
    return ( 
        <div id="card-container">
        <div className="cards">
          <i className={props.icon} style={props.style} ></i>
          <h2>{props.place}</h2>
          <p>{props.para}</p>
        </div>
        {/* <div className="cards">
          <i className="fa-solid fa-shop"></i>
          <h2>Travel Shop</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime</p>

        </div>
        <div className="card" >
        <i
  className="fa-solid fa-plane fa-rotate-270 "
  style={{
    color: "#18b06c",
    fontSize: 60,
    height: 50,
    width: 70,
    marginTop: 40,
    marginLeft: 100
  }}
/>

          <h2 >Fly Cheap</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam, beatae magni laborum numquam alias maxime</p>

        </div> */}
      </div>
     );
}

export default Cards;