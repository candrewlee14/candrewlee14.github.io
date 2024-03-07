<script lang="ts">
	import Image from "../components/Image.svelte";
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>About Me - Andrew Lee</title>
	<meta
		name="description"
		content="Hello, I'm Andrew Lee! Learn more about me here."
	/>
	<meta property="og:title" content="About Me - Andrew Lee" />
	<meta property="og:description" content="Hello, I'm Andrew Lee! Learn more about me here." />
	<meta property="og:image" content="https://candrewlee14.github.io/candrewlee14-social-preview.png" />
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
					>I'm <span
						class="text-blue-400 border-b-4 border-slate-200 dark:border-slate-700"
						>Andrew Lee</span
					>.</span
				>
			</h1>
		</div>
	</article>
	<div
		class="flex flex-row flex-wrap w-full justify-center align-middle pt-4"
	>
		<Image
			src="/andrew-glacier.jpg"
			webp_src="/andrew-glacier.webp"
			alt="Andrew Lee"
			className="mb-8 mx-4 w-72"
			imgClassName="rounded"
		/>
		<div>
			<div
				class="h-full w-1 bg-slate-200 dark:bg-slate-700 mx-8 hidden xl:block"
			/>
		</div>
		<article class="prose">
			<p>
				I'm currently earning my{" "}
				<strong class="text-black dark:text-white">
					Honors BS & MS
				</strong>{" "}
				in{" "}
				<strong class="text-black dark:text-white">
					Computer Science
				</strong>{" "}
				at the{" "}
				<span
					class="text-red-600 dark:text-red-400 font-bold whitespace-nowrap"
				>
					University of Utah
				</span>
				. My areas of specialization have been Systems (OSes, Distributed)
				and AI/ML (Computer Vision, Deep Learning, NLP). I'll be graduating
				in May 2024, after which I'll be working at
				<span class="text-blue-400 font-bold">Lucid Software</span>.
			</p>
			<p>
				I'm interested in art, music, fashion, technology, business, and
				health. When I'm not working or studying, you can find me
				playing basketball with friends, jamming on the piano, playing
				Super Smash Bros, reading up on a new technical breakthrough, or
				coding on a fun project.
			</p>
			<p>Feel free to connect with me through my socials below.</p>
			<div
				class="my-6 flex flex-row flex-wrap justify-between ring-4 ring-blue-300 dark:ring-blue-600 rounded py-2 mx-auto"
			>
				<div class="flex flex-row justify-around flex-grow">
					<div class="flex items-center mx-4">
						<Icon class="text-red-400" icon="mdi:email" />
						<a href="mailto:candrewlee14@gmail.com" class="ml-2">
							candrewlee14
						</a>
					</div>
					<div class="flex items-center mx-4">
						<!-- <FaGithub class="text-black dark:text-white" /> -->
						<Icon
							class="text-black dark:text-white"
							icon="mdi:github"
						/>
						<a href="https://github.com/candrewlee14" class="ml-2">
							candrewlee14
						</a>
					</div>
				</div>
				<div class="flex flex-row justify-around flex-grow">
					<div class="flex items-center mx-4">
						<Icon
							class="text-blue-400"
							icon="mdi:twitter"
						/>
						<a href="https://twitter.com/c_andrew_lee" class="ml-2">
							c_andrew_lee
						</a>
					</div>
					<div class="flex items-center mx-4">
						<Icon
							class="text-sky-500 dark:text-sky-400"
							icon="mdi:linkedin"
						/>
						<a
							href="https://www.linkedin.com/in/c-andrew-lee"
							class="ml-2"
						>
							c-andrew-lee
						</a>
					</div>
				</div>
			</div>
		</article>
	</div>
</div>
