import './App.css'
import { Container } from 'react-bootstrap'
import { AboutMe, Header, HeroSection, MyServices, ContactMe, Footer } from './Components'

function App() {
	return (
		<Container fluid className="full-width">
			<Header />
			<HeroSection />
			<AboutMe />
			<MyServices />
			<ContactMe />
			<Footer />
		</Container>
	)
}

export default App
