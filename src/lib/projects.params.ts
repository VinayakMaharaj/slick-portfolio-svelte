import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Evently',
		color: 'green',
		description:
			'Spearheaded the development of a comprehensive full-stack events platform that facilitates global event management and seamless ticket purchases via Stripe. The project employed a contemporary technology stack featuring Next.js 14, TypeScript, and TailwindCSS, with the integration of Zod enhancing data validation processes. Furthermore, the platform prioritizes secure user management, achieved through the implementation of Clerk, ensuring a robust and efficient authentication system for user interactions.',
		shortDescription:
			'Spearheaded the development of a comprehensive full-stack events platform that facilitates global event management and seamless ticket purchases via Stripe. The project employed a contemporary technology stack featuring Next.js 14, TypeScript, and TailwindCSS, with the integration of Zod enhancing data validation processes. Furthermore, the platform prioritizes secure user management, achieved through the implementation of Clerk, ensuring a robust and efficient authentication system for user interactions.',
		links: [{ to: 'https://github.com/VinayakMaharaj/evently', label: 'GitHub' }],
		logo: Assets.Stripe,
		name: 'Evently',
		period: {
			from: new Date(2023, 11),
			to: new Date()
		},
		skills: getSkills('ts', 'tailwind', 'nextjs', 'clerk', 'stripe'),
		type: 'Website Template'
	},
	{
		slug: 'CarHub',
		color: 'blue',
		description:
			"Developed a cutting-edge car rental website, leveraging TypeScript and Tailwind CSS to craft a modern and responsive user interface in accordance with the latest industry standards. The project showcased a strategic design approach, featuring the creation of custom filter, combobox, and modal elements with a modular design. This emphasis on modularity aimed at enhancing scalability and ensuring future expandability of the website's features.",
		shortDescription:
			"Developed a cutting-edge car rental website, leveraging TypeScript and Tailwind CSS to craft a modern and responsive user interface in accordance with the latest industry standards. The project showcased a strategic design approach, featuring the creation of custom filter, combobox, and modal elements with a modular design. This emphasis on modularity aimed at enhancing scalability and ensuring future expandability of the website's features.",
		links: [{ to: 'https://github.com/VinayakMaharaj/car_showcase', label: 'GitHub' }],
		logo: Assets.TypeScript,
		name: 'CarHub',
		period: {
			from: new Date(2023, 5),
			to: new Date(2023, 6)
		},
		skills: getSkills('ts', 'tailwind', 'nextjs', 'reactjs'),
		type: 'Website Template'
	},
	{
		slug: 'Promptopia',
		color: 'orange',
		description:
			"Designed and developed a dynamic post-sharing website using JavaScript, Next.js 13, and Tailwind CSS. The website boasts a seamless user interface and comprehensive CRUD functionality, providing users with effortless prompt management. To enhance user experience and security, implemented a secure Google Auth-based login system, allowing users seamless access to prompt management while safeguarding their information. The platform's reliability and scalability were further reinforced by employing MongoDB as the primary database, ensuring persistent data storage and seamless access to shared prompts, user IDs, and emails.",
		shortDescription:
			"Designed and developed a dynamic post-sharing website using JavaScript, Next.js 13, and Tailwind CSS. The website boasts a seamless user interface and comprehensive CRUD functionality, providing users with effortless prompt management. To enhance user experience and security, implemented a secure Google Auth-based login system, allowing users seamless access to prompt management while safeguarding their information. The platform's reliability and scalability were further reinforced by employing MongoDB as the primary database, ensuring persistent data storage and seamless access to shared prompts, user IDs, and emails.",
		links: [{ to: 'https://github.com/VinayakMaharaj/prompt_project', label: 'Github' }],
		logo: Assets.JavaScript,
		name: 'Promptopia',
		period: {
			from: new Date(2023, 5),
			to: new Date(2023, 6)
		},
		skills: getSkills('js', 'tailwind', 'nextjs', 'mongodb', 'reactjs'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/VinayakMaharaj/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template'
	},
	{
		slug: 'UofT Timetable Manager',
		color: 'purple',
		description:
			'Spearheaded the development of a feature-rich Java application, empowering students to create personalized course timetables and access course information seamlessly through UofT/’s course API. In the pursuit of robust code quality, conducted thorough unit testing, achieving over 50% code coverage. This meticulous testing approach not only facilitated the detection and resolution of critical errors but also resulted in a notable 40% improvement in code performance by identifying and eliminating redundant code usage.',
		shortDescription:
			'Spearheaded the development of a feature-rich Java application, empowering students to create personalized course timetables and access course information seamlessly through UofT/’s course API. In the pursuit of robust code quality, conducted thorough unit testing, achieving over 50% code coverage. This meticulous testing approach not only facilitated the detection and resolution of critical errors but also resulted in a notable 40% improvement in code performance by identifying and eliminating redundant code usage',
		links: [{ to: 'https://github.com/VinayakMaharaj/UofT-Timetable-Manager', label: 'GitHub' }],
		logo: Assets.Java,
		name: 'UofT Timetable Manager',
		period: {
			from: new Date(2022, 4),
			to: new Date(2022, 7)
		},
		skills: getSkills('java'),
		type: 'Application'
	},
	{
		slug: 'Impact of Covid-19 on Mental Health and Unemployment',
		color: 'yellow',
		description:
			"Conducted an in-depth analysis of 10 months' worth of CSV files utilizing Python's Pandas library to discern correlations between employment rates and mental health trends amid the COVID-19 pandemic. To enhance the presentation of critical findings, employed Matplotlib and Plotly, creating insightful data visualizations such as bar graphs, pie charts, and linear regression models. This approach not only facilitated a comprehensive understanding of the data but also enabled the effective communication of key insights derived from the analysis.",
		shortDescription:
			"Conducted an in-depth analysis of 10 months' worth of CSV files utilizing Python's Pandas library to discern correlations between employment rates and mental health trends amid the COVID-19 pandemic. To enhance the presentation of critical findings, employed Matplotlib and Plotly, creating insightful data visualizations such as bar graphs, pie charts, and linear regression models. This approach not only facilitated a comprehensive understanding of the data but also enabled the effective communication of key insights derived from the analysis.",
		links: [{ to: 'https://github.com/VinayakMaharaj/CSC110-Project', label: 'Github' }],
		logo: Assets.Python,
		name: 'Impact of Covid-19 on Mental Health and Unemployment',
		period: {
			from: new Date(2021, 9),
			to: new Date(2021, 11)
		},
		skills: getSkills('python', 'pandas', 'numpy'),
		type: 'Data Analysis'
	},
	{
		slug: 'brick breaker',
		color: 'red',
		description:
			'Created brick breaker the game using assembly and the MARS IDE. The game features a ball that bounces off the walls and a paddle that the player can use to bounce the ball back up. The player loses when the ball touches the bottom of the screen. The game features a score counter and a life counter. The game also features a pause and restart button. The game is fully functional and can be played on the MARS IDE. Code available on request.',
		shortDescription:
			'Created brick breaker the game using assembly and the MARS IDE. The game features a ball that bounces off the walls and a paddle that the player can use to bounce the ball back up. The player loses when the ball touches the bottom of the screen. The game features a score counter and a life counter. The game also features a pause and restart button. Code available on request.',
		links: [{ to: 'https://github.com/VinayakMaharaj', label: 'GitHub' }],
		logo: Assets.Assembly,
		name: 'Brick Breaker',
		period: {
			from: new Date(2022, 9),
			to: new Date(2022, 11)
		},
		skills: getSkills('assembly'),
		type: 'Application'
	}
];

export default MY_PROJECTS;
