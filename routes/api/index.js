const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes.js");

// set up routes and prefix them
router.use("/burgers", burgerRoutes);


module.exports = router;