import Image from "next/image";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Services from "@/Components/Service";
import Signup from "./signup";
import ContactForm from "@/Components/Contact";


export default function Home() {
  return (
    <>
    <Header/>
    <About/>
    <Services/>
    <Signup/> 
    <ContactForm/>
    <Footer/>
    </>
      );
}
