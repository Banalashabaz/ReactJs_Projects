import React from 'react'
function Carousel() {
    return ( 
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/img1.jpg" class="d-block w-100" alt="First Slide"></img>
            <div class="carousel-caption d-none d-md-block">
              <h1>We  work with all Budgets</h1>
              <div class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla ipsam consequuntur similique repellendus natus eaque enim numquam eos assumenda adipisci minus, molestias pariatur? Similique sapiente nemo in itaque nisi.</div>
              <a href="#" class="btn btn-success">Learn More</a>
             
            </div>
          </div>
      
          <div class="carousel-item">
            <img src="./images/img2.jpg" class="d-block w-100" alt="Second Slide"></img>
            <div class="carousel-caption d-none d-md-block">
                <h1>We  work with all Budgets</h1>
                <div class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla ipsam consequuntur similique repellendus natus eaque enim numquam eos assumenda adipisci minus, molestias pariatur? Similique sapiente nemo in itaque nisi.</div>
                <a href="#" class="btn btn-success">Learn More</a>
            </div>
          </div>
      
          <div class="carousel-item">
            <img src="./images/img3.jpg" class="d-block w-100" alt="Third Slide"></img>
            <div class="carousel-caption d-none d-md-block">
                <h1>We  work with all Budgets</h1>
                <div class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla ipsam consequuntur similique repellendus natus eaque enim numquam eos assumenda adipisci minus, molestias pariatur? Similique sapiente nemo in itaque nisi.</div>
                <a href="#" class="btn btn-success">Learn More</a>
            </div>
          </div>
        </div>
      
   
      </div>
    );
}

export default Carousel;