const { Model } = require("objection")
const { format } = require("fecha")

class Base extends Model {
    $beforeUpdate() {
        this.updatedAt = format(new Date(), 'isoDateTime').slice(0, 19).replace('T', ' ')
    }
}

module.exports = Base