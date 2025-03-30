"use client"

export default function ColorTextSection ({ texto }) {
    return (
        <div className="flex gap-[16px] items-center">
            <div className="w-5 h-9 bg-red-500 rounded-[5px]"></div>
            <p className="text-red-500">{texto}</p>
        </div>
    )
};