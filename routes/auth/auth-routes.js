const express = require("express");
const { registerUser, loginUser } = require("../../controllers/auth/auth-controller"); // Use destructuring to import both functions


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);



module.exports = router;