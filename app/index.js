import express from 'express'
import router from '../routes/routes.js'

class App {
    constructor() {
        this.app = express()
        this.port = 3000
    }

    appRouter() {
        this.app.use('/api', router)
    }

    runServer() {
        this.appRouter()
        this.app.listen(this.port,
            err => err ? console.log(`Error in the server running ${err}`) : console.log(`Server running at the port: ${this.port}`))
    }
}

export default App