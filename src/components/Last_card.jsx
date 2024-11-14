import React from 'react'
function LastCard(props) {
    return ( 
        <div className="card Lastcard" >
        <i
        className={props.icon}
        style={{
          color: "#18b06c",
          fontSize: 60,
          height: 50,
          width: 70,
          marginTop: 40,
          marginLeft: 100
        }}
      />
      
                <h2 >{props.place}</h2>
                <p>{props.para}</p>
      
              </div> 
     );
}

export default LastCard;