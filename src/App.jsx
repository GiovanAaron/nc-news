import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { Pg_Home } from './components/pages/home'
import { Pg_Articles } from './components/pages/articles'
import { Pg_ArticleByID } from './components/pages/article_opened'
import { Pg_ArticlesByTopic } from './components/pages/articles_by_topic'

import { Pg_topics } from './components/pages/topics'
import { NCNHeader } from './components/comp_sets/ncnHeader'


function App() {


  return (
    <div className='App' >
      <NCNHeader/>
<Routes>
      <Route path="/" element={<Pg_Home />}/>
      <Route path="/articles" element={<Pg_Articles/>}/>
      <Route path="/articles/:articleid" element={<Pg_ArticleByID/>}/>
      <Route path="/topics" element={<Pg_topics/>}/>
      <Route path="/topics/:topicName" element={<Pg_ArticlesByTopic/>}/>
     
      
    </Routes>


    </div >

  )
  
}

export default App
