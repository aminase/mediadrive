import React, { useState, useEffect } from 'react'
import getClient from '../utils/MQTTService'
import subscribe from '../utils/MQTTService'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'

import { DragNDrop } from '../components/DragNDrop'

export const Upload: React.FC = () => {
 useEffect(() => {
  console.log('heey', getClient, subscribe)
 }, [])

 return (
  <div>
   <DragNDrop />
   <div className="text-white">The message is:heey</div>
  </div>
 )
}
