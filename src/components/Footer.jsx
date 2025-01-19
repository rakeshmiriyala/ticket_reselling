import { FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import bgImage from "../assets/footer.png"; // Import the background image
import logo from "../assets/Logo.png"; // Import your logo image

const Footer = () => {
  return (
    <div
      className="footer-container w-full text-white pt-12"
      style={{
        backgroundImage: `url(${bgImage})`, // Use the imported background image
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the background image from repeating
      }}
    >
      {/* First Row */}
      <div className="footer-row">
        <footer className="footer bg-[#120621] rounded-t-3xl text-neutral-content lg:p-10 lg:py-5 xs:p-10 flex flex-col md:flex-row xs:justify-start lg:justify-between lg:items-center">
          <aside className="flex justify-center lg:mb-6 sm:mb-0">
            <img
              src={logo} // Replace the SVG with the imported logo image
              alt="Logo"
              className="w-auto h-auto xs:h-12" // Set the desired size of your logo
            />
          </aside>

          {/* Social Icons */}
          <nav className="text-center sm:text-left md:ml-80 sm:ml-8">
            <h6 className="footer-title text-2xl">Social</h6>
            <div className="grid grid-flow-col gap-4 justify-center sm:justify-start">
              <a href="#" aria-label="Twitter">
                <FaTwitter className="lg:text-4xl xs:text-2xl" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="lg:text-4xl xs:text-2xl" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="lg:text-4xl xs:text-2xl" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="lg:text-4xl xs:text-2xl" />
              </a>
            </div>
          </nav>
        </footer>
      </div>

      {/* Second Row */}
      <div className="footer-row">
        <footer className="footer bg-[#120621] text-base-content p-10  py-5">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title xs:hidden lg:block">Newsletter</h6>
            <fieldset className="xs:hidden lg:block md:block form-control w-auto">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>

      {/* Third Row */}
      <div className="footer-row">
        <footer className="footer bg-[#120621] footer-center text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by
              ESWAP
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
