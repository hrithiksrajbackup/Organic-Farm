import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                <span className="text-xl">🌴</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Kerala Treasures</h3>
                <p className="text-xs text-emerald-200">കേരള നിധികൾ</p>
              </div>
            </div>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Bringing authentic Kerala products to your doorstep. Every item tells a story of our rich heritage.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-300">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  Return & Refund
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100 hover:text-amber-300 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-300">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-emerald-100">
                  God's Own Country<br />Kerala, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-emerald-100">+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-emerald-100">hello@keralatreasures.in</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-emerald-700 hover:bg-amber-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-emerald-700 hover:bg-amber-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-emerald-700 hover:bg-amber-400 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-200">
            <p>&copy; 2024 Kerala Treasures. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
