let video = document.getElementById("video");

const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.pause();
                entry.target.currentTime = 0; // opcional: reinicia do começo
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(video)


    const texto = `
1878.
Nos confins do Velho Oeste, um homem vaga pelo deserto.
O cavalo, magro e exausto, cambaleia como se cada passo fosse o último.
O olhar do cavaleiro é baixo, turvo, perdido.
Sem forças, ele desaba na areia ardente. Entrega-se ao destino cruel.
A noite cai sobre o corpo imóvel — e ali permanece.

Quando a consciência enfim retorna, não há areia.
Há lençóis.
Há madeira rangendo sob ele.
O homem pisca, confuso. Não entende se ainda respira ou se já atravessou para o outro lado.
Tenta se levantar, mas o corpo cede.
Cai, sem sequer a força para rastejar.

Passos ecoam de um cômodo adiante.
Ele tenta resistir ao apagão, mas a escuridão vence.
A última coisa que ouve é uma voz suave, feminina, sussurrando:

— Você precisa descansar.

Horas depois, desperta de novo.
À sua frente, a visão mais inesperada: a mulher mais bela que já vira.
Ela sorri, leve, ao vê-lo abrir os olhos.

— Você dorme bastante, sabia? Não que tivesse muita escolha, mas… caramba.

A voz é gentil, mas firme. Ele força as palavras:

— Quem… quem é você?

— Isso não importa agora. Você precisa se recuperar.

Ela aproxima uma colher de madeira com um líquido escuro.
— É uma receita de família. O gosto é horrível, mas vai te ajudar.

Ele engole o remédio amargo e quase deseja voltar a desmaiar.
Antes que consiga perguntar mais, a moça sai do quarto.
Sozinho, encarando as frestas do telhado, o homem se perde em pensamentos.
Como tinha chegado àquilo? Onde havia errado?

Do lado de fora, a mulher observa a cidade silenciosa.
Até que um cavaleiro surge pela estrada.
Avança devagar, olhando cada detalhe ao redor.
No único cruzamento da pequena Monadnock, ele puxa a rédea e ergue a voz:

— Boa tarde, povo de Monadnock! O senhor Blackwell tem um recado para vocês!
Deixem esta cidade e poupem a vida de vocês. Ou fiquem… e sintam o peso de suas escolhas!

O homem saca as pistolas e dispara para o alto.
O cavalo gira em círculos no pó da rua principal, e os tiros ecoam como trovões.
Ninguém reage. Ninguém respira.
Em seguida, ele desaparece como um relâmpago, engolido pela poeira.

A mulher paralisa. Não era a primeira ameaça.
Na verdade, cada visita era pior que a anterior.
Muitos já tinham abandonado suas casas.
Os que restavam, não tinham para onde ir.
O medo de um massacre crescia a cada dia.

Ela retorna ao interior da loja… e encontra o homem que salvara, cambaleando.

— Você devia estar deitado… — diz ela, preocupada.

— Tiros… eu ouvi tiros. O que está acontecendo?

Ela puxa uma cadeira para que ele se sente.
Suspira, então revela:

— Essa cidade está sobre um grande poço de petróleo. Achamos que seria bênção. Mas se tornou maldição. A ganância de Blackwell nos persegue. Ele quer tudo. Quer que abandonemos nossos lares. E não temos pra onde ir.

— Blackwell… — o homem resmunga. — Onde estão meus revólveres?

Ela o encara, firme, quase irritada.

— Estão guardados. E vão continuar guardados até você melhorar.

— Não tenho tempo pra isso. Preciso das minhas armas. Tenho assuntos a resolver.

— Eu não te perguntei. Eu te disse: você não sai daqui até estar pronto.

A chama nos olhos dela o surpreende. Por um instante, ele se rende.

— Tá certo… Mas não vou ficar parado como homem morto. Meu cavalo… ele está bem?

— Está se recuperando. Quase tão fraco quanto você, mas dei uns tônicos. Vai melhorar.

O alívio atravessa o peito do forasteiro. Ele suspira.

— Então… já posso saber o nome de quem me salvou?

— Angel.

— Angel… Como o anjo do deserto das histórias?

Ela sorri de canto.
— Algo assim.

— Certo, Angel. Com o que posso ajudar?

— Pode começar arrumando esses livros.

O resto da tarde é silencioso. Ele empilha volumes, varre poeira, observa a mulher que lhe devolvera a vida.
Quando o sol se põe, apoia-se na janela. O vento frio traz lembranças. Saudade.
Perdido nos pensamentos, só retorna quando percebe os olhos dela sobre ele.

— Aconteceu algo? — ela pergunta.

— Não… só me perdi por um instante. Pode dormir. Não vou pregar os olhos essa noite. Fico de vigia.

Ela concorda, não sem antes pedir que não se esforce. Ele apenas acena.
A madrugada avança.
Ele se perde nos próprios demônios — até que uma luz estranha corta o horizonte.

Na montanha distante, uma figura sombria o observa.
Feita de sombras.
Olhos brilhando como lampiões.
O homem estremece.

— Ele… ele está me encarando?

A criatura balança a cabeça. Sim.
E então aponta para a cidade.

Com medo, o forasteiro segue o olhar da aparição.
E vê: um incendiador espalhando óleo sobre a casa de um vizinho.
O pavor o domina.
Quando volta o olhar para a montanha, a criatura sorri e desaparece na névoa.

O terror real, porém, está ali embaixo.
O homem avança. Derruba o incendiador e arranca-lhe o revólver.
O inimigo saca uma faca, os olhos cheios de ódio.

— Onde está o seu chefe? — o forasteiro pergunta, arfando.

O incendiador ri.
— Eu me lembro de você. O chefe ainda quer sua cabeça. Vai gostar de recebê-la como presente.

Um disparo ecoa pela noite.
Pela primeira vez, alguém ousa enfrentar os homens de Blackwell.

O som desperta a cidade inteira.
Moradores saem às portas, espantados. Alguns murmuram. Outros apenas olham.
Quem era aquele homem? Foragido? Mercenário? Espírito de vingança?

Não importa. Pela primeira vez, havia esperança.

Na manhã seguinte, Angel o encontra, já desperto.
Ele ergue os olhos para ela, ainda cansado.

— A cidade quer te fazer uma oferta… — diz ela.

— Não tenho interesse.

— Nem para ter uma chance de acabar com Blackwell?

Ele estreita os olhos.
— … Como você sabe?

— Por favor. Você achou que eu não notaria? O ódio quando citei o nome dele?

Um leve sorriso nasce no rosto do forasteiro.
— Sagaz, anjo. E qual é a proposta?

— Não temos muito, mas temos o suficiente para contratar mais algumas armas.
Só queremos uma chance… de lutar pelo que é nosso.

O forasteiro pensou por um instante. A oferta da cidade, a promessa de resistência.
Ele respirou fundo, encarou Angel, e balançou a cabeça.

— Não. Não vou me prender a essa luta. Não é minha guerra.

Angel o encarou em silêncio. Apenas um olhar firme, desapontado.
Ele desviou os olhos.
Mas por dentro, algo queimava.
No peito, cada batida era um peso. O silêncio da cidade, o medo nas ruas, a chama nos olhos daquela mulher.
Ele sabia. Não podia ignorar.

Na manhã seguinte, sem alarde, ele se ergueu, ajustou o chapéu e apertou o cinturão vazio de armas.
Angel o esperava à porta.
Sem palavras, entenderam um ao outro.
E partiram juntos.

As estradas de terra os levaram a vilarejos vizinhos, a tavernas esquecidas, a ranchos abandonados.
Perguntaram por homens de coragem, por armas dispostas.
Mas o que encontraram, em sua maioria, foi silêncio e portas fechadas.
O nome Blackwell era suficiente para transformar sussurros em covardia.

E então, no meio do deserto, sob o sol impiedoso, encontraram um vulto.
Um homem magro, a barba desgrenhada, os olhos fundos como dois poços sem fundo.
Sentado numa pedra, tinha ao lado uma cuia de esmolas e, nos braços, um violão gasto, as cordas mais velhas que a própria estrada.

Ele dedilhava uma melodia estranha, meio triste, meio zombeteira.
O Homem sem Nome puxou as rédeas, Angel também parou.
O andarilho ergueu os olhos. Sorriu como quem já os esperava.

— Não passam de viajantes cansados, não é? — disse, com a voz rouca.
E sem esperar resposta, começou a cantar.

Canções de mundos distantes.
De sociedades alternativas.
De dias em que a terra parou.
De metamorfoses ambulantes.

A música parecia deslocada, como se viesse de outro tempo, outro lugar.
Mas ainda assim, havia verdade nela.
Angel ouvia em silêncio, encantada.
O Homem sem Nome permanecia firme, o olhar fechado, tentando não se deixar afetar.

Quando a última nota morreu no vento, o andarilho baixou o violão e agradeceu com um gesto simples.
Então, sem aviso, começou a falar como se contasse uma lenda esquecida:

— Havia um filho bastardo. Sangue do mesmo pai, mas coração livre. O pai, homem de ferro e petróleo, deu-lhe uma ordem. O filho desobedeceu. E o castigo foi a areia. O deserto. O abandono. O filho, deixado para morrer.

O Homem sem Nome, de repente, endureceu o rosto.
Olhou para o andarilho com fúria contida, como se aquelas palavras fossem uma ferida aberta.

O homem da cuia apenas sorriu, sem medo.
Balançou o dedo, e disse baixo, como quem entrega um segredo:

— Nunca se vence uma guerra lutando sozinho.

Angel olhou para o forasteiro, surpresa com a reação dele.
Ele, em silêncio, apenas apertou os punhos.
E sem mais perguntas, o andarilho se levantou, pendurou o violão às costas, pegou a cuia e começou a caminhar.

Não pediu permissão.
Não pediu convite.
Apenas os seguiu pelo caminho.

O sol já se punha quando avistaram algo improvável no horizonte.
Entre areia, poeira e nada, erguia-se um bordel. Xique demais para aquele deserto esquecido, iluminado por lamparinas coloridas e risadas forçadas que ecoavam na noite.

Angel franziu a testa.
O Homem sem Nome apenas ajustou o chapéu.
Cachorro Urubu riu baixo.

— No meio do nada, sempre tem alguém vendendo ilusão — murmurou.

Decidiram entrar. Talvez encontrassem informações. Talvez armas. Talvez coragem.

O interior era ainda mais extravagante que o exterior. Cortinas de veludo, espelhos reluzentes, perfumes fortes cobrindo o cheiro de álcool barato. Mulheres e homens circulavam, servindo copos e sorrisos.
Atrás de uma mesa, com vestido vermelho e olhar afiado, estava a dona do lugar.

— Sejam bem-vindos ao meu pequeno paraíso — disse, com um sorriso sedutor.

Angel explicou, com cautela, que buscavam aliados. Gente disposta a enfrentar Blackwell.
A dona apenas sorriu, fingindo interesse, inclinando-se para frente como se compartilhasse da dor deles.

Mas dentro de seus olhos, escondia-se outra chama: a do lucro.
Blackwell era seu patrono. E enquanto ela sorria, já planejava repassar tudo o que descobrira para o homem mais poderoso da região.

Deixando a sala principal, o trio cruzava o salão do bar quando ouviram.
Uma voz grave, profunda, que parecia fazer as garrafas e mesas vibrarem.
Um homem de preto, sentado sozinho no canto, dedilhava o violão com a força de quem sangra pelas cordas.

A canção era de dor.
Falava de injustiças, traições, amores arrancados e cicatrizes que nunca fechavam.
Aquele som fazia até o ar pesar.

Cachorro Urubu, encantado, bateu palmas, o sorriso largo em contraste com o peso da música.
— Bravo, colega… bravo! — disse.

Sem esperar, pegou o próprio violão e começou a acompanhá-lo.
As notas se encontraram no ar como se fossem destinadas a isso.
Juntos, cantaram uma velha canção esquecida: a história de Anakinópolis, uma cidade onde todos eram livres até ser tomada por bandidos e engolida pela escuridão.

Angel e o Homem sem Nome se aproximaram da mesa, atraídos pela música como se fosse feitiço.
Angel, por um instante, esqueceu do peso do deserto e apenas sorriu, deixando o corpo balançar ao som da melodia.
Ele, em silêncio, a observou — e algo dentro dele, antes endurecido pelo passado, começou a ceder.

Não foi preciso palavras.
Entre olhares e o calor da música, algo nasceu.
Não uma paixão arrebatadora, mas o início de um romance sutil, discreto, tão inevitável quanto a noite que caía sobre o deserto.

Enquanto isso, os dois músicos continuavam, como profetas de tragédias e esperanças, cantando sobre liberdade perdida — e sobre a coragem necessária para conquistá-la de volta.

O último acorde da canção ainda ecoava no salão quando o Homem de Preto se levantou.
Pegou suas coisas, ajeitou o chapéu e virou-se para a porta.
Mas antes de partir, a voz do Homem sem Nome o cortou:

— Injustiças. Você canta sobre elas... Mas o que faz para impedi-las?

O bar silenciou.
O Homem de Preto parou, a sombra de seu rosto escondendo qualquer expressão.
Devagar, sua mão foi até o coldre.

— Garoto… — disse, num tom grave e frio — não me faça usar essa arma.

O Homem sem Nome apenas sorriu.
— Monadnock… É a nova Anakinópolis. Queremos evitar isso. — fez uma pausa, olhando fundo nos olhos do outro — E você tem um jeito com armas que viria a calhar.

Por um instante, só se ouviu o rangido da madeira do bar.
O Homem de Preto respirou fundo, fechou a mão sobre o cabo do revólver… e então soltou, guardando-o de volta.

— Não é problema meu. — disse, virando as costas.

Saiu sem olhar para trás, desaparecendo na escuridão.

A noite caiu sobre o deserto.
Cachorro Urubu, o Homem sem Nome e Angel acenderam uma fogueira para afastar o frio que começava a se arrastar pelo vento.
O velho andarilho tirou a cuia do lado, encostou o violão e, entre goles de cachaça, começou a falar.

Histórias que misturavam mito e lembrança, como se ele fosse ao mesmo tempo poeta e profeta.
Falava sobre a morte como um descanso, sobre a vida como uma travessia.
Entrelaçava destinos invisíveis com as minas do rei Salomão, e sussurrava sobre o capim guiné que protegia contra o mal.
Tudo nele tinha um tom místico, como se carregasse segredos que ninguém mais ousava contar.

Quando terminou, apenas riu baixinho.
— Amanhã, o vento sopra pra onde tem que soprar… — disse, antes de se deitar, enrolado em seu poncho gasto.

A fogueira crepitava.
Restaram apenas Angel e o Homem sem Nome, sentados lado a lado.

Ela, curiosa, quebrou o silêncio.
— Você nunca fala do seu passado… Quem era você, antes de tudo isso?

Ele ficou alguns segundos olhando as brasas, depois levantou os olhos para o céu.
— Algumas coisas são feitas para ser. Como nós dois, aqui. Agora.

Angel tentou insistir, mas ele apenas apontou para o infinito estrelado.
— Só respira.

Ela obedeceu, soltando o ar devagar, como se por um instante o deserto inteiro desaparecesse.

Naquela noite, conversaram.
Não sobre cicatrizes, nem sobre o que havia ficado para trás.
Mas sobre o futuro — sobre cidades livres, sobre batalhas que ainda viriam, e sobre a esperança que, mesmo em silêncio, insistia em arder dentro deles.

O sol ainda se escondia atrás das dunas quando o Homem de Preto apareceu no acampamento, surgindo como sombra entre o céu vermelho e a terra árida.

— Bom, alcancei vocês — disse, sua voz firme cortando o silêncio. — Trago boas e más notícias.

O Homem sem Nome ergueu-se devagar, os olhos ainda pesados pelo sono. Angel se aproximou, alerta.

— Comece pelas ruins. — disse ela.

O Homem de Preto suspirou, ajeitando o chapéu.
— Blackwell… já sabe do plano. Vi sua carroagem, e a madame Víbora não perdeu tempo. Ele contratou dois dos melhores pistoleiros do oeste. A Última Sombra e o Relâmpago do Deserto. Eles vão atacar antes que consigamos ajuda.

O grupo se silenciou. Cada palavra pesava como chumbo.
— E as boas notícias? — perguntou Angel.

Ele sorriu levemente, um sorriso com sabor de esperança amarga.
— Eu conheço gente. Muitas. Por anos viajei, cantei e observei. Posso trazer quem for necessário. Mas precisamos nos mover rápido.

O caminho até a pequena cidade de Tumbleweed foi longo, cortando o deserto queimado pelo sol da manhã.
O Homem de Preto falava pouco, mas seus relatos pintavam Mira de Prata como uma lenda viva.
— Naquela cidade, a multidão mal respirava enquanto ela atirava. Ninguém ouvia minhas canções, tamanha a atenção dela. A velocidade de suas mãos… é quase sobrenatural.

Eles a encontraram ao entardecer, praticando tiros em latas penduradas em postes de madeira.
Ela girava o revólver com precisão felina, cada disparo cravando metal na madeira com um estalo metálico.

— Estamos formando um grupo — disse o Homem de Preto, explicando a situação rapidamente. — Precisamos de sua ajuda.

Mira de Prata o olhou de cima a baixo, arqueando uma sobrancelha.
— Vocês me oferecem isso por ajuda? — disse, gesticulando para a bolsa de moedas que o Homem de Preto ergueu. — Eu ganho mais que isso em uma apresentação.

O Homem sem Nome e Angel trocaram olhares. Parecia que tudo estava perdido.

Então Angel se inclinou, falando baixinho no ouvido do Cachorro Urubu.
Ele sorriu e virou-se para ela, confirmando com um aceno.

— Você é a maior pistoleira do oeste, certo? — disse ele, a voz firme — Mas tem alguém que é mais rápido que você…

Os olhos de Mira de Prata se estreitaram, interesse despertando sob a fúria da recusa.
— Um tal de Última Sombra — continuou o Cachorro Urubu — dizem que ganhou esse apelido porque foi mais rápido que a própria sombra.

Ela mordeu o lábio inferior, semicerrando os olhos.
— Eu ganho dele fácil.

O Homem sem Nome percebeu a teimosia crescente.
— Não, deixem quieto. Não queremos que você perca sua fama por nós.

Mas Mira de Prata já estava em fogo, sua mente calculando possibilidades, adrenalina pulsando em cada veia.
— Se eu vencer ele — disse finalmente, uma faísca de desafio no olhar — minha fama vai aumentar. Meus shows terão mais público… Isso pode muito bem… me ser útil.

O Homem de Preto apenas sorriu, satisfeito. A faísca de Mira de Prata havia sido acesa, e com ela, a esperança de reforços para a batalha que se aproximava

A jornada continuou com Angel, o Homem sem Nome e o Cachorro Urubu seguindo o Homem de Preto. O deserto se alongava, vermelho e silencioso, até que, ao longe, uma fazenda isolada despontou nas fronteiras com o México.

Uma casa velha, desgastada pelo tempo, contrastava com o estábulo impecável, recém-pintado e reluzente ao sol poente. O vento levantava a poeira da terra seca, e as sombras se alongavam, tornando a paisagem ainda mais dramática.

O Homem de Preto parou, o olhar cravado na figura que emergia do estábulo. Estrela Veloz. Um velho apelido, carregado de histórias e ressentimentos. Ela o viu e, num instante, sua fúria explodiu.

— Como tem a cara de pau de voltar aqui? — gritou, avançando e desferindo um tapa que estalou no ar.

Ele baixou a cabeça, sem graça, mas firme.
— Eu não viria se não fosse importante. Você sabe disso. Sei que ainda me odeia… mas é por um bem maior.

Ela ergueu o olhar, os olhos brilhando de raiva e conflito.
— Querida… — ele começou, hesitante.

— Não me chame de querida — cortou ela, firme.

O Homem de Preto respirou fundo, sabendo que tinha pouco tempo.
— Uma cidade está correndo perigo… mulheres, crianças, idosos, doentes…

Ela estreitou os olhos, cruzando os braços.
— E o que eu tenho a ver com isso? Não sou xerife, você sabe muito bem, John.

Ele deu um passo à frente, a urgência pulsando em cada palavra.
— Eu sei, Abigail… o problema é que o Relâmpago do Deserto está do lado deles.

Ela virou-se, os punhos cerrados, e respondeu com frieza:
— Mas um motivo para eu não ir. Passar bem.

O Homem de Preto suspirou, virando-se de volta para o grupo que aguardava no portão da fazenda.
— É… não teremos um cavaleiro à altura do nosso lado — murmurou, com um peso no tom que apenas eles podiam ouvir.

O grupo decidiu retornar para Monadnock, planejando seus próximos passos. Durante os dois dias de viagem de volta, o entardecer tingia o deserto de vermelho e ouro. O vento soprava seco, carregando o cheiro da terra e das plantas ressequidas.

De repente, um grito ensurdecedor cortou o ar — um som de dor tão agudo que fez o grupo estremecer. Seguiu-se um disparo. Instintivamente, pararam. Olhos atentos, mãos nos coldres. O vento sibilava entre as árvores, calafrios percorriam o grupo. O silêncio se estendeu por longos segundos… até que do meio do mato, um homem cambaleou, segurando a barriga, e caiu perto da estrada.

Atrás dele, uma mulher em sobretudo de couro, mirando sua arma, sem perceber os observadores ao redor. Com um disparo certeiro, terminou o serviço. Só então percebeu o grupo. O olhar dela se fixou neles, e a arma foi apontada.

— Parados! — gritou. — Esse maldito merece. Saiam ou acabarão como ele!

Angel, mais astuta, ergueu as mãos em gesto de rendição:
— Não vimos nada, senhora. Estamos de passagem. Somente isso.

A mulher relaxou ligeiramente a postura:
— Que bom. Então sigam seu caminho.

Angel não deixou passar:
— Mas não pude deixar de reparar que o homem caído à sua frente tem o emblema do Blackwell.

— Maldito seja o Blackwell — respondeu a mulher, com ódio contido.

— Que bom que compartilhamos do mesmo pensamento — disse Angel. — Estamos formando um grupo para derrubá-lo. Não estaria interessada?

A mulher hesitou, mordendo o lábio, e então sorriu de lado:
— Matar aquele animal? Seria uma ótima ideia… Minha cabana não é longe daqui. Venham. Não tenho muito, mas tenho o suficiente para todos jantarem e discutirmos melhor isso.

O Homem sem Nome ficou receoso, ponderando que qualquer demora poderia condenar a cidade, mas aceitou.

Na cabana, a conversa começou. Cada um contou seus motivos para lutar contra Blackwell. O Homem sem Nome permaneceu em silêncio. A mulher olhou para ele, desafiadora:
— Bom, sua história não é da minha conta, nem a minha é da sua.

O resto da noite passou, todos foram dormir — exceto Angel e a mulher. Elas conversaram baixinho, à luz bruxuleante de uma lamparina. Aos poucos, a mulher revelou:
— O Blackwell matou meu marido… ele trabalhava para ele e não seguiu uma ordem.

Angel a confortou, segurando sua mão e murmurando palavras de apoio. A determinação da mulher se fortaleceu, e ela decidiu juntar-se ao grupo.

Na manhã seguinte, chegaram à cidade. Angel já começava a elaborar estratégias, mapeando ruas, saídas e pontos de defesa. Enquanto isso, Cachorro Urubu e o Homem de Preto compravam explosivos e munição. O Homem sem Nome, Mira de Prata e a Viúva ensinavam os homens da cidade a atirar. Mulheres e crianças eram levadas para o celeiro mais distante, sob a proteção de todos. O plano começava a tomar forma, e a tensão no ar era quase palpável.

O plano estava traçado com precisão, cada detalhe pensado para provocar Blackwell e forçá-lo a expor-se. O objetivo era claro: atacar os comboios de petróleo, chamar sua atenção e despertar sua soberba. Ele viria à cidade no dia do ataque, acreditando que seria fácil esmagar qualquer resistência.

O Homem de Preto e Cachorro Urubu se ofereceram como iscas. Seus passos seriam vistos, seus disparos ouvidos, tudo calculado para que os inimigos acreditassem em movimento isolado. Enquanto isso, o Homem sem Nome e a Viúva esperavam escondidos, prontos para atacar de surpresa.

No meio do deserto, ao longo de estradas de terra e pontes de madeira, os comboios surgiam. O vento levantava poeira, o sol queimava, mas o grupo manteve-se firme. O Homem de Preto e o Cachorro Urubu surgiam em pontos estratégicos, fazendo o barulho necessário para atrair os olhares dos guardas.

E então, quando a atenção estava voltada para eles, o Homem sem Nome e a Viúva atacavam. Roubavam os barris de petróleo, incendiavam os carros, espalhando caos e confusão. O cheiro de óleo queimado e pólvora enchia o ar.

Cada ataque era calculado, rápido, silencioso. O objetivo não era apenas destruir, mas enviar uma mensagem: Blackwell não estava intocável. Aos poucos, a cidade de Monadnock sentiria que havia esperança. Cada comboio incendiado ecoava como um desafio à tirania que pairava sobre a região

O dia do ataque finalmente chegara.

No horizonte, dezenas de capangas de Blackwell avançavam, espalhando a sombra de sua presença como um prenúncio de desastre. Era o mesmo horizonte onde, dias atrás, a figura de um homem estranho havia surgido — agora tomado pelo exército particular de Blackwell.

Os cidadãos de Monadnock permaneciam escondidos nas casas, o coração batendo acelerado, cada mão segurando firmemente sua arma. Esperavam apenas o sinal de Angel para agir.

Do alto da colina, Blackwell surgia triunfante, como se desfilasse para receber um prêmio. Seus olhos frios percorriam a cidade, e sua voz soou pelo vento:
— É uma pena que tudo vai acabar em fogo.

Seus homens começaram a avançar, marchando com a certeza de que a cidade seria facilmente esmagada. Ao seu lado, A Última Sombra e O Relâmpago do Deserto aguardavam, silenciosos, mas mortais.

Então, o tiroteio começou. O estalo das armas se misturava ao vento do deserto, e o caos rapidamente tomou conta do cenário. Quando os capangas se aproximaram das casas, as explosões das dinamites — meticulosamente posicionadas por Angel — sacudiram o chão. A poeira subiu em nuvens densas, cegando soldados e cidadãos por igual.

Mas a luta não cessou. O som dos tiros se mesclava aos gritos, e a morte visitava ambos os lados. Capangas caíam, cidadãos tombavam, e ainda assim o combate continuava, feroz e implacável. Cada segundo parecia eterno, cada bala disparada carregava o peso do destino de Monadnock.

O Homem de Preto e o Cachorro Urubu se posicionaram nas portas do saloon. Entre um disparo e outro, murmuravam antigas canções, suas vozes carregadas de dor e desafio, como se cada nota fosse uma bala silenciosa atingindo o medo. As balas zuniam pelo ar, acertando capangas que se atreviam a se aproximar.

No alto dos telhados, a Viúva se movia com a graça letal de uma sombra. Cada salto, cada disparo, era calculado para maximizar o caos entre os homens de Blackwell.

Angel, firme sobre uma caixa d’água, mantinha seu rifle apontado com precisão cirúrgica. Cada clique do gatilho ressoava como sentença de morte, cada capanga que caía reforçava a estratégia minuciosa que ela havia arquitetado.

O Homem sem Nome corria pelo meio da poeira, movendo-se como se o vento o protegesse. Era impossível atingi-lo — um espectro entre explosões e tiros. Ele derrubava o máximo de capangas que podia, avançando com ferocidade e precisão, cada passo calculado, cada disparo letal. A cidade inteira parecia girar ao seu redor, mas ele permanecia firme, concentrado, implacável.

O tiroteio se intensificava, mas a poeira das explosões começava a baixar. Lá estava a Mira de Prata, parada, encarando a Última Sombra como se fossem inimigos há anos.

— Vamos lá, gracinha. Não vai descer aqui e lutar como um homem? Vem mostrar sua velocidade.

Com o ego ferido, a Última Sombra desceu. Ambos se prepararam para o duelo, ignorando o caos que se desenrolava ao redor. Ele começou a contar:

— 1…

Mas atirou antes de chegar a dois, acertando a perna dela. Ela gritou, puxou sua arma e disparou, atingindo-o no peito, apagando o nome do mais rápido do oeste.

No entanto, antes que pudesse se recompor, um tiro atingiu sua outra perna, vindo do Relâmpago do Deserto, que descia a colina em seu cavalo como um raio, já preparando o próximo disparo. A Mira de Prata caiu, impossibilitada de se mover, aceitando seu destino.

Mas então, o Homem sem Nome se lançou na frente do tiro, segurando uma tábua de madeira que havia pegado entre os destroços das explosões.

— Você não vai morrer hoje — disse ele, firme.

O Relâmpago continuou a atirar, deixando a madeira esburacada e diminuindo cada vez mais as chances dos heróis. A distância entre eles diminuía a cada impacto, e cada disparo parecia carregar o peso do mundo.

— Olha! — gritou Angel, apontando para o deserto. Uma nuvem de poeira crescia rapidamente no horizonte.

— Correndo sem mim, irmãozinho! — gritou a figura surgindo da poeira.

O Homem de Preto, gritando, respondeu:

— Sabia que viria!

O Relâmpago, ao ver sua irmã, mudou seu foco imediatamente e começou a correr em direção a ela. Os dois avançavam quase que em sincronia, trocando disparos a cada galope.

Enquanto isso, o Homem sem Nome ajudava a Mira de Prata a se deslocar para um lugar seguro, com Angel cobrindo-os com tiros certeiros.

No horizonte, Estrela Veloz corria à frente de seu irmão, atirando e levantando uma nuvem máxima de poeira. O Relâmpago avançava sem conseguir ver direito, e ela aproveitou para fazer uma curva brusca, jogando-o em um barranco. Não o matou, mas deixou-o ferido.

— Eu já volto pra cuidar de você, maninho — disse ela, firme, antes de se voltar novamente para proteger a cidade, correndo de volta para o campo de batalha.

O Homem sem Nome dispara montado, seu cavalo galopando em direção a Blackwell. As ruas de Monadnock ainda cheiram a pólvora e poeira, ecos de uma batalha que parecia não ter fim. O magnata observa o pistoleiro se aproximar, com um sorriso frio, calculista, como se estivesse em um teatro de poder.

Dois tiros ecoam. O corpo do cavaleiro é arremessado ao chão, terra e sangue se misturando. Sangrando, ele rasteja pela terra seca, entre os escombros de uma barricada de dois andares que a cidade erguera em desespero. O fogo se espalhava pelas tábuas, formando um arco de chamas e cinzas diante dele — um portal sombrio que simbolizava o sofrimento de Monadnock. Blackwell se aproxima, elegante, como se desfilasse em um salão de baile, não em um campo de batalha.

— “Tudo isso… pra morrer assim.” — a voz dele é um sussurro venenoso. — “Que decepção. Chega a ser… irônico.”

O Homem sem Nome ergue o rosto, sujo de sangue, com um meio sorriso que desafia a morte.

— “É… irônico…” — sua mão trêmula alcança o bolso do colete e puxa um cigarro amarrotado. Ele tenta acender, mas o fósforo escorrega pelos dedos manchados de sangue.

Blackwell, em um gesto de escárnio, pega seu isqueiro de prata, gravado com suas iniciais, acende e aproxima a chama com soberba.

— “Irônico como tudo acaba… em fogo.”

Então, um disparo corta o silêncio. O som reverbera pelos prédios em ruínas. Um barril acima de Blackwell é atingido. Desta vez, a surpresa se revela: não era acaso. O barril, roubado de seus próprios estoques e estrategicamente colocado, jorra petróleo sobre o magnata exatamente como o plano previa.

O Homem sem Nome olha nos olhos dele, acende o cigarro com a chama oferecida e, num último gesto, lança-o sobre o magnata.

— “Foi o que você me ensinou… pai.”

As chamas se erguem, consumindo Blackwell em um rugido de fogo.

O óleo escorreu pelas ombreiras, refletindo as chamas que começavam a dançar no rosto de Blackwell. Seus olhos, antes frios e calculistas, agora ardiam com terror

Ele grita, mas outro disparo o silencia. A Viúva de Fogo, no alto de uma sacada, segura seu rifle fumegante, cada bala enterrando anos de dor e vingança. Cada ação, cada posição, cada movimento deles tinha sido pensado para aquele exato momento.

O fogo ilumina a noite, refletindo nas fachadas quebradas da cidade. O povo observa em silêncio, entre o clarão das chamas e a fumaça que sobe para o céu. O destino de um império, e a lenda de um Homem sem Nome, se selam naquele instante de destruição e redenção — e ninguém ali acreditaria em acaso.

O fogo consumia os últimos vestígios de Blackwell, e os capangas restantes, vendo seu líder cair, não tiveram coragem de lutar. Um por um, fugiram, desaparecendo no horizonte poeirento, deixando a cidade livre. As casas agora se enchiam de gritos de alívio e risadas tímidas. As crianças corriam entre as ruas, os adultos se abraçavam, e por um momento, Monadnock respirou sem medo. A tirania havia terminado.

Do alto da colina, onde antes a figura estranha e Blackwell se erguiam como sombras de terror, surgiu uma nova visão. Um homem sobre um cavalo imponente, trajando roupas tradicionais, o peito erguido com dignidade. Águia Caindo, cacique e guardião das terras, observava a cidade com olhos firmes, mas carregados de serenidade. Não havia dor, nem medo; havia esperança. Seu cavalo relinchava baixo, e o vento do deserto parecia sussurrar promessas de proteção.

O Homem sem Nome se ergueu, sujo, cansado, mas com os olhos ardendo de determinação. Angel se aproximou, seu olhar compartilhando a mesma chama silenciosa de justiça.

— “E agora?” — perguntou ele.

— “Agora… continuamos a lutar por quem não pode.” — respondeu ela, com um meio sorriso.

Os dois partiram juntos, tornando-se justiceiros, vagando pelo velho oeste. De cidade em cidade, vingando injustiças, protegendo os fracos e mantendo a memória de Blackwell viva apenas como um aviso para os tiranos que ousassem se erguer novamente.

De tempos em tempos, a gangue se reunia: o Homem de Preto e a Estrela Veloz juntos, sempre confiantes e rápidos, formando dupla inseparável; o Cachorro Urubu e o próprio Homem de Preto se juntavam em canções e histórias; a Viúva de Fogo continuava sua vingança silenciosa; e Mira de Prata, quando podia, testava sua velocidade contra qualquer novo oponente que ousasse desafiar sua fama.

O Relâmpago do Deserto, porém, foi capturado, seus dias agora passados atrás das grades, lembrando a todos do custo de sua ganância e da força da justiça que o grupo havia se tornado.

E assim, entre rumores e poeira do deserto, as lendas continuaram. Mas ninguém jamais poderia afirmar com certeza o que aconteceu.

Anos depois, uma fogueira crepitava sob o céu estrelado. O Cachorro Urubu, sentado com seu violão, olhava para o fogo e murmurava:

— “Então foi assim… ou talvez eu tenha exagerado um pouco. Mas vocês viram? Ou ouviram? Quem sabe a verdade realmente importa? História é como a poeira do deserto, meu amigo: ela dança e some, e a memória decide o que vai ficar.”`


