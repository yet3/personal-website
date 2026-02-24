const MONTH_YEAR_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

export const makeExperienceDate = (month: number, year: number) => {
  return new Date(year, month - 1);
};

export const formatExperienceDates = (start: Date, end?: Date) => {
  const startStr = MONTH_YEAR_FORMAT.format(start);
  const endStr = end ? MONTH_YEAR_FORMAT.format(end) : "Now";

  return `${startStr} - ${endStr}`;
};
