import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProducts,
} from './pages'
import { ErrorElement } from './components'
import { store } from './store'
// loaders
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductsLoader } from './pages/SingleProducts'
import { loader as productsLoader } from './pages/Products'
// actions
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader(queryClient),
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProducts />,
        loader: singleProductsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorElement />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorElement />,
    action: registerAction,
  },
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
