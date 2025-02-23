	
//primeira estrutura - 'obj' anime 1
var avaliation = 0
var titulo = ""
var totalEp = 0
var assistido = 0
var sinopse = ""
var listCarrossel = []
var listaNome = []
var capa = ""


function createStruture(){
	
			chaveKey = retrieveValue(titulo+'ep')
			if (chaveKey !== null){
				assistido = chaveKey
			}
			
			chaveKey = retrieveValue(titulo)
			if (chaveKey !== null){
				avaliation = chaveKey
			}
			
			
	
	
            const container = document.getElementById('container');

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('content');
			
			
			
						//=========
			const EpsodiosElement = document.createElement('div');
			EpsodiosElement.classList.add('synopsis');
			const epsodio = document.createElement('h5');
			epsodio.textContent = 'Total de Episódios: '+totalEp;
			EpsodiosElement.appendChild(epsodio);
			
			const epsodioAssistido = document.createElement('h5');
			epsodioAssistido.textContent = 'Assistido: '+assistido;
			EpsodiosElement.appendChild(epsodioAssistido);
			
			for (let i = 1; i <= totalEp; i++) {
				const epAssistido = document.createElement('span');
				epAssistido.classList.add('ep_assistido');
				epAssistido.textContent = 'Ep '+i+', ';
				epAssistido.dataset.rating = i;

				epAssistido.addEventListener('click', (event) => {
					const rating = event.target.dataset.rating;
					//updateStars(rating);
					//alert(`Você avaliou com ${rating} estrelas`);
					ep = parseInt(rating, 10); 
					
				
					
					
					
					epsodioAssistido.textContent = 'Assistido: '+ep;
					
					assistido = ep
					//chaveKey = retrieveValue(titulo)
					//if(chaveKey !== avaliation){
					//	storeValue(titulo, avaliation)
					//}
					
				});

				EpsodiosElement.appendChild(epAssistido);
				
			}
			
			
			const elemento_bnt = document.createElement('button');
				elemento_bnt.classList.add('ep_assistido');
				elemento_bnt.textContent = 'OK';

				elemento_bnt.addEventListener('click', (event) => {
					//updateStars(rating);
					
					valor = parseInt(assistido, 10); 
					 
					epsodioAssistido.textContent = 'Assistido: '+valor;
					salvarComo = titulo+'ep'
					storeValue(salvarComo, valor)
					
					storeValue('index', index)
					//var chaveKeyEp = retrieveValue(salvarComo)
					//alert(titulo)
					
				});
			
			EpsodiosElement.appendChild(elemento_bnt);
			
			
			
			
			contentDiv.appendChild(EpsodiosElement)
			//=============
			
			

            const nameElement = document.createElement('h2');
			contentDiv.classList.add('nome-anime');
            nameElement.textContent = titulo;
			
            contentDiv.appendChild(nameElement);

            const imageElement = document.createElement('img');
            //imageElement.src = 'im.jpg'; // Substitua pelo caminho da sua imagem
			 imageElement.src = capa; // Substitua pelo caminho da sua imagem
            imageElement.alt = 'Descrição da Imagem';
            imageElement.style.maxWidth = '90%';
            contentDiv.appendChild(imageElement);

            const starsDiv = document.createElement('div');
            starsDiv.classList.add('stars');

    for (let i = 1; i <= 5; i++) {
        const starElement = document.createElement('span');
        starElement.classList.add('star');
        starElement.textContent = '★';
        starElement.dataset.rating = i;

        starElement.addEventListener('click', (event) => {
            const rating = event.target.dataset.rating;
            updateStars(rating);
            //alert(`Você avaliou com ${rating} estrelas`);
			avaliation = parseInt(rating, 10); 
			
			
			chaveKey = retrieveValue(titulo)
			if(chaveKey !== avaliation){
				storeValue(titulo, avaliation)
			}
				
			
        });

        starsDiv.appendChild(starElement);
    }

            contentDiv.appendChild(starsDiv);
			
			

			
			
			
			
			const synopsisElement = document.createElement('div');
			synopsisElement.classList.add('synopsis');
			synopsisElement.textContent = sinopse;
			contentDiv.appendChild(synopsisElement);
			
			const carouselDiv = document.createElement('div');
			carouselDiv.classList.add('carousel');

			for (let i = 0; i < listCarrossel.length; i++) {
				
				const carouselItem = document.createElement('div');
				carouselItem.classList.add('carousel-item');

				const carouselImage = document.createElement('img');
				carouselImage.src = listCarrossel[i];
				carouselImage.alt = `Imagem ${i}`;

				const carouselTitle = document.createElement('div');
				carouselTitle.classList.add('carousel-title');
				carouselTitle.textContent = listaNome[i];

				carouselItem.appendChild(carouselImage);
				carouselItem.appendChild(carouselTitle);
				carouselDiv.appendChild(carouselItem);
			}

			contentDiv.appendChild(carouselDiv);
			
            container.appendChild(contentDiv);





function updateStars(rating) {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            const starRating = star.dataset.rating;
            star.className = 'star'; // Reseta as classes para evitar sobreposição
            if (starRating <= rating) {
                star.classList.add(`filled-${rating}`);
            }
        });
		
		
    }
	



	

	
	updateStars(avaliation)
	
}


 //document.addEventListener('DOMContentLoaded',createStruture)


