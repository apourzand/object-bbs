const Base = require("./Base")
const Role = require("./Role")


class User extends Base {

    static get tableName() {
        return "user"
    }

    static get relationMappings() {
        return {
            role: {
                relation: Base.BelongsToOneRelation,
                modelClass: Role,
                join: {
                    from: "user.roleId",
                    to: "role.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['firstName', 'lastName', 'email', 'roleId', ],
            properties: {
                id: { type: 'integer' },
                firstName: { type: 'string', minLength: 2, maxLength: 255 },
                lastName: { type: 'string', minLength: 2, maxLength: 255 },
                email: { type: 'string', format: 'email' },
                roleId: { type: 'integer' },
                createdAt: { type: 'string' }, // optional
                updatedAt: { type: 'string' } // optional
            }
        };
    }
}

module.exports = User