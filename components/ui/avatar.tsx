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
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="overflow-hidden rounded-full relative"
            style={{
                width: width,
                height: height,
                minWidth: width,
                minHeight: height
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full h-full">
                <Image 
                    quality={100}
                    loading="eager" 
                    src={isHovered ? "/neo.PNG" : "/brad2.jpg"}
                    alt="Avatar" 
                    width={width} 
                    height={height}
                    className={`h-full w-full object-cover transition-all duration-300 ${
                        isHovered ? 'scale-110' : ''
                    }`}
                />
                {/* Shiny effect overlay */}
                <div 
                    className={`absolute inset-0 pointer-events-none transition-transform duration-700 ease-in-out ${
                        isHovered ? 'translate-x-full' : '-translate-x-full'
                    }`}
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
                    }}
                />
            </div>
        </div>
    );
}