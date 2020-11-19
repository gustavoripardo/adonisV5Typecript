/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get('users/:id', 'UsersController.show')
Route.makeUrl('UsersController.show', {
  params: { id: 1 },
  qs: {
    status: 'active',
  },
})

Route.get('/verify/:email', async ({ request }) => {
  if (request.hasValidSignature()) {
    return 'Marking email as verified'
  }

  return 'Url is not valid'
}).as('verifyEmail')

Route.get('/get_verification_link', async () => {
  const signedUrl = Route.makeSignedUrl('verifyEmail', {
    params: {
      email: 'foo@bar.com',
    },
    expiresIn: '30m',
    purpose: 'vef',
  })

  return signedUrl
})
