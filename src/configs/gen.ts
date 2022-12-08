import fs from 'fs';
import exec from 'exec-sh';
import { createSpinner } from 'nanospinner';
import Generation from '../interfaces/generation.interface';
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
import GenerateNextProject from './front/nextjs.config.js';

export default async function generateProject(generation: Generation) {
  const spinner = createSpinner('Loading your config').start();
  await sleep(1000);
  switch (generation.framework) {
    case 'express':
      spinner.success();
      break;
    case 'nest':
      spinner.success();
      break;
    case 'next':
      spinner.success();
      await sleep(500);
      console.clear();
      await GenerateNextProject(generation);
      break;
  }
}
