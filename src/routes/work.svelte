<script>
	import { listen } from 'svelte/internal';
</script>

<svelte:head>
	<meta name="description" content="Hello, I'm Andrew Lee! I'm a software developer and student at the University of Utah. View my work experience here.">
	<title>Work - Andrew Lee</title>
</svelte:head>

<div class="w-full h-full flex justify-center pb-6">
	<div class="w-3/4 h-full flex flex-col">
		<div class="relative entry-wrap pl-4 border-lightgray dark_border-gray-500">
			<div class="dot" style="background-color: rgb(125, 175, 255);"/>
			<div class="entry">
				<h2>Machine Learning Intern</h2>
				<h3 class="company text-sky-700 dark_text-sky-300">VPI Technology Group</h3>
				<h4 class="dates">Aug 2021 - Present</h4>
				<hr />
				<ul class="desc">
					<li>Training custom machine learning models to detect trash in rivers using Pytorch & Yolov5</li>
					<li>Parsing video streams with ffmpeg & Opencv and generating randomized datasets</li>
					<li>Managing concurrent image labeling</li>
					<li>Building internal DevOps CLI tools for GitLab project management</li>
				</ul>
			</div>
		</div>
		<div class="relative entry-wrap pl-4  border-lightgray dark_border-gray-500" >
			<div class="dot" />
			<div class="entry">
				<h2>Marketing Coordinator & Software Developer</h2>
				<h3 class="company text-cyan-700 dark_text-cyan-500">Neo Home Loans</h3>
				<h4 class="dates">Jan 2021 - Aug 2021</h4>
				<hr />
				<ul class="desc">
					<li> Graphic designing for marketing and promotional materials</li>
					<li> Created PowerBI & Domo dashboards for data analytics</li>
					<li> Built API middleware and Selenium programs</li>
					<li> Deployed Docker containers to Microsoft Azure</li>
					<li> Filmed and edited promotional material</li>
					<li> Built and deployed React web app on Azure</li>
				</ul>
			</div>
		</div>
		<div class="relative entry-wrap pl-4  border-lightgray dark_border-gray-500">
			<div class="dot" />
			<div class="entry">
				<h2>Data Analyst & Admin Assistant</h2>
				<h3 class="company text-green-700 dark_text-green-500">
					Fairway Independent Mortgage Corporation
				</h3>
				<h4 class="dates">Jun 2020 - Jan 2021</h4>
				<hr />
				<ul class="desc">
					<li> Automated CRM data transfer and form-filling using Python (Selenium package)</li>
					<li>
						Automated creation of gifting order spreadsheets using Python (exchangelib and pandas
						packages)
					</li>
					<li> Built dashboards in PowerBI analyzing loan operations volume and performance</li>
					<li>Built reports through Encompass LOS </li> 
					<li>Assisted in new technology adoption and IT needs</li>
				</ul>
			</div>
		</div>
		<div class="relative entry-wrap pl-4 border-lightgray dark_border-gray-500">
			<div class="dot" />
			<div class="entry">
				<h2>Software Engineer</h2>
				<h3 class="company text-red-700 dark_text-red-400">University of Utah - Genetics Lab</h3>
				<h4 class="dates">May 2020 - Jul 2020</h4>
				<hr />
				<ul class="desc">
					<li> Worked as a software developer for a genetics research lab</li>
					<li>
						Wrote backend software in Python using the Flask framework with connections to an
						SQLite DB
					</li>
					<li> Significantly reduced false conflicts in the <a
							class="text-red-700 dark_text-red-400"
							href="https://clinvarminer.genetics.utah.edu/">Clinvar Miner</a
						> genetics database
					</li>
					<li> Worked with Linux server hosting</li>
					<li>
						Efficiently found closest common condition from sets of conditions from the
						Mondo Disease Ontology
					</li>
				</ul>
			</div>
		</div>
		<div class="relative entry-wrap pl-4 border-lightgray dark_border-gray-500">
			<div class="dot" />
			<div class="entry">
				<h2>Data Visualization Intern</h2>
				<h3 class="company text-yellow-700 dark_text-yellow-400">BrainStorm Inc.</h3>
				<h4 class="dates">May 2020 - Jun 2020</h4>
				<hr />
				<ul class="desc">
					<li> Developed data dashboards using PowerBI and PowerApps</li>
					<li> Integrated Microsoft semantic analysis on data using Python and PowerBI</li>
					<li> Worked with databases and data services like Snowflake</li>
					<li> UI/UX dashboard design experience</li>
					<li> Created screen capture videos for training purposes</li>
				</ul>
			</div>
		</div>
		<div class="relative entry-wrap pl-4 border-lightgray dark_border-gray-500">
			<div class="dot" />
			<div class="entry">
				<h2>Software Development Intern</h2>
				<h3 class="company text-rose-700 dark_text-rose-400">Red Pepper Software</h3>
				<h4 class="dates">Mar 2019 - Aug 2019</h4>
				<hr />
				<ul class="desc">
					<li>Full stack web development experience with SQL databases, C# .NET Core backend, and
						REACT and Vue frontend frameworks
					</li>
					<li> Maintained various projects for multiple clients</li>
					<li> Created unit tests for new features</li>
					<li> Built and redesigned features</li>
					<li> Fixed bugs</li>
					<li> Worked using the AGILE framework using Jira</li>
					<li> Worked with REST APIs</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	hr {
		@apply my-2 border rounded-sm;
	}
	.entry hr {
		max-width: 800px;
		@apply border-lightgray dark_border-gray-400;
	}
	.entry-wrap .dot {
		content: ' ';
		width: 15px;
		height: 15px;
		border-radius: 100%;
		left: -9px;
		@apply border-4 border-gray-500 dark_border-lightgray bg-white dark_bg-gray-600 absolute;
	}
	.entry-wrap {
		border-right: transparent;
		border-top: transparent;
		border-bottom: transparent;
		@apply pb-12 border-4;
	}
	.entry {
		margin-top: -0.5rem;
		position: relative;
		@apply px-2;
	}
	.company {
		@apply font-medium;
	}
	.dates {
		@apply font-medium text-gray-500 dark_text-gray-400 italic;
	}
	.desc {
		list-style: none;
		@apply pl-6 pt-1 pb-2;
	}

	.desc li::before {
		content: '\2022';
		position: absolute;
		margin-left: -1rem;
		padding-right: 1rem;
		color: rgb(162, 162, 162);
	}
	
</style>
