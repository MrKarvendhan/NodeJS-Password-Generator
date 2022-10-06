#!/usr/bin/env node

// Installed Packages

const program = require('commander');

const chalk = require('chalk');

const clipboardy = require('clipboardy');

const log = console.log;

const createPassword = require('./utils/createPassword');

const savePassword = require('./utils/savePassword'); 

// Help For cmd Line Arguments 

program.version('1.0.0').description('Password Generator');

program
    .option('-l ,--length <number>' , 'length of the password')
    .option('-s ,--save' , 'save password to password.txt')
    .option('-nn ,--no-numbers' , 'remove numbers')
    .option('-ns ,--no-symbols' , 'remove symbols')
    .parse();

// Saving cmd Line Arg in a Variables

const {length,numbers,save,symbols} = program.opts();

// Passsing The Values

const generatedPassword = createPassword(length,numbers,symbols);

if (save) {
    savePassword(generatedPassword)
};

// Copy Password

clipboardy.writeSync(generatedPassword);

// For Color Text

log(chalk.blue('Generated Password : ')+chalk.bold(generatedPassword));
log(chalk.yellow('Password Copied to clipboard'));










