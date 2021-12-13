import React from 'react'; 

    const Card = ({ name, email, id }) => {
        return (
            <div className='tc bg-light-blue dib ba bw b--white-20 br3 pa3 ma2 w-30 grow bw2 shadow-3'>
                <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
                <div>
                    <h2 className='f4 measure mw4 truncate'>{name}</h2>
                    <p className='f6 measure mw4 truncate'>{email}</p>
                </div>
            </div>
        );
    }

    export default Card;
    