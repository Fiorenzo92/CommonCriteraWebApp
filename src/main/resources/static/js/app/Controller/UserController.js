'use strict';

angular.module('crudApp').controller('UserController',
    ['UserService', '$scope','$window', function( UserService, $scope, $window ) {

        var self = this;
        self.user = {};
        self.users=[];
        self.fcintroduction = {};
        self.fcintroductions =[];

        self.ffamily = [];
        self.fcomponent = [];
        self.getFfamily = getFfamily;
        self.searchRequirements = searchRequirements;
        self.Name ;
        self.myText = '';
        self.getAllClass = getAllClass;
        self.getAllUsers = getAllUsers;
        self.selectUser = selectUser;

        self.done = false;

        self.successMessage = '';
        self.errorMessage = '';
        self.setFcInformativeNotes;
        self.fcinformationsnotes = [];
        self.getListFcInformative = getListFcInformative;
        self.getListFcomponent = getListFcomponent;

        self.showDipendenze = showDipendenze;
        self.fcodipendencies = [];
        self.getListFcodipendencies = getListFcodipendencies;




        self.fcoevaluatornotes = [];
        self.getFcoEvaluatorNotes = getFcoEvaluatorNotes;
        self.fcousernotes = [];
        self.getFcoUserNotes = getFcoUserNotes;

        self.addFco = addFco;
        self.setListFco= setListFco;
        self.getListFco = getListFco;
        self.removeFco =removeFco;
        self.listfco =[];
        self.downloadpdf = downloadpdf;

        self.listffbehaviour = [];
        self.ffusernotes = [];
        self.showFfamilyStructure = showFfamilyStructure;
        self.getListFfBehaivour = getListFfBehaivour;
        self.getListFfUserNotes = getListFfUserNotes;


        self.getIdfclass = getIdfclass;
        self.getIdf = getIdf;
        self.getIdfamily = getIdfamily;

//----------------------- Ritorna nella view per visualizzare gli elementi-----------------
        function getAllUsers(){
                  return UserService.getAllUsers();
        }

        function getAllClass(){
                    return UserService.getFci();
        }

        function getListFcInformative(){
             return UserService.getListFcInformativeNotes();
        }

        function getFfamily(){
            return UserService.getListFfamily();
        }

        function getListFcomponent() {
            return UserService.getListFcomponent();
        }
         function getListFcodipendencies() {
             return UserService.getListFcodipendencies();
           }
         function getIdf(){
            return UserService.getIdf();
         }
         function getFcoEvaluatorNotes() {
                     return UserService.getFcoEvaluatorNotes();
                   }
         function getListFco(){
                    return UserService.getListFco();
         }
         function getListFfBehaivour(){
                    return UserService.getFfBehaviour();
         }

         function getFcoUserNotes(){
                    return UserService.getFcoUserNotes();
         }

         function getIdfclass(){
                    return UserService.getIdfclass();
         }

         function getIdfamily(){
                    return UserService.getIdfamily();
         }
         function getListFfUserNotes(){
                    return UserService.getFfUserNotes();
         }

//------------- Passa id dell'Fclass al Service e cambia view dopo aver ricevuto il response---------------
        function selectUser(id) {
            self.successMessage='';
            self.errorMessage='';
            UserService.setUser(id).then(
                function () {
                  $window.location.href = 'http://localhost:8080/#/fclassstructure';
                  console.log('ID '+id + " è stato cliccato selectUser");

                },
                function (errResponse) {
                    console.error('Error selectUser ' + id + ', Error :' + errResponse.data);
                }
            );
               UserService.setFcInformativeNotes(id).then(
                 function () {
                     console.log('ID '+id + " è stato cliccato setFcInformativeNotes");

                },
                 function (errResponse) {
                      console.error('Error setFcInformativeNotes ' + id + ', Error :' + errResponse.data);
                }
            );
            UserService.setFfamily(id).then(
                 function () {
                      console.log('ID '+id + " è stato cliccato setFfamily");
                          },
                  function (errResponse) {
                       console.error('Error setFamily ' + id + ', Error :' + errResponse.data);
                     }
            );
       }


//------------- Passa id dell'Fclass al Service e cambia view dopo aver ricevuto il response, fa riferimento alla drop list nella view edit---------------
            function searchRequirements(Name){


              UserService.setFcomponent(Name).then(
               function () {
                 $window.location.href = 'http://localhost:8080/#/fcomponent';
                 console.log('ID '+ Name + " è stato cliccato setFcomponent");
                   },
               function (errResponse) {
                   console.error('Error setFcomponent ' + Name + ', Error :' + errResponse.data);
                   }
              );
              }

//------------- Passa id dell equirementes al Service e cambia view dopo aver ricevuto il response, fa riferimento alla view fcocomponent---------------
            function showDipendenze(id){

            UserService.setFcodipendencies(id).then(
                  function () {
                    $window.location.href = 'http://localhost:8080/#/fcomponent/fcodescription';
                    console.log('ID '+ id + " è stato cliccato setFcodipendencies");
                       },
                  function (errResponse) {
               $window.location.href = 'http://localhost:8080/#/fcomponent/fcodescription';
                     console.error('Error setFcodipendencies ' + id + ', Error :' + errResponse.data);

                     }
                );
                UserService.setFcoEvaluatorNotes(id).then(
                  function () {

                    console.log('ID '+ id + " è stato cliccato setFcoDescription");

                       },
                  function (errResponse) {

                     console.error('Error setFcodipendencies ' + id + ', Error :' + errResponse.data);

                     }
                );
            UserService.setFcoUserNotes(id).then(
                  function () {

                    console.log('ID '+ id + " è stato cliccato setFcoDescription");

                       },
                  function (errResponse) {

                     console.error('Error setFcodipendencies ' + id + ', Error :' + errResponse.data);

                     }
                );



            }

//------------- Permette di aggiungere Requirements alla lista dei preferiti ---------------

            function addFco(fco) {

                        console.log('Creazione fco elements');
                        UserService.createFcoSelected(fco)
                            .then(
                                function () {

                                    console.log('Aggiunto con successo ai preferiti');
                                    $window.alert('Elemento aggiunto con successo ai preferiti' );


                                },
                                function (errResponse) {

                                 console.error('Errore: elemento già ai preferiti');
                                 $window.alert('Elemento già presente nei preferiti');

                                }
                            );
                    }
//------------- Legge i preferiti dal database---------------
            function setListFco(){
                   console.log('Get Selected Elements');
                        UserService.readListFco()
                            .then(
                                function () {
                                 $window.location.href = 'http://localhost:8080/#/selectedelements';

                                    console.log('Cliccato setListFclass');


                                },
                                function (errResponse) {
                                    $window.alert('Lista dei preferiti vuota' );
                                    console.error('Errore setListFclass');


                                }
                            );

            }
//------------- Permette di rimuovere ul elemento dai preferiti---------------
            function removeFco(id){
              console.log('Rimuovi dai preferiti:  '+id);
                        UserService.removeElementFco(id)
                            .then(
                                function(){
                                    console.log('ID '+id + ' removed successfully');
                                },
                                function(errResponse){
                                    console.error('Error while removing user '+id +', Error :'+errResponse.data);
                                }
                            );

            }
//------------- Permette di scaricare il pdf della view SHOW  ---------------
            function downloadpdf(){
            console.log('Scarica PDF');
                 html2canvas(document.getElementById('exportthis'), {
                        onrendered: function (canvas) {
                             var data = canvas.toDataURL();
                             var docDefinition = {
                                 content: [{

                                    image: data,
                                    width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("requirements.pdf");
            }
        });
     }
//------------- Passa id dell'ffamily al Serivice per la richiesta di ffbehaivour e ffusernotes---------------
             function showFfamilyStructure(id){

               UserService.setFfBehaviour(id).then(
                               function () {
                                 console.log('ID '+ id + " è stato cliccato FfBehaviour");
                                    },
                               function (errResponse) {
                                  console.error('Error FfBehaviour ' + id + ', Error :' + errResponse.data);

                                  }
                             );
               UserService.setFfUserNotes(id).then(
                               function () {
                                 console.log('ID '+ id + " è stato cliccato setFfUserNotes");
                                    },
                               function (errResponse) {
                                  console.error('Error setFfUserNotes ' + id + ', Error :' + errResponse.data);

                                  }
                             );

             }



        }
    ]);