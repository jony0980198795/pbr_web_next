// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">About Us</h3>
          <p className="text-sm leading-relaxed">We pride ourselves not only on the quality of our materials, but also on the technical support and collaboration we offer to researchers, engineers, and industry professionals.</p>
          <p className="text-sm leading-relaxed mt">For more details about our products and services, contacts us via</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about_us">About Us</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* For Partners */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/partner">PBR Company Limited</Link></li>
            <p>33 Mu 3, Surasak Sub-district, Si Racha District, Chonburi 20110 THAILAND.</p>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact US</h3>
          <p>Phone: +66(0)86 3636 324</p>
          <p className="text-sm">E-mail: pbr@pbr.co.th</p>
          <div>
            <Image
              src="/about/dbd.png"
              alt="เครื่องหมายการค้า"
              width={80}
              height={80}
              className="mt-10"
            />
          </div>
          <div className="flex gap-4 mt-3">
            {/* <Link href="https://facebook.com" target="_blank">
              <p>facebook</p>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <p>instagram</p>
            </Link>
            <Link href="mailto:support@aitshirtstudio.com">
              <p>other</p>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
       Copyright 2025 © PBR Company Limited
      </div>
    </footer>
  );
}
