function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-2">Abstract</h3>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Community</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Contact Us</li>
              <li>info@abstract.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul>
              <li>info@abstract.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            © Copyright 2022 Abstract Studio Design, Inc. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
