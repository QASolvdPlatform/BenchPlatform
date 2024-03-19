/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/qabenchprogram",
	reactStrictMode: true,
	output: {
		static: {},
	},
	images: {
		unoptimized: true,
	}
};

export default nextConfig;
