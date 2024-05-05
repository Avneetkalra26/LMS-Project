const authSchema = require("../models/authSchema");
const bcrypt = require("bcrypt");
exports.signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body.data;
    const existUsername = await authSchema.findOne({ username });
    if (existUsername) {
      return res
        .status(400)
        .json({ error: "Username already exists.", errorCode: "username" });
    }
    const existEmail = await authSchema.findOne({email});
    if (existEmail) {
      return res
        .status(400)
        .json({ error: "Email already exists.", errorCode: "email" });
    }
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    const signupUser = await authSchema.create({
      username,
      email,
      password:encryptedPassword
    })
    res.status(201).json({
      success:true,
      registerData:signupUser,
      message:"Signed up successfully"

    })

  } catch (error) {
    console.log("Error in login user: ", error);
    res.status(500).json({
      success: "false",
      message: "Internal server Error",
    });
  }
};

// exports.signinUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const validUser = await authSchema.findOne({ email });
//     console.log(validUser);
//     if (!validUser) {
//       return res
//         .status(401)
//         .json({ error: "User does not exist.", errorCode: "email" });
//     }
//     const passwordIsValid = await bcrypt.compare(password, validUser.password);
//     if (!passwordIsValid) {
//       return res
//         .status(401)
//         .json({ error: "Invalid password.", errorCode: "password" });
//     }
//     res.status(200).json({
//       success: true,
//       data: validUser,
//       message: "Login Successfull",
//     });
//   } catch (error) {
//     console.log("Error in login user: ", error);
//     res.status(500).json({
//       success: "false",
//       message: "Internal server Error",
//     });
//   }
// };
