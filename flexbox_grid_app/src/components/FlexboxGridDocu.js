import React from 'react';

import '../assets/CustomStyleSheet2.css'; // Import CSS



function fnRenderFlexboxGridDocu() {

/********** JS area **********/
var sTest = 'Test output';

console.log(sTest);


return (

<div> {/* ********** react div ********** */}
    {/* ********** HTML area ********** */}
    <div class="row">
        <div class="col-xs-12
                    col-sm-8
                    col-md-6
                    col-lg-4
        ">
            <div class="box">Responsive</div>
        </div>
    </div>
</div>
)
}


export default fnRenderFlexboxGridDocu; /* ********** Export ********** */