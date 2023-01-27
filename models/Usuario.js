import { faker } from '@faker-js/faker'

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid()
        this.primerNombre = faker.name.firstName()
        this.apellido = faker.name.lastName()
        this.telefono = faker.phone.number()
        this.email = faker.internet.email()
        this.contrasena = faker.internet.password()
    }
}

export default Usuario;