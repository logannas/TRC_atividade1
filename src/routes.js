import { Router } from "express";

import UseController from './app/controllers/UseController'

const routes = new Router()

routes.post("/disciplinas", UseController.store);
routes.get("/disciplinas", UseController.index);
routes.get("/disciplinas/:id", UseController.indexid);
routes.put("/disciplinas/:id", UseController.update)
routes.delete("/disciplinas/:id", UseController.delete)

export default routes;