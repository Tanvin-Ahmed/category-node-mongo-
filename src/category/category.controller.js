const {
	postCategory,
	getAllCategory,
	getCategoryByName,
	updateCategory,
	deleteCategoryById,
} = require("./category.service");

module.exports.PostCategory = async (req, res) => {
	try {
		const { body } = req;
		body.slag = body.slag.trim().split(" ").join("_");
		const category = await postCategory(body);
		return res.status(200).json(category);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports.GetAllCategory = async (req, res) => {
	try {
		const allCategory = await getAllCategory();
		res.status(200).json(allCategory);
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports.GetCategoryByName = async (req, res) => {
	try {
		const name = req.params.name;
		const category = await getCategoryByName(name);
		res.status(200).json(category);
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports.UpdateCategory = async (req, res) => {
	try {
		const { body } = req;
		if (body?.slag) {
			body.slag = body.slag.trim().split(" ").join("_");
		}
		const updatedCategory = await updateCategory(body, req.params.id);
		return res.status(200).json(updatedCategory);
	} catch (error) {
		return res.status(500).json(error);
	}
};

module.exports.DeleteCategoryById = async (req, res) => {
	try {
		const id = req.params.id;
		const deletedCategory = await deleteCategoryById(id);
		return res.status(200).json(deletedCategory);
	} catch (error) {
		return res.status(200).json(error);
	}
};
