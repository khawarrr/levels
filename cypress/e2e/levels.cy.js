describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://levels.fyi')
  })
  it('click on search', () => {
    cy.get(".omnisearch-input").click().type('Google')
    cy.wait(1000)
  });

  it('click on google', () => {
    cy.get('body > header > div.primary > nav > div.omnisearch > form > ul > li:nth-child(4)').should('be.visible', 'Software Engineer').click()
    cy.wait(1000)
  });

  it('click on software engineer', () => {
    cy.get('#__next > div.MuiContainer-root.MuiContainer-maxWidthXl.css-z6jx37 > div > div.MuiBox-root.css-0 > div.MuiGrid-root.MuiGrid-container.css-1u20msc > div:nth-child(3) > a > h6').click()
    cy.wait(1000)
  });

  it('Verify L3 avg = 185', () => {
    cy.get('#__next > div.MuiContainer-root.MuiContainer-maxWidthXl.css-z6jx37 > div > div.MuiBox-root.css-0 > div.MuiTableContainer-root.job-family_tableContainer__MOxEY.css-kge0eu > table > tbody > tr:nth-child(1) > td:nth-child(2)').should('eq', '185K')
  });
  
  
  
  
})