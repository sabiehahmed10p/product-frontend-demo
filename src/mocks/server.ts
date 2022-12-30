import type { SetupServerApi } from 'msw/node'
import { setupServer } from 'msw/node'
import handlers from './handlers'

const server: SetupServerApi = setupServer(...handlers)
export default server
