import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import TechnicalSkillsets from "@/components/TechnicalSkillsets";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
	return (
		<>
			<Layout>
				<Hero />
				<TechnicalSkillsets />
				<FeaturedProjects />
			</Layout>
		</>
	);
}
