import React from 'react';
import './HeaderStyle.css'
import Navbar from './Navbar'


import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';
import SearchBar from '../SearchBar';

export default function Header() {
  return (
    <header className='Header'>
      <Navbar/>

      {/* <SearchBar /> */}

       {/* Carousel cards */}
       {/* <MDBCarousel 
       className='Cards' 
       style={{ height: 400 }}
       showControls dark fade children>
              <MDBCarouselInner>
                <MDBCarouselItem className='active'>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2019/11/mm_prep-52.jpg' alt='1st image' />
                  <MDBCarouselCaption>
                    <h2>Weddings ...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2017/06/famlgroven-47_web.jpg' alt='2nd image' />
                  <MDBCarouselCaption>
                    <h2>Family ...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://www.lieben.no/wp-content/uploads/2020/05/lieben_storfjord_0033.jpg' alt='3rd image' />
                  <MDBCarouselCaption>
                    <h2>Birthdays ...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='http://www.lieben.no/wp-content/uploads/2016/02/03-2737-post/lieben5.jpg' alt='3rd image' />
                  <MDBCarouselCaption>
                    <h2>Couples ...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://oppla.eu/sites/default/files/styles/front_page_banner/public/images/banner/shutterstock_1699268866_0.jpg?itok=9qIMGutK&c=503f16f5c5c4cc2efea8ac8ca934e068' alt='3rd image' />
                  <MDBCarouselCaption>
                    <h2>Nature ...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>

                <MDBCarouselItem>
                  <MDBCarouselElement className='banner' src='https://i0.wp.com/www.menstylefashion.com/wp-content/uploads/2014/02/male-model-Brandon-Bailey.jpg?resize=1200%2C640&ssl=1' alt='3rd image' />
                  <MDBCarouselCaption>
                    <h2>Model ...</h2>
                    
                  </MDBCarouselCaption>
                </MDBCarouselItem>

              </MDBCarouselInner>
        </MDBCarousel> */}


        {/* <div><br></br><div></div></div>

            <div>
            Top Rated Photographers
            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classes that we use to style each
                    element. These classes control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or
                    overriding our default variables. It's also worth noting that just about any HTML
                    can go within the <strong>.accordion-body</strong>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom CSS
                    or overriding our default variables. It's also worth noting that just about any
                    HTML can go within the <strong>.accordion-body</strong>, though the transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                    until the collapse plugin adds the appropriate classes that we use to style each
                    element. These classes control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with custom CSS or
                    overriding our default variables. It's also worth noting that just about any HTML
                    can go within the <strong>.accordion-body</strong>, though the transition does
                    limit overflow.
                  </div>
                </div> 
              </div>
            </div>*/}


    </header>
  );
}