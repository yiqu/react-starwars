export const capitalizeFirstLetter = (string?: string): string => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return '';
};

export const camelToWord = (text: string): string => {
  if (text) {
    const arr = text.split("_");
    const words = arr.join(" ");
    return words;
  }
  return 'None';
};