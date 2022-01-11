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
				<img src="/AndrewHeadshot.png" alt="my face" class="profile drop-shadow-md border-4 rounded-sm border-black dark_border-white bg-black dark_bg-white" />
			</div>
			<div class="max-w-xl" style="min-width: 200px;">
				<p>
					I'm currently working on detecting river trash at 
					<a class="text-sky-800 hover_text-sky-500 dark_text-sky-300 dark_hover_text-sky-200" 
						href="https://www.vpitechnology.com/">VPI Technologies</a
					>. I'm also a student at the
					<a class="text-red-800 hover_text-red-500 dark_text-red-400 dark_hover_text-red-300"
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
		<div>
			<h2 class="text-center my-4">Podcasts I'm Listening To 🔊</h2>
			<ul class="podcast">
				<li><span class="podcast">Huberman Lab Podcast</span> - Andrew Huberman</li>
				<li><span class="podcast">Darknet Diaries</span> - Jack Rhysider</li>
				<li><span class="podcast">Revisionist History</span> - Malcolm Gladwell</li>
			</ul>
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
	.podcast li {
		@apply text-gray-400;
	}
	.podcast span {
		@apply text-black dark_text-lightgray;
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
