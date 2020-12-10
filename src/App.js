import {BrowserRouter, Router, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import Project from './components/Project'

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Router component={Home} path='/' exact />
            <Router component={About} path='/about' />
            <Router component={SinglePost} path='/post/:slug' />
            <Router component={Post} path='/post' />
            <Router component={Project} path='/project' />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
