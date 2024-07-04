import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
 return (
  <>
   <Header />

   <main className="flex min-h-screen flex-col items-center justify-between px-10 py-16 md:p-24 font-body">
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
   </main>

   <ScrollToTop />
  </>
 );
}
