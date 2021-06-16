var fs = require('fs')
const toUcFirst = str => str.charAt(0).toUpperCase() + str.slice(1)

var entity = 'haha'

var dirs = ['dao', 'service', 'controller', 'route',]

dirs.forEach(dir => {
    var actualdir = (dir !== 'dao') ? dir + 's' : dir
    var stubFile = './stubs/' + dir + '.stb'
    var destFile = './' + actualdir + '/' + entity + '.js'
    console.log('from ' + stubFile + ' to ' + destFile)
    
    fs.readFile(stubFile, 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        }

        var result = data.replace(/##lc##/g, entity)
            .replace(/##UC##/g, toUcFirst(entity))

        fs.writeFile(destFile, result, 'utf8', function (err) {
            if (err) return console.log(err)
        })
    })

})


