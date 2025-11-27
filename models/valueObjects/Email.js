export class Email {
  constructor(value) {
    this.value = value;
  }

  static create(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      throw new Error("Email inválido");
    }

    return new Email(email);
  }
}
