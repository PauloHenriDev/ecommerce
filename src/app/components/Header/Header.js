import Image from "next/image";
import SearchBar from "../SearchBar/SearchBar";
import iconHeart from "../../assets/img/heart.png";
import iconCarrinho from "../../assets/img/carrinho.png";
 
export default function Header() {
    return(
        <div className="flex h-25 items-center pt-[47px] mb-[15px]">

            <div className=" mr-5 md:mr-5 lg:mr-[80px] xl:mr-[150px]">
                <h1 className="font-poppins font-semibold text-[30px] cursor-pointer">Exclusive</h1>
            </div>



            <div className="flex md:gap-8 lg:gap-[35px] xl:gap-[45px] mr-4 md:mr-8 lg:mr-12 xl:mr-30">
                <button className="relative group cursor-pointer">
                    <span className="relative z-10">Home</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button className="relative group cursor-pointer">
                    <span className="relative z-10">Contact</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button className="relative group cursor-pointer">
                    <span className="relative z-10">About</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button className="relative group cursor-pointer">
                    <span className="relative z-10">Sign Up</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
            </div>


            <div className="flex gap-[36px] items-center">
                <SearchBar />
                <div className="flex items-center gap-[25px]">
                    <Image className="w-[30px] h-[30px]" src={iconHeart} />
                    <Image className="w-[30px] h-[40px]" src={iconCarrinho} />
                </div>
            </div>
        </div>
    )
}