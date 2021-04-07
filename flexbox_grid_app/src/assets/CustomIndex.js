import React from 'react';

import './CustomStyleSheet.css'; // Import CSS



function fnOwnIndex() {

/********** JS area **********/
var sTest = 'Test output';

console.log(sTest);


return (

<div> {/* ********** react div ********** */}
    {/* ********** HTML area ********** */}
    <div className='container'>
        <div className='row'>
            <div className='
                    col-sm-3 
                    col-xs-12 
                    div1
            '>
                div 1
            </div>
            <div className='
                    col-sm-9 
                    col-xs-12 
                    div2
            '>
                div 2
            </div>
            <div className='
                    col-sm-3 
                    col-xs-12 
                    div3
            '>
                div 3
            </div>
            <div className='
                    col-sm-9 
                    col-xs-12 
                    div4
            '>
                {/* div 4 */}
                <div className='row'>
                    <div className='
                        col-sm-12 
                        col-xs-12 
                        div5
                    '>
                        div, topics
                    </div>
                    <div className='
                        col-sm-12 
                        col-xs-12 
                        div5
                    '>
                        div, topics
                    </div>
                    <div className='
                        col-sm-12 
                        col-xs-12 
                        div5
                    '>
                        div, topics
                    </div>
                    
                </div> {/* end row */}
            </div> {/* end div4 */}
            
        </div> {/* end row */}

    </div>  {/* end .container */}
</div>
)
}


export default fnOwnIndex; /* ********** Export ********** */