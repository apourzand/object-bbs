const User = require('../models/User')
const AccessRightDAO = require('./accessRight')

class UserDAO {
  findAll() {
    return User.query().withGraphFetched('role').withGraphFetched('accessRights')
  }

  findById(id) {
    return User.query().findById(id).withGraphFetched('role').withGraphFetched('accessRights')
  }

  async add(data) {
    // Add the User.
    User.fromJson(data);
    let user = await User.query().insert(data);

    // return the user object
    return user;
  }

  async update(id, data) {
    // Update the User.
    if (data.accessRights) {
      // get the current access rights
      const oldAccessrights = await AccessRightDAO.findByUserId(id)
      const newAccessrights = data.accessRights;
      // build array with ids
      let oldAccessrightIds = oldAccessrights.map(({ id }) => id)
      let newAccessrightIds = newAccessrights.map(({ id }) => id)
      // https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript
      let difference = oldAccessrightIds.filter(x => !newAccessrightIds.includes(x));
      difference.forEach((id) => {
        AccessRightDAO.delete(id)
      })
      newAccessrights.forEach((x) => {
        //console.log(x)
        if (x.hasOwnProperty('id')) {
          AccessRightDAO.update(x.id, x)
        } else {
          // add user id
          x.userId = parseInt(id) 
          AccessRightDAO.add(x)
        }
      })
    }
    const user = await User.query()
      .patchAndFetchById(id, data);

    // return the user object
    return user
  }

  async delete(id) {
    // Delete the user.
    const numDeleted = await User.query().deleteById(id);

    // return the numDeleted
    return numDeleted
  }

  findByEmail(email) {
    return User.query().findOne('email', email).withGraphFetched('role')
  }
}

module.exports = new UserDAO()
