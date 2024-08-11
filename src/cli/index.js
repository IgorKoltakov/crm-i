#!/usr/bin/env node
import { program } from 'commander';
// import createProject from './commands/create.js';
import startServer from '../core/server.js';
import path from 'path';

// program
//   .command('create <project-name>')
//   .description('Create a new project')
//   .action((projectName) => {
//     createProject(projectName);
//   });

program
  .command('serve')
  .description('Start the development server')
  .action(() => {
    const rootDir = path.resolve(process.cwd());
    startServer(rootDir);
  });

program.parse(process.argv);
