export const getRandomGameItem = (gameItems) => {
  const index = Math.floor(Math.random() * gameItems.length);
  return gameItems[index];
};

export const calculatorUserWinner = (user1GameItem, user2GameItem) => {
  if (user1GameItem.id === user2GameItem.id) return "Peace";
  else if (user1GameItem.winItemIds.includes(user2GameItem.id)) return "Win";
  else return "Lost";
};
// why make extra js for this and utils folder
