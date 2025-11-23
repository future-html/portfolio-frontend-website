import Award from "../components/assets/IconAchievement/Award";
import Research from "../components/assets/IconAchievement/Research";
import Developer from "../components/assets/IconAchievement/Developer";
import {
	TailwindCssIcon,
	HtmlIcon,
	CssIcon,
	ReactIcon,
	JestIcon,
	VitestIcon,
	JSIcon,
	Typescript,
	NextJSIcon,
	RestAPIIcon,
	ExpressJs, 
	PostgreSQL,
	MongoDB,
	SpringbootIcon,
} from "../components/assets/Icontechstack/TechStackIcon";

import { GitHubIcon, LinkedIn, Phone } from "../components/assets/Footer/Contact";
import PictureQuiz from "../assets/Screenshot 2568-01-24 at 18.57.50.png";
import TravelQuiz from "../assets/Screenshot 2568-01-24 at 19.20.52.png";
import LandingPage from "../assets/Screenshot 2568-01-24 at 19.39.01.png";
import YoutubePage from "../assets/Screenshot 2568-01-24 at 19.50.00.png";
import FoodRecipePage from "../assets/Screenshot 2568-01-24 at 20.03.48.png";
import NextjsBlog from "../assets/Screenshot 2568-01-24 at 20.14.35.png";

export const Achievements = [
	{
		number: 40,
		acheivment: "more than 40 repositories are completed",
		icon: Award,
	},
	{
		number: 6,
		acheivment: "6 outstanding projects ",
		icon: Research,
	},
	{
		number: 2,
		acheivment: "2 years of the experience",
		icon: Developer,
	},
];

export const techStack = [
	{
		name: "React",
		icon: ReactIcon,
		type: "Frontend",
	},
	{
		name: "Jest",
		icon: JestIcon,
		type: "Testing",
	},
	{
		name: "RestAPI",
		icon: RestAPIIcon,
		type: "Testing",
	},
	{
		name: "Vitest",
		icon: VitestIcon,
		type: "Testing",
	},

	{
		name: "HTML",
		icon: HtmlIcon,
		type: "Frontend",
	},
	{
		name: "CSS",
		icon: CssIcon,
		type: "Frontend",
	},
	{
		name: "TailwindCSS",
		icon: TailwindCssIcon,
		type: "Frontend",
	},
	{
		name: "Typescript",
		icon: Typescript,
		type: ["Frontend", "Testing"],
	},
	{
		name: "JavaScript",
		icon: JSIcon,
		type: ["Frontend", "Testing"],
	},
	{
		name: "Next.js",
		icon: NextJSIcon,
		type: ["Frontend", "Backend"],
	},
	{
		name: "Express.js",
		icon: ExpressJs,
		type: ["Backend"],
	},
	{
		name: "PostgreSQL",
		icon: PostgreSQL,
		type: ["Database"],
	},
	{
		name: "MongoDB",
		icon: MongoDB,
		type: ["Database"],
	},
	{
		name: "Springboot",
		icon: SpringbootIcon,
		type: ["Backend"],
	},
];

