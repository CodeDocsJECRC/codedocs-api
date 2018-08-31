const assert = require('assert')
const members = require('..').members

describe('members', function () {
  describe('all', function () {
    it('should have members', function () {
      assert(Object.keys(members.all).length > 0)
    })
  })

  describe('a member', function () {
    it('should fetch a member', function () {
      assert(members.maddhruv)
    })
  })

  describe('not a member', function () {
    it('should not show a member', function () {
      assert(!members.alpha)
    })
  })

  describe('has name', function () {
    it('should have a name', function () {
      assert(members.maddhruv.name === 'Dhruv Jain')
    })
  })

  describe('has class', function () {
    it('should have a class', function () {
      assert(members.maddhruv.class === 'individual member')
    })
  })

  describe('has skills', function () {
    it('should have skills', function () {
      assert(Array.isArray(members.maddhruv.skills))
    })
  })

  describe('has avatar', function () {
    it('should have an avatar', function () {
      assert(members.maddhruv.avatar)
    })
  })
})
