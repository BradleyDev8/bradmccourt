'use client';

import { useEffect, useState } from 'react';

interface DynamicDateProps {
  date: string;
}

export function DynamicDate({ date }: DynamicDateProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');
  
  useEffect(() => {
    // Function to format the date with time ago
    const formatDateWithTimeAgo = (dateString: string) => {
      if (!dateString) {
        return "";
      }
    
      const currentDate = new Date().getTime();
      
      if (!dateString.includes("T")) {
        dateString = `${dateString}T00:00:00`;
      }
      
      const targetDate = new Date(dateString).getTime();
      const timeDifference = Math.abs(currentDate - targetDate);
      const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
      const fullDate = new Date(dateString).toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    
      if (daysAgo < 1) {
        return "Today";
      } else if (daysAgo < 7) {
        return `${fullDate} (${daysAgo}d ago)`;
      } else if (daysAgo < 30) {
        const weeksAgo = Math.floor(daysAgo / 7);
        return `${fullDate} (${weeksAgo}w ago)`;
      } else if (daysAgo < 365) {
        const monthsAgo = Math.floor(daysAgo / 30);
        return `${fullDate} (${monthsAgo}mo ago)`;
      } else {
        const yearsAgo = Math.floor(daysAgo / 365);
        return `${fullDate} (${yearsAgo}y ago)`;
      }
    };

    // Format the date initially
    setFormattedDate(formatDateWithTimeAgo(date));
    
    // Set up an interval to update the date every hour
    const intervalId = setInterval(() => {
      setFormattedDate(formatDateWithTimeAgo(date));
    }, 60 * 60 * 1000); // Update every hour
    
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [date]);
  
  return <span>{formattedDate}</span>;
} 