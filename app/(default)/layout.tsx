
import 'aos/dist/aos.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import AnimateComp from '@/components/ui/Animate'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <>
    <AnimateComp/>
      <Header />
      
      <main className="grow">

        {children}

      </main>

      <Footer />
    </>
  )
}
