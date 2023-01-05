import type { ResponseComposition, RestContext } from 'msw'
import { rest } from 'msw'
import actuals from './data/actuals.json'
import fruits from './data/fruits.json'

const handlers = [
	rest.get(
		`/api/fruits`,
		(_, response: ResponseComposition, context: RestContext) =>
			response(context.json(fruits))
	),
	rest.get(
		`api/actuals/1`, // 1 is due to limitation of mockapi.io
		(_, response: ResponseComposition, context: RestContext) =>
			response(context.json(actuals))
	)
]

export default handlers
