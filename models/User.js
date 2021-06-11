const { Model } = require("objection");
const Role = require("./Role");


class User extends Model {

    static get tableName() {
        return "user";
    }

    static get relationMappings() {
        return {
            role: {
                relation: Model.BelongsToOneRelation,
                modelClass: Role,
                join: {
                    from: "user.roleId",
                    to: "role.id"
                }
            }
        }
    }
}

module.exports = User;