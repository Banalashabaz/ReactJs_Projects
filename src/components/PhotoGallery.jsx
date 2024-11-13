import React from 'react'
function PhotoGallery() {
    return ( 
        <div id="contact">
  <h1>
    <span style={{ color: "#18b06c" }}>Photo</span> Gallary
  </h1>
  <div id="contactus">
    <span id="msg">
      <div id="leftmsg">
        <i className="fa-solid fa-envelope" />
        <br />
        <span>Contact Us For Booking</span>
        <p>
          Lorem ipsum dolor sit amet consec Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Architecto neque tenetur quos veritatis
          maiores{" "}
        </p>
      </div>
      <div id="Location">
        <span>Location</span>
        <hr />
        <div>TravelVille Agency</div>
        <hr />
        <div>555 Beachrd,Suite 33</div>
        <hr />
        <div>Miami FL,55555</div>
      </div>
    </span>
    <span id="forms">
      <h2>Please fill Out this form</h2>
      <form action="#">
        <label htmlFor="Name">Name</label>
        <br />
        <input type="text" name="name" id="Name" placeholder="Name" />
        <br />
        <br />
        <label htmlFor="Email">Email</label>
        <br />
        <input type="email" name="email" id="email" placeholder="Email" />
        <br />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input type="phone" name="phone" id="phone" placeholder="phone" />
        <br />
        <br />
        <label htmlFor="msg">Message</label>
        <br />
        <input type="text" name="msg" id="msg" placeholder="Enter Message" />
        <input type="submit" className="btn" />
      </form>
    </span>
  </div>
</div>

     );
}

export default PhotoGallery;