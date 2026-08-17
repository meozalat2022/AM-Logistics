import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand + Social */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
  <Image src="/logo.png" alt="AM Logistics" width={40} height={40} />
  <span className="text-xl font-bold text-white">
    AM Logistics
  </span>
</div>

            <p className="mb-6 max-w-md text-sm text-gray-400">
              End-to-end international shipping and logistics solutions
              connecting your business to global markets.
            </p>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>📍 Becho American City Zahraa Al-Maadi Phase 2 building 6 in front of Maadi Traffic</li>
                <li>📞 +20 10 337 68484</li>
                <li>📞 +20 11 490 45481</li>
                <li>✉️ info@amlogistics.com</li>
                <li>🕒 Sun – Thu | 9:00 – 17:00</li>
              </ul>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/company/your-company"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:info@myshippingco.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              {/* <a
                href="tel:+201000000000"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-green-600"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/Services/ocean-freight"
                  className="hover:text-white transition"
                >
                  Ocean Freight
                </a>
              </li>
              <li>
                <a
                  href="/Services/air-freight"
                  className="hover:text-white transition"
                >
                  Air Freight
                </a>
              </li>
              <li>
                <a
                  href="/Services/inland-transportation"
                  className="hover:text-white transition"
                >
                  Inland Transportation
                </a>
              </li>
              <li>
                <a
                  href="/Services/customs-clearance"
                  className="hover:text-white transition"
                >
                  Customs Clearance
                </a>
              </li>
              <li>
                <a
                  href="/Services/import-on-behalf"
                  className="hover:text-white transition"
                >
                  Import for Other
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/ContactUs" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-white transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Map / Office Location */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Our Office
            </h4>

            <p className="mb-4 text-sm text-gray-400">Cairo, Egypt</p>

            <div className="overflow-hidden rounded-lg border border-white/10">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d336.95311435452487!2d31.33241202902301!3d29.969716501438022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1786559949320!5m2!1sen!2seg"
                className="h-40 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />


              
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} AM Logistics. All rights reserved.</p>
          <p>Trusted global logistics partner</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
