import mdx from '@next/mdx';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    assetPrefix: '/yana23-sys/',
};

export default withMDX(nextConfig);