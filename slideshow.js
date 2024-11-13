
window.onload = function() { //FAZ SLIDESHOW NA PÁGINA PRINCIPAL
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide-image");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
            slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 2000);
        }
        
}


let classicos = []; //ARRAY COM OS PATHS DAS IMAGENS DOS CARROS CLÁSSICOS
classicos[0] = 'carros-classicos/capri.jpg';
classicos[1] = 'carros-classicos/db5.jpg';
classicos[2] = 'carros-classicos/124.jpg';
classicos[3] = 'carros-classicos/4l.jpg';
classicos[4] = 'carros-classicos/beetle.jpg';

let desportivos = []; //ARRAY COM OS PATHS DAS IMAGENS DOS CARROS DESPORTIVOS
desportivos[0] = 'carros-desportivos/r8.jpg';
desportivos[1] = 'carros-desportivos/dark-horse.jpg';
desportivos[2] = 'carros-desportivos/camaro.jpg';
desportivos[3] = 'carros-desportivos/i4.jpg';
desportivos[4] = 'carros-desportivos/r34.jpg';

let Super = []; //ARRAY COM OS PATHS DAS IMAGENS DOS CARROS SUPER
Super[0] = 'carros-super/porsche.jpg';
Super[1] = 'carros-super/senna.jpg';
Super[2] = 'carros-super/agera.jpg';
Super[3] = 'carros-super/veneno.jpg';
Super[4] = 'carros-super/noire.jpg';

let todo = []; //ARRAY COM OS PATHS DAS IMAGENS DOS CARROS TODO TERRENO
todo[0] = 'carros-todoterreno/Defender.jpg';
todo[1] = 'carros-todoterreno/Unimog.jpg';
todo[2] = 'carros-todoterreno/fj40.jpg';
todo[3] = 'carros-todoterreno/Wrangler.jpg';
todo[4] = 'carros-todoterreno/Bronco.jpg';



//FUNÇÃO PARA ALTERAR O CARRO CLÁSSICO ATUAL A SER MOSTRADO NA PÁGINA

