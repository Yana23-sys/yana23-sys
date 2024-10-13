import mdx from '@next/mdx';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    basePath: '/yana23-sys',
    assetPrefix: '/yana23-sys/',
};

export default withMDX(nextConfig);