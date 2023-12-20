const location = `https://cdn-bluster-dev.arquivei.com.br/application-layout-web/latest`;
const PREFIX = 'remote';
const MODULE_NAME = '@arquivei/application-layout-web';
const GLOBAL_NAME = 'Arquivei_ApplicationLayoutWeb';

module.exports.remotes = () => ({
    [`${PREFIX}:${MODULE_NAME}`]: `${GLOBAL_NAME}@${location}/remoteEntry.js`,
  });