export const projects = [
	{
		project: "Youtube clone",
		description: `A clone of YouTube's homepage with video playback functionality and a responsive design.`,
		techStack: ["RestAPI", "React", "TailwindCSS", "Vitest"],
		link: ["https://youtubeclonefuturefwp.netlify.app", "https://github.com/future-fwp/youtube-clone-project"],
		imagePreview: YoutubePage,
	},
	{
		project: "landing page",
		description: "A responsive landing page for a fictional product or service.",
		techStack: ["React", "TailwindCSS", "Jest"],
		link: ["https://landing-page-a8f4d6.netlify.app/", "https://github.com/future-fwp/landing-page.git"],
		imagePreview: LandingPage,
	},
	{
		project: "Food recipe",
		description: "A platform for sharing and discovering delicious recipes from around the world.",
		techStack: ["React", "Jest", "TailwindCSS"],
		link: ["https://food-recipe-b3dd6e.netlify.app/", "https://github.com/future-fwp/food-recipe.git"],
		imagePreview: FoodRecipePage,
	},
	{
		project: "Quiz App",
		description: "An interactive quiz application with multiple categories and scoring system.",
		techStack: ["RestAPI", "React", "TailwindCSS", "Jest"],
		link: ["https://react-quiz-app-06f3a7.netlify.app/", "https://github.com/future-fwp/quiz.git"],
		imagePreview: PictureQuiz,
	},
	{
		project: "Next.js Blog",
		description: "A responsive landing page for a fictional product or service.",
		techStack: ["Next.js", "React", "TailwindCSS", "RestAPI", "Jest"],
		link: ["https://nextjs-blog-cf9e11.netlify.app/", "https://github.com/future-fwp/nextjs-blog"],
		imagePreview: NextjsBlog,
	},
	{
		project: "Travel website",
		description: "A responsive landing page for a fictional product or service.",
		techStack: [ "React", "TailwindCSS",  "Jest"],
		link: [
			"https://travel-website-a3bfc0.netlify.app/",
			"https://github.com/future-fwp/travel-website?tab=readme-ov-file",
		],
		imagePreview: TravelQuiz,
	},
];

export const timeLine = [
	{
		year: "2022-now",
		title: " Chulalongkorn University",
		description: "B.Eng Mechanical engineering",
	},
	{
		year: "2019-2021",
		title: " Mahidol Wittayanusorn School",
		description: "Mathayom 6, Secondary School student",
		Grade: "3.92",
	},
];

export const Experience = [
	{
		year: "Oct 2025 – Nov 2025 ",
		role: "— Software Development Project",
		experience: `Developed a full website integrated with IoT systems for a vending machine
innovation project. Served as the sole developer responsible for both system
integration and UI/UX implementation.`,
	},
	{
		year: "Aug 2025 – Present ",
		role: "F— Web Development & Humanoid Mechanism (Senior Project)",
		experience: `Developing a virtual-reality rehabilitation system for stroke patients, integrating
Oculus with React Three Fiber for immersive interaction. Also contributing to the
design of an ARM-based humanoid mechanism.`,
	},
	{
		year: "May 2025 – Aug 2025",
		role: "— Full-Stack Software Development Intern, Smart Shift Solution",
		experience: `Worked as a full-stack developer in a collaborative team environment, contributing
to large-scale enterprise projects, including systems used by major client Supalai.`, 
	},
	{
		year: `Dec 2024 – Apr 2025 — `,
		role: `Frontend Developer Intern,
`,
		experience: `“Odd and Ends” Project
Developed university-related web applications, focusing on frontend
implementation using Next.js. Integrated LIFF (Line Front-end Framework) to
support Line ecosystem features.`,
	},
	{
		year: "Jun 2023 – Aug 2023",
		role: " — Frontend Developer Intern ",
		experience: `Completed an internship focused on programming and software development,
working closely with a senior full-stack developer to strengthen core coding
fundamentals`,
	},
	{
		year: "2022 – Present ",
		experience: ` Frontend Development Projects
Built and contributed to 6+ notable projects on GitHub, demonstrating strong
problem-solving skills, creativity, and consistent growth in web development.",
		role: "Frontend developer internship`,
	},
	
];

export const Contact = [
	{
		iconFooter: Phone,
		textFooter: 'Phone: <a href="tel:0971896841">0971896841</a>',
	},
	{
		iconFooter: GitHubIcon,
		textFooter:
			'Github: <a href="https://github.com/future-html" target="_blank" rel="noopener noreferrer">https://github.com/future-html</a>',
	},
	{
		iconFooter: LinkedIn,
		textFooter:
			'Linkedin: <a href="https://www.linkedin.com/in/witsanuporn-promsirinimit-71654a331/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/future-html/</a>',
	},
];
