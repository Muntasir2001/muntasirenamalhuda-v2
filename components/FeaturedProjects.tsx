import FeaturedProject from "./FeaturedProject";
import Title from "./Title";

const FeaturedProjects = () => {
	return (
		<>
			<div className="mt-40">
				<Title title="Featured Projects" />

				<div className="flex flex-col gap-[100px]">
					<FeaturedProject
						thumbnailUrl="/thumbnails/connect-me-thumbnail.png"
						title="Connect Me"
						description="A chat application created with React.js and Firebase to allow the users to connect from across the world."
						technologies={["react", "next", "typescript"]}
					/>
				</div>
			</div>
		</>
	);
};

export default FeaturedProjects;
