<svelte:head>
	<title>About Me - Andrew Lee</title>
</svelte:head>

<div class="w-full h-full flex justify-center pb-6">
	<div class="w-3/4 h-full flex flex-col items-center mt-6">
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
				<img src="/AndrewHeadshot.png" alt="my face" 
					class="profile drop-shadow-md border-4 rounded-sm border-black dark_border-gray-400 bg-black dark_bg-gray-400" />
			</div>
			<div class="max-w-xl" style="min-width: 200px;">
				<p>
					I'm currently working on detecting river trash at 
					<a class="text-sky-700 hover_text-sky-500 dark_text-sky-300 dark_hover_text-sky-200" 
						href="https://www.vpitechnology.com/">VPI Technologies</a
					>. I'm also a student at the
					<a class="text-red-700 hover_text-red-500 dark_text-red-400 dark_hover_text-red-300"
						href="https://www.cs.utah.edu/"
					>
					University of Utah</a>
					earning my Honors BS/MS in Computer Science.
				</p>
				<p>
					I'm interested in art, music, fashion, technology, business, and health. When I'm not
					working or studying, you can find me playing basketball with friends, jamming on the
					piano, playing Super Smash Bros, or coding on a fun project.
				</p>
			</div>
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
			<h2 class="text-center mt-4 pb-1">My Software Skills ⭐</h2>
			<div class="bubble-list langs-list">
				<h4>Languages & Frameworks</h4>
				<span>React</span>
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
				<h4>Tools & Platforms</h4>
				<span>PostgresSQL</span>
				<span>Sqlite</span>
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
				<h4>Concepts & Subjects</h4>
				<span>Machine Learning</span>
				<span>REST APIs</span>
				<span>Image Processing</span>
				<span>Concurrency</span>
				<span>Data Analytics</span>
				<span>Data Visualization</span>
				<span>Front-End Web Dev</span>
				<span>UI/UX</span>
				<span>Graphic Design</span>
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
	.profile {
		width: 200px;
		height: 200px;
	}
	.podcast-list li {
		@apply text-gray-500;
	}
	.podcast-list span {
		@apply font-medium text-black dark_text-lightgray;
	}
	.bubble-list {
		@apply flex flex-wrap mb-4;
	}
	.bubble-list h4 {
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
