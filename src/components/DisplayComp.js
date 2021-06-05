import React, { useState } from 'react';
import Display from './Display';

const DisplayComp = () => {
    const [fname, setFname] = useState('');
    const [myTitle, setMyTitle] = useState('');

    return (
        <div className='display'>
            <button onClick={() => setFname('My name is Therese ^_^')}>Name</button>
            <Display name={fname} title={("")}/>
            <button onClick={() => setMyTitle('I am a Front-End Developer!')}>Skills</button>
            <Display title={myTitle} name={("")}/>


        </div>
    )
}

export default DisplayComp;