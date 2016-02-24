import UserRepo from '../repositories/user.repository.js';

export async function getUser(req, res) {
    try {
        if (!req.params.user_id) {
            return res.send("User id not found").status(404);
        }

        let user = await UserRepo.findById(req.params.user_id);
        let users = await UserRepo.findAll();
        res.send(users);

    } catch (err) {
        res.send(`
            <h2>${err.message}</h2>
            <pre>${err.stack}</pre>
        `).status(500);
    }
}