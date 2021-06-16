const Base = require("./Base")
const User = require("./User")
const Facility = require("./Facility")
const AccessProfile = require("./AccessProfile")


class AccessRight extends Base {

    static get tableName() {
        return "access_right"
    }

    static get relationMappings() {
        return {
            user: {
                relation: Base.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "access_right.userId",
                    to: "user.id"
                }
            },
            facility: {
                relation: Base.BelongsToOneRelation,
                modelClass: Facility,
                join: {
                    from: "access_right.facilityId",
                    to: "facility.id"
                }
            },
            accessProfile: {
                relation: Base.BelongsToOneRelation,
                modelClass: AccessProfile,
                join: {
                    from: "access_right.accessProfileId",
                    to: "access_profile.id"
                }
            }
        }
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['userId', 'facilityId', 'accessProfileId', ],
            properties: {
                id: { type: 'integer' },
                userId: { type: 'integer' },
                facilityId: { type: 'integer' },
                accessProfileId: { type: 'integer' },
                createdAt: { type: 'string' }, // optional
                updatedAt: { type: 'string' } // optional
            }
        };
    }
}

module.exports = AccessRight