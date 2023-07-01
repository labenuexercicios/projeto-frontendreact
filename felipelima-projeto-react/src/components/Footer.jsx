import React from "react";
import Twitter from "../utils/twitter.png";
import Youtube from "../utils/youtube.png";
import Instagram from "../utils/instagram.png";
import Facebook from "../utils/facebook.png";

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-blueGray-200 pt-8 pb-6">
      <hr className="my-6 border-blueGray-300"></hr>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-3xl font-semibold text-blueGray-700">
              Vamos manter contato!
            </h2>
            <h5 className="text-base mt-0 mb-2 text-blueGray-600">
              Encontre-nos em qualquer uma dessas plataformas, respondemos em 1
              a 2 dias úteis.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <div className="flex">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-110 transition-transform"
                >
                  <img
                    src={Twitter}
                    alt="Logotipo Twitter"
                    className="w-full h-full object-cover"
                  />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-110 transition-transform"
                >
                  <img
                    src={Facebook}
                    alt="Logotipo Facebook"
                    className="w-full h-full object-cover"
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-110 transition-transform"
                >
                  <img
                    src={Youtube}
                    alt="Logotipo YouTube"
                    className="w-full h-full object-cover"
                  />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:scale-110 transition-transform"
                >
                  <img
                    src={Instagram}
                    alt="Logotipo Instagram"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Links úteis
                </span>
                <ul className="list-unstyled">
                  <ul>
                    <li>
                      <a
                        className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                        href="https://www.linkedin.com/in/felipelimars/"
                      >
                        Sobre nós
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                        href="https://www.linkedin.com/in/felipelimars/"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                        href="https://github.com/felipelimars"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                        href="https://www.linkedin.com/in/felipelimars/"
                      >
                        Produtos free
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Outras informações
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                      href="https://github.com/felipelimars"
                    >
                      Licença
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                      href="https://www.linkedin.com/in/felipelimars/"
                    >
                      Termos e condições
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                      href="https://www.linkedin.com/in/felipelimars/"
                    >
                      Política de privacidade
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 font-medium block pb-2 text-sm hover:text-blue-400"
                      href="https://www.linkedin.com/in/felipelimars/"
                    >
                      Entre em contato!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-xs text-blueGray-500 font-semibold py-1">
              Copyright ©<span id="get-current-year">2023</span>
              <a
                href="https://www.linkedin.com/in/felipelimars/"
                className="text-blueGray-500 hover:text-gray-800"
                target="blank"
              >
                {" "}
                Developed by
              </a>
              <a
                href="https://www.linkedin.com/in/felipelimars/"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                {" "}
                Felipe Lima.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
