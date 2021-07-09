
const raParamParser = (params, res) => {
    if (params._start !== undefined & params._end !== undefined) {
        res.range(params._start, params._end - 1)
    }
    if (params._sort !== undefined & params._order !== undefined) {
        res.orderBy(params._sort, params._order)
    }

    if (params._filter !== undefined) {
        let filter = JSON.parse(params._filter)
        Object.keys(filter).forEach((item) => {
            switch (typeof (filter[item])) {
                case 'string':
                    res.where(item, 'like', '%' + filter[item] + '%')
                    break;
                case 'boolean':
                    res.where(item, filter[item] ? 1 : 0)
                    break;
                default:
                    res.where(item, filter[item])
            }

        })
    }
    return res
}

module.exports = raParamParser