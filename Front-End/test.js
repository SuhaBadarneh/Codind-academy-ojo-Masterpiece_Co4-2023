function isTokenExpired(token) {
  try {
    const decodedToken = jwt.decode(token, { complete: true });
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Check if the "exp" claim exists and is greater than the current timestamp
    if (
      decodedToken &&
      decodedToken.payload.exp &&
      decodedToken.payload.exp > currentTimestamp
    ) {
      return false; // Token is not expired
    } else {
      return true; // Token is expired
    }
  } catch (error) {
    return true; // An error occurred or token is malformed (consider it expired)
  }
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTEzZmRiYzhlNGUyZmJiZWEyZTA1NzEiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjk1ODIyOTQyLCJleHAiOjE2OTU5MDkzNDJ9.g38GHZWB6hgU_a6b_ss1alLrIjgvmQTwjqz6oEUPCd4";
console.log(isTokenExpired(token));
