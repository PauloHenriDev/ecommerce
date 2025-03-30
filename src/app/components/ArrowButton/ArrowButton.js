import Image from "next/image";

import leftArrow from '../../../app//assets/img/Fill With Left Arrow.jpg';
import rightArrow from '../../../app//assets/img/Fill With Right Arrow.jpg';

export default function ArrowButton ({ handleScroll }) {
    return (
        <div className="gap-[8px] flex">
            <div>
                <button className="cursor-pointer">
                    <Image src={leftArrow} onClick={() => handleScroll("left")} />    
                </button>
            </div>

            <div>
                <button className="cursor-pointer">
                    <Image src={rightArrow} onClick={() => handleScroll("right")} />    
                </button>
            </div>
        </div>
    )
};