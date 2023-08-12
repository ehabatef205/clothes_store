const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  viewProfile,
  signUp,
  updateProfile,
  deleteProfile,
  login,
  getall,
  search
} = require("../../controllers/UserController");

router.get("/view_profile", checkToken, viewProfile);
router.get("/", checkToken, getall);
router.post("/sign_up", signUp);
router.post("/search",checkToken, search);
router.post("/login", login);
router.patch("/update_profile", checkToken, updateProfile);
router.delete("/delete_profile", checkToken, deleteProfile);

module.exports = router;
