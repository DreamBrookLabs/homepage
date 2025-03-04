"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import Particles from "../components/particles";


const companyInfo = [
	{
		title: "Vision",
		description: "To Develop and Build RnDVerse -- Sustainable Infrastructure & Economic System for Decentralized Science"
	},
	{
		title: "Mission",
		description: "Accelerating Impactful Science RnD, Integration DeSci with Open-Science and TradSci, Democratizing Access to Scientific Economy"
	},
	{
		title: "Problems We are Solving",
		description: `1. Establishing Alternative Ecosystem to TradSci -- Traditional Science Ecosystem (Traditional Academia, Industrial research, and National Lab) : for supporting state-of-the-art research.\n
2. Serving the rising population we called ResearchPreneur – special group of Knowledge Workers, with passion and know-how to solve pressing scientific and technological issues.\n
3. Sharing Economy and Resource Arbitrage between Supply (Expert, Infrastructure) and Demand (Scientific Questions, Technological Challenges) in RnD.\n
4. Integration and utilization of Decentralized Science (DeSci) into existing Open-Science and TradSci ecosystem.\n
5. Democratization of Scientific Economy, General Scientific economy is high-barrier and heavily guarded by various entities. We want to open up this to enable more people to do scientific work while minimizing issues regarding the quality of works.`
	},
	{
		title: "Opportunities We Capture",
		description: `1. Enormous amount of research challenges exist to be tackled, can’t rely merely on the developed world and renowned institutions to solve it all.\n
2. As the global economy moves toward a knowledge economy, more jobs and support are needed for this latent job market.\n
3. The world is moving toward the 5th Paradigm of Science.\n
4. The 21st decade has seen and will continue to undergo accelerated development and integration of the Digital Economy.\n
5. Blockchain & Web3 Revolution enable read, write, own of things, offering new ways to distribute and own the benefit of knowledge creation.`
	},
];

export default function CompanyPage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
				{/* Logo and Subtext Section */}
				<div className="w-full flex flex-col items-center mt-16 mb-16"> {/* Added margin-top (mt-8) */}
					<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<Particles
						className="absolute inset-0 -z-10 animate-fade-in"
						quantity={100}
					/>
					<Image
						src="/DreamBrook_Labs_white.png" // Path to your image in the public folder
						alt="DreamBrook Labs"
						width={400} // Adjusted the width
						height={100} // Adjusted the height
						className="z-10 duration-1000 cursor-default animate-title"
					/>
					<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<div className="my-8 text-center animate-fade-in">
						<h2 className="text-lg text-zinc-500 ">
							Building Sustainable Infrastructure & Economic System for Decentralized Science.
						</h2>
					</div>
				</div>
				{/* Cards Section */}
				<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-2 lg:gap-16">
					{companyInfo.map((info) => (
						<Card key={info.title}>
							<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<div className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{/* Icon Placeholder */}
								</div>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{info.title}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 whitespace-pre-line">
										{info.description}
									</span>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}


