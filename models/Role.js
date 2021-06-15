const { Model } = require("objection")

class Role extends Model {

    static get tableName() {
        return "role"
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 2, maxLength: 255 },
                createdAt: { type: 'string' }, // optional
                updatedAt: { type: 'string' } // optional
            }
        };
    }
}

module.exports = Role