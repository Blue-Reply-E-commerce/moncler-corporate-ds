export const toBoolean = (value: unknown) => {
  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }
  return !!value; // Converts non-boolean values to a boolean (null/undefined -> false)
};

// Format date for display
export const formatEventDate = (date: Date, locale: "en") => {
  return {
    month: date.toLocaleString(`${locale}-${locale === "en" ? "US" : "IT"}`, { month: "long" }),
    year: date.getFullYear().toString(),
    day: date.getDate().toString(),
    fullDate: date.toLocaleDateString(`${locale}-${locale === "en" ? "US" : "IT"}`, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
};
