const membersAll = require('./data/members.json')

exports.members = {
  all: membersAll
}

for (let alpha in membersAll) {
  exports.members[alpha] = membersAll[alpha]
}

exports.members.skill = function (...args) {
  let skilledMembers = []

  for (let alpha in membersAll) {
    let memberSkills = membersAll[alpha].skills
    if (args.every(skill => memberSkills.includes(skill))) {
      skilledMembers.push(membersAll[alpha])
    }
  }

  return skilledMembers
}
