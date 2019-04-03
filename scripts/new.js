const TemplateEngine = require('./templateParse')
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')

// 模板文件路径
const tempPagePath = path.resolve(__dirname, '../src/utils/template/page')
const tempComponentPath = path.resolve(__dirname, '../src/utils/template/component')

let fileObj = {}

const promptList = [
    {
        type: 'list',
        message: '请选择新建模板的类型',
        name: 'type',
        choices: ['page', 'component']
    },
    {
        type: 'input',
        message: '请输入页面名称(文件名)',
        name: 'name',
        when(answers) {
            return answers.type === 'page'
        }
    },
    {
        type: 'input',
        message: '请输入该页面视图的名称(当该页面下仅有一个视图的时候不用输入)',
        name: 'view',
        default(answers) {
            return answers.name
        },
        when(answers) {
            return answers.type === 'page'
        }
    },
    {
        type: 'input',
        message: '请输入该页面的标题',
        name: 'title',
        when(answers) {
            return answers.type === 'page'
        }
    },
    {
        type: 'input',
        message: '请输入模板名称(文件名)',
        name: 'name',
        when(answers) {
            return answers.type === 'component'
        }
    },
    {
        type: 'confirm',
        message: '是否需要css文件',
        name: 'needCss',
        when(answers) {
            return answers.type === 'component'
        }
    }
]

inquirer.prompt(promptList).then(answers => {
    answers.Name = answers.name.slice(0, 1).toLocaleUpperCase() + answers.name.slice(1)
    if (answers.type === 'page') {
        exists(answers.name, 'page').then(res => {
            if (res) {
                console.log('初始化页面文件成功！')
                console.log('正在读取模板文件')
                readTemp(tempPagePath, genNewPage, answers)
                writeFile(fileObj, 'pages')
                console.log('新页面生成成功！')
            } else {
                console.log('该页面已存在')
            }
        })
    } else if (answers.type === 'component') {
        exists(answers.name, 'component').then(res => {
            if (res) {
                console.log('初始化页面文件成功！')
                console.log('正在读取模板文件')
                readTemp(tempComponentPath, genNewComponent, answers)
                writeFile(fileObj, 'components')
            } else {
                console.log('该模板已存在')
            }
        })
    }
})

function mkdir(name) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path.resolve(__dirname, '../src/pages', name), err => {
            if (err) reject(err)
            resolve(true)
        })
    })
}

function exists(name, type) {
    return new Promise(async resolve => {
        if (type === 'page') {
            resolve(
                !fs.existsSync(path.resolve(__dirname, '../src/pages', name)) && (await mkdir(name))
            )
        } else {
            resolve(!fs.existsSync(path.resolve(__dirname, '../src/components', name)))
        }
    })
}

function readTemp(tempPath, callback, answers) {
    fs.readdirSync(tempPath).forEach(file => {
        let pathName = path.resolve(tempPath, file)
        if (fs.statSync(pathName).isDirectory()) {
            readTemp(pathName, callback, answers)
        } else {
            callback(pathName, answers)
        }
    })
}

function genNewPage(filePath, answers) {
    let text = fs.readFileSync(filePath).toString()
    text = text
        .replace(/\$View/g, answers.view.slice(0, 1).toLocaleUpperCase() + answers.view.slice(1))
        .replace(/\$view/g, answers.view)
        .replace(/\$title/g, answers.title)
    let newPath = filePath
        .slice(filePath.indexOf('/page') + 1) // +1去除路径开头的'/'，生成相对路径
        .replace(/page/g, answers.name)
        .replace(/newView/g, answers.view)
    fileObj[newPath] = text
}

function genNewComponent(filePath, answers) {
    // 是否生成css
    if (!answers.needCss && filePath.includes('scss')) {
        return
    }
    // let text = fs.readFileSync(filePath).toString()
    // if (!answers.needCss) {
    //     text = text.replace(/import '\.\/\$name.scss'/g, '')
    // }
    // text = text.replace(/\$Name/g, upperName).replace(/\$name/g, answers.name)
    let newPath = filePath
        .slice(filePath.indexOf('/component') + 1) // +1去除路径开头的'/'，生成相对路径
        .replace(/component/g, answers.Name)
        .replace(/hello/g, answers.name)
    let text = fs.readFileSync(filePath).toString()
    fileObj[newPath] = TemplateEngine(text, answers)
}

function writeFile(fileObj, type) {
    Object.keys(fileObj).forEach(item => {
        fs.mkdir(
            path.resolve(
                __dirname,
                `../src/${type}`,
                item
                    .split('/')
                    .slice(0, -1)
                    .join('/')
            ),
            { recursive: true },
            err => {
                if (err) throw err
                fs.writeFileSync(
                    path.resolve(__dirname, `../src/${type}`, item),
                    fileObj[item],
                    'utf8'
                )
            }
        )
    })
}
