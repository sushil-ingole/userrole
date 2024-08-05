import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import AdminPage from './components/AdminPage/AdminPage.tsx'
import store from './components/store/store.ts'
import { Provider } from 'react-redux'
import UserPage from './components/UserPage/UserPage.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/adminpage',
    element: <AdminPage/>
  },
  {
    path: '/userpage',
    element: <UserPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
