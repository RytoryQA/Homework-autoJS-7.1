import selects from '../fixtures/selectors'

describe('template spec', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  it('buy a seat where the hall and the movie in /admin', () => {
    cy.get(selects.weekDays).eq(6).click()
    cy.get(selects.movieAdmin).contains(selects.timeSessionAdmin).click()
    cy.get(selects.seatAdmin).click()
    cy.get(selects.buttonAcc).click()
    cy.contains(selects.expected).should('be.visible')
  })
})