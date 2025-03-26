import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header/Header";
import Carrossel from "./components/Carrossel/Carrossel";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import Clock from "./components/Clock/Clock";
import CtgCard from "./components/CtgCard/CtgCard";

import iconBigImage from "../app/assets/img/big_image.png";
import imgControle from '../app/assets/img/controle.png';
import iconCelular from '../app/assets/img/Category-CellPhone.png';
import iconSeta from '../app/assets/img/seta.png';
import red from '../app/assets/img/bg-vermelho.jpg';

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-300">
        <div className="max-w-[100%] md:max-w-[100%] lg:max-w-[80%] mx-auto">

          {/* Header Section */}

          <Header />
          <div className="absolute top-24.5 left-0 w-full border-b border-gray-500"></div>

          {/* Hero Section */}

          {/* Categories & Banner Section */}

          <div className="flex relative">
            {/* Linha */}
            <div className="absolute top-0 left-58 h-[calc(100%)] w-[1px] bg-gray-500"></div>

            <div className="flex flex-col pt-12 pr-5">

              <nav>
                <ul>
                  <li className="mb-5.5">
                    <Link className="flex gap-12" href="">
                      <p>Woman's Fashion</p>
                      <Image src={iconSeta} alt='seta' />
                    </Link>
                  </li>
                  <li className="mb-5.5">
                    <Link className="flex gap-19" href="">
                      <p>Man's Fashion</p>
                      <Image src={iconSeta} alt='seta' />
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
                      <p>Baby's & Toys</p>
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
            
          </div>

        </div>
      {/* relative pl-65 pr-65 bg-gray-300 */}
      {/* Header Section */}


    </div>
  );
}
