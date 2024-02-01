<template>
  <div>
    <h1>Projetos</h1>

    <q-form @submit="adicionarProjeto">
      <q-input v-model="novoProjeto.nome" label="Nome do Projeto" />

      <q-input v-model="novoProjeto.descricao" label="Descrição do Projeto" />

      <q-date v-model="novoProjeto.dataInicio" label="Data de Início do Projeto" />

      <q-btn type="submit" label="Adicionar Projeto" color="primary" />
    </q-form>

    <q-btn @click="carregarProjetos">Carregar Projetos</q-btn>

    <!-- Lista de projetos -->
    <div v-if="projetos.length">
      <h2>Lista de Projetos:</h2>
      <ul>
        <li v-for="projeto in projetos" :key="projeto.id">
          <h3>{{ projeto.nome }}</h3>
          <ul>
            <li v-for="tarefa in projeto.tarefas" :key="tarefa.id">
              {{ tarefa.titulo }} - {{ tarefa.concluida ? 'Concluída' : 'Pendente' }}
              <q-btn v-if="!tarefa.concluida" @click="marcarConcluida(projeto.id, tarefa.id)">
                Marcar como Concluída
              </q-btn>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projetos: [],
      novoProjeto: {
        nome: '',
        descricao: '',
        dataInicio: null,
      },
    };
  },
  methods: {
    async carregarProjetos() {
      try {
        const response = await this.$axios.get('/projetos');
        this.projetos = response.data;
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
      }
    },
    async adicionarProjeto() {
      try {
        const response = await this.$axios.post('/projetos', this.novoProjeto);
        this.projetos.push(response.data); // Adiciona o novo projeto à lista
        this.novoProjeto = {}; // Limpa o formulário
      } catch (error) {
        console.error('Erro ao adicionar projeto:', error);
      }
    },
    async marcarConcluida(projetoId, tarefaId) {
      try {
        const response = await this.$axios.put(`/projetos/${projetoId}/tarefas/${tarefaId}`, {
          concluida: true,
        });

        // Atualiza o estado local para refletir a mudança
        const projetoIndex = this.projetos.findIndex(projeto => projeto.id === projetoId);
        const tarefaIndex = this.projetos[projetoIndex].tarefas.findIndex(tarefa => tarefa.id === tarefaId);

        this.$set(this.projetos[projetoIndex].tarefas, tarefaIndex, response.data);
      } catch (error) {
        console.error('Erro ao marcar tarefa como concluída:', error);
      }
    },
  },
};
</script>
