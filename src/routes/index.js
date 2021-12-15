const express = require("express");
const {
	PostCategory,
	GetAllCategory,
	GetCategoryByName,
	UpdateCategory,
	DeleteCategoryById,
} = require("../category/category.controller");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("index", { title: "Express" });
});

// category operation
router.post("/post-category", PostCategory);
router.get("/get-allCategory", GetAllCategory);
router.get("/get-category/:name", GetCategoryByName);
router.put("/update-category/:id", UpdateCategory);
router.delete("/delete-category/:id", DeleteCategoryById);

module.exports = router;
