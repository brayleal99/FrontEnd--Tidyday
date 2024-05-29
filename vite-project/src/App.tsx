import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {

	return (

		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Navbar/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project/:id' element={<ProjectDetails />} />
				<Route path='/project/:projectId/issue/:issueId' element={<IssueDetails/>} />
			</Routes>
		</ThemeProvider>
	)
}

export default App
