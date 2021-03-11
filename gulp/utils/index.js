const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';

exports.isProd = isProd;
exports.isDev = isDev;