const pre = document.getElementById('lore');
let i = 0;
let typewriterTimeout;
let isWriting = false;

const typewrite = document.getElementById('typewrite'); // seu áudio
const pagina = document.getElementById('historiaScroll');

function escrever() {
    if (!isWriting) return; // se estiver pausado, não continua

    if (i < texto.length) {
        typewrite.volume = 0.01;
        typewrite.play();
        pre.textContent += texto[i];
        i++;
        typewriterTimeout = setTimeout(escrever, 50); // agenda próxima letra
        pagina.scrollTop = pagina.scrollHeight
    }
}

function scrollToBottom() {
  pagina.scrollTop = pagina.scrollHeight;
}

const observerHistory = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isWriting = true;
            escrever();
            scrollToBottom()
        } else {
            isWriting = false;
            clearTimeout(typewriterTimeout); // cancela o próximo passo
            typewrite.pause(); // pausa o som
        }
    });
}, { threshold: 0});

observerHistory.observe(pre);

function playWhoosh(){
    let whoosh = document.getElementById('posterWhoosh');
    whoosh.volume = 0.2
    whoosh.pause()
    whoosh.currentTime=0
    whoosh.play()
}

function playClick(){
    let whoosh = document.getElementById('click');
    whoosh.volume = 0.2
    whoosh.pause()
    whoosh.currentTime=0
    whoosh.play()
}

