import { rest } from 'msw'
import fruits from './data/fruits.json'

const handlers = [
	rest.get(`/api/fruits`, (_, response, context) =>
		response(context.json(fruits))
	)
]

export default handlers
