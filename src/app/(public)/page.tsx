import { Hero } from "@/components/sections/hero";
import { ExpertiseGrid } from "@/components/sections/expertise-grid";
import { AboutDoctor } from "@/components/sections/about-doctor";
import { StatsCTA } from "@/components/sections/stats-cta";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactMap } from "@/components/sections/contact-map";
import { BlogPreview } from "@/components/sections/blog-preview";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <ExpertiseGrid />
            <AboutDoctor />
            <StatsCTA />
            <Testimonials />
            <BlogPreview />
            <ContactMap />
        </div>
    );
}
