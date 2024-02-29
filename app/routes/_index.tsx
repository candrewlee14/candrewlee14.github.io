import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaHamburger } from "react-icons/fa";
import { IoMail, IoMenu } from "react-icons/io5";
import AndrewLogo from "~/components/andrew";
import { useTheme } from "~/storage/theme";
import { Image } from "~/components/image";

export const meta: MetaFunction = () => {
	return [
		{ title: "Andrew Lee - Home" },
		{ name: "description", content: "Andrew Lee - Home" },
	];
};

function Socials() {
	return (
		<div className="flex text-2xl">
			<Link to="" className="ml-2">
				<IoMail className="text-red-400" />
			</Link>
			<Link to="" className="ml-2">
				<FaGithub className="text-black dark:text-white" />
			</Link>
			<Link to="" className="ml-2">
				<FaTwitter className="text-blue-400" />
			</Link>
			<Link to="" className="ml-2">
				<FaLinkedin className="text-sky-400" />
			</Link>
		</div>
	);
}

export default function Index() {
	return (
		<div className="mx-4 lg:mx-16">
			<div
			// className="max-w-prose lg:max-w-screen-lg xl:max-w-screen-lg mx-auto lg:text-lg"
			>
				{/* <hr className="border my-8" /> */}
				<article className="prose mx-auto">
					<div className="text-center !my-8 xl:!my-9">
						<h1 className=" flex justify-center flex-wrap">
							<span className="mx-3">👋 Hello!</span>
							<span>I'm <span className="text-blue-400 border-b-4 border-slate-200 dark:border-slate-700">Andrew Lee</span>.</span>
						</h1>
					</div>
				</article>
				{/* <hr className="border mb-8" /> */}
				<div className="flex flex-row flex-wrap w-full justify-center align-middle pt-4">
					<Image
						src="/andrew-glacier.jpg"
						webp_src="/andrew-glacier.webp"
						alt="Andrew Lee"
						className="mb-8 mx-8 w-72"
						imgClassName="rounded"
					/>
					<div>
						<div className="h-full w-1 bg-slate-200 dark:bg-slate-700 mx-8 hidden xl:block" />
					</div>
					<article className="mx-4 prose">
						<p>
							I'm currently earning my{" "}
							<strong className="text-black dark:text-white">
								Honors BS & MS
							</strong>{" "}
							in{" "}
							<strong className="text-black dark:text-white">
								Computer Science
							</strong>{" "}
							at the{" "}
							<span className="text-red-600 dark:text-red-400 font-bold whitespace-nowrap">
								University of Utah
							</span>
							. My areas of specialization have been Systems (OSes, Distributed) and AI/ML (Computer Vision, Deep Learning, NLP).
							I'll be graduating in May 2024, after which I'll be working at <span className="text-blue-400 font-bold">Lucid Software</span>.
						</p>
						<p>
							I'm interested in art, music, fashion, technology, business, and
							health. When I'm not working or studying, you can find me playing
							basketball with friends, jamming on the piano, playing Super Smash
							Bros, reading up on a new technical breakthrough, or coding on a
							fun project.
						</p>
						<p>Feel free to connect with me through my socials below.</p>
						<div className="my-6 flex flex-row flex-wrap justify-between ring-4 ring-blue-300 dark:ring-blue-600 rounded py-2 mx-auto">
							<div className="flex flex-row justify-around flex-grow">
								<div className="flex items-center mx-4">
									<IoMail className="text-red-400" />
									<Link to="mailto:candrewlee14@gmail.com" className="ml-2">
										candrewlee14
									</Link>
								</div>
								<div className="flex items-center mx-4">
									<FaGithub className="text-black dark:text-white" />
									<Link to="https://github.com/candrewlee14" className="ml-2">
										candrewlee14
									</Link>
								</div>
							</div>
							<div className="flex flex-row justify-around flex-grow">
								<div className="flex items-center  mx-4">
									<FaTwitter className="text-blue-400" />
									<Link to="https://twitter.com/c_andrew_lee" className="ml-2">
										c_andrew_lee
									</Link>
								</div>
								<div className="flex items-center  mx-4">
									<FaLinkedin className="text-sky-400" />
									<Link
										to="https://www.linkedin.com/in/c-andrew-lee"
										className="ml-2"
									>
										c-andrew-lee
									</Link>
								</div>
							</div>
						</div>
					</article>
				</div>
				{/* <hr className="border my-8" /> */}
			</div>
		</div>
	);
}
