const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const alunoHardskills = require('./aluno_hardskills.routes');

const atividade_avaliativa = require('./atividade_avaliativa.routes');
const avaliacao360 = require('./avaliacao360.routes');
const grupo = require('./grupo.routes');
const questao_dia = require('./questao_dia.routes');
const softskill = require('./softskill.routes');
const tarefa = require('./tarefa.routes');

const disciplina = require('./disciplina.routes');
const professor = require('./professor.routes');
const turma = require('./turma.routes');
const curso = require('./curso.routes');

module.exports = app => {
    app.use('/api/usuario',usuario);
    app.use('/api/questao',questao);
    app.use('/api/hardskill',hardskill);
    app.use('/api/aluno_hardskills',alunoHardskills);

    app.use('/api/atividade_avaliativa',atividade_avaliativa);
    app.use('/api/avaliacao360',avaliacao360);
    app.use('/api/grupo',grupo);
    app.use('/api/questao_dia',questao_dia);
    app.use('/api/softskill',softskill);
    app.use('/api/tarefa',tarefa);

    app.use('/api/disciplina',disciplina);
    app.use('/api/professor',professor);
    app.use('/api/turma',turma);
    app.use('/api/curso',curso);

}