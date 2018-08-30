const assert = require('assert')
const members = require('..').members

describe('members', function() {
  describe('all', function() {
    it('should have members', function() {
      assert(Object.keys(members.all).length > 0)
    })
  })
})