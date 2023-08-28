/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
  },
};
