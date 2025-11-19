import Image from "next/image";

interface Props {
	imageUrl: string;
	title: string;
	description: string;
	technologies: string[];
}

const FeaturedProject = () => {
	return (
		<>
			<div className="flex gap-36"></div>
		</>
	);
};

export default FeaturedProject;
