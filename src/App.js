import './App.css'
import { Container } from 'react-bootstrap'
import { AboutMe, Header, HeroSection } from './Components'

function App() {
	return (
		<Container fluid className="full-width">
			<Header />
			<HeroSection />
			<AboutMe />
		</Container>
	)
}

export default App
