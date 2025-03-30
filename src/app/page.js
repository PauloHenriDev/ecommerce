"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import Header from "./components/Header/Header";
import Carrossel from "./components/Carrossel/Carrossel";
import ColorTextSection from "./components/ColorTextSection/ColorTextSection";
import TitleSection from "./components/TitleSection/TitleSection";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import Clock from "./components/Clock/Clock";
import CtgCard from "./components/CtgCard/CtgCard";
import ArrowButton from "./components/ArrowButton/ArrowButton";

import iconBigImage from "../app/assets/img/big_image.png";
import imgControle from '../app/assets/img/controle.png';
import iconCelular from '../app/assets/img/Category-CellPhone.jpg';
import iconSeta from '../app/assets/img/seta.png';
import red from '../app/assets/img/bg-vermelho.jpg';

export default function Home() {
  const scrollRef = useRef(null);
  const scrollAmount = 250;

const handleScroll = (direction) => {
  if (scrollRef.current) {
    const container = scrollRef.current;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }
};

  return (
    <div className="flex justify-center bg-gray-300">
        <div className="max-w-[100%] md:max-w-[40%] lg:max-w-[90%] mx-auto">

          {/* Header Section */}
          <Header />
          {/* Linha */}
          <div className="absolute top-30 left-0 w-full border-b border-gray-500"></div>


          {/* Hero Section */}

          <div className="flex relative">
            {/* Categories & Banner Section */}

            {/* Linha */}
            <div className="absolute top-[9px] left-58 h-[calc(100%)] w-[1px] bg-gray-500"></div>

            <div className="flex flex-col pt-12 pr-5">

              <nav>
                <ul>
                  <li className="mb-[19.5px]">
                    <Link className="flex gap-12" href="">
                      <p>Woman's Fashion</p>
                      <Image src={iconSeta} alt='seta' />
                    </Link>
                  </li>
                  <li className="mb-[19.5px]">
                    <Link className="flex gap-19" href="">
                      <p>Man's Fashion</p>
                      <Image src={iconSeta} alt='seta' />
                    </Link>
                  </li>
                  <li className="mb-[19.5px]">
                    <Link href="">
                      <p>Home & Lyfe Style</p>
                    </Link>
                  </li>
                  <li className="mb-[19.5px]">
                    <Link href="">
                      <p>Medicine</p>
                    </Link>
                  </li>
                  <li className="mb-[19.5px]">
                    <Link href="">
                      <p>Sports & Outdoor</p>
                    </Link>
                  </li>
                  <li className="mb-[19.5px]">
                    <Link href="">
                      <p>Baby's & Toys</p>
                    </Link>
                  </li>
                  <li className="mb-[19.5px]">
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
            <div className="ml-12 mt-[45px]">
              <Carrossel />
            </div>
          </div>


          <div className="mt-50 flex flex-col gap-5 mb-15">
            {/* Flash Sales Section */}

            <ColorTextSection texto="Today's" />

            <div>

              <div className="flex">
                <p className="text-[12px] ml-[305px]">Days</p>
                <p className="text-[12px] ml-[55px]">Hours</p>
                <p className="text-[12px] ml-[47px]">Minutes</p>
                <p className="text-[12px] ml-[38px]">Seconds</p>
              </div>

              <div className="flex">

                <div className="mr-[87px] mb-[31px]">
                  <TitleSection texto="Flash Sales" />
                </div>

                <div className="mr-[500px]">
                  <Clock />
                </div>

                <div>
                  <ArrowButton handleScroll={handleScroll} />
                </div>

              </div>

              <div ref={scrollRef} className="flex gap-[30px] overflow-hidden scroll-smooth whitespace-nowrap w-[calc(5*215px+4*30px)]">
                {/* Carrossel de Produtos */}

                <Card img={red} texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
                <Card img={red} texto="AK-900 Wired Keyboard" valor="R$960,00" valorAntigo="1160,00" estrelas="★★★★" reviews="75" />
                <Card img={imgControle} texto="IPS LCD Gaming Monitor" valor="R$370,00" valorAntigo="R$400,00" estrelas="★★★★★" reviews="(99)" />
                <Card img={imgControle} texto="S-Series Comfort Chair" valor="R$375,00" valorAntigo="R$400,00" estrelas="★★★★" reviews="(99)" />
                <Card img={imgControle} texto="Ichigo" valor="R$370,00" valorAntigo="R$400,00" estrelas="★★★★" reviews="(15)" />
                <Card img={imgControle} texto="Rukia" valor="R$370,00" valorAntigo="R$400,00" estrelas="★★★★" reviews="(15)" />
                <Card img={imgControle} texto="Orihime" valor="R$370,00" valorAntigo="R$400,00" estrelas="★★★★" reviews="(15)" />
                <Card img={imgControle} texto="Chad" valor="R$370,00" valorAntigo="R$400,00" estrelas="★★★★" reviews="(15)" />
              </div>

              <div className="flex mt-12 justify-center mb-[140px]">
                <Button texto="Ver Todos Os Produtos" largura="220px" altura="50px" />
              </div>

              {/* Linha */}
              <div className="absolute top-[1320px] left-65 w-320 border-b border-gray-500"></div>

            </div>

          </div>


          <div className="mb-[140px]">
            {/* Categories Section */}
            <ColorTextSection texto="Categories" />

            <div className="flex mt-[20px] mb-[31px] justify-between">
              <TitleSection texto="Browse By Categories" />
              <div>
                <ArrowButton />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <CtgCard icon={iconCelular} texto="Phones" />
              <CtgCard icon={iconCelular} texto="Computers" />
              <CtgCard icon={iconCelular} texto="SmartWatch" />
              <CtgCard icon={iconCelular} texto="Camera" />
              <CtgCard icon={iconCelular} texto="HeadPhones" />
              <CtgCard icon={iconCelular} texto="Gaming" />
            </div>
          </div>
          {/* Linha */}
          <div className="absolute top-[1800px] left-65 w-320 border-b border-gray-500"></div>



          <div>
            <ColorTextSection texto="This Month" />
            <div className="mt-[20px] flex justify-between">
              <TitleSection texto="Best Selling Products" />
              <Button texto="Ver Tudo" largura="159px" altura="56px" />
            </div>
            <div className="flex gap-[30px] overflow-hidden scroll-smooth whitespace-nowrap w-[calc(5*215px+4*30px)]">
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
              <Card img="red" texto="HAVIT HV-G92 Gamepad" valor="R$120,00" valorAntigo="R$160,00" estrelas="★★★★★" reviews="(88)" />
            </div>
          </div>


          {/* Body */}
        </div>
          {/* Function */}
    </div>
  );
}
