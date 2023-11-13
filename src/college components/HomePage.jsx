import React from 'react'
import brau from './bauce.jpeg';
import brau1 from './brausy.jpeg';
import brau2 from './pic1.jpeg';
import brau3 from './pic2.jpeg';
import ResponsiveAppBar from './Navbar';

export default function HomePage() {
  return (
    <>
      <div>
        <div className='fixed-top'>
          <ResponsiveAppBar/>
        </div>
        <div>
          <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={brau3} class="d-block w-50 m-5 p-5"  alt="..."/>
              
              </div>
              <div class="carousel-item">
                <img src={brau2} class="d-block w-50 m-5 p-5"  alt="..."/>

              </div>
              <div class="carousel-item">
                <img src={brau} class="d-block w-100" alt="..."/>

              </div>
            </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          </div>
        </div>
      </div>
    </>
  )
}
