import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Root from './pages/Root/Root';
import { navData } from './Data/NavData/NavData';
import Home from './pages/Home/Home';
import { homeData } from './Data/HomeData/HomeData';
import { Provider } from 'react-redux';
import { store } from './state/store';
import NewsLetterPage from './pages/NewsLetterPage/NewsLetterPage';
import Blog from './pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root navProps={navData} />,
    children: [
      {
        index: true,
        element: <Navigate to="/blog" replace/>
      },
      {
        path: 'blog',
        element: <Home homeProps={homeData} />
      },
      {
        path: 'blog/:id',
        element: <Blog />
      },
      {
        path: 'newsletter',
        element: <NewsLetterPage />
      }
    ]
  }
]);
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
