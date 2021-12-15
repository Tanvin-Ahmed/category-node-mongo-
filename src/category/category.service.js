const Post = require("./category.model");

module.exports.postCategory = async category => await Post.create(category);

module.exports.getAllCategory = async () => await Post.find({});

module.exports.getCategoryByName = async name => await Post.findOne({ name });

module.exports.updateCategory = async (data, _id) =>
	await Post.findByIdAndUpdate(_id, data, { new: true });

module.exports.deleteCategoryById = async _id => await Post.deleteOne({ _id });
