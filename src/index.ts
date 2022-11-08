#!/usr/bin/env node
/* 
          _ _   _     
         | (_) (_)    
 ___  ___| |_   _ ___ 
/ __|/ __| | | | / __|
\__ \ (__| | |_| \__ \
|___/\___|_|_(_) |___/
              _/ |    
             |__/     

*/

// MODULES
import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import exec from 'exec-sh';
import { createSpinner } from 'nanospinner';
// FUNCTIONS
import packageManagerSelector from './selectors/packagemanager.selector';

// VARIABLES
var packageManager: 'npm' | 'yarn' | 'pnpm' = 'pnpm';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

(async () => {
  packageManager = await packageManagerSelector();
})();
