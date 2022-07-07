import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContexts'

export default function BlackTheme() {
  const { btnHandler } = useContext(GlobalContext)

  return (
    <div>
      <button id="color" onClick={btnHandler} >Сменить цвет</button>
    </div>
  )
}



