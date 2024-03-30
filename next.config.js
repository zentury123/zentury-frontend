// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  //Sass config
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    session: {
      strategy: "jwt", // Choose your session strategy (e.g., jwt, session)
    },
  },
};

module.exports = nextConfig;
