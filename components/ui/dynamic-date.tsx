'use client';

import { useEffect, useState } from 'react';
import { formatDateWithTimeAgo } from '@/lib/string';

interface DynamicDateProps {
  date: string;
}

export function DynamicDate({ date }: DynamicDateProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
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