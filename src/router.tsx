import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: '/blog',
    element: (
      <App>
        <Blog />
      </App>
    ),
  },
  {
    path: '/projects',
    element: (
      <App>
        <Projects />
      </App>
    ),
  },
  {
    path: '/about',
    element: (
      <App>
        <About />
      </App>
    ),
  },
  {
    path: '/contact',
    element: (
      <App>
        <Contact />
      </App>
    ),
  },
]);

export default router;
