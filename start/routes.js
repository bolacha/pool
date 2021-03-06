'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.post('/users', 'UserController.store')
Route.post('/sessions', 'SessionController.store')
Route.get('/pool', 'PoolController.index')
Route.post('/pool', 'PoolController.store').middleware(['auth']);
Route.get('/pool/:id', 'PoolController.show').middleware(['auth', 'pool_owner']);
Route.delete('/pool/:id', 'PoolController.destroy').middleware(['auth', 'pool_owner']);

//Route.resource('pool', 'PoolController').apiOnly().middleware(['auth']);
Route.post('option/:id', 'OptionController.store').middleware(['auth', 'pool_owner']);
Route.post('vote/:id', 'VoteController.store').middleware(['auth', 'pool_owner']);
Route.get('votes/:id', 'VoteController.show').middleware(['auth', 'pool_owner']);
