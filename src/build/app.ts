import fastify, { FastifyServerOptions } from 'fastify'

const buildApp = (options: FastifyServerOptions) => {

   
    
    const app = fastify(options)
    app.get('/', async () => 'OK')


    return app
}

export default buildApp 