import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>
        Subscribe to our newsletter
      </h1>
      <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas perferendis aliquid officiis.</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your Email' />
      <button className='custom__button'>Subsrcibe</button>
    </div>
  </div>
);

export default Newsletter;
