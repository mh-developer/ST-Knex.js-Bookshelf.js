const unitOfWork = require("../../core/db.service");

const getAll = () => {
    return unitOfWork.Location.fetchAll();
};

const get = (id) => {
    return unitOfWork.Location.where({ id: id }).fetch();
};

const create = (data) => {
    return unitOfWork.Location.forge({ ...data, id: null }).save();
};

const update = (id, data) => {
    return unitOfWork.Location.forge({ ...data, id }).save();
};

const remove = (id) => {
    return unitOfWork.Location.forge({ id: id }).destroy();
};

const locationsService = {
    getAll,
    get,
    create,
    update,
    remove,
};

module.exports = locationsService;
