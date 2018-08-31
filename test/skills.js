const assert = require('assert')
const members = require('..').members

describe('skills', function () {
  describe('has any member', function () {
    it('should be an array comprising at least a member', function () {
      assert(members.skill('react', 'nodejs').length > 0)
    })
  })

  describe('has no member with the skill', function () {
    it('should be an empty array', function () {
      assert(members.skill('foo').length === 0)
    })
  })
})
