function filterData({ list, height}) {
  const filtered = list.filter((player) => {
    return height == player.h_in
  });
  return filtered;
}

module.exports = filterData;
