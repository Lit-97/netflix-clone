const sortTitleZ_A = (list) => {
  const titles = list.map((el) => el.title || el.name).sort().reverse();
  return { type: "SORT_TITLE_Z_A", payload: titles.map((title) => list.find((el) => el.title === title || el.name === title)) };
};
export default sortTitleZ_A;
