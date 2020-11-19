import Route from '@ioc:Adonis/Core/Route'

export default class UsersController {
  public async index({ response }) {
    response.redirect(
      Route.makeUrl('UsersController.show', {
        params: { id: 1 },
        qs: {
          status: 'active',
        },
      })
    )
  }
  public async show() {
    return {
      message: 'iae',
    }
  }
}
