//Complete siguiendo las instrucciones del taller
const {Given} = require('cucumber');
const {When} = require('cucumber');
const {Then} = require('cucumber');
const {expect} = require('chai');

let mailInput = null;
let passwordInput = null;

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  $('button=Ingresar').waitForExist(5000);
  $('button=Ingresar').waitForDisplayed(5000);
  $('button=Ingresar').click();
});

When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    const cajaLogIn = $('.cajaLogIn');
  
    this.mailInput = cajaLogIn.$('input[name="correo"]');
    this.mailInput.click();
    this.mailInput.keys(email);
    
    this.passwordInput = cajaLogIn.$('input[name="password"]');
    this.passwordInput.click();
    this.passwordInput.keys(password)
});

When('I try to login', () => {
  const cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

When(/^I fill login form with correct data$/, (table) => {
    const data = table.raw();

    const cajaLogIn = $('.cajaLogIn');
  
    this.mailInput = cajaLogIn.$('input[name="correo"]');
    this.passwordInput = cajaLogIn.$('input[name="password"]');

    this.mailInput.click();
    this.mailInput.keys(data[0][0]);

    this.passwordInput.click();
    this.passwordInput.keys(data[0][1])
});

Then('I expect to see {string}', error => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    const alertText = browser.$('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});

Then('I expect to login with success', () => {
    $('.jsx-25430290').waitForDisplayed(5000);
    expect($('.jsx-25430290')).to.exist;
});