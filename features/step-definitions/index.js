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

/* Pasos para registro */
When(/^I fill first info with (.*) and (.*) and (.*)$/ , (name, lastname, email) => {
  const cajaSignUp = $('.cajaSignUp');

  const nameInput = cajaSignUp.$('input[name="nombre"]');
  nameInput.click();
  nameInput.keys(name);
  
  const lastNameInput = cajaSignUp.$('input[name="apellido"]');
  lastNameInput.click();
  lastNameInput.keys(lastname);
  
  const emailInput = cajaSignUp.$('input[name="correo"]');
  emailInput.click();
  emailInput.keys(email);
});

When(/^I fill degree info with (.*) and (.*)$/ , (university, degree) => {
  const cajaSignUp = $('.cajaSignUp');
  if(university.length > 0) {
    const universitySelect = $('select[name="idUniversidad"]');
    universitySelect.click();
    const universityOption = $(`option[value="${university}"]`);
    universityOption.click();
  }
  
  if(degree.length > 0) {
    //$('select[name="idDepartamento"]').waitForDisplayed(5000);
    const degreeSelect = $('.jsx-1373336998');
    degreeSelect.click();
    const degreeOption = cajaSignUp.$(`option[value="${degree}"]`);
    degreeOption.click();
  }
  
});

When(/^I fill last info with (.*) and (.*)$/ , (password, accept) => {
  const cajaSignUp = $('.cajaSignUp');
  
  const lastNameInput = cajaSignUp.$('input[name="password"]');
  lastNameInput.click();
  lastNameInput.keys(password);

  const acceptTerms = cajaSignUp.$('input[name="acepta"]');
  if(accept) {
    acceptTerms.click();
  }

});

When('I try to register', () => {
  const cajaSignUp = $('.cajaSignUp');
  cajaSignUp.$('button=Registrarse').click();
});

Then('I expect to see {string}', error => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    const alertText = browser.$('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});

Then('I expect to see register page', () => {
    expect($('button=Registrarse')).to.exist;
});

Then('I expect to login with success', () => {
    $('.jsx-25430290').waitForDisplayed(5000);
    expect($('.jsx-25430290')).to.exist;
});