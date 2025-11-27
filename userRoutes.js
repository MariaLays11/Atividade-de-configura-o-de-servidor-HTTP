import UserController from "../controllers/UserController.js";

async function userRoutes(fastify, options) {
  
  fastify.post("/", UserController.create);

  fastify.get("/", UserController.getAll);

  fastify.get("/:id", UserController.getOne);

  fastify.put("/:id", UserController.update);

  fastify.delete("/:id", UserController.delete);

}

export default userRoutes;
