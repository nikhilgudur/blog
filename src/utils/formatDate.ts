type DateFormatOptions = {
  year: "numeric";
  month: "long";
  day: "numeric";
};

export function formatDate(date: string): string {
  const options: DateFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
}
