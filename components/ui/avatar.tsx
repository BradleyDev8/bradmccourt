"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Avatar({
    width = 72,
    height = 72,
}: {
    width?: number;
    height?: number;
}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div 
            className="overflow-hidden rounded-full relative"
            style={{
                width: width,
                height: height,
                minWidth: width,
                minHeight: height
            }}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
            onClick={() => setIsActive(!isActive)}
        >
            <div className="relative w-full h-full">
                <Image 
                    quality={100}
                    loading="eager" 
                    src={isActive ? "/BradSki.png" : "/BradSkiReal.png"}
                    alt="Avatar" 
                    width={width} 
                    height={height}
                    className={`h-full w-full object-cover object-top transition-all duration-300 ${
                        isActive ? '' : ''
                    }`}
                />
                {/* Shiny effect overlay */}
                <div 
                    className={`absolute inset-0 pointer-events-none transition-transform duration-700 ease-in-out ${
                        isActive ? 'translate-x-full' : '-translate-x-full'
                    }`}
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transform: isActive ? 'translateX(100%)' : 'translateX(-100%)'
                    }}
                />
            </div>
        </div>
    );
}