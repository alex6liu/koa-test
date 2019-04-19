module.exports = {
  register: async(name, pwd) => {
    let data 
    if (name == 'i' && pwd == '1') {
      data = `Hello， ${name}！`
    } else {
      data = '账号信息错误'
    }
    return data
  }
}