function storeValue(key, value) {

    if (typeof value === 'number' && Number.isInteger(value)) {
        localStorage.setItem(key, value.toString());
    } else {
        console.error('O valor deve ser um número inteiro.');
    }
}
function retrieveValue(key) {
    const value = localStorage.getItem(key);
    if (value !== null) {
        return parseInt(value, 10); // Converte a string para um número inteiro
    } else {
        console.warn('Nenhum valor encontrado para a chave fornecida.');
        return null;
    }
}


 function remover(){
document.removeEventListener('DOMContentLoaded',createStruture)	 
 }
 
 
 
//Funções para carregar 
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Quando o script for carregado e executado, chama o callback
    script.onload = function() {
        console.log(`Script ${url} carregado com sucesso`);
        if (callback) {
            callback();
        }
    };

    script.onerror = function() {
        console.error(`Falha ao carregar o script ${url}`);
    };

    document.head.appendChild(script);
}

//loadScript("busca.js",function(){console.log('Callback após carregar script.js');})

//var estru = document.addEventListener('DOMContentLoaded',createStruture)


function escolher(op){
	
	
	
	
	if(op=="n"){
		if(lista.length-1>index){
			index+=1
		}
	}
	if(op=="b"){
		if(index>0){
		index-=1
	}
	}
	

	let obj = lista[index]
	
	if(obj !==null){
		titulo = obj.titulo
		avaliation = obj.star
		totalEp = obj.totalEp
		sinopse =  obj.sinopse
		capa = obj.capa
		
		listCarrossel = obj.carrossel
		listaNome = obj.nomes
		assistido = obj.assistido
		 //document.addEventListener('DOMContentLoaded',createStruture)
	}
	

	
}



function carregaIndex(){
		chaveKey = retrieveValue('index')
			if (chaveKey !== null){
				index = chaveKey
			}
			else{
				chaveKey = 0
			}
			
	index = parseInt(chaveKey, 10);  
	
	escolher(-1)



		document.addEventListener('DOMContentLoaded',createStruture)	
			
}
carregaIndex()


document.addEventListener('DOMContentLoaded', () => {
    const buttonNext = document.getElementById('next');
	 const buttonBack = document.getElementById('back');
    const contentDiv = document.getElementById('container');

    buttonNext.addEventListener('click', () => {
		
		escolher('n')
        contentDiv.textContent = '';
		 createStruture()
		
    });
	buttonBack.addEventListener('click', () => {
		
		escolher('b')
        contentDiv.textContent = '';
		 createStruture()
		
    });
});




     function handleInput(event) {
            console.log("Valor atual: " + event.target.value);
			
			const getDivLista = document.getElementById('lista');
			getDivLista.textContent =""
			getDivLista.style.display="block";
			
		

			list = ['casa','carro','pessoa','carroça','pessoas da classe média', 'pessoas da classe baixa','carruagem']
			buff =""
			maxView = 5
			for(var i=0; i<lista.length;i++){
				
				pesquisa = event.target.value.toUpperCase()
				itemList = lista[i].titulo.toUpperCase()
				if(itemList.indexOf(pesquisa)!==-1 && itemList[0]==pesquisa[0] && maxView>0){
					const nameElement = document.createElement('h4');
					nameElement.classList.add('titulo');
					nameElement.textContent = lista[i].titulo;
					getDivLista.appendChild(nameElement);
					maxView-=1
					nameElement.dataset.rating = i
					
									
				     nameElement.addEventListener('click', (event) => {
						const rating = event.target.dataset.rating;
						//alert(`Você avaliou com ${rating} estrelas`);
						avaliation = parseInt(rating, 10); 
						
						const container = document.getElementById('container');
							
							index = avaliation
							escolher(-1)
							container.textContent = '';
							createStruture()
						
					});
					
					
					
				}
			
				if(event.target.value==""){
					getDivLista.textContent =""
					getDivLista.style.display="none";
					break
				}
				
				

				
				
			}

			
        }

        window.onload = function() {
            var inputField = document.getElementById("meuInput");

            // Adicionando evento de entrada
            inputField.addEventListener("input", handleInput);
        };



