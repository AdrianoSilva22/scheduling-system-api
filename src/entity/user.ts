class UserEntity {
    ID: string | null
    name: string
    email: string
    password: string
    phone: string
    createdAt: Date
    updatedAt: Date
  
    constructor(ID: string | null, name: string, email: string, password: string, phone: string, createdAt: Date, updatedAt: Date) {
      this.ID = ID
      this.name = name
      this.email = email
      this.password = password
      this.phone = phone
      this.createdAt = createdAt
      this.updatedAt = updatedAt
    }
  }
  
  export {
  UserEntity
}

