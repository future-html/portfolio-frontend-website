import ProfileImage from "../../assets/IMG_1834-removebg-preview 1.png";
import Circle from "../ReusableComponents/Geometry/Circle";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
	return (
		<main
			id="home"
			className="max-w-[1200px] lg:px-10 md:px-8 px-6 lg:py-16 md:py-12 py-10 mx-auto "
		>
			<section className="flex flex-col-reverse md:flex-row md:justify-between md:items-center relative">
				<Circle addlayout="top-0 left-0"></Circle>
				<div className=" md:w-[45%] lg:w-[60%] text-center max-md:mt-6 md:text-start flex  flex-col gap-10">
					<h1 className="!text-4xl">
						Hello I'm{" "}
						<TypeAnimation
							sequence={[
								"future",
								2000,
								"frontend developer",
								2000,
								"a software tester",
								2000,
								"mechanical engineering student",
								2000,
								"a Creative Thinker",
								2000,
								() => console.log("Animation completed!"),
							]}
							wrapper="span"
							speed={50}
							className="text-4xl font-bold text-cyan-300"
							repeat={Infinity}
							cursor={true}
						/>
					</h1>
					<div>
						<h3 className="text-justify !text-lg [text-align-last:left] indent-10">
							Passionate Software Developer with a Mechanical Engineering background and 3 years of experience, specializing in full-stack web development. Skilled in building responsive applications using HTML, CSS, JavaScript, React, and Next.js, with practical experience from internships and collaborative projects. Proficient in component testing using Jest and Vitest. Able to integrate IoT systems with web platforms, combining engineering problem-solving skills with modern software development to create efficient, user-focused digital solutions.
						</h3>
					</div>

					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="200"
							height="2"
							viewBox="0 0 200 2"
							fill="none"
						>
							<path
								d="M0 1H624"
								stroke="#23F7DB"
							/>
						</svg>
					</div>
				</div>

				<div
					className="max-md:flex max-md:justify-center"
					style={{ background: "linear-gradient(115deg, #23F7DB -42.33%, #000 59.01%" }}
				>
					<img
						src={ProfileImage}
						alt="profileimage"
						className=""
					/>
				</div>
			</section>
		</main>
	);
};

export default Hero;
