module.exports = ((env) => {
  const enviroment = env.dev ? 'dev' : 'prod'
  return require(`./webpack.config.${enviroment}.js`)
})