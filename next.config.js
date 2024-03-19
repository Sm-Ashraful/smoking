module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dwlowabln/image/upload/**", // Adjust the pathname if needed
      },
    ],
  },
};
