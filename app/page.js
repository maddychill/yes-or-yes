'use client'

import Link from 'next/link';
import {useState} from 'react';

export default function page() {

  const [img, $img] = useState('bubu-dudu-sseeyall');
  const [how, $how] = useState(false);
  const [p, $p] = useState(null);

  const updteImg = (im) => {
    $img(im);
  }

  const nah = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({x: `${x}%`, y: `${y}%`});
    updteImg('rabbits');
  };

  const dontdoit = () => {
    nah();
    updteImg('cat-in-shock-surprises');
    $how(true)
  }

  return (
    <div className='box'>
      <img alt='gumball' className='gif' src={`/${img}.gif`} />
      {how ? 'Hmmmph, Theres no choice!' : 'Smoodh peene chale KAMYA ji? 😋🙊'}
      <div className='btns'>
        <Link className='yes' href='/yay'>
          <button onMouseOver={() => updteImg('happy-taps')} onMouseOut={() => updteImg('rabbit-happy')}>
            Yes
          </button>
        </Link>
        <button className='no' 
          style={p ? {position: 'absolute', top: p.x, right: p.y} : null} 
          onClick={dontdoit} onMouseOver={nah}>
            No
        </button> 
      </div>
    </div>
  )
  
}