import React from 'react'
function Places() {
    return ( <div id="places">
        <h1>
          <span style={{ color: "#18b06c" }}>Popular </span>Places{" "}
        </h1>
        <div id="card-container">
          <div className="card-places">
            <div id="imgone">
              <br />
              <br />
              <br /> <br />
              <br />
              <span
                style={{ marginTop: 150, color: "white", marginLeft: 0 }}
                id="cont1"
              >
                Cancun,Mexico
              </span>
            </div>
            <div style={{ padding: 20 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nobis
              enim neque eos eligendi? Sit
            </div>
          </div>
          <div className="card-places">
            <div id="imgtwo">
              <br />
              <br />
              <br /> <br />
              <br />
              <span
                style={{ marginTop: 150, color: "white", marginLeft: 0 }}
                id="cont2"
              >
                The Bahamas
              </span>
              <div style={{ padding: 20, marginTop: 40 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nobis
                enim neque eos eligendi? Sit
              </div>
            </div>
          </div>
          <div className="card-places">
            <div id="imgthree">
              <br />
              <br />
              <br /> <br />
              <br />
              <span
                style={{ marginTop: 150, color: "white", marginLeft: 0 }}
                id="cont3"
              >
                Nova Scotia
              </span>
              <div style={{ padding: 20, marginTop: 40 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nobis
                enim neque eos eligendi? Sit
              </div>
            </div>
          </div>
        </div>
        <button>
          <i className="fa-solid fa-paper-plane" /> CONTACT FOR BOOKING
        </button>
      </div>
     );
}

export default Places;