import React from 'react'
import '../styles/about.css'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../redux/slice/ui-slice'
const About = () => {

  const changeTheme = useSelector((state)=> state.ui.dark)
  const dispatch = useDispatch()
  const toggleTheme = ()=>{
    dispatch(uiActions.toggleTheme())
  }
  const toggleThemeClass = changeTheme ? "" : 'about'
  return (
    <div className={changeTheme ? "about" : "aboutTest"}>
      <h1>About</h1>
      <button onClick={toggleTheme}>Dark</button>
    </div>

  )
}

export default About