import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
