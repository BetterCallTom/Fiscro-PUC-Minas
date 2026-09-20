// modules/tarefas/task-form.component.js — apresentação do formulário de tarefa.
// Não acessa persistência; apenas emite os dados via callback onSubmit.

export function renderTaskForm(container, { onSubmit }) {
  container.innerHTML = `
    <form class="task-form" novalidate>
      <div class="field">
        <label for="titulo">Título</label>
        <input id="titulo" name="titulo" type="text" placeholder="Ex.: Enviar relatório" required />
      </div>
      <div class="field">
        <label for="descricao">Descrição (opcional)</label>
        <input id="descricao" name="descricao" type="text" placeholder="Detalhes da tarefa" />
      </div>
      <button type="submit" class="btn btn-primary">Adicionar</button>
      <p class="form-error" role="alert" hidden></p>
    </form>
  `;

  const form = container.querySelector("form");
  const errorEl = container.querySelector(".form-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorEl.hidden = true;
    const data = {
      titulo: form.titulo.value,
      descricao: form.descricao.value,
    };
    try {
      await onSubmit(data);
      form.reset();
      form.titulo.focus();
    } catch (err) {
      errorEl.textContent = err.message;
      errorEl.hidden = false;
    }
  });
}
