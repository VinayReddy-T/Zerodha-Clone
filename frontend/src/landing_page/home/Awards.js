import React from 'react';

function Awards() {
    return ( 
        <div className='Container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ millon Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div classNme= 'row'>
                        <div className = 'col-6'>
                    <ul>
                        <li>
                            <p>Future and  Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivaties</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                        <li>
                            <p>Stock & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;