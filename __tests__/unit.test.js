// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('PhoneNumber is not valid length (9 instead of 10)', () => {
    expect(functions.isPhoneNumber("123-456-789")).toBe(false);
  });

test('PhoneNumber with no area code is valid))', () => {
    expect(functions.isPhoneNumber("123-8999")).toBe(true);
  });

test('PhoneNumber with area code is valid)', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
  });

test('PhoneNumber has letters', () => {
    expect(functions.isPhoneNumber("hgfjkg")).toBe(false);
  });

test('Email is invalid (no @)', () => {
    expect(functions.isEmail("hgfjkg")).toBe(false);
  });

test('school email is valid (@)', () => {
    expect(functions.isEmail("szakeri@ucsd.edu")).toBe(true);
  });

test('Email is invalid (nothing after @)', () => {
    expect(functions.isEmail("PowellRules@gmail")).toBe(false);
  });

test('personal email is valid', () => {
    expect(functions.isEmail("PowellRules@gmail.com")).toBe(true);
  });

test('Single digit month', () => {
    expect(functions.isDate("1/1/2021")).toBe(true);
  });

test('Date is in invalid order', () => {
    expect(functions.isDate("2001/1/1")).toBe(false);
  });

test('Date has letters', () => {
    expect(functions.isDate("December 12, 2001")).toBe(false);
  });

test('Double digit month', () => {
    expect(functions.isDate("12/1/2021")).toBe(true);
  });

  test('length 3 valid hex code', () => {
    expect(functions.isHexColor("F0F")).toBe(true);
  });

  test('length 6 valid hex code', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
  });

  test('length 9 invalid hex code', () => {
    expect(functions.isHexColor("FFFFFFFFF")).toBe(false);
  });

  test('length invalid hex code length 6', () => {
    expect(functions.isHexColor("123@FF")).toBe(false);
  });

  test('Valid password with allowed characters', () => {
    expect(functions.isStrongPassword("HELLO_WORLD")).toBe(true);
  });

  test('Valid Password 8 digits', () => {
    expect(functions.isStrongPassword("ABCdeFG")).toBe(true);
  });

  test('First character number', () => {
    expect(functions.isStrongPassword("1Password")).toBe(false);
  });

  test('Less than 4 characters', () => {
    expect(functions.isStrongPassword("ABC")).toBe(false);
  });