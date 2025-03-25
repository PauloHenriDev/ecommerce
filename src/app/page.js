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
    <div className="relative pl-65 pr-65 bg-gray-300">

      {/* Header Section */}
      <Header />
      {/* Linha */}
      <div className="absolute top-24.5 left-0 w-full border-b border-gray-500"></div>



      {/* Hero Section */}

      {/* Categories & Banner Section */}
      <div className="flex relative">
        {/* Linha */}
        <div className="absolute top-0 left-58 h-[calc(100%)] w-[1px] bg-gray-500"></div>

        <div className="flex flex-col pt-12 pr-5">
          {/* tentar adicionar um gap em vez do margin */}
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
        <div className="ml-12 mt-8">
          <Carrossel />
        </div>
      </div>



      {/* Flash Sales Section */}
      <div className="mt-50 flex flex-col gap-5 mb-15">
        <div className="flex gap-3 items-center">
          <div className="w-5 h-9 bg-red-500 rounded-[5px]"></div>
          <p className="text-red-500">Today's</p>
        </div>
        <div className="">
          <div className="flex">
            <div className="mr-24">
              <h2 className="font-poppins font-semibold text-[36px] mb-5">Flash Sales</h2>
            </div>
            <div>
              <Clock />
            </div>
          </div>
          <div className="flex gap-5">
            <Card className="" img={red} nome="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="5" />
            <Card className="" img={imgControle} nome="AK-900 Wired Keyboard" valor="R$1160,00" estrelas="5" />
            <Card className="" img={imgControle} nome="IPS LCD Gaming Monitor" valor="R$370,00" valorAntigo="R$400,00" estrelas="5" />
          </div>
          <div className="flex mt-12 justify-center">
            <Button nome="Ver Todos Os Produtos" largura="220px" altura="50px" />
          </div>
          <div className="absolute top-320.5 left-65 w-320 border-b border-gray-500"></div>          
        </div>
      </div>



      {/* Categories Section */}
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <div className="w-5 h-9 bg-red-500 rounded-[5px]"></div>
          <p className="text-red-500">Categories</p>
        </div>
        <div>
          <div className="flex">
            <h2 className="font-poppins font-semibold text-[36px] mb-5">Browse By Categories</h2>
            <div>
              Imagem
            </div>
          </div>
          <div className="flex">
            <CtgCard icon={iconCelular} nome="okoko" />
            <CtgCard icon={iconCelular} nome="okoko" />
            <CtgCard icon={iconCelular} nome="okoko" />
          </div>
        </div>
      </div>

      teste
      testes
      testestest
      {/* <Carrossel images={imgControle} /> */}

      {/* <div className="flex gap-3 items-center">
        <div className="w-5 h-9 bg-red-500 rounded-[5px]"></div>
        <p className="text-red-500">Categories</p>
      </div>
      <div>
        <div>
          Browse By Categories
        </div>
        <div>
          Imagem
        </div>
      </div> */}

    </div>
  );
}
