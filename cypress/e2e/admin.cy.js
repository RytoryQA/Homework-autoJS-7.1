import admin from "../fixtures/login.json"

describe('template spec', () => {

  beforeEach( () => {
    cy.visit('/admin')
  })
  
  admin.forEach((user) => {
    it(user.name, () => {
      user.data.forEach((login) => {
        cy.login(`${login.email}`, `${login.password}`)
      })
      
    })
  })
})