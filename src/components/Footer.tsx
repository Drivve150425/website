export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-slate-900 via-gray-900 to-slate-900 text-white px-8 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              🚗 Drivve™
            </div>
            <p className="text-gray-300 leading-relaxed">
              Revolutionizing urban mobility through smart carpooling technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <span className="text-sm">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 align-middle">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/download" className="text-gray-300 hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@drivve.in</p>
              <p>📱 +91 98765 43210</p>
              <p>📍 Delhi NCR, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Drivve™. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ for sustainable mobility
          </p>
        </div>
      </div>
    </footer>
  );
}
