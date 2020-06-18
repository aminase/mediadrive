import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../selectors/UserSelector'
import { useHistory } from 'react-router'
import drop from '../commons/drop.svg'

export const Upload: React.FC = () => {
 const [files, setFiles] = useState([0])
 const history = useHistory()
 const user = useSelector(getUser)

 if (!user) {
  history.push('/login')
 }

 return (
  <div className="mt-5 mr-8 ml-8">
   {files.length === 0 ? (
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
     <img src={drop} className="m-auto mt-20" width="250" alt="drop-file" />
    </div>
   )}
  </div>
 )
}
