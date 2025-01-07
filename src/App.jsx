import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import SideMenu from './components/SideMenu'
import Bottom from './components/Bottom'
import Breadcrumb from './components/Breadcrumb'
import { CssBaseline, Container } from '@mui/material';
import Invite from './components/Invite'; // Import the Invite component
import ServerStats from './components/ServerStats'
import ServerSettings from './components/ServerSettings'
import RightSide1 from './components/RightSide1'
import ServerInfo from './components/ServerInfo'
import background from './components/images/background.jpg'
import ServerDashboard from './components/ServerDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <div className="layout"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top left',
          backgroundAttachment: 'fixed', // Optional: Makes the background fixed during scroll
          margin: '0', // Remove any margin
          padding: '0', // Remove any padding
          height: '100vh', // Ensure full height
          width: '100vw', // Ensure full width
        }}>
      {/* Side Menu */}
      <aside className="side-menu">
        <SideMenu />
      </aside>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Breadcrumb />
      </div>

      {/* Server Info */}
      <div className="server-info">
        <ServerInfo />
      </div>
      
      <div>
        <ServerStats/>
      </div>

      {/* Right Section */}
      <main className="right-section">
        <RightSide1/>
      </main>

      {/* Server Settings */}
      <footer className="server-settings">
        <ServerSettings />
      </footer>

      <div className="Bottom-1" >
       
      </div>
    </div>
    </>
  )
}

export default App
