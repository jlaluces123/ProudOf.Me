import React, { useState, useEffect } from 'react';
import Moment from './moment';

const MomentList = (props) => {
    return (
        <div>
            {/* Map Moments here */}
            {props.moments
                ? props.moments.map((moment, idx) => {
                      console.log('Moment map: ', moment);
                      return (
                          <Moment
                              key={idx}
                              title={moment.title}
                              story={moment.story}
                          />
                      );
                  })
                : null}
        </div>
    );
};

export default MomentList;