async function stopMusic(){
    let audio =  document.getElementById("audio");
    let mute = document.getElementById('mute');
    if (!audio.paused && audio.currentTime > 0 && !audio.ended){
        mute.src = "assets/imgs/sound.png";
        playClick()
        await audio.pause();
    } else{
        mute.src = "assets/imgs/mute.png";
        playClick()
        audio.play()
    }
    
}

async function stopMusicMenu(){
    let audio =  document.getElementById("audio");
    let mute = document.getElementById('muteMenu');
    if (!audio.paused && audio.currentTime > 0 && !audio.ended){
        mute.src = "assets/imgs/sound.png";
        playClick()
        await audio.pause();
    } else{
        mute.src = "assets/imgs/mute.png";
        playClick()
        audio.play()
    }
}

function goToPage({name}){
    const url = `personagem.html?nome=${encodeURIComponent(name)}`;
    window.location.href = url;
}

function openMenu(){
    let menu = document.getElementById('menu_open');
    let button = document.getElementById('button_menu');
    const scrollspy = document.getElementById("scrollspy");
    if (menu.style.display == 'none'){
        menu.style.display = 'flex';
        button.innerHTML = '✕'
        scrollspy.style.display = 'none';
    } else{
        menu.style.display = 'none'
        button.innerHTML = '☰'
        scrollspy.style.display ='block'

    }
}

function closeMenu(){
    playClick()
    let menu = document.getElementById('menu_open');
    let button = document.getElementById('button_menu');
    menu.style.display = 'none'
    button.innerHTML = '☰'
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // quanto rolou
  const windowHeight = window.innerHeight; // altura da tela
  const documentHeight = document.documentElement.scrollHeight; // altura total

  console.log(`Scroll atual: ${scrollTop}px`);

  // Exemplo: desabilitar botão ao chegar no fim
  const button = document.getElementById("scrollspy");
  if (scrollTop < documentHeight/10) {
    button.style.animation = 'none';
    button.style.opacity = 0
  } else {
    button.style.animation = 'comeDown 0.8s ease-in-out forwards'
    button.style.opacity = 100
  }
});

function goTotop(){
    let inicio = document.getElementById("inicio")
    inicio.scrollIntoView({'behavior': 'smooth', 'block': 'end'})
}

function baixarApp(){
    playClick()
    window.open('https://github.com/malvesbruno/Bang-/releases/download/v1.1.0/bang.v1.1.0.apk')
}
