import Image from "next/image";
 import SearchBar from "../SearchBar/SearchBar";
 import iconHeart from "../../assets/img/heart.png";
 import iconCarrinho from "../../assets/img/carrinho.png";
 
 export default function Header() {
     return(
         <div className="flex h-25 items-center pt-8 pb-2">
             <div className="mr-45">
                 <h1 className="font-poppins font-semibold text-[30px]">Exclusive</h1>
             </div>
             <div className="flex gap-[48px] mr-25">
                 <button className="relative group">
                     <span className="relative z-10">Home</span>
                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                 </button>
                 <button className="relative group">
                     <span className="relative z-10">Contact</span>
                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                 </button>
                 <button className="relative group">
                     <span className="relative z-10">About</span>
                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                 </button>
                 <button className="relative group">
                     <span className="relative z-10">Sign Up</span>
                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                 </button>
             </div>
             <div className="flex gap-[24px] items-center">
                 <div>
                     <SearchBar />
                 </div>
                 <div className="flex ">
                     <Image className="w-6 h-6" src={iconHeart} />
                     <Image className="w-6 h-6" src={iconCarrinho} />
                 </div>
             </div>
         </div>
     )
 }