const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s3-inventorymanagementofdat.s3.us-east-2.amazonaws.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;