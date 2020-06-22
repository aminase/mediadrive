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
  <div>
   <DragNDrop />
  </div>
 )
}
