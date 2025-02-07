import { useState } from 'preact/hooks'
import Header from './components/Header/Header'
import "./sass/main.scss"
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Clean from './components/Clean/Clean'
import Testi from './components/Testimotional/Testi'
import Pooular from './components/Popular/Pooular'
import Footer from './components/Footer/Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Products/>
    <Clean/>
    <Testi/>
    <Pooular/>
    <Footer/>
    </>
  )
}
