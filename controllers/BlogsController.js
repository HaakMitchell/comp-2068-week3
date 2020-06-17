const viewPath = ('blogs');
const Blog = require('../models/blog');

exports.index = (req, res) => {
    res.send('index');
};

exports.show = (req, res) => {
    res.send('hi');
};

exports.new = (req, res) => {
    res.render(`${viewPath}/new`,{
        pageTitle: 'New Blog'
    });
};

exports.create = (req, res) => {
    res.send('hi');
};

exports.edit = (req, res) => {
    res.send('hii');
};

exports.update = (req, res) => {
    res.send('hiiii');
};

exports.delete = (req, res) => {
    res.send('bye');
};