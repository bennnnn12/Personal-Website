/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/bennnnn12',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/',
        permanent: true,
      },
      
    ]
  },
}
