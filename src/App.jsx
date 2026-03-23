import { Home } from './pages/home'
import { RootLayout } from './rootlayout/RootLayout'
import { useTheme } from './context/ThemeContext'

function App() {

const { theme } = useTheme()

  return (
   <div className={`${theme.bg} ${theme.text} min-h-screen`}>
      <RootLayout>
        <Home/>
      </RootLayout>
   </div>
  )
}

export default App