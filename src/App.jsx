import React, { useEffect, useState } from 'react'
import Background from './components/Background/background';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';

const App = () => {
    const [heroCount, setHeroCount] = useState(2);
    const [play, setPlay] = useState(false);//for play and pause the video

    let heroData = [
        {
            text1: 'Dive into',
            text2: 'what you love'
        },
        {
            text1: 'Indulge',
            text2: 'your Passions'
        },
        {
            text1: 'Give in to',
            text2: 'your passions'
        } //for 3 images 3 different objects...
    ] 

    useEffect(() => {
      setInterval(() => {
        setHeroCount((count) => {return count === 2? 0 : count+1})
      },3000)
    },[])

    return (
        <div>
            <Background playStatus={play} heroCount={heroCount}/>
            <Navbar />
            <Hero 
              setPlayStatus={setPlay} 
              herodata={heroData[heroCount]} 
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={play} />
        </div>
    )
}

export default App;