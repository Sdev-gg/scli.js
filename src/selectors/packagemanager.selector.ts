import inquirer from 'inquirer';

export default async function packageManagerSelector(): Promise<
  'npm' | 'yarn' | 'pnpm'
> {
  const packageManagerSelector = await inquirer.prompt([
    {
      type: 'list',
      name: 'packageManager',
      message: 'What package manager do you want to use?',
      choices: ['npm', 'yarn', 'pnpm'],
      default: 'pnpm',
    },
  ]);
  return packageManagerSelector.packageManager;
}
