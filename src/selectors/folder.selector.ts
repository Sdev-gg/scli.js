import inquirer from 'inquirer';

export default async function FolderSelector(): Promise<string> {
  const folderSelector = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
      default: '.',
    },
  ]);
  return folderSelector.name;
}
