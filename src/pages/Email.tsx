import React from 'react'
import logo from '../commons/all-rites.svg'
import movie from '../commons/movie.svg'
import { NavLink } from 'react-router-dom'
import sign from '../commons/sign.svg'
import xsign from '../commons/xsign.svg'

export const Email: React.FC = () => {
 return (
  <div className="mt-8">
   <div className="flex">
    <div className="flex-start">
     <img src={logo} />
    </div>
   </div>
   <div className="mt-10 mr-6 ml-10 text-white text-sm leading-snug">
    Dear Jane, its great to have Flame onboard allrites. You have 32 Titles on
    the makretplace, <br /> and we want to make sure we have the all the info.
   </div>
   <div className="border-b border-gray-bottom mt-6" />
   <div className="mr-40 ml-32 flex justify-around bg-link-color m-6 text-xs leading-snug">
    <NavLink to="/">Trailer</NavLink>
    <NavLink to="/">Episode</NavLink>
    <NavLink to="/">Language</NavLink>
    <NavLink to="/">Genre</NavLink>
    <NavLink to="/">Category</NavLink>
   </div>
   <div className="mr-4 ml-4 h-auto rounded-lg bg-dark-black-color pt-4 mb-3 pb-2 pl-4">
    <div className="flex row">
     <div className="w-1/7 mr-8">
      <img src={movie} />
      <div className="text-xs text-white mt-1 h-8">
       {' '}
       The Shamer's <br /> Daughter - The <br /> Serpent Gift
      </div>
     </div>
     <div className=" flex justify-around pt-12">
      <div>
       <img src={sign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12">
       <img src={xsign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12 ml-1">
       <div className="text-xs text-white m-2 leading-snug"> English </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Adventure </div>
       <div className="text-xs text-white m-2 leading-snug"> Fantacy </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Movies </div>
      </div>
      <div className="justify-around ml-8">
       <button className="text-xs text-white bg-red-dark rounded-sm w-24 h-10 p-2 leading-snug ">
        View on allrites{' '}
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="mr-4 ml-4 h-auto rounded-lg bg-dark-black-color pt-4 mb-3 pb-2 pl-4">
    <div className="flex row">
     <div className="w-1/7 mr-8">
      <img src={movie} />
      <div className="text-xs text-white mt-1 h-8">
       {' '}
       The Shamer's <br /> Daughter - The <br /> Serpent Gift
      </div>
     </div>
     <div className=" flex justify-around pt-12">
      <div>
       <img src={sign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12">
       <img src={xsign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12 ml-1">
       <div className="text-xs text-white m-2 leading-snug"> English </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Adventure </div>
       <div className="text-xs text-white m-2 leading-snug"> Fantacy </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Movies </div>
      </div>
      <div className="justify-around ml-8">
       <button className="text-xs text-white bg-red-dark rounded-sm w-24 h-10 p-2 leading-snug ">
        View on allrites{' '}
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="mr-4 ml-4 h-auto rounded-lg bg-dark-black-color pt-4 mb-3 pb-2 pl-4">
    <div className="flex row">
     <div className="w-1/7 mr-8">
      <img src={movie} />
      <div className="text-xs text-white mt-1 h-8">
       {' '}
       The Shamer's <br /> Daughter - The <br /> Serpent Gift
      </div>
     </div>
     <div className=" flex justify-around pt-12">
      <div>
       <img src={sign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12">
       <img src={xsign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12 ml-1">
       <div className="text-xs text-white m-2 leading-snug"> English </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Adventure </div>
       <div className="text-xs text-white m-2 leading-snug"> Fantacy </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Movies </div>
      </div>
      <div className="justify-around ml-8">
       <button className="text-xs text-white bg-red-dark rounded-sm w-24 h-10 p-2 leading-snug ">
        View on allrites{' '}
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="mr-4 ml-4 h-auto rounded-lg bg-dark-black-color pt-4 mb-3 pb-2 pl-4">
    <div className="flex row">
     <div className="w-1/7 mr-8">
      <img src={movie} />
      <div className="text-xs text-white mt-1 h-8">
       {' '}
       The Shamer's <br /> Daughter - The <br /> Serpent Gift
      </div>
     </div>
     <div className=" flex justify-around pt-12">
      <div>
       <img src={sign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12">
       <img src={xsign} className="mt-2 h-5" />
      </div>
      <div className="justify-around pl-12 ml-1">
       <div className="text-xs text-white m-2 leading-snug"> English </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Adventure </div>
       <div className="text-xs text-white m-2 leading-snug"> Fantacy </div>
      </div>
      <div className="justify-around ml-6">
       <div className="text-xs text-white m-2 leading-snug"> Movies </div>
      </div>
      <div className="justify-around ml-8">
       <button className="text-xs text-white bg-red-dark rounded-sm w-24 h-10 p-2 leading-snug ">
        View on allrites{' '}
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
