const unitOfWork = require("../../core/db.service");

const getAll = () => {
    return unitOfWork.User.fetchAll();
};

const get = (id) => {
    return unitOfWork.User.where({ id: id }).fetch();
};

const create = (data) => {
    return unitOfWork.User.forge({ ...data, id: null }).save();
};

const update = (id, data) => {
    return unitOfWork.User.forge({ ...data, id }).save();
};

const remove = (id) => {
    return unitOfWork.User.forge({ id: id }).destroy();
};

const usersService = {
    getAll,
    get,
    create,
    update,
    remove,
};

module.exports = usersService;
