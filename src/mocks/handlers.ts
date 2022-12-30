import { BASE_URL } from 'api'
import { rest } from 'msw'
import fruits from './data/fruits.json'

const handlers = [
	rest.get(`${BASE_URL}/fruits`, (_, response, context) =>
		response(context.json(fruits))
	)
]

export default handlers
