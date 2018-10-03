// Libs
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import About from '../../components/about'
import Home from '../../components/home'
import Lorem from '../../components/lorem'
import PhoneList from '../../components/phoneList'
import PhoneDetail from '../../components/phoneDetail'


// Styles
import './main.css';

// Component
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/phones' component={PhoneList}/>
      <Route path='/about' component={About}/>
      <Route path='/lorem' component={Lorem}/>
      <Route path='/phone/:id' component={PhoneDetail} />
    </Switch>
  </main>
)

export default Main
