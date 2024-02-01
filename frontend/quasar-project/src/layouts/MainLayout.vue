<template>
  <q-layout view="lHh LpR fFf">

    <!-- Barra de navegação -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round to="/">Home</q-btn>
        <q-btn flat dense round to="/projetos">Projetos</q-btn>
        <q-btn flat dense round to="/tarefas">Tarefas</q-btn>
      </q-toolbar>
    </q-header>

    <!-- Conteúdo da página -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
