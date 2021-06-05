import React, { useState } from 'react';
import like from '../assets/heart.svg';

const Likes = () => {

    let [count, setCount] = useState(0);

    return (
        <div className='like' onClick={() => setCount(count += 1)}>
            <img className='like-btn' src={like} alt='like button' /><span>{count}</span>
        </div>
    )
}
export default Likes;