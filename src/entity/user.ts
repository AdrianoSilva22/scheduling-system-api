class UserEntity {
  ID: string
  name: string
  email: string
  password: string
  phone: string
  role: "manager" | "professional" | "client"
  createdAt: Date
  updatedAt: Date

  constructor(ID: string, name: string, email: string, password: string, phone: string, role: "manager" | "professional" | "client", createdAt: Date, updatedAt: Date) {
    this.ID = ID
    this.name = name
    this.email = email
    this.password = password
    this.phone = phone
    this.role = role
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export {
UserEntity
}

