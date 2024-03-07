export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
    readTime: number
    socialPreview?: string
}

export type WorkEntry = {
    title: string;
    company: string;
    image_url?: string;
    colorClass?: [string, string];
    dates: [Date, Date];
    bullet_points: string[];
};