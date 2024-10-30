import Image from "next/image";
import tina_logo from "../../assets/img/tina-llama-orange.png";
import angular_logo from "../../assets/img/angular_gradient.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-200 sticky top-0 bg-white z-10 border-b border-gray-300">
      <div className="flex items-end mr-4 my-1">
        <Image className="ml-3" src={angular_logo} alt="Angular" height={60} />
        <h1 className="header-text ml-2">Angular CRM</h1>
      </div>

      <div className="flex items-end mr-4 mt-1 h-full">
        <Image
          src={tina_logo}
          alt="Tina CMS"
          height={30}
          width={21}
          className="mb-1"
        />
        <span className="ml-2">
          Powered by <a href="https://tina.io">Tina CMS</a>
        </span>
      </div>
    </header>
  );
}
