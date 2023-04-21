import BoyImg from '../assets/boy1.png';
import Image12 from '../assets/image12.png';
import Image13 from '../assets/image13.png';
import { Link } from 'react-router-dom';
import '../index.css'

export default function GetStarted() {
  return (
    <div className='bg-orange-set h-screen flex flex-col'>
      <div className="font-exo-2 font-bold text-white text-center pt-4" style={{ fontSize: '55px' }}>
        <div className="leading-none">
          Food for Everyone
        </div>
      </div>
      <div className="flex items-center pt-10">
        <div className="" style={{height: "100px"}}>
          <div className="flex-none">
            <img src={Image13} alt="not work" />
          </div>
          <div className="flex-none pt-10">
            <img src={Image12} alt="not work" />
          </div>
        </div>
        <div className="flex-none pl-4">
          <img src={BoyImg} alt="not work" />
        </div>
      </div>
      <div className='text-3xl justify-center items-center flex pt-24'>
        <Link to='/home'>
          <button className='bg-white text-orange-set rounded-3xl py-4 px-16'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}
