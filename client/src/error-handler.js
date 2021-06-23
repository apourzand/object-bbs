export const errorHandler = (error) => {
    var errors = {}
    Object.keys(error.data).forEach((item) => {
        errors[item] = error['data'][item][0].message
    })
    return errors
}
