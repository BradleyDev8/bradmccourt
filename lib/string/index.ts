export function formatDate(timestamp: string) {
    if (!timestamp) {
      return "";
    }
  
    try {
      // Parse the timestamp string to a Date object in UTC
      const date = new Date(timestamp + "T13:00:00Z");
  
      // Create a formatter for EST timezone
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
  
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }
  
      // Format the date
      return formatter.format(date);
    } catch (err) {
      console.error("Invalid timestamp format:", timestamp, err);
      return timestamp;
    }
  }

export function formatDateWithTimeAgo(date: string) {
  if (!date) {
    return "";
  }

  const currentDate = new Date().getTime();
  
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  
  const targetDate = new Date(date).getTime();
  const timeDifference = Math.abs(currentDate - targetDate);
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = new Date(date).toLocaleString("en-us", {
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
}