import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import { ThemeProvider } from './components/ui/theme-provider'
import Subscription from './pages/Subscription/Subscription'
import Auth from './pages/Auth/Auth'
import { Help } from './pages/Home/Help_us/Help'


function App() {

	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Routes>
				<Route path='/help' element={<Help/>} />
				<Route path='/' element={<Home />} />
				<Route path='/project/:id' element={<ProjectDetails />} />
				<Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
				<Route path='/upgrade_plan' element={<Subscription />} />
			</Routes>

			{
				false ? <div>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/project/:id' element={<ProjectDetails />} />
						<Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
						<Route path='/upgrade_plan' element={<Subscription />} />
					</Routes>
				</div> : <Auth />
			}

		</ThemeProvider>
	)
}

export default App;
