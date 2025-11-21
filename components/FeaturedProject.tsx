import Image from "next/image";
import { technologies as techList } from "@/lib/technologies";

interface Props {
	thumbnailUrl: string;
	title: string;
	description: string;
	technologies: (keyof typeof techList)[];
}

const FeaturedProject = ({
	thumbnailUrl,
	title,
	description,
	technologies,
}: Props) => {
	return (
		<>
			<div className="flex gap-32">
				<Image
					src={thumbnailUrl}
					width={485}
					height={400}
					alt="thumbnail"
					className="object-cover rounded-md"
				/>

				<div className="flex flex-col">
					<h2 className="text-heading font-bold text-white">
						{title}
					</h2>
					<p className="text-normal text-white mt-[5px]">
						{description}
					</p>

					<div className="flex gap-3 mt-6">
						{technologies.map((tech, key) => (
							<div
								key={key}
								className={`flex gap-3 items-center px-5 py-2 rounded-sm`}
								style={{
									backgroundColor:
										techList[tech].backgroundColor,
									color: techList[tech].textColor,
								}}
							>
								{techList[tech].icon}
								{techList[tech].name}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturedProject;
