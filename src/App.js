import './App.css'
import { Container } from 'react-bootstrap'
import HeroSection from './Components/heroSection/HeroSection'
import Header from './Components/header/Header'
function App() {
	return (
		<Container fluid className="full-width">
			<Header />
			<HeroSection />
		</Container>
	)
}

export default App
