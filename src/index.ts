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
import fs from 'fs';
import exec from 'exec-sh';
import { createSpinner } from 'nanospinner';
import Generation from './interfaces/generation.interface';

// FUNCTIONS
import packageManagerSelector from './selectors/packagemanager.selector.js';
import frameworkSelector from './selectors/framework.selector.js';
import FolderSelector from './selectors/folder.selector.js';
import GenerateProject from './configs/gen.js';

// VARIABLES
var generation: Generation = {
  packageManager: 'pnpm',
  framework: 'next',
  folder: '.',
};

(async () => {
  console.clear();
  generation.packageManager = await packageManagerSelector();
  console.clear();
  generation.framework = await frameworkSelector();
  console.clear();
  generation.folder = await FolderSelector();
  console.clear();
  await GenerateProject(generation);
})();
