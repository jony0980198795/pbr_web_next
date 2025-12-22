import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",     // เปิดโหมด Static Export
  images: {
    unoptimized: true,  // ทำให้รูปภาพใช้ได้บน Static Hosting เช่น cPanel
  }
};

export default nextConfig;
