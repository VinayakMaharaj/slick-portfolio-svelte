import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'sass',
		color: 'pink',
		logo: Assets.Sass,
		name: 'Sass'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'svelte',
		color: 'orange',
		logo: Assets.Svelte,
		name: 'Svelte'
	}),
	s({
		slug: 'vuejs',
		color: 'green',
		logo: Assets.VueJs,
		name: 'Vue Js'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		logo: Assets.NodeJs,
		name: 'Node Js'
	}),
	s({
		slug: 'expressjs',
		color: 'green',
		logo: Assets.ExpressJs,
		name: 'Express Js'
	}),
	s({
		slug: 'docker',
		color: 'blue',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'go',
		color: 'blue',
		logo: Assets.Go,
		name: 'Go'
	}),
	s({
		slug: 'python',
		color: 'blue',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'mongodb',
		color: 'green',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'postgres',
		color: 'blue',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'graphql',
		color: 'pink',
		logo: Assets.GraphQL,
		name: 'GraphQL'
	}),
	s({
		slug: 'nextjs',
		color: 'black',
		logo: Assets.NextJs,
		name: 'Next Js'
	}),
	s({
		slug: 'tailwind',
		color: 'blue',
		logo: Assets.Tailwind,
		name: 'Tailwind'
	}),
	s({
		slug: 'vite',
		color: 'blue',
		logo: Assets.Vite,
		name: 'Vite'
	}),
	s({
		slug: 'java',
		color: 'orange',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'pandas',
		color: 'white',
		logo: Assets.Pandas,
		name: 'Pandas'
	}),
	s({
		slug: 'numpy',
		color: 'white',
		logo: Assets.Numpy,
		name: 'Numpy'
	}),
	s({
		slug: 'C',
		color: 'blue',
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'bootrap',
		color: 'purple',
		logo: Assets.Bootstrap,
		name: 'Bootstrap'
	}),
	s({
		slug: 'assembly',
		color: 'blue',
		logo: Assets.Assembly,
		name: 'Assembly'
	}),
	s({
		slug: 'stripe',
		color: 'red',
		logo: Assets.Stripe,
		name: 'Stripe'
	}),
	s({
		slug: 'clerk',
		color: 'blue',
		logo: Assets.Clerk,
		name: 'Clerk'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
