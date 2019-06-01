/************************AJUDA***********************/
  /* Resumo Array Bidimensional
    var memoriaprincipal = new Array();
    memoriaprincipal[1] = new Array ("Banana","Maça","Pêra");
    alert(memoriaprincipal[1][2]);
    for(i=0; i<array.length; i++)
    {
        for(j=0;j<array[i].length; j++)
        {
		    alert(array[i][j]);
        }
    }
  */
  /* Decimal para Binario
  var decimal = 2015;
  var binario = decimal.toString(2);
  alert(binario);
  */
  /* Binario para Decimal
  var binario = 11111011111;
  var decimal = parseInt(binario, 2);
  alert(decimal);
  */
 function transformarendereco()
 {
   const auxiliar = document.querySelector('#endereco');
   const endereco = auxiliar.value;
   const enderecocortado = endereco.slice(5,8);
   
 }
 //Função para colocar zeros à esquerda do endereço
 function pad(str, length) 
 {
   const resto = length - String(str).length;
   return '0'.repeat(resto > 0 ? resto : '0') + str;
 }
 /*************CRIAÇÃO DA MEMÓRIA PRINCIPAL*************/
 /*MEMÓRIA PRINCIPAL
  ENDEREÇO | BLOCO | DADO*/
     var memoriaprincipal = new Array(1024);
     var memoriacache = new Array(64);
     
     //Colocando os endereços
     for(i=0; i<memoriaprincipal.length; i++)
     {
       var binario = i.toString(2);
       var resultado = pad(binario,10);
       memoriaprincipal[i] = new Array(4);
       memoriaprincipal[i][0] = resultado;
     }
     //Colocando os Blocos e Dados
     for(i=0; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=0;
       memoriaprincipal[i][2]="A";
     }
     for(i=1; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=1;
       memoriaprincipal[i][2]="B";
     }
     for(i=2; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=2;
       memoriaprincipal[i][2]="C";
     }
     for(i=3; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=3;
       memoriaprincipal[i][2]="D";
     }
     for(i=4; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=4;
       memoriaprincipal[i][2]="E";
     }
     for(i=5; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=5;
       memoriaprincipal[i][2]="F";
     }
     for(i=6; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=6;
       memoriaprincipal[i][2]="G";
     }
     for(i=7; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=7;
       memoriaprincipal[i][2]="H";
     }
     for(i=8; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=8;
       memoriaprincipal[i][2]="I";
     }
     for(i=9; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=9;
       memoriaprincipal[i][2]="J";
     }
     for(i=10; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=10;
       memoriaprincipal[i][2]="K";
     }
     for(i=11; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=11;
       memoriaprincipal[i][2]="L";
     }
     for(i=12; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=12;
       memoriaprincipal[i][2]="M";
     }
     for(i=13; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=13;
       memoriaprincipal[i][2]="N";
     }
     for(i=14; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=14;
       memoriaprincipal[i][2]="O";
     }
     for(i=15; i<1024; i=i+16)
     {
       memoriaprincipal[i][1]=15;
       memoriaprincipal[i][2]="P";
     }
     alert(memoriaprincipal[278][2]);
     for (let i = 0; i < memoriaprincipal.length; i++) {
         const element = memoriaprincipal[i];
         $("#endereco_tr").append("<td>" + element + "</td>");
         
     }
     

 
 
     /*************CRIAÇÃO DA MEMÓRIA CACHE**************/
 /*MEMÓRIA CACHE
  ENDEREÇO | CÉLULA 0 | CÉLULA 1 | CÉLULA 2 | CÉLULA 3 */
     for(i=0; i<memoriacache.length; i++)
     {
       var binario = i.toString(2);
       var resultado = pad(binario,4);
       memoriacache[i] = new Array(4);
       memoriacache[i][0] = resultado; 
     }