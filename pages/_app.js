import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'components/navbar/Navbar';
import SideBar from 'components/sidebar/Sidebar';
import Sidebar from 'react-sidebar';
import { useState } from 'react';
import 'styles/global.scss';

const MyApp = ({ Component, pageProps }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (<>
    <Sidebar
      sidebar={<SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
      open={sidebarOpen}
      touch={true}
      styles={{ sidebar: { background: '#fff', minWidth: '200px' } }}
    >
      <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <Component {...pageProps} />
    </Sidebar>
  </>)
}

export default MyApp;