import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { logger, errorLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database Connection Successful')

    app.listen(config.port, () => {
      logger.info(`Application Listening at port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`error connecting to database\n\t${error}`)
  }
}

bootstrap()
