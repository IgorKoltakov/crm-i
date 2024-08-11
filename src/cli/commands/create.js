import fs from 'fs-extra';
import path from 'path';

export default function createProject(projectName) {
  const targetDir = path.resolve(process.cwd(), projectName);
  const templateDir = path.resolve(__dirname, '../templates');

  fs.copySync(templateDir, targetDir);
  console.log(`Project ${projectName} created successfully!`);
}
