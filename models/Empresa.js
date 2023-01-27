import { faker } from '@faker-js/faker'
class Empresa {
    constructor() {
        this._id = faker.datatype.uuid()
        this.nombre = faker.company.name()
        this.direccion = {
            calle: faker.address.street(),
            ciudad: faker.address.cityName(),
            estado: faker.address.state(),
            codigo_postal: faker.address.countryCode(),
            pais: faker.address.country()
        }
    }
}

export default Empresa