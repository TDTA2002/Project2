import './App.scss'
import { Routes, Route } from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar from '@components/Navbars/Navbar'

function App() {
  return (
    <div className="App">
      <div className='app_container'>
        <Navbar></Navbar>
        {/* Content Router */}
        <Routes>
          <Route path="/" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
          <Route path="signup" element={LazyLoad(() => import("@pages/UserLogin/Signup/Signup"))()} />
          <Route path="login" element={LazyLoad(() => import("@pages/UserLogin/Login/Login"))()} />
          <Route path="test" element={LazyLoad(() => import("@pages/test/test"))()} />
          <Route path="test2" element={LazyLoad(() => import("@pages/test/test2"))()} />
          <Route path="test3" element={LazyLoad(() => import("@pages/test/test3"))()} />
          <Route path="/shop" element={LazyLoad(() => import("@pages/Shops/Shop"))()} />
          <Route path="shop/:type" element={LazyLoad(() => import("@pages/Shops/Shop"))()} />
          <Route path="detail/:id" element={LazyLoad(() => import("@pages/DetailItems/DetailItem"))()} />
        </Routes>
    
      </div>

    </div>
  );
}

export default App;
