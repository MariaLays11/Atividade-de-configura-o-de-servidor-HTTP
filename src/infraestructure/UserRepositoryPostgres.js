import pkg from "pg"
const { Pool } = pkg

import { UserRepository } from "../../domain/repositories/UserRepository.js"

export class UserRepositoryPostgres extends UserRepository {
  constructor() {
    super()
    this.pool = new Pool({
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || "docker",
      password: process.env.DB_PASS || "docker",
      database: process.env.DB_NAME || "intro_api"
    })
  }

  async create(user) {
    const query = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *"
    const values = [user.name, user.email]
    const result = await this.pool.query(query, values)
    return result.rows[0]
  }

  async findAll() {
    const result = await this.pool.query("SELECT * FROM users")
    return result.rows
  }
}
