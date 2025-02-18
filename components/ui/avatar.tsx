import React from "react";
import Image from "next/image";

export default function Avatar({
    width = 72,
    height = 72,
}: {
    width?: number;
    height?: number;
}) {
    return (
        <div 
            className="overflow-hidden rounded-full"
            style={{
                width: width,
                height: height,
                minWidth: width,
                minHeight: height
            }}
        >
            <Image 
                quality={100}
                loading="eager" 
                src="/brad2.jpg" 
                alt="Brad McCourt" 
                width={width} 
                height={height}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            /> 
        </div>
    );
}