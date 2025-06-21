// Code your solution here
// 1. findMatching()
// Returns all drivers that match the passed-in name (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. fuzzyMatch()
// Returns drivers whose names begin with the provided letters (case-sensitive)
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// 3. matchName()
// Returns drivers whose 'name' property matches the passed string exactly
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
