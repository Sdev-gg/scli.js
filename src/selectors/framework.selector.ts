import inquirer from 'inquirer';

export default async function generationTypeSelector(): Promise<
  'next' | 'express' | 'nest'
> {
  const genTypeSelector = await inquirer.prompt([
    {
      type: 'list',
      name: 'generationType',
      message: 'What framework do you want to use?',
      choices: ['next', 'nest', 'express'],
      default: 'next',
    },
  ]);
  return genTypeSelector.generationType;
}
