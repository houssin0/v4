const express = require('express');
const mysql = require('mysql');

// Test the import of express
test('express import', () => {
  expect(express).toBeDefined();
});

// Test the import of mysql
test('mysql import', () => {
  expect(mysql).toBeDefined();
});