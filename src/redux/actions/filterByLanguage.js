const filterByLanguage = (list, language) => {
  if (!language) return { type: "FILTER_BY_LANGUAGE", payload: [] };
  return { type: "FILTER_BY_LANGUAGE", payload: list.filter((el) => el.original_language === language.toLowerCase()) };
};
export default filterByLanguage;
