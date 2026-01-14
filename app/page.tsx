import About from "@/components/About";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Classes from "@/components/Classes";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import RegisterForm from "@/components/RegisterForm";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import UpcomingProgram from "@/components/UpcomingPrograms";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <UpcomingProgram />
      <RegisterForm />
      {/* <Classes /> */}
      <Team />
      {/* <Membership /> */}
      <Testimonial />
    </main>
  );
}
