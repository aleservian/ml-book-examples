import loadAcess from './loadAccess';

const headers = {
  x: ['home', 'como_funciona', 'contato'],
  y: 'comprou'
}
const loadAccesss = loadAcess("acesso.csv", headers);