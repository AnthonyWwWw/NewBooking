import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../../ui/components/Header/index'
import Layout from '../../ui/components/Layout/index'
import { routes } from '../../core/config/routes/routes'
import { useDispatch } from 'react-redux';
import { checkingDisplaySize } from '../../core/redux/windowSizeSlice';

function App() {

  const dispatche = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatche(checkingDisplaySize(window.innerWidth))
    };

    handleResize();

    window.addEventListener('resize', handleResize);
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          {Object.keys(routes).map(item => (
            <Route element={routes[item].element} path={routes[item].path} key={item} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
