import chalk from 'chalk';
import path from 'path';
import fse from 'fs-extra';
import exec from 'exec-sh';
import { createSpinner } from 'nanospinner';
import Generation from '../../interfaces/generation.interface';

export default async function generateNextProject(generation: Generation) {
  await exec(`${generation.packageManager} install --ignore-scripts`);
}
