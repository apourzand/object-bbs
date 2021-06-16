const Facility = require('../models/facility')

class FacilityDAO {
  findAll() {
    return Facility.query()
  }

  findById(id) {
    return Facility.query().findById(id)
  }

  async add(data) {
    // Add the Facility.
    Facility.fromJson(data);
    let facility = await Facility.query().insert(data);

    // return the facility object
    return facility;
  }

  async update(id, data) {
    // Update the Facility.
    const facility = await Facility.query()
    .patchAndFetchById(id, data);
  
    // return the facility object
    return facility
  }

  async delete(id) {
    // Delete the Facility.
    const numDeleted = await Facility.query().deleteById(id);

    // return the numDeleted
    return numDeleted
  }
}

module.exports = new FacilityDAO()
