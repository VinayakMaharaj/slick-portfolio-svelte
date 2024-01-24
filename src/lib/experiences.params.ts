import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'Intelligent Adaptive Interventions Lab',
		company: 'Intelligent Adaptive Interventions Lab',
		description:
			'Developed three data visualization React components utilizing Chart.js for the analysis page, resulting in a remarkable 60% reduction in data analysis speeds. Employing advanced features of Next.js 13, the project achieved an impressive 120% decrease in page load times, enhancing overall user experience with swift and seamless interactions. The integration of Docker for containerization further ensured scalable and portable deployment, allowing the application to be efficiently deployed across diverse platforms.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Home',
		period: {
			from: new Date(2023, 8),
			to: new Date(2023, 11)
		},
		skills: getSkills('js', 'mongodb', 'reactjs', 'nextjs', 'docker', 'tailwind'),
		name: 'Software Engineer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'Amnivar',
		company: 'Self-employed',
		description:
			"Deployed a Finance Dashboard App on Vercel, leveraging TypeScript and advanced Linear Regression Modeling with Regression.js. This resulted in precise financial data analysis and predictive models, accelerating analysis speeds by over 40%. The app features a responsive UI with graphs and tables for reliable data visualization, implemented using MaterialUI and Chart.js. To optimize API calls, Redux Toolkit Query was integrated, leading to a 20% reduction in response times and improved app responsiveness. The backend's architecture and scalability were enhanced through the incorporation of Lucidchart for data modeling, ensuring a robust foundation for future growth and development. Additionally, Regression.js was employed for precise financial projections, contributing to more informed decision-making for the company.",
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 4), to: new Date(2023, 7) },
		skills: getSkills('ts', 'mongodb'),
		name: 'Software Engineer',
		color: 'green',
		links: [],
		logo: Assets.Amnevar,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
