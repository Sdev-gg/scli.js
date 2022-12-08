export default interface Generation {
  packageManager: 'npm' | 'yarn' | 'pnpm';
  framework: 'next' | 'express' | 'nest';
  folder: string;
}