//ESTA FUNÇÃO, JUNTO DAS PRÓXIMAS 3, PERMITEM MUDAR O CARRO ATUALMENTE A SER MOSTRADO NA PÁGINAL PRINCIPAL.
//É CHAMADA PELA FUNÇÃO "slide_previous()" ou "slide_next()" E RECEBE COMO PARAMETRO "a" QUE PODE SER
//UM NÚMERO VINDO DE UMA DAS 2 FUNÇÕES OU UM OBJETO (ID) VINDO DOS DROPDOWNS (EX: LINHA 84 DO "index.html")
function classic_car(a){
    let x;
    if(typeof(a) == 'object'){
        x = a.id;
        document.getElementById("dropdown-classicos").classList.toggle("show");
    }else{
        switch(a){
            case 0:
                x = 'classic-1';
                break;
            case 1:
                x = 'classic-2';
                break;
            case 2:
                x = 'classic-3';
                break;
            case 3:
                x = 'classic-4';
                break;
            case 4:
                x = 'classic-5';
                break;
        }
    }
    
    switch(x){
        case 'classic-1':
            document.getElementById('carro-classico').src=classicos[0];
            document.getElementById('classic-text-1').innerHTML = "Ford Capri";
            document.getElementById('classic-text-2').innerHTML = "Inicialmente intitulado de Mustang europeu, o Capri rapidamente ganhou a sua reputação. Um carro rápido, ágil, confortável e extremamente divertido de conduzir. Esteve em produção desde 1969 até 1986, com três gerações diferentes.";

            document.getElementById('classic-info-1').innerHTML = "Cavalos: 126 CV";
            document.getElementById('classic-info-2').innerHTML = "Binário: 235 Nm";
            document.getElementById('classic-info-3').innerHTML = "Peso: 1460 Kg";
            document.getElementById('classic-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('classic-info-5').innerHTML = "Tração: RWD";
            break;
        case 'classic-2':
            document.getElementById('carro-classico').src=classicos[1];
            document.getElementById('classic-text-1').innerHTML = "Aston Martin DB5";
            document.getElementById('classic-text-2').innerHTML = "Extremamente conhecido e reconhecido onde quer que vá, o Aston Martin DB5 é um carro com características inigualáveis. Tendo ganho uma enorme fama pela franquia «007».";
        
            document.getElementById('classic-info-1').innerHTML = "Cavalos: 282 CV";
            document.getElementById('classic-info-2').innerHTML = "Binário: 390 Nm";
            document.getElementById('classic-info-3').innerHTML = "Peso: 1465 Kg";
            document.getElementById('classic-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('classic-info-5').innerHTML = "Tração: RWD";
            break;
        case 'classic-3':
            document.getElementById('carro-classico').src=classicos[2];
            document.getElementById('classic-text-1').innerHTML = "Fiat 124";
            document.getElementById('classic-text-2').innerHTML = "Italiano em todo o seu esplendor, um carro versátil, confortável, rápido e fiável. Inicialmente desenhado para ser um carro familiar, rapidamente a Fiat viu mais potencialidades no 124 e produziu o Speciale e a Familiare.";

            document.getElementById('classic-info-1').innerHTML = "Cavalos: 118 CV";
            document.getElementById('classic-info-2').innerHTML = "Binário: 153 Nm";
            document.getElementById('classic-info-3').innerHTML = "Peso: 960 Kg";
            document.getElementById('classic-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('classic-info-5').innerHTML = "Tração: RWD";
            break;
        case 'classic-4':
            document.getElementById('carro-classico').src=classicos[3];
            document.getElementById('classic-text-1').innerHTML = "Renault 4L";
            document.getElementById('classic-text-2').innerHTML = " Foi construido com o propósito de tirar as vantagens e limar as desvantagens do 2CV, um carro económico, fácil de manter, fiável e divertido.";

            document.getElementById('classic-info-1').innerHTML = "Cavalos: 37 CV";
            document.getElementById('classic-info-2').innerHTML = "Binário: 72 Nm";
            document.getElementById('classic-info-3').innerHTML = "Peso: 720 Kg";
            document.getElementById('classic-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('classic-info-5').innerHTML = "Tração: FWD";
            break;
        case 'classic-5':
            document.getElementById('carro-classico').src=classicos[4];
            document.getElementById('classic-text-1').innerHTML = "Volkswagen Beetle";
            document.getElementById('classic-text-2').innerHTML = "Um dos primeiros carros com motor montado atrás, compacto e pensado nas pessoas, tanto que a alcunha é «The people's car». Com a primeira versão ter sido criada durante a segunda guerra mundial em 1938, manteve-se em produção até 2003.";

            document.getElementById('classic-info-1').innerHTML = "Cavalos: 25 CV";
            document.getElementById('classic-info-2').innerHTML = "Binário: 66 Nm";
            document.getElementById('classic-info-3').innerHTML = "Peso: 892 Kg";
            document.getElementById('classic-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('classic-info-5').innerHTML = "Tração: RWD";
            break;
    }
}

//FUNÇÃO PARA ALTERAR O CARRO DESPORTIVOS ATUAL A SER MOSTRADO NA PÁGINA
function sports_car(a){
    let x;
    if(typeof(a) == 'object'){
        x = a.id;
        document.getElementById("dropdown-desportivos").classList.toggle("show");
    }else{
        switch(a){
            case 0:
                x = 'sports-1';
                break;
            case 1:
                x = 'sports-2';
                break;
            case 2:
                x = 'sports-3';
                break;
            case 3:
                x = 'sports-4';
                break;
            case 4:
                x = 'sports-5';
                break;
        }
    }
    
    switch(x){
        case 'sports-1':
            document.getElementById('carro-desportivo').src=desportivos[0];
            document.getElementById('sports-text-1').innerHTML = "Audi R8";
            document.getElementById('sports-text-2').innerHTML = "Facilmente reconhecido, um visual arrojado e com potência para dar calor nas estradas. Acompanhado com um V10 a debitar 540 cavalos e tração traseira, é um brinquedo para as crianças adultas.";

            document.getElementById('sports-info-1').innerHTML = "Cavalos: 602 CV ";
            document.getElementById('sports-info-2').innerHTML = "Binário: 560 Nm";
            document.getElementById('sports-info-3').innerHTML = "Peso: 1630 Kg";
            document.getElementById('sports-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('sports-info-5').innerHTML = "Tração: RWD";
            break;
        case 'sports-2':
            document.getElementById('carro-desportivo').src=desportivos[1];
            document.getElementById('sports-text-1').innerHTML = "Ford Mustang Dark Horse";
            document.getElementById('sports-text-2').innerHTML = "Sendo possivelmente o último Mustang com motor a combustão, a Ford decidiu acabar em grande com o Dark Horse. Vem da linhagem de modelos como o Shelby GT, o Mach 1 e o Cobra Rs, carros de expressão máxima da marca. Traz no sangue o verdadeiro american muscle.";
        
            document.getElementById('sports-info-1').innerHTML = "Cavalos: 500 CV";
            document.getElementById('sports-info-2').innerHTML = "Binário: 566 Nm";
            document.getElementById('sports-info-3').innerHTML = "Peso: 1803 Kg";
            document.getElementById('sports-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('sports-info-5').innerHTML = "Tração: RWD";
            break;
        case 'sports-3':
            document.getElementById('carro-desportivo').src=desportivos[2];
            document.getElementById('sports-text-1').innerHTML = "Chevrolet Camaro ZL1";
            document.getElementById('sports-text-2').innerHTML = "Um dos grandes carros com o verdadeiro músculo americano, o ZL1 é uma versão mais requintada do Camaro. Debitando 650 cavalos com a ajuda de um V8 com um total de 6200 de cilindrada não é um carro citadino mas sim um carro para o verdadeiro amante de velocidade.";

            document.getElementById('sports-info-1').innerHTML = "Cavalos: 650 CV";
            document.getElementById('sports-info-2').innerHTML = "Binário: 868 Nm";
            document.getElementById('sports-info-3').innerHTML = "Peso: 1748 Kg";
            document.getElementById('sports-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('sports-info-5').innerHTML = "Tração: RWD";
            break;
        case 'sports-4':
            document.getElementById('carro-desportivo').src=desportivos[3];
            document.getElementById('sports-text-1').innerHTML = "BMW I4 M50";
            document.getElementById('sports-text-2').innerHTML = "Um foguete disfarçado, o I4 M50 da BMW é o verdadeiro dorminhoco, apesar de ser um carro elétrico é extremamente divertido de se conduzir. Graças aos seus dois motores elétricos produz 536 cavalos e permite um arranque do outro mundo.";

            document.getElementById('sports-info-1').innerHTML = "Cavalos: 537 CV";
            document.getElementById('sports-info-2').innerHTML = "Binário: 795 Nm";
            document.getElementById('sports-info-3').innerHTML = "Peso: 2290 Kg";
            document.getElementById('sports-info-4').innerHTML = "Combustível: Elétrico";
            document.getElementById('sports-info-5').innerHTML = "Tração: RWD";
            break;
        case 'sports-5':
            document.getElementById('carro-desportivo').src=desportivos[4];
            document.getElementById('sports-text-1').innerHTML = "Nissan Skyline GT-R R34";
            document.getElementById('sports-text-2').innerHTML = "O último Godzilla, o Skyline R34 é dos carros mais facilmente reconhecidos em todo o mundo. Ganhou uma grande fama graças à saga Velocidade Furiosa. A quinta geração do GT-R trouxe muitas inovações eletrónicas bem como a nível mecânico.";

            document.getElementById('sports-info-1').innerHTML = "Cavalos: 276 CV";
            document.getElementById('sports-info-2').innerHTML = "Binário: 379 Nm";
            document.getElementById('sports-info-3').innerHTML = "Peso: 1560 Kg";
            document.getElementById('sports-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('sports-info-5').innerHTML = "Tração: AWD";
            break;
    }
}

//FUNÇÃO PARA ALTERAR O CARRO SUPER ATUAL A SER MOSTRADO NA PÁGINA
function super_car(a){
    let x;
    if(typeof(a) == 'object'){
        x = a.id;
        document.getElementById("dropdown-super").classList.toggle("show");
    }else{
        switch(a){
            case 0:
                x = 'super-1';
                break;
            case 1:
                x = 'super-2';
                break;
            case 2:
                x = 'super-3';
                break;
            case 3:
                x = 'super-4';
                break;
            case 4:
                x = 'super-5';
                break;
        }
    }
    
    switch(x){
        case 'super-1':
            document.getElementById('carro-super').src=Super[0];
            document.getElementById('super-text-1').innerHTML = "Porsche 911 GT2 RS";
            document.getElementById('super-text-2').innerHTML = "Um monstro das pistas, um carro de alto rendimento, o GT2 RS é o verdadeiro Porsche, uma verdadeira obra de arte. A geração 991 traz um 6 em linha de 3.8 litros a debitar 691 cavalos e 750 Nm de binário. É o verdadeiro brinquedo para graúdos.";

            document.getElementById('super-info-1').innerHTML = "Cavalos: 690 CV";
            document.getElementById('super-info-2').innerHTML = "Binário: 750 Nm";
            document.getElementById('super-info-3').innerHTML = "Peso: 1561 Kg";
            document.getElementById('super-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('super-info-5').innerHTML = "Tração: RWD";
            break;
        case 'super-2':
            document.getElementById('carro-super').src=Super[1];
            document.getElementById('super-text-1').innerHTML = "McLaren Senna";
            document.getElementById('super-text-2').innerHTML = "Em homenagem ao melhor piloto de Fórmula 1 Ayrton Senna, o Senna é o piloto em forma de carro. Ágil, veloz, leve e potente. Sem dúvida alguma que este carro é uma obra de arte sobre rodas.";
        
            document.getElementById('super-info-1').innerHTML = "Cavalos: 789 CV";
            document.getElementById('super-info-2').innerHTML = "Binário: 800 Nm";
            document.getElementById('super-info-3').innerHTML = "Peso: 1309 Kg";
            document.getElementById('super-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('super-info-5').innerHTML = "Tração: RWD";
            break;
        case 'super-3':
            document.getElementById('carro-super').src=Super[2];
            document.getElementById('super-text-1').innerHTML = "Koenigsegg Agera RS";
            document.getElementById('super-text-2').innerHTML = "Desconhecido por muitos, a verdadeira obra de arte sueca sobre rodas. O Koenigsegg Agera RS à data foi o primeiro carro em produção a bater o recorde de velocidade de 458 km/h. É acompanhado por um V8 de 5.0 litros a produzir 1176 cavalos.";

            document.getElementById('super-info-1').innerHTML = "Cavalos: 1004 CV";
            document.getElementById('super-info-2').innerHTML = "Binário: 1060 Nm";
            document.getElementById('super-info-3').innerHTML = "Peso: 1305 Kg";
            document.getElementById('super-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('super-info-5').innerHTML = "Tração: RWD";
            break;
        case 'super-4':
            document.getElementById('carro-super').src=Super[3];
            document.getElementById('super-text-1').innerHTML = "Lamborghini Veneno";
            document.getElementById('super-text-2').innerHTML = "Com um design completamente fora do comum, agressivo e veloz. Apenas 13 Lamborghini Veneno foram construidos não só é um carro raro mas um carro que sem dúvida ficou na história automóvel.";

            document.getElementById('super-info-1').innerHTML = "Cavalos: 740 CV";
            document.getElementById('super-info-2').innerHTML = "Binário: 690 Nm";
            document.getElementById('super-info-3').innerHTML = "Peso: 1450 Kg";
            document.getElementById('super-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('super-info-5').innerHTML = "Tração: RWD";
            break;
        case 'super-5':
            document.getElementById('carro-super').src=Super[4];
            document.getElementById('super-text-1').innerHTML = "Bugatti La Voiture Noire";
            document.getElementById('super-text-2').innerHTML = "Certamente um dos carros mais exclusivos e mais bonitos do mundo, o Bugatti La Voiture Noire é a Mona Lisa sobre rodas. É um carro que foi desenhado e construido a pensar em todos os detalhes possíveis.";

            document.getElementById('super-info-1').innerHTML = "Cavalos: 1500 CV";
            document.getElementById('super-info-2').innerHTML = "Binário: 1600 Nm";
            document.getElementById('super-info-3').innerHTML = "Peso: 2000 Kg";
            document.getElementById('super-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('super-info-5').innerHTML = "Tração: AWD";
            break;
    }
}

//FUNÇÃO PARA ALTERAR O CARRO TODO TERRENO ATUAL A SER MOSTRADO NA PÁGINA
function todo_terreno(a){
    let x;
    if(typeof(a) == 'object'){
        x = a.id;
        document.getElementById("dropdown-camioes").classList.toggle("show");
    }else{
        switch(a){
            case 0:
                x = 'todoterreno-1';
                break;
            case 1:
                x = 'todoterreno-2';
                break;
            case 2:
                x = 'todoterreno-3';
                break;
            case 3:
                x = 'todoterreno-4';
                break;
            case 4:
                x = 'todoterreno-5';
                break;
        }
    }
    
    switch(x){
        case 'todoterreno-1':
            document.getElementById('carro-todoterreno').src=todo[0];
            document.getElementById('todoterreno-text-1').innerHTML = "Land Rover Defender";
            document.getElementById('todoterreno-text-2').innerHTML = "Um carro potente, com tração às quatro e bastante fiável. Usado não só no mundo civil mas também ao serviço militar bem como ao serviço dos corpos de bombeiros.";

            document.getElementById('todoterreno-info-1').innerHTML = "Cavalos: 120 CV";
            document.getElementById('todoterreno-info-2').innerHTML = "Binário: 300 Nm";
            document.getElementById('todoterreno-info-3').innerHTML = "Peso: 1797 Kg";
            document.getElementById('todoterreno-info-4').innerHTML = "Combustível: Gasóleo";
            document.getElementById('todoterreno-info-5').innerHTML = "Tração: AWD";
            break;
        case 'todoterreno-2':
            document.getElementById('carro-todoterreno').src=todo[1];
            document.getElementById('todoterreno-text-1').innerHTML = "Mercedes-Benz Unimog";
            document.getElementById('todoterreno-text-2').innerHTML = "Um veículo com inúmeras funções e características, o Unimog é pesado, potente e agressivo estando a ser usado maioritariamente ao serviço de corpos de bombeiros ao combate de incêndios florestais.";
        
            document.getElementById('todoterreno-info-1').innerHTML = "Cavalos: 231 CV";
            document.getElementById('todoterreno-info-2').innerHTML = "Binário: 900 Nm";
            document.getElementById('todoterreno-info-3').innerHTML = "Peso: 10300 Kg";
            document.getElementById('todoterreno-info-4').innerHTML = "Combustível: Gasóleo";
            document.getElementById('todoterreno-info-5').innerHTML = "Tração: AWD";
            break;
        case 'todoterreno-3':
            document.getElementById('carro-todoterreno').src=todo[2];
            document.getElementById('todoterreno-text-1').innerHTML = "Toyota Land Cruiser FJ40";
            document.getElementById('todoterreno-text-2').innerHTML = "Deu prática ao nome Land Cruiser, o FJ40 é um dos verdadeiros todo-terreno existentes. Após mais de 50 anos ainda tem as capacidades bem afinadas.";

            document.getElementById('todoterreno-info-1').innerHTML = "Cavalos: 125 CV";
            document.getElementById('todoterreno-info-2').innerHTML = "Binário: 383 Nm";
            document.getElementById('todoterreno-info-3').innerHTML = "Peso: 1480 Kg";
            document.getElementById('todoterreno-info-4').innerHTML = "Combustível: Gasóleo";
            document.getElementById('todoterreno-info-5').innerHTML = "Tração: AWD";
            break;
        case 'todoterreno-4':
            document.getElementById('carro-todoterreno').src=todo[3];
            document.getElementById('todoterreno-text-1').innerHTML = "Jeep Wrangler";
            document.getElementById('todoterreno-text-2').innerHTML = " Vem da linhagem do Jeep Willys, o Wrangler é um todo-terreno capaz de atravessar tudo que é preciso, potente, não muito aerodinâmico dado as suas características e propósito mas náo deixa de ser divertido de conduzir.";

            document.getElementById('todoterreno-info-1').innerHTML = "Cavalos: 197 CV";
            document.getElementById('todoterreno-info-2').innerHTML = "Binário: 410 Nm";
            document.getElementById('todoterreno-info-3').innerHTML = "Peso: 2128 Kg";
            document.getElementById('todoterreno-info-4').innerHTML = "Combustível: Gasóleo";
            document.getElementById('todoterreno-info-5').innerHTML = "Tração: AWD";
            break;
        case 'todoterreno-5':
            document.getElementById('carro-todoterreno').src=todo[4];
            document.getElementById('todoterreno-text-1').innerHTML = "Ford Bronco";
            document.getElementById('todoterreno-text-2').innerHTML = "Um dos rivais do Toyota Land Cruiser, o Ford Bronco foi criado não só para todo-terreno mas, também, para a vida citadina e para o quotidiano. Era um carro robusto, potente e fiável, fazendo dele uma compra certa para as pessoas da época.";

            document.getElementById('todoterreno-info-1').innerHTML = "Cavalos: 150 CV";
            document.getElementById('todoterreno-info-2').innerHTML = "Binário: 328 Nm";
            document.getElementById('todoterreno-info-3').innerHTML = "Peso: 1550 Kg";
            document.getElementById('todoterreno-info-4').innerHTML = "Combustível: Gasolina";
            document.getElementById('todoterreno-info-5').innerHTML = "Tração: AWD";
            break;
    } 
}

//FUNÇÃO PARA O BOTÃO ANTERIOR DE TODAS AS 4 IMAGENS
function slide_previous(a){ //FUNÇÃO RECEBE "a" COMO PARÂMETRO (BUTTON)
    let x = a.id; //GUARDA O ID DO BOTÃO
    let element;
    let array;
    switch (x){ //DEPENDENDO DO BOTÃO CLICADO (1, 3, 5, 7 SÃO OS BOTÕES QUE ESTÃO À ESQUERDA DE CADA IMAGEM)
        case '1' :
            element = document.getElementById('carro-classico'); //DEFINE O ELEMENTO (IMAGEM) QUE VAI SER ALTERADA
            array = classicos; //DEFINE O ARRAY A SER UTILIZADO (PATHS DAS IMAGENS DOS CARROS)
            break;
        case '3' :
            element = document.getElementById('carro-desportivo');
            array = desportivos;
            break;
        case '5' :
            element = document.getElementById('carro-super');
            array = Super;
            break;
        case '7' :
            element = document.getElementById('carro-todoterreno');
            array = todo;
            break;
    }
    
    for(let i = 0; i<5; i++){ //PASSA POR TODAS AS IMAGENS
        if(element.src.match(array[i])){ //ENCONTRA A IMAGEM QUE ESTÁ ATUALMENTE A SER MOSTRADA 
            if( i-1 < 0){ //SE A IMAGEM ANTERIOR NÃO EXISTIR 
                i=5 //PASSA PARA A ÚLTIMA IMAGEM
            }
            switch(x){ //DEPENDENDO DO BOTÃO CLICADO (1, 3, 5, 7 SÃO OS BOTÕES QUE ESTÃO À ESQUERDA DE CADA IMAGEM) 
                case '1': //ALTERA A IMAGEM DO CARRO CLÁSSICO
                    classic_car(i-1);
                    break;
                case '3': //ALTERA A IMAGEM DO CARRO DESPORTIVO
                    sports_car(i-1);
                    break;
                case '5': //ALTERA A IMAGEM DO CARRO SUPER
                    super_car(i-1);
                    break;
                case '7': //ALTERA A IMAGEM DO CARRO TODO TERRENO
                    todo_terreno(i-1);
                    break;
            }
            
            break;
        }
    }
}

//FUNÇÃO PARA O BOTÃO PRÓXIMO DE TODAS AS 4 IMAGENS
function slide_next(a){
    let x = a.id;
    let element;
    let array;
    switch (x){ //DEPENDENDO DO BOTÃO CLICADO (2, 4, 6, 8 SÃO OS BOTÕES QUE ESTÃO À DIREITA DE CADA IMAGEM)
        case '2' :
            element = document.getElementById('carro-classico');
            array = classicos;
            break;
        case '4' :
            element = document.getElementById('carro-desportivo');
            array = desportivos;
            break;
        case '6' :
            element = document.getElementById('carro-super');
            array = Super;
            break;
        case '8' :
            element = document.getElementById('carro-todoterreno');
            array = todo;
            break;
    }
 
    for(let i = 0; i<5; i++){  //PASSA POR TODAS AS IMAGENS
        if(element.src.match(array[i])){ //ENCONTRA A IMAGEM QUE ESTÁ ATUALMENTE A SER MOSTRADA 
            if( i+1 > 4){ //SE A PRÓXIMA IMAGEM NÃO EXISTIR 
                i=-1 //PASSA PARA A PRIMEIRA IMAGEM
            }
            switch(x){ //DEPENDENDO DO BOTÃO CLICADO (2, 4, 6, 8 SÃO OS BOTÕES QUE ESTÃO À DIREITA DE CADA IMAGEM)
                case '2': //ALTERA A IMAGEM DO CARRO CLÁSSICO
                    classic_car(i+1);
                    break;
                case '4': //ALTERA A IMAGEM DO CARRO DESPORTIVO
                    sports_car(i+1);
                    break;
                case '6': //ALTERA A IMAGEM DO CARRO SUPER
                    super_car(i+1);
                    break;
                case '8': //ALTERA A IMAGEM DO CARRO TODO TERRENO
                    todo_terreno(i+1);
                    break;
            }
            break;
        }
    }
}

