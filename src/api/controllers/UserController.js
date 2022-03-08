// import { connection, queryDatabase } from '../models/UserModel.js';

const users = [
    {
        name: 'Juvelison',
        email: 'oreidelas@gmail.com'
    }, {
        name: 'Maricleide',
        email: 'arainhaferoz@gmail.com'
    },
];

class UserController {
    show(req, res) {
        res
            .status(200)
            .send({
                error: false,
                data: users
            });
    };

    read(req, res) {
        res
            .status(200)
            .send({
                error: false,
                data: `User: ${req.params.id} selected.`
            });
    };

    store(req, res) {
        const { name, email } = req.body;

        res
            .status(200)
            .send({
                error: false,
                data: { name, email }
            });
    };

    update(req, res) {
        res
            .status(200)
            .send({
                error: false,
                data: `User: ${req.params.id} updated.`
            });
    };

    delete(req, res) {
        res
            .status(200)
            .send({
                error: false,
                data: `User: ${req.params.id} deleted.`
            });
    };
};

export default new UserController();