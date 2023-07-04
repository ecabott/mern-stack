const contactModel = require('./contact.model');

const create = (payload) => {
    // Writing in DB
    return contactModel.create(payload);
};

const list = () => {
    return contactModel.find();
};

const getById = (id) => {
    return contactModel.findOne(id);
};

const update = (id, payload) => {
    return contactModel.updateOne(id, payload);
};

const remove = (id) => {
    return contactModel.deleteOne(id);
};

module.exports = {create, list, getById, update, remove};