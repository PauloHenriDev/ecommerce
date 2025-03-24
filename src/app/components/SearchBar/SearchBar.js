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
                 className='bg-[#F5F5F5] pt-2 pb-2 pr-5 pl-5 w-70 rounded-[5px]' 
             />
             <Image className='absolute bottom-2.5 right-4' src={Lupa} alt='lupa' width={20} height={20} />
         </form>
     )
 };