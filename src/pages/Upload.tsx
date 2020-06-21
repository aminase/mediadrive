import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { useHistory } from 'react-router'
import drop from '../commons/drop.svg'
import { DragNDrop } from '../components/DragNDrop'

export const Upload: React.FC = () => {
 const [data, setData] = useState(['hey', 'hej', 'hello'])

 const handleDragDrop = (e: any) => {
  e.preventDefault()
  console.log('dropped')
 }

 return (
  <div className="mt-5 mr-8 ml-8">
   {data.length == 0 ? (
    <div className="flex m-3">
     {' '}
     <div className="w-2/5 pt-3 end text-white bg-field pl-4">File_01.mv</div>
     <div className="w-3/5 h-12 pt-3 flex justify-between bg-field">
      <div>-----------</div>
      <div className="pr-4 text-white">60%</div>
     </div>
    </div>
   ) : (
    <div>
     <DragNDrop />
    </div>
   )}
  </div>
 )
}
