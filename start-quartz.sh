#!/usr/bin/env bash

# start-quartz.sh — roda Quartz detached com SCREEN (sem --host, usa túnel SSH)

SESSION_NAME="markos-journal"

# Checa se já existe sessão
if screen -list | grep -q "$SESSION_NAME"; then
    echo "Sessão '$SESSION_NAME' já está rodando."
    echo ""
    echo "Comandos úteis:"
    echo "  screen -r $SESSION_NAME          → entra e vê logs"
    echo "  screen -S $SESSION_NAME -X quit  → para tudo"
    echo "  screen -ls                       → lista sessões"
    exit 0
fi

# Inicia sessão detached
screen -dmS "$SESSION_NAME" bash -c "
    echo 'Iniciando Quartz server... (porta 8080 em localhost)'
    echo 'Use túnel SSH do seu PC local:'
    echo '  ssh -L 8080:localhost:8080 arkos@SEU-IP-DO-UBUNTU'
    echo 'Depois abre no navegador: http://localhost:8080'
    echo ''
    echo 'Pressione Ctrl+A depois D para desanexar (deixar rodando)'
    echo ''
    npx quartz build --serve
    exec bash
"

echo "Quartz iniciado em background (screen: $SESSION_NAME)"
echo ""
echo "Comandos rápidos:"
echo "  ./start-quartz.sh                → start (ou avisa se já rodando)"
echo "  screen -r $SESSION_NAME          → entra pra ver logs / parar (Ctrl+C)"
echo "  screen -S $SESSION_NAME -X quit  → mata sem entrar"
echo ""
echo "Túnel SSH (no seu computador local):"
echo "  ssh -L 8080:localhost:8080 arkos@SEU-IP-DO-UBUNTU"
echo "  Navegador: http://localhost:8080"
echo ""

