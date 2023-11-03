import React from 'react'
import '../styles/about.css'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../redux/slice/ui-slice'
const About = () => {

  const changeTheme = useSelector((state)=> state.ui.dark)

  return (
    <div className={changeTheme ? "aboutTest" : "about"}>
      <h1>About</h1>
    </div>

  )
}

export default About