import { useEffect, useRef } from "react"

const Home = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() =>{
      if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);



  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="Macbook Title" />

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

        <button>Buy Now</button>
        <p>From $1299 or $41.62/mo. for 24 mo.</p>
      </div>
    </section>
  )
}

export default Home