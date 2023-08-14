function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);
  return date.toLocaleString([], { month: "long" });
}

export function manipulateDate(date: string) {
  const splitDate = date.split("-");
  return {
    year: splitDate[0],
    month: getMonthName(+splitDate[1]),
    day: splitDate[2],
  };
}
