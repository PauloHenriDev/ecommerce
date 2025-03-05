import Image from "next/image";
import Link from "next/link.js";
import Card from './components/Card/Card.js';
import Header from './components/Header/Header.js';
import Button from "./components/Button/Button.js";
import imgNaruto from "../app/assets/img/naruto_kid.png";
import iconBigImage from "../app/assets/img/big_image.png";
import imgControle from '../app/assets/img/controle.png';

export default function Home() {
  return (
    <div className="pl-39 pr-39 bg-gray-300">
      <Header />
      <div className="flex">
        <div className="flex flex-col pt-12 pr-20 pl-15 border-r">

          {/* tentar adicionar um gap em vez do margin */}
          <nav>
            <ul> 
              <li className="mb-5.5">
                <Link href="">
                  <p>Woman's Fashion</p>
                </Link>
              </li>
              <li className="mb-5.5">
                <Link href="">
                  <p>Man's Fashion</p>
                </Link>
              </li>
              <li className="mb-5.5">
                <Link href="">
                  <p>Home & Lyfe Style</p>
                </Link>
              </li>
              <li className="mb-5.5">
                <Link href="">
                  <p>Medicine</p>
                </Link>
              </li>
              <li className="mb-5.5">
                <Link href="">
                  <p>Sports & Outdoor</p>
                </Link>
              </li>
              <li className="mb-5.5">
                <Link href="">
                  <p>Babay's & Toys</p>
                </Link>
              </li>
              <li className="mb-5.5">
                <Link href="">
                  <p>Groceries & Pets</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p>Health & Beauty</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-12 mt-12">
          <Image src={iconBigImage} />
        </div>
      </div>
      <div className="mt-50">
        <div>
          <p>Today</p>
        </div>
        <div>
          <div>
            <h2 className="font-poppins font-semibold text-[36px] mb-5">Flash Sales</h2>
          </div>
          <div className="flex gap-5">
            <Card className="" img={imgControle} nome="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="5" />
            <Card className="" img={imgNaruto} nome="AK-900 Wired Keyboard" valor="R$1160,00" estrelas="5" />
            <Card className="" img={imgNaruto} nome="IPS LCD Gaming Monitor" valor="R$370,00" valorAntigo="R$400,00" estrelas="5" />
          </div>
          <Button nome="Ver Todos Os Produtos" largura="300px" altura="40px" />
        </div>
      </div>
    </div>
  );
}
