import Hero from './components/Hero';
import Instagram from './components/Instagram';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';

export default function Home() {
  return (

    <main>
      <Hero
        heading='Jayson Photography'
        message='Capturing beautiful memories that you can relive.'
      />
      <Slider slides={SliderData} />
      <Instagram />
    </main>


  )
}
