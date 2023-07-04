const bcrypt = require("bcrypt"); 

//hash passwords

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch {
    console.log("problem");
  }
};

module.exports = { hashPassword };
