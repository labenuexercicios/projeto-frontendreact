import {
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-12 lg:justify-center lg:gap-32 flex justify-between px-12 py-12 text-white bg-[#1b1b1b] w-full">
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-32 justify-center ">
        <div className="flex flex-col gap-2 ">
          <p className="uppercase font-semibold">Navegation</p>
          <ul className="flex flex-col gap-1">
            <li>
              <a className="uppercase text-sm" href="#">
                Jewelry
              </a>
            </li>

            <li>
              <a className="uppercase text-sm" href="#">
                About Breccia
              </a>
            </li>
            <li>
              <a className="uppercase text-sm" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="uppercase font-semibold">Contact</p>
          <ul className="flex flex-col gap-1">
            <li className="uppercase text-sm flex gap-1 items-center">
              <AiOutlinePhone />
              0800-000-000
            </li>
            <li className="uppercase text-sm flex items-center gap-1">
              <MdAlternateEmail />
              breccia@store.com
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase font-semibold">Social medias</p>
        <div className="flex gap-4 justify-center text-lg">
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <BsFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
