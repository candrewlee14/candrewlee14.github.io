<script>
	import feather from 'feather-icons';
</script>

<svelte:head>
	<meta
		name="description"
		content="Hello, I'm Andrew Lee! I'm a software developer and student at the University of Utah. Learn more about me!"
	/>
	<title>About Me - Andrew Lee</title>
</svelte:head>

<div class="w-full h-full flex justify-center pb-6">
	<div class="w-3/4 h-full flex flex-col items-center">
		<h1 class="text-center">Hello! 👋</h1>
		<h1 class="text-center">
			My name is <div class="andrew-container">
				<div class="andrew">
					<span>Andrew Lee</span>
					<div class="andrew-after bg-lightgray dark_bg-gray-900 pb-1" />
				</div>
			</div>
		</h1>
		<div class="flex flex-row flex-wrap justify-center mt-6">
			<div class="flex flex-col items-center mb-8" style="min-width: 300px;">
				<picture>
					<source type="image/webp" srcset="/AndrewHeadshot.webp" />
					<source type="image/png" srcset="/AndrewHeadshot.png" />
					<img
						src="/AndrewHeadshot.png"
						alt="my face"
						class="profile drop-shadow-md border-4 rounded-sm border-black dark_border-gray-400 bg-black dark_bg-gray-400"
					/>
				</picture>
			</div>
			<div class="max-w-xl" style="min-width: 200px;">
				<p>
					I'm currently working on detecting trash in rivers at
					<a
						class="text-sky-700 hover_text-sky-500 dark_text-sky-300 dark_hover_text-sky-200"
						href="https://www.vpitechnology.com/">VPI Technology Group</a
					>. I'm also a student at the
					<a
						class="text-red-700 hover_text-red-500 dark_text-red-400 dark_hover_text-red-300"
						href="https://www.cs.utah.edu/"
					>
						University of Utah</a
					>
					earning my Honors BS/MS in Computer Science.
				</p>
				<p>
					I'm interested in art, music, fashion, technology, business, and health. When I'm not
					working or studying, you can find me playing basketball with friends, jamming on the
					piano, playing Super Smash Bros, reading up on a new technical breakthrough, or coding on
					a fun project.
				</p>
				<p>Feel free to connect with me through my socials below!</p>
			</div>
		</div>
		<!-- <h2>Socials 🌐</h2> -->
		<div class="socials border-lightgray dark_border-gray-900">
			<a href="https://github.com/candrewlee14">
				{@html feather.icons.github.toSvg()}
				<span>candrewlee14</span>
			</a>
			<a href="mailto:candrewlee14@gmail.com">
				{@html feather.icons.mail.toSvg()}
				<span>candrewlee14@gmail.com</span>
			</a>
			<a href="https://www.linkedin.com/in/c-andrew-lee">
				{@html feather.icons.linkedin.toSvg()}
				<span>c-andrew-lee</span>
			</a>
		</div>
		<div class="mt-6">
			<h2 class="text-center my-2">Podcasts I'm Listening To 🔊</h2>
			<ul class="podcast-list">
				<li><span class="podcast">Huberman Lab Podcast</span> - Andrew Huberman</li>
				<li><span class="podcast">Darknet Diaries</span> - Jack Rhysider</li>
				<li><span class="podcast">Revisionist History</span> - Malcolm Gladwell</li>
			</ul>
		</div>
		<div class="mt-8" style="max-width: 550px">
			<h2 class="text-center mt-4 pb-2">My Software Skills ⭐</h2>
			<div class="bubble-list langs-list">
				<h3>Languages & Frameworks</h3>
				<span>React</span>
				<span>Next.js</span>
				<span>Svelte</span>
				<span>C#</span>
				<span>.NET</span>
				<span>Java</span>
				<span>Javascript</span>
				<span>Typescript</span>
				<span>CSS</span>
				<span>C</span>
				<span>C++</span>
				<span>Rust</span>
				<span>HTML</span>
				<span>Python</span>
				<span>SQL</span>
				<span>GraphQL</span>
			</div>
			<div class="bubble-list tool-list">
				<h3>Tools & Platforms</h3>
				<span>Docker</span>
				<span>Git</span>
				<span>PostgresSQL</span>
				<span>SQLite</span>
				<span>Linux</span>
				<span>Windows</span>
				<span>AWS</span>
				<span>Azure</span>
				<span>Visual Studio</span>
				<span>VSCode</span>
				<span>Vim</span>
				<span>PowerBI</span>
				<span>Figma</span>
				<span>Illustrator</span>
				<span>Photoshop</span>
				<span>Excel</span>
			</div>
			<div class="bubble-list concept-list">
				<h3>Concepts & Subjects</h3>
				<span>Machine Learning</span>
				<span>REST APIs</span>
				<span>Image Processing</span>
				<span>Concurrency</span>
				<span>Data Analytics</span>
				<span>Data Visualization</span>
				<span>Front-End Web Dev</span>
				<span>UI/UX</span>
				<span>Graphic Design</span>
				<span>Agile</span>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	ul {
		list-style-type: disc;
	}
	li {
		@apply text-base;
		font-family: 'Barlow';
	}
	p {
		width: 100%;
		font-family: 'Barlow';
		@apply mb-4;
	}
	.socials {
		@apply flex flex-row flex-wrap p-1 pt-3 border-4 rounded mt-4 mb-4;
	}
	.socials h2,
	.socials a {
		@apply pb-2 block;
	}
	.socials h2 {
		@apply pl-1 pt-4;
	}
	.socials span {
		@apply pl-2 transition text-gray-600 hover_text-gray-400 dark_text-gray-400 dark_hover_text-gray-500;
	}
	.socials a {
		@apply flex pl-3 pr-6;
	}
	.profile {
		width: 200px;
		height: 200px;
	}
	.podcast-list li {
		@apply text-gray-500 dark_text-gray-400;
	}
	.podcast-list span {
		@apply font-medium text-black dark_text-lightgray;
	}
	.bubble-list {
		@apply flex flex-wrap mb-4;
	}
	.bubble-list h3 {
		@apply w-full mt-2 mb-1;
	}
	.bubble-list span {
		@apply font-medium text-black dark_text-lightgray px-2 py-1 rounded-2xl mr-1 my-1;
	}
	.langs-list span {
		@apply bg-sky-300 dark_bg-sky-900;
	}
	.tool-list span {
		@apply bg-teal-400 dark_bg-teal-900;
	}
	.concept-list span {
		@apply bg-green-400 dark_bg-green-900;
	}
	.andrew-container {
		display: inline-block;
	}
	.andrew {
		position: relative;
		z-index: 3;
		top: -1px;
	}
	.andrew-after {
		position: absolute;
		width: 100%;
		left: 0;
		top: 90%;
		z-index: 0;
		content: ' ';
	}
</style>
