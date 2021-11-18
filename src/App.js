import './App.css'
import { Container } from 'react-bootstrap'
import { AboutMe, Header, HeroSection, MyServices } from './Components'

function App() {
	return (
		<Container fluid className="full-width">
			<Header />
			<HeroSection />
			<AboutMe />
			<MyServices />
		</Container>
	)
}

export default App
