import React from 'react';
import classes from './Hero.module.css';
import SlideList from '../SlideList/SlideList';

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroContent}>
        <div className={classes.titlePrimary}>PrecisionShift</div>
        <div className={classes.titleSub}>E-Sports Sim-Racing League</div>
        <button>
          <div className={classes.calIconContainer}>
            <svg fill="#1C2033" width="52" height="52" version="1.1" id="lni_lni-calendar" xmlns="http://www.w3.org/2000/svg" x="0px"
              y="0px" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 64 64' }} space="preserve">
              <g>
                <path d="M20.5,36.6h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C21.5,37.1,21,36.6,20.5,36.6z" />
                <path d="M33.5,36.6h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C34.5,37.1,34.1,36.6,33.5,36.6z" />
                <path d="M46.6,36.6h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C47.6,37.1,47.2,36.6,46.6,36.6z" />
                <path d="M20.5,49.5h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C21.5,50,21,49.5,20.5,49.5z" />
                <path d="M33.5,49.5h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C34.5,50,34.1,49.5,33.5,49.5z" />
                <path d="M46.6,49.5h-3.1c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h3.1c0.6,0,1-0.4,1-1v-3C47.6,50,47.2,49.5,46.6,49.5z" />
                <path d="M56,15.4H34.3v-1.9c2.3-0.9,3.9-3.1,3.9-5.7c0-3.4-2.8-6.1-6.2-6.1s-6.2,2.7-6.2,6.1c0,2.6,1.6,4.8,3.9,5.7v1.9H8
                  c-3.4,0-6.3,2.8-6.3,6.3V56c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V21.6C62.3,18.2,59.4,15.4,56,15.4z M32,6.2
                  c0.9,0,1.7,0.7,1.7,1.6c0,0.9-0.7,1.6-1.7,1.6s-1.7-0.7-1.7-1.6C30.3,6.9,31.1,6.2,32,6.2z M8,19.9h48c1,0,1.8,0.8,1.8,1.8v6.2H6.3
                  v-6.2C6.3,20.6,7,19.9,8,19.9z M56,57.8H8c-1,0-1.8-0.8-1.8-1.8V32.3h51.5V56C57.8,57,57,57.8,56,57.8z"/>
              </g>
            </svg>
          </div>
          <span className={classes.buttonText}>Schedule</span>
        </button>
        <SlideList/>
      </div>
    </div>
  )
}

export default Hero