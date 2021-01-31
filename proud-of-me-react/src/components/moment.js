import React, { useState, useEffect } from 'react';

/*

    Props needed:
        1. Title
        2. Story

    These props will be passed down 
    in MomentList's .map(title, story)

*/

const Moment = (props) => {
    const [backgroundColor, setBackgroundColor] = useState();

    // const generateGradient = () => {
    //     var hexValues = [
    //         '0',
    //         '1',
    //         '2',
    //         '3',
    //         '4',
    //         '5',
    //         '6',
    //         '7',
    //         '8',
    //         '9',
    //         'a',
    //         'b',
    //         'c',
    //         'd',
    //         'e',
    //     ];

    //     function populate(a) {
    //         for (var i = 0; i < 6; i++) {
    //             var x = Math.round(Math.random() * 14);
    //             var y = hexValues[x];
    //             a += y;
    //         }
    //         return a;
    //     }

    //     var newColor1 = populate('#');
    //     var newColor2 = populate('#');
    //     var angle = Math.round(Math.random() * 360);

    //     let gradient =
    //         'linear-gradient(' +
    //         angle +
    //         'deg, ' +
    //         newColor1 +
    //         ', ' +
    //         newColor2 +
    //         ')';
    //     document.getElementsByClassName(
    //         'custom-gradient'
    //     )[0].style.backgroundColor = gradient;
    // };

    useEffect(() => {
        // generateGradient();
    }, []);

    return (
        <div className='shadow-md w-49 mb-4 border rounded-lg'>
            <div className='p-2'>
                {/* Title Here */}
                <h1>{props.title.toLowerCase()}</h1>
            </div>

            <div className='flex items-center bg-gray-300 h-32 pl-4 truncate rounded-b-lg'>
                {/* Story summary here */}
                <p>{props.story}</p>
            </div>
        </div>
    );
};

export default Moment;
