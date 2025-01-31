# Clo-ni-Oh! Clone daquele jogo de cartas - Semana do 0 ao Programador Contratado - [Canal Dev em Dobro](https://www.youtube.com/@DevemDobro)

![image](https://github.com/user-attachments/assets/3b0d90ab-4413-4d3e-908c-9dd6beee4583)

Objetivo: Apresentar o básico de html, css, e javascript para programadores iniciantes.

# Extra - Transformando em um jogo "de verdade". https://github.com/users/Math-SA/projects/5
O jogo consiste no combate entre cartas dos jogadores. As cartas são criadas a partir da clonagem de cartas base. 

1 - Antes de começar a partida, o jogador define sua mão com 7 cartas da sua coleção.

2 - Cada jogador seleciona uma carta como herói. O herói não pode ser selecionado como infiltrado, recebe bônus de xp, e duela até ser derrotado.

3 - Cada jogador escolhe (sem ver) um infiltrado da mão do jogador adversário. Após a seleção, o jogador pode ver a carta que escolheu como infiltrado, que poderá executar tarefas a cada rodada enquanto estiver vivo.

4 - Cada jogador escolhe 3 cartas (além do herói) para duelar com o adversário.

5 - Antes do combate, cada jogador escolhe as ações do seu infiltrado caso esteja vivo. O tempo total para decidir as ações é de 10 segundos. 
As ações podem ser: Sabotagem, Apoio e Roubo e os efeitos triplicam se o infiltrado for escolhido para o confronto. <br/>
**Sabotagem**<br/>
A ação de sabotagem reduz ataque e defesa do herói em 15% e demais cartas em 10%. <br/>
**Apoio**<br/>
A ação de apoio aumenta ataque e defesa do herói em 20% e demais cartas em 15%. <br/>
**Roubo**<br/>
A ação de roubo serve para roubar 10% do xp base e dos créditos. <br/>
**Dormente**
Caso nenhuma ação seja selecionada, o infiltrado permanece dormente. 

Caso suspeite que uma carta é o infiltrado, o jogador pode ordenar a prisão da mesma. Ela será removida da partida e permanecerá na prisão por uma semana (tempo real). Cartas na prisão não podem ser usadas nem vendidas, ganham xp diário por malhar e correm risco de se machucar (30% de chance, debuff temporário) ou morrer (5% de chance, permadeath).

6 - O herói sempre entra em combate até ser derrotado e tem seu xp aplicado imediatamente ao encerrar cada luta. Após a queda do herói, as cartas escolhidas pelo jogador entram em combate na ordem especificada. Porém, apenas o herói e a carta que derrotar o herói adversário lutam mais de uma vez. O jogador que perder as três cartas primeiro perde o confronto.

7 - Como recompensa, o vencedor escolhe (sem ver) uma carta da mão do adversário para roubar permanentemente.

8 - No final, o xp geral e os créditos que não foram roubados são distribuidos.

