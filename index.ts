import {FastifyServerOptions}  from 'fastify'
import buildApp from  './src/build/app'

import config from './src/build/config'

const option : FastifyServerOptions = {
    logger:true,
}
const app = buildApp(option)


app.listen(config.port)