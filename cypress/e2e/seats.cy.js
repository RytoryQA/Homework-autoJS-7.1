import tests from '../fixtures/seatsList'
import selects from '../fixtures/selectors'

describe('template spec', () => {
  beforeEach( () => {
    cy.visit('/')
  })
 
  it('should display 7 days', () => {
    cy.get(selects.weekDays).should('have.length', 7)
  })

    tests.forEach((test) => {
        it(test.name, () => {
          cy.get(selects.weekDays).eq(3).click()
          cy.get(selects.movie2).contains(selects.timeSession2).click()
          test.data.forEach((seat) => {
            cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
          })
          cy.get(selects.buttonAcc).click()
          cy.contains(selects.expected).should('be.visible')
        })
    })
})

