'use client';
 import { useState } from 'react';
 import Image from "next/image";
 import Lupa from "../../assets/img/lupa.png";
 
export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleImputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return(
        <form onSubmit={handleSearch} className='relative'>
            <input 
                type='text' 
                value={query} 
                onChange={handleImputChange} 
                placeholder='Pesquisar...' 
                className='bg-[#F5F5F5] pt-[10px] pb-[10px] pr-[70px] pl-[10px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[850px] rounded-[5px]' 
            />
            <Image className='absolute bottom-3 right-4' src={Lupa} alt='lupa' width={20} height={20} />
        </form>
    )
};