<script lang="ts">
	import Image from '../components/Image.svelte';
	import Icon from '@iconify/svelte';
	import SectionTitle from '../components/SectionTitle.svelte';

	const socialLinks = [
		{
			href: 'mailto:candrewlee14@gmail.com',
			text: 'candrewlee14',
			icon: 'mdi:email',
			iconClass:
				'text-red-500 group-hover:text-red-600 dark:text-red-400 dark:group-hover:text-red-500'
		},
		{
			href: 'https://github.com/candrewlee14',
			text: 'candrewlee14',
			icon: 'mdi:github',
			iconClass:
				'text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white'
		},
		{
			href: 'https://bsky.app/profile/candrewlee.com',
			text: 'candrewlee.com',
			icon: 'logos:bluesky',
			iconClass: 'text-sky-500 group-hover:text-sky-600' // logos usually have their own colors
		},
		{
			href: 'https://www.linkedin.com/in/c-andrew-lee',
			text: 'c-andrew-lee',
			icon: 'logos:linkedin-icon',
			iconClass: 'text-sky-600 group-hover:text-sky-700' // logos usually have their own colors
		}
	];
</script>

<svelte:head>
	<title>About Me - Andrew Lee</title>
	<meta name="description" content="Hello, I'm Andrew Lee! Learn more about me here." />
	<meta property="og:title" content="About Me - Andrew Lee" />
	<meta property="og:description" content="Hello, I'm Andrew Lee! Learn more about me here." />
	<meta
		property="og:image"
		content="https://candrewlee14.github.io/candrewlee14-social-preview.png"
	/>
	<meta property="og:type" content="profile" />
	<meta property="og:profile:first_name" content="Andrew" />
	<meta property="og:profile:last_name" content="Lee" />
	<meta property="og:profile:username" content="candrewlee14" />
</svelte:head>

<SectionTitle title="ABOUT" />
<div class="flex flex-row w-full justify-center align-middle">
	<div class="hidden w-72 xl:block mb-4 mx-2">
		<Image src="/andrew-glacier.jpg" webp_src="/andrew-glacier.webp" alt="Andrew Lee" />
	</div>
	<div>
		<div class="h-full w-1 border-r border-line-gray mx-8 hidden xl:block"></div>
	</div>
	<article class="prose">
		<p>
			I'm currently working at <a href="https://lucid.co/" class="text-blue-400 font-bold"
				>Lucid Software</a
			>
			as a software engineer. I graduated with my <strong>Honors BS + MS</strong> in
			<strong>Computer Science</strong>
			in May 2024 from the
			<a
				href="https://www.utah.edu/"
				class="text-red-600 dark:text-red-400 font-bold whitespace-nowrap"
			>
				University of Utah
			</a> specializing in Systems (OSes, distributed) and AI/ML (computer vision, deep learning,
			NLP).
		</p>
		<p>
			I fell in love with programming in junior high and have been coding ever since. I spend
			a good chunk of free time learning new technologies and building side projects.
			Sometimes I write about my experiences and opinions on my <a
				href="/blog"
				class="text-blue-400">blog</a
			>.
		</p>

		<section aria-labelledby="social-links-title" class="mt-8 mb-12 px-4">
			<h2
				id="social-links-title"
				class="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200"
			>
				Connect with Me
			</h2>
			<ul
				class="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 p-4 bg-zinc-50 dark:bg-zinc-900 ring-1 ring-line-gray"
			>
				{#each socialLinks as item}
					<li class="flex items-center group">
						<Icon
							class={`sm:w-5 sm:h-5 w-8 h-8 mr-3 transition-colors duration-150 ${item.iconClass}`}
							icon={item.icon}
							aria-hidden="true"
						/>
						<a
							href={item.href}
							class="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 hover:underline transition-colors duration-150"
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	</article>
</div>

<style>
	a {
		text-decoration: none;
	}
</style>
