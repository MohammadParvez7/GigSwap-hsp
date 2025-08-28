const express=require("express");
const router=express.Router();
// const {home,register}=require("../controllers/auth-controller");
const authcontrollers=require("../controllers/auth-controller");
const {signupSchema,loginSchema}=require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");
const authMiddleware= require("../middlewares/auth-middleware");

// router.get("/",(req,res)=>{
//   res.status(200).send("Welcome home using router");
// });

// router.route("/").get((req,res)=>{
//   res.status(200).send("Welcome home new router");
// })

router.route("/").post(authcontrollers.home);
router
.route("/register")
.post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema),authcontrollers.login);

router.route("/user").get(authMiddleware,authcontrollers.user);

module.exports=router;