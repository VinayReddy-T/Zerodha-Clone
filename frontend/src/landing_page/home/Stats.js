import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-2'>
                    <h2>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments.</p>
                    
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                    <h4>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-3'>
                    <img src='media/images/ecosystem.png'style={{width:"90%"}}/>
                    <div className='text-center'> <a href=''className='mx-5' style={{textDecoration:"none"}}>Explore our products &rarr;</a>
                       
                        <a href=''style={{textDecoration:"none"}}>Try kite demo &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Stats;