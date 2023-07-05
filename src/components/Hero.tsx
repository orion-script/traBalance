import Image from 'next/image'
import HeroImage from "../assets/here.jpg"

const Hero = () => {
    return ( 
        <section className="w-10/12 m-auto mt-20 flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-2/5">
                <p className="font-extrabold text-3xl md:text-5xl mb-5 shrink">Be on the samepage with everyone.</p>
                <p className='text-[#6b7280]'>Send and receive documents, manage receivables and payables, and collaborate with your customers and vendors in one portal.</p>
            </div>
            <Image src={HeroImage} alt="hero image" className='w-full md:w-2/5 mt-10 md:mt-0' />
        </section>
     );
}
 
export default Hero;