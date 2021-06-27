export const mapTimestampToDate = (timestamp: number): Date =>
  new Date(timestamp * 1000);

export const mapDateToTimestamp = (date: Date): number =>
  Number(date.getTime() / 1000);

export const addMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const floorHours = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0);
  return newDate;
};

export const ceilHours = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59);
  return newDate;
};
