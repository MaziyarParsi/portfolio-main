import './App.css'
import { Container } from 'react-bootstrap'
import { AboutMe, Header, HeroSection, MyServices, ContactMe } from './Components'

function App() {
	return (
		<Container fluid className="full-width">
			<Header />
			<HeroSection />
			<AboutMe />
			<MyServices />
			<ContactMe />
		</Container>
	)
}

export default App
