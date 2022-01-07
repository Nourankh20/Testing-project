describe('Internships test', () => {
    it('should open the page and check the url and title', () => {
      cy.visit('https://practice.automationbro.comhttps://www.glassdoor.com/Job/berlin-software-engineer-internship-jobs-SRCH_IL.0,6_IC2622109_KO7,35.htm');
      cy.url().should('include', 'software-engineer-internship-jobs');
      cy.title().should('eq', 'Software engineer internship Jobs in Berlin | Glassdoor');
    });

    it('gets text of the span and assert the value', () => {
      cy.get('span.css-1buaf54 pr-xxsm job-search-key-iii9i8 e1rrn5ka4').should('have.text', 'Berlin');
    });

    it('verifies the text of the first menu link item', () => {
      cy.get('ul.p-0 m-0  HeaderStyleslist HeaderStylesmenu').find('li').first().should('have.text', 'Jobs');
    });
    
  });