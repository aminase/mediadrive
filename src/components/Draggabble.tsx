import React, { useState, useCallback, useMemo, useEffect } from 'react'

const POSITION = { x: 0, y: 0 }

interface IDraggable {
 children: any
 id: any
 onDrag: any
 onDragEnd: any
}
export const Draggable: React.FC<IDraggable> = ({
 children,
 id,
 onDrag,
 onDragEnd,
}) => {
 const [state, setState] = useState({
  isDragging: false,
  origin: POSITION,
  translation: POSITION,
 })

 const handleMouseDown = useCallback(({ clientX, clientY }) => {
  setState(state => ({
   ...state,
   isDragging: true,
   origin: { x: clientX, y: clientY },
  }))
 }, [])

 const handleMouseMove = useCallback(
  ({ clientX, clientY }) => {
   const translation = {
    x: clientX - state.origin.x,
    y: clientY - state.origin.y,
   }

   setState(state => ({
    ...state,
    translation,
   }))

   onDrag({ translation, id })
  },
  [state.origin, onDrag, id]
 )

 const handleMouseUp = useCallback(() => {
  setState(state => ({
   ...state,
   isDragging: false,
  }))

  onDragEnd()
 }, [onDragEnd])

 useEffect(() => {
  if (state.isDragging) {
   window.addEventListener('mousemove', handleMouseMove)
   window.addEventListener('mouseup', handleMouseUp)
  } else {
   window.removeEventListener('mousemove', handleMouseMove)
   window.removeEventListener('mouseup', handleMouseUp)

   setState(state => ({ ...state, translation: { x: 0, y: 0 } }))
  }
 }, [state.isDragging, handleMouseMove, handleMouseUp])

 return <div onMouseDown={handleMouseDown}>{children}</div>
}

export default Draggable
