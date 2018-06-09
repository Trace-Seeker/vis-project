/*
* @Author: zjhch123
* @Date:   2018-01-29 20:39:39
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

const transfer_dir = (from_dir, to_dir) => {
  fs.mkdirSync(to_dir)
  fs.readdirSync(from_dir).forEach(file => {
    const filepath = path.join(from_dir, file)
    const from_path = filepath
    const to_path = path.join(to_dir, file)
    if (fs.statSync(filepath).isDirectory()) {
      transfer_dir(from_path, to_path)
    } else {
      transfer_file(from_path, to_path)
    }
  })
}

const transfer_file = (from_file, to_file) => {
  const readStream = fs.createReadStream(from_file)
  const writeStream = fs.createWriteStream(to_file)
  readStream.pipe(writeStream)
}

const transfer_new_webapp = () => {
  fs.readdirSync(from).forEach((file) => {
    const filepath = path.join(from, file)

    const from_path = filepath
    const to_path = path.join(to, file)

    if (fs.statSync(filepath).isDirectory()) {
      transfer_dir(from_path, to_path)
    } else {
      transfer_file(from_path, to_path)
    }
  })
}

delete_old_webapp()
transfer_new_webapp()



