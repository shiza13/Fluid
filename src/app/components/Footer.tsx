import Image from "next/image";

export default function Footer() {
  return (
   <footer className="bg-[#0b0e37] pt-16 pb-8 px-12 tracking-wide relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-8 z-20 relative">
          {/* Company Section */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Company</h2>
            <ul className="space-y-5">
              <li><a href="/about" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">About Us</a></li>
              <li><a href="/services" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Services</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Contact</a></li>
              <li><a href="/careers" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Careers</a></li>
              <li><a href="/blog" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Blog</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Services</h2>
            <ul className="space-y-5">
              <li><a href="/services/installation" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">System Installation</a></li>
              <li><a href="/services/maintenance" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Maintenance</a></li>
              <li><a href="/services/monitoring" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Monitoring</a></li>
              <li><a href="/services/consulting" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Consulting</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Resources</h2>
            <ul className="space-y-5">
              <li><a href="/docs" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Documentation</a></li>
              <li><a href="/faq" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">FAQ</a></li>
              <li><a href="/support" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Support</a></li>
              <li><a href="/tutorials" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Tutorials</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h2 className="text-base font-medium text-white mb-6">Connect</h2>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Facebook</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">Twitter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">LinkedIn</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-[15px] inline-flex items-center transition-all">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-8" />

        {/* Bottom row */}
        <div className="flex flex-wrap sm:justify-between gap-6 relative z-20">
          <div className="flex items-center space-x-5">
            <Image src="/Mainlogo.png" alt="Fluid Management Service" width={50} height={50} />
            <span className="text-white font-medium">Fluid Management Service</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Fluid Management Service. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Image */}
      <Image
        src="/footer-bg.png" // put bg in /public/footer-bg.png
        alt="Background"
        fill
        className="absolute inset-0 object-cover opacity-5 -z-0"
      />
    </footer>
  );
}
