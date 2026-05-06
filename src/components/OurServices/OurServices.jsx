import Image1 from '../../assets/Background (3).png'
import Image2 from '../../assets/Background (2).png'
import Image3 from '../../assets/Background (1).png'
import Image4 from '../../assets/Background.png'      
function OurServices() {
  return (
    <>
  
  <div className='text-center'>
  <h1 className='text-2xl font-bold ' >Our Comprehensive Services</h1>
    <p>From routine check-ups to advanced restorations, we offer a full range of dental
      <br />
    treatments tailored to your unique needs.</p>
  </div>
    <div className='flex text-center gap-4 mt-4'>
  <div className='flex flex-col border rounded-lg '>
    <img src={Image1} alt="Image1" className='m-auto '/>
    <h2>Preventive Care</h2>
    <p>Professional cleanings and
        exams to keep your natural teeth
        healthy for a lifetime.</p>
        <a href="#"className='text-[#0050CB]'>Learn More →</a>
  </div>
  <div className='flex flex-col border  rounded-lg '>
    <img src={Image2} alt="Image2" className='m-auto '/>
    <h2>Restorative</h2>
    <p>High-quality fillings, crowns, and
        bridges designed to look and
        feel like natural teeth.</p>
        <a href="#"className='text-[#0050CB]'>Learn More →</a>
  </div>
  <div className='flex flex-col border  rounded-lg '>
    <img src={Image3} alt="Image3" className='m-auto '/>
    <h2>Cosmetic</h2>
    <p>PWhitening, veneers, and
      bonding to help you achieve the
      confident smile you've always
      wanted.</p>
        <a href="#"className='text-[#0050CB]'>Learn More →</a>
  </div>
  <div className='flex flex-col border  rounded-lg '>
    <img src={Image4} alt="Image4" className='m-auto '/>
    <h2>Orthodontics</h2>
    <p>Straighten your teeth with
        modern solutions including
        Invisalign and traditional braces.</p>
        <a href="#"className='text-[#0050CB]'>Learn More →</a>
  </div>
</div>

    </>
  )
}

export default OurServices
