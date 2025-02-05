/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dmbvejcxnpuhpprnykgm.supabase.co",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
