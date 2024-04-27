import selects from '../fixtures/selectors'

describe('template spec', () => {
  beforeEach( () => {
    cy.visit('/')
  })

  it('make a reservation a movie ticket to the hall from the /admin', () => {
    cy.get(selects.weekDays).eq(6).click()
    cy.get(selects.movieAdmin).contains(selects.timeSessionAdmin).click()
    cy.get(selects.seatAdmin).click()
    cy.get(selects.buttonAcc).click()
    cy.contains(selects.expected).should('be.visible')
  })
})