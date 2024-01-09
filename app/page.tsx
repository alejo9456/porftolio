import { About, Footer, Header, Projects } from '../components';
import { Presentation } from '../components/Presentation';


export default function HomePage() {
  return (
    <>
    <Header/>
    <main className="mx-auto max-w-3xl px-5 sm:px-6 md:max-w-5xl">
      <Presentation/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
    </>
  )
}
