import { FaFan } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer footer-center  bg-base-200 p-5">
      <aside>
        <FaFan className="text-3xl text-primary animate-spin"></FaFan>

        <p className="font-bold">
          Programming Hero | Providing reliable tech since 2012
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </div>
  );
};

export default Footer;
