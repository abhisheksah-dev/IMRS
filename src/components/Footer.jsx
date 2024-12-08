function Footer() {
  return (
    <footer className="bg-gray-500 text-white mt-1">
      <div className="flex flex-col md:flex-row  items-center justify-center p-8 gap-[40px]">
        {/* Left Section */}
        <div>
          <p className="text-lg font-semibold">For More Updates:</p>
          <div className="flex items-center gap-3 ">
            {/* Social Media Icons */}
            <a
              href="https://www.instagram.com/indoremetrorailsaathi/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img
                className="w-[30px] brightness-125"
                src="./public/images/instagram.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              className="hover:scale-110 transition-transform"
              target="_blank"
            >
              <img
                className="w-[40px] brightness-125"
                src="./public/images/facebook.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://x.com/Abhisheksa16632"
              className="hover:scale-110 transition-transform"
              target="_blank"
            >
              <img
                className="w-[30px] brightness-125"
                src="./public/images/twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/indoremetrorailsaathi/"
              className="hover:scale-110 transition-transform"
              target="_blank"
            >
              <img
                className="w-[30px] brightness-125"
                src="./public/images/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg font-semibold mb-2 ml-6">Important Links</p>
          <ul className="text-sm space-y-1">
            <li className="mt-2 font-semibold">Other Links:</li>
            <li>Govt of India | Incredible India | Digital India</li>
            <li>Govt of Madhya Pradesh | MP Metro (MPM)</li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 bg-gray-900 mt-2 py-2 text-center text-lg">
        &copy; 2024. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
