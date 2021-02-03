import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  './Testimonial.css';




function Testimonial() {
    return (
       <div>
         
           <div className="container">
            <div className="row">
                           <div className="col-md-12" data-wow-delay="0.2s">
                               <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                                   {/* <!-- Bottom Carousel Indicators --> */}
                                   <ol className="carousel-indicators">
                                       <li data-target="#quote-carousel" data-slide-to="0" className="active">
                                           <img className="img-responsive " src="https://picsum.photos/500/450" alt=""/>
                                       </li>
                                       <li data-target="#quote-carousel" data-slide-to="1">
                                           <img className="img-responsive" src="https://picsum.photos/500/451" alt=""/>
                                       </li>
                                       <li data-target="#quote-carousel" data-slide-to="2">
                                           <img className="img-responsive" src="https://picsum.photos/500/452" alt=""/>
                                       </li>
                                   </ol>
       
                                   {/* <!-- Carousel Slides / Quotes --> */}
                                   <div className="carousel-inner text-center">
       
                                       {/* <!-- Quote 1 --> */}
                                       <div className="item active">
                                           <blockquote>
                                               <div className="row">
                                                   <div className="col-sm-8 col-sm-offset-2">
       
                                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !</p>
                                                       <small>Someone famous</small>
                                                   </div>
                                               </div>
                                           </blockquote>
                                       </div>
                                       {/* <!-- Quote 2 --> */}
                                       <div className="item">
                                           <blockquote>
                                               <div className="row">
                                                   <div className="col-sm-8 col-sm-offset-2">
       
                                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                                       <small>Someone famous</small>
                                                   </div>
                                               </div>
                                           </blockquote>
                                       </div>
                                       {/* <!-- Quote 3 --> */}
                                       <div className="item">
                                           <blockquote>
                                               <div className="row">
                                                   <div className="col-sm-8 col-sm-offset-2">
       
                                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
                                                       <small>Someone famous</small>
                                                   </div>
                                               </div>
                                           </blockquote>
                                       </div>
                                   </div>
       
                                   {/* <!-- Carousel Buttons Next/Prev --> */}
                                   <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
                                   <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
                               </div>
                           </div>
                       </div>
       </div>
       </div>
    )
}

export default Testimonial
