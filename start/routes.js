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
Route.resource('pool', 'PoolController').apiOnly().middleware('auth');
Route.post('option/:id', 'OptionController.store').middleware('auth');
Route.post('vote/:id', 'VoteController.store').middleware('auth');
Route.get('votes/:id', 'VoteController.show').middleware('auth');
