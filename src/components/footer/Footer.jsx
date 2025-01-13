const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-sm">
                We provide top-notch services to help you achieve your goals. Your satisfaction is our priority.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-sm text-gray-400">Email: contact@example.com</p>
                </li>
                <li>
                  <p className="text-sm text-gray-400">Phone: +1 234 567 890</p>
                </li>
                <li>
                  <p className="text-sm text-gray-400">Address: 123 Main Street, City, Country</p>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} MyCompany. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  