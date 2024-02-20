const {User} = require ('../models');

module.exports.createUser = async (req, res, next) => {
    try {
        const {body} = req;
        console.log(body);
        const createdUser = await User.create(body);
        res.status(201).send(createdUser);
    } catch (error) {
        next(error);
    }
}

module.exports.getOneUser = async (req, res, next) => {
    try {
        const {userInstance} = req;
        res.status(200).send(userInstance);
    } catch (error) {
        next(error);
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.findAll();
        res.status(200).send(allUsers);
    } catch (error) {
        next(error);
    }
}

module.exports.updateUser = async (req, res, next) => {
    try {
        const { userInstance, body } = req;
        const result = await userInstance.update(body);
        return res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteUser = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const rowsCount = await User.destroy({
            where: {
                id: userId
            }
        });

        if(rowsCount > 0) {
            return res.status(200).send('Succesfull delete!');
        } else {
            return res.status(404);
        }
    } catch (error) {
        next(error);
    }
}