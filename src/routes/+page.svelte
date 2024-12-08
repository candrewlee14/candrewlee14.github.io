<script lang="ts">
	import Image from '../components/Image.svelte';
	import Icon from '@iconify/svelte';
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

<div>
	<article class="prose mx-auto">
		<div class="text-center !my-8 xl:!my-9">
			<h1 class="flex justify-center flex-wrap">
				<span class="mx-3">👋 Hello!</span>
				<span
					>I'm <span class="text-blue-400 border-b-4 border-slate-200 dark:border-slate-700"
						>Andrew Lee</span
					>.</span
				>
			</h1>
		</div>
	</article>
	<div class="flex flex-row w-full justify-center align-middle pt-4">
		<div class="hidden w-72 xl:block mb-4 mx-2">
			<Image
				src="/andrew-glacier.jpg"
				webp_src="/andrew-glacier.webp"
				alt="Andrew Lee"
				imgClassName="rounded"
			/>
		</div>
		<div>
			<div class="h-full w-1 bg-slate-200 dark:bg-slate-700 mx-8 hidden xl:block"></div>
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
				</a> specializing in Systems (OSes, distributed) and AI/ML (computer vision, deep learning, NLP).
			</p>
			<p>
				I fell in love with programming in junior high and have been coding ever since. I spend a
				good chunk of free time learning new technologies and building side projects. Sometimes I
				write about my experiences and opinions on my <a href="/blog" class="text-blue-400">blog</a
				>.
			</p>
			<p>Feel free to connect with me through my socials below.</p>
			<div
				class="my-6 flex flex-row flex-wrap justify-between ring-4 ring-blue-300 dark:ring-blue-600 rounded py-2 mx-auto"
			>
				<div class="flex flex-row justify-around flex-grow">
					<div class="flex items-center mx-4">
						<Icon class="text-red-400" icon="mdi:email" />
						<a href="mailto:candrewlee14@gmail.com" class="ml-2"> candrewlee14 </a>
					</div>
					<div class="flex items-center mx-4">
						<Icon class="text-black dark:text-white" icon="mdi:github" />
						<a href="https://github.com/candrewlee14" class="ml-2"> candrewlee14 </a>
					</div>
				</div>
				<div class="flex flex-row justify-around flex-grow">
					<div class="flex items-center mx-4">
						<Icon class="text-sky-500 dark:text-sky-400" icon="logos:bluesky" />
						<a href="https://bsky.app/profile/candrewlee.com" class="ml-2"> candrewlee.com </a>
					</div>
					<div class="flex items-center mx-4">
						<Icon class="text-sky-500 dark:text-sky-400" icon="logos:linkedin-icon" />
						<a href="https://www.linkedin.com/in/c-andrew-lee" class="ml-2"> c-andrew-lee </a>
					</div>
				</div>
			</div>
		</article>
	</div>
</div>

<style>
	a {
		text-decoration: none;
	}
</style>
