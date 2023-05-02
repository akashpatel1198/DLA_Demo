import React, { useEffect, useState } from 'react';
import Box from './Box';

const BoxesScroll = ({ boxes }) => {
  const [items, setItems] = useState(20)
  
  const throttle = (cb, delay) => {
    let wait = false;
    return () => {
      if (!wait) {
        cb();
        wait = true;
        setTimeout(() => {
          wait = false
        }, delay)
      }
    }
  }
  const handleScroll = () => {
    // console.log('Height:', document.documentElement.scrollHeight)
    // console.log('Window:', window.innerHeight)
    // console.log('Top:', document.documentElement.scrollTop)
    // console.log('\n')
    if (window.innerHeight + document.documentElement.scrollTop + 300 >= document.documentElement.scrollHeight) {
      setItems(prevItems => prevItems + 20)
      // setLoading(true)
    }
  }

  useEffect(() => {
    console.log('useEffect[] in BoxesScroll')
    window.addEventListener('scroll', throttle(handleScroll, 200))

    return (() => {
      window.removeEventListener('scroll', throttle(handleScroll, 200))
    })
  }, [])

  useEffect(() => {
    setItems(20)
  }, [boxes])


  return (
    <div className="boxes-main">
      {boxes.length? boxes.slice(0, items): <div>Empty BoxesScroll</div>}
    </div>
  )
};

export default BoxesScroll;