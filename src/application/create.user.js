import { User } from "../../domain/entities/User.js" // importa a entidade do domínio

export class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository  // recebe o repositório (Postgres, memória, etc)
  }

  async execute(data) {
    const { name, email } = data

    // 1️⃣ Regras de negócio — validação básica
    if (!name || !email) {
      throw new Error("Nome e email são obrigatórios.")
    }

    // 2️⃣ Cria um novo usuário com base na entidade de domínio
    const user = new User(name, email)

    // 3️⃣ Salva no repositório (banco de dados)
    const createdUser = await this.userRepository.create(user)

    // 4️⃣ Retorna o resultado para o controller
    return createdUser
  }
}
