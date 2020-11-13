module.exports = function (api) {
  api.cache(true);

  const presets = [ "es2015" ];
  const plugins = [ "babel-plugin-transform-react-jsx" ];

  return {
    presets,
    plugins
  };
}

