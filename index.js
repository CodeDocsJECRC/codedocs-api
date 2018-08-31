const membersAll = require('./data/members.json')

exports.members = {
  all: membersAll
}

for (let alpha in membersAll) {
  exports.members[alpha] = membersAll[alpha]
}
