const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
}

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// }

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
  } else {
    console.log("INCORRECT!")
  }
}

login('monkey', '$2b$10$7odQg5Qu.ZcTI6dCkAimHOlW0pYWbO8aFdscFELP/pJ3qh.PjnjkS')
hashPassword('monkey');

// $2b$10$7odQg5Qu.ZcTI6dCkAimHO 이건 솔트
// $2b$10$7odQg5Qu.ZcTI6dCkAimHOlW0pYWbO8aFdscFELP/pJ3qh.PjnjkS 이건 해시