# API TODO

**Base URL:** `https://api-todo-7vof.onrender.com`

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/tasks` | Lista tarefas |
| POST | `/tasks/create` | Cadastra tarefa |

### Body POST
```json
{
  "title": "Título",
  "description": "Descrição"
}
```

### Resposta padrão
```json
{
  "status": 200,
  "message": "Mensagem",
  "data": []
}
```

**Campo `data`:**
- GET: lista de tarefas (`id`, `title`, `description`).
- POST: ID da tarefa cadastrada.
