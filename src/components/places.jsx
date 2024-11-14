import React from 'react'
function Places(props) {

    return ( 
    <div id="places">
      
      
        <div id="card-container">
          <div className="card-places">
            <div id={props.background}>
              <br />
              <br />
              <br /> <br />
              <br />
              <span
                style={{ marginTop: 150, color: "white", marginLeft: 0 }}
                id="cont1"
              >
              <div id="placename"> {props.name}</div>
              </span>
            </div>
            <div style={{ padding: 20 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nobis
              enim neque eos eligendi? Sit
            </div>
          </div>
          </div>


        

     </div>
  
     );
}

export default Places;