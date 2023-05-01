const { copySync } = require('fs-extra')
const Colors = require('colors/safe')
const Inquirer = require('inquirer')

Inquirer.prompt([
    {
        name: 'language', message: 'What language?', type: 'list',
        choices: [
            { name: 'JavaScript', value: 'js' },
            { name: 'TypeScript', value: 'ts' }
        ]
    }
]).then(async responseData => {
    const Security = await Inquirer.prompt([
        { name: 'agreed', message: 'Your project\'s source will be overwritten. Do you wish to continue?', type: 'confirm' }
    ])

    if (Security.agreed) {
        copySync(`./node_modules/djs-template/structure/${responseData.language}`, './', { overwrite: true })
        console.log(`${Colors.yellow('Now run:')}\n${Colors.grey('npm install\nnpm start')}`)
    } else console.log(Colors.red('Successfully canceled.'))
})