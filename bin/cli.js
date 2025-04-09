#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');

program
  .version('1.0.0')
  .description('React Native Web 项目模板生成器')
  .argument('[project-name]', '项目名称')
  .action(async (projectName) => {
    if (!projectName) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: '请输入项目名称:',
          validate: (input) => {
            if (!input) return '项目名称不能为空';
            if (fs.existsSync(input)) return '项目目录已存在';
            return true;
          }
        }
      ]);
      projectName = answers.projectName;
    }

    console.log(chalk.blue(`\n开始创建项目: ${projectName}`));
    
    try {
      // 创建项目目录
      fs.mkdirSync(projectName);
      process.chdir(projectName);

      // 复制模板文件
      const templateDir = path.join(__dirname, '../template');
      fs.copySync(templateDir, process.cwd());

      // 更新 package.json
      const packageJson = require('../template/package.json');
      packageJson.name = projectName;
      fs.writeJsonSync('package.json', packageJson, { spaces: 2 });

      console.log(chalk.green('\n项目创建成功！'));
      console.log('\n请执行以下命令开始开发：');
      console.log(chalk.cyan(`  cd ${projectName}`));
      console.log(chalk.cyan('  npm install'));
      console.log(chalk.cyan('  npm start'));
    } catch (err) {
      console.error(chalk.red('创建项目失败：'), err);
      process.exit(1);
    }
  });

program.parse(process.argv); 