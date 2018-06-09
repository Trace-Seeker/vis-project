/*
* @Author: zjhch123
* @Date:   2018-01-30 15:29:18
* @Last Modified time: 2018-01-29 21:04:49
*/

const fs = require('mz/fs')
const path = require('path')


const from = './build/'
const to = '../webapp/'

const empty_dir = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file)
    if (fs.statSync(filepath).isDirectory()) {
      empty_dir(filepath)
    } else {
      fs.unlinkSync(filepath)
    }
  })
  fs.rmdirSync(dir)
}

const delete_old_webapp = () => {
  fs.readdirSync(to).forEach((file) => {
    if (file != 'WEB-INF' && file != 'META-INF') {
      const filepath = path.join(to, file)
      if (fs.statSync(filepath).isDirectory()) {
        empty_dir(filepath)
      } else {
        fs.unlinkSync(filepath)
      }
    }
  })
}

delete_old_webapp()



