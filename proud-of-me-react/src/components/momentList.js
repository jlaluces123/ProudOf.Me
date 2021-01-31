import React, { useState, useEffect } from 'react';
import Moment from './moment';

const MomentList = (props) => {
    return (
        <div className='flex flex-row flex-wrap justify-between'>
            {/* Map Moments here */}
            {props.moments
                ? props.moments.map((moment, idx) => (
                      <Moment
                          key={idx}
                          title={moment.title}
                          story={moment.story}
                      />
                  ))
                : null}
        </div>
    );
};

export default MomentList;
