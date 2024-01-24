import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor of Science Computer Science and Statistics',
		description: '',
		location: 'Toronto Canada',
		logo: Assets.UofT,
		name: '',
		organization: 'University of Toronto',
		period: { from: new Date(2021, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: [
			'Javascript',
			'HTML',
			'CSS',
			'Python',
			'Java',
			'Machine Learning',
			'Data Science',
			'Deep Learning',
			'C',
			'Data Structures and Algorithms',
			'Linear Algebra',
			'Calculus'
		]
	},
	{
		degree: 'Maths and Computer Science',
		description: '',
		location: 'Trinidad and Tobago',
		logo: Assets.PCC,
		name: '',
		organization: 'Presentation College Chaguanas',
		period: { from: new Date(2014, 9, 1), to: new Date(2021, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Software Engineering', 'C', 'Data Structures', 'Pascal']
	}
];
