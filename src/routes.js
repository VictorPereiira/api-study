import { Router } from 'express';
import UserController from './api/controllers/UserController.js';

const routes = new Router();

routes.get("/users", UserController.show);
routes.get("/users/:id", UserController.read);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

export default routes;