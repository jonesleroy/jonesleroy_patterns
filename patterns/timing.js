/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  for (const isAllEven of numbers) {
    if (isAllEven % 2 === 0) {
      return true;
    } if (isAllEven % 2 !== 0) {
      return false;
    }
  }
}

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {


  for (const haveEnoughFood of backpack) {
    if (people >= 0) {
      return true
    } else if (people < 0) {
      return false
    }    
  } if (backpack > 0) {
    return true
  } else if (backpack <= 0) {
    return false
  }  
    if (backpack > people) {
      return true
    } else if (backpack < people) {
      return false
    }; 
}
