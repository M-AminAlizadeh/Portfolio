import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

const App = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
])

export default App
