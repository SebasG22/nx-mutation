import { getGreeting } from '../support/app.po';

describe('demo4', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to demo4!');
  });
});
