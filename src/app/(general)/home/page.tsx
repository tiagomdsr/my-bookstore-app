import HeroSection from "@/components/HeroSection";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function InitialHome() {
	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 justify-between">

			<main>
				<HeroSection />
				<About />
				<Contact />
			</main>

			<Footer />
			
		</div>
	);
}
