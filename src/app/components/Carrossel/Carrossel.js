"use client"; // Permite o uso de hooks no Next.js 13+

import { useState, useEffect } from "react";
import Image from "next/image";

// Importando as imagens corretamente
import imagemUm from "../../assets/img/bg-vermelho.jpg";
import imagemDois from "../../assets/img/bg-blue.jpg";
import imagemTres from "../../assets/img/green-bg.jpg";
import imagemQuatro from "../../assets/img/controle.png";

const images = [imagemUm, imagemDois, imagemTres, imagemQuatro];

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500); // Troca de imagem a cada 3.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[892px] h-[344px] md:max-w-[250px] lg:max-w-[750px] xl:max-w-[892px] mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Indicadores abaixo do carrossel */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
