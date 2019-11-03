'use strict';

angular.module('crudApp').factory('UserService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllUsers: loadAllUsers,
                setUser: setUser,

                getAllUsers: getAllUsers,
                getFci: getFci,

                setFcInformativeNotes: setFcInformativeNotes,
                getListFcInformativeNotes: getListFcInformativeNotes,

                setFfamily: setFfamily,
                getListFfamily: getListFfamily,

                setFcomponent: setFcomponent,
                getListFcomponent: getListFcomponent,

                setFcodipendencies: setFcodipendencies,
                getListFcodipendencies: getListFcodipendencies,

                setFcoEvaluatorNotes:  setFcoEvaluatorNotes,
                getFcoEvaluatorNotes:  getFcoEvaluatorNotes,

                createFcoSelected: createFcoSelected,
                readListFco: readListFco,
                getListFco: getListFco,
                removeElementFco: removeElementFco,

               setFfBehaviour: setFfBehaviour,
               getFfBehaviour: getFfBehaviour,

               setFfUserNotes: setFfUserNotes,
               getFfUserNotes: getFfUserNotes,

               setFcoUserNotes: setFcoUserNotes,
               getFcoUserNotes: getFcoUserNotes,

               getIdf: getIdf,
               getIdfclass: getIdfclass,
               getIdfamily: getIdfamily,


               setFcoHierarchicals: setFcoHierarchicals,
               getFcoHierarchicals: getFcoHierarchicals,

               setFcoManagement: setFcoManagement,
               getFcoManagement: getFcoManagement,

               setFcomponentCatalogo: setFcomponentCatalogo,

               setFelement: setFelement,
               getFelement: getFelement,

               loadDependences: loadDependences,
               getListDependences: getListDependences,

               loadHierarchicalShow: loadHierarchicalShow,
               getLoadHierarchicalShow: getLoadHierarchicalShow,
            };

            return factory;

            function loadAllUsers() {
                console.log('Fetching all users');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API+ 'user/')
                    .then(
                        function (response) {
                            console.log('Fetched successfully all users');
                            $localStorage.users = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading users');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllUsers(){
                return $localStorage.users;
            }

             function getFci(){
                return $localStorage.fcintroductions;
              }
             function getListFcInformativeNotes(){
                       return $localStorage.fcinformationsnotes;
             }
             function getListFfamily(){
                       return $localStorage.ffamily;
                    }

             function getListFcomponent(){
                         return $localStorage.fcomponent;
                     }
              function getListFco(){
                         return $localStorage.listfco;
                     }

             function getListFcodipendencies(){
                        return $localStorage.fcodipendencies;
                     }
             function getFcoEvaluatorNotes(){
                         return $localStorage.fcoevaluatornotes;
             }

             function getListFclass(){
                         return   $localStorage.listFco;
             }

             function getFfBehaviour(){
                        return $localStorage.ffbehaviour;
             }

             function getFcoUserNotes(){
                         return $localStorage.fcousernotes;
                          }
             function getIdf(){
                        return $localStorage.fcodipendencies[0].idf;
              }
              function getIdfclass() {
                        return $localStorage.fcintroductions[0].idf;
              }

               function getIdfamily() {
                             return $localStorage.ffusernotes[0].idf;
                            }
               function getFfUserNotes() {
                            return $localStorage.ffusernotes;
               }

               function getFcoHierarchicals(){
                            return $localStorage.fcohierarchicals;
               }

               function getFcoManagement(){
                           return $localStorage.fcomanagement;
               }

               function getFelement(){
                            return $localStorage.felement;
               }

               function getListDependences() {
                        return $localStorage.listdependence;
               }

            function getLoadHierarchicalShow() {
                        return $localStorage.hierarchicalshow;
               }



            function setUser (id) {
                console.log('Fetching User with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + 'user/' + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully User with id :'+id);
                            $localStorage.fcintroductions = response.data;


                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

         function setFcInformativeNotes(id){
               console.log('Fetching setFcInformativeNotes( with id :'+id);
               var deferred = $q.defer();
               $http.get(urls.USER_SERVICE_API + 'users/' + id)
               .then(
               function (response) {
                   console.log('Fetched successfully setFcInformativeNotes( with id :'+id);
                   $localStorage.fcinformationsnotes = response.data;
                   deferred.resolve(response.data);
                   },
               function (errResponse) {
                   console.error('Error while loading user with id :'+id);
                   deferred.reject(errResponse);
                   }
              );
               return deferred.promise;
         }

           function setFfamily(id){
                        console.log('Fetching flcass with id :'+id);
                        var deferred = $q.defer();
                        $http.get(urls.USER_SERVICE_API + 'family/' + id)
                        .then(
                        function (response) {
                            console.log('Fetched successfully Ffamily with id :'+id);

                            $localStorage.ffamily = response.data;
                            deferred.resolve(response.data);
                            },
                        function (errResponse) {
                            console.error('Error while loading Ffamily with id :'+id);
                            deferred.reject(errResponse);
                            }
                       );
                        return deferred.promise;
                  }

                function setFcomponent(id){
                        console.log('Fetching fcomponent with id :'+ id);
                        var deferred = $q.defer();
                        $http.get(urls.USER_SERVICE_API + 'fcomponent/' + id)
                        .then(
                        function (response) {
                            console.log('Fetched successfully fcomponent with id :'+ id);
                            $localStorage.fcomponent = response.data;
                            deferred.resolve(response.data);
                            },
                        function (errResponse) {
                            console.error('Error while loading fcomponent with id :'+ id);
                            deferred.reject(errResponse);
                            }
                       );
                        return deferred.promise;
                  }
//------------- fa un get al client per ottenere i component per il catalogo ---------------
            function setFcomponentCatalogo(id){
                        console.log('Fetching fcomponent with id :'+ id);
                        var deferred = $q.defer();
                        $http.get(urls.USER_SERVICE_API + 'fcomponents/' + id)
                        .then(
                        function (response) {
                            console.log('Fetched successfully fcomponent with id :'+ id);
                            $localStorage.fcomponent = response.data;
                            deferred.resolve(response.data);
                            },
                        function (errResponse) {
                            console.error('Error while loading fcomponent with id :'+ id);
                            deferred.reject(errResponse);
                            }
                       );
                        return deferred.promise;
                  }
            function setFcodipendencies(id){
                  console.log('Fetching fcodipendencies with id :'+ id);
                  var deferred = $q.defer();
                  $http.get(urls.USER_SERVICE_API + 'fcodependencies/' + id)
                          .then(
                             function (response) {
                                  console.log('Fetched successfully Fcodipendencies with id :'+ id);
                                  $localStorage.fcodipendencies = response.data;

                                  deferred.resolve(response.data);
                                },
                             function (errResponse) {
                                console.error('Error while loading Fcodipendencies with id :'+ id );
                                deferred.reject(errResponse);
                              }
                      );
                      return deferred.promise;
             }

            function setFcoHierarchicals(id){
                  console.log('Fetching setFcoHierarchicals with id :'+ id);
                  var deferred = $q.defer();
                  $http.get(urls.USER_SERVICE_API + 'fcohierarchical/' + id)
                          .then(
                             function (response) {
                                  console.log('Fetched successfully setFcoHierarchicals with id :'+ id);
                                  $localStorage.fcohierarchicals = response.data;

                                  deferred.resolve(response.data);
                                },
                             function (errResponse) {
                                console.error('Error while loading setFcoHierarchicals with id :'+ id );
                                deferred.reject(errResponse);
                              }
                      );
                      return deferred.promise;
             }
//------------- fa un get al client per ottenere getListFcoManagementgment ---------------
         function  setFcoManagement(id){
                  console.log('Fetching  setFcoManagement with id :'+ id);
                  var deferred = $q.defer();
                  $http.get(urls.USER_SERVICE_API + 'fcomanagement/' + id)
                          .then(
                             function (response) {
                                  console.log('Fetched successfully  setFcoManagement with id :'+ id);
                                  $localStorage.fcomanagement = response.data;
                                  deferred.resolve(response.data);
                                },
                             function (errResponse) {
                                console.error('Error while loading  setFcoManagement with id :'+ id );
                                deferred.reject(errResponse);
                              }
                      );
                      return deferred.promise;
             }


             function setFcoEvaluatorNotes(id){
                    console.log('Fetching fcoevaluatornotes with id :'+ id);
                    var deferred = $q.defer();
                    $http.get(urls.USER_SERVICE_API + 'fcoevaluatornotes/' + id)
                               .then(
                                  function (response) {
                                  console.log('Fetched successfully fcoevaluatornotes with id :'+ id);
                                  $localStorage.fcoevaluatornotes = response.data;
                                  deferred.resolve(response.data);
                                             },
                                  function (errResponse) {
                                  console.error('Error while loading fcoevaluatornotes with id :'+ id );

                                  deferred.reject(errResponse);
                                           }
                                   );
                        return deferred.promise;
                 }



              function setFcoUserNotes(id){
                    console.log('Fetching setFcoUserNotes with id :'+ id);
                    var deferred = $q.defer();
                    $http.get(urls.USER_SERVICE_API + 'fcousernotes/' + id)
                               .then(
                                  function (response) {
                                  console.log('Fetched successfully fcousernotes with id :'+ id);
                                  $localStorage.fcousernotes = response.data;
                                  deferred.resolve(response.data);
                                             },
                                  function (errResponse) {
                                  console.error('Error while loading fcousernotes with id :'+ id );
                                  deferred.reject(errResponse);
                                           }
                                   );
                        return deferred.promise;
                 }

             function setFelement(id){
                    console.log('Fetching setFelement with id :'+ id);
                    var deferred = $q.defer();
                    $http.get(urls.USER_SERVICE_API + 'felement/' + id)
                               .then(
                                  function (response) {
                                  console.log('Fetched successfully felement with id :'+ id);
                                  $localStorage.felement = response.data;
                                  deferred.resolve(response.data);
                                             },
                                  function (errResponse) {
                                  console.error('Error while loading felement with id :'+ id );
                                  deferred.reject(errResponse);
                                           }
                                   );
                        return deferred.promise;
                 }


//------------- Permette di aggiungere Requirements alla lista dei preferiti ---------------

          function createFcoSelected(fco) {
                          console.log('Creating fco');
                          var deferred = $q.defer();
                          $http.post(urls.USER_SERVICE_API + 'fco/', fco)
                              .then(
                                  function (response) {
                                      readListFco();
                                      loadDependences();
                                      deferred.resolve(response.data);

                                  },
                                  function (errResponse) {
                                     console.error('Error while creating User : '+errResponse.data.errorMessage);
                                     deferred.reject(errResponse);
                                  }
                              );
                          return deferred.promise;
                  }

//------------- Permette di legge Requirements e metterli nei preferiti ---------------

          function readListFco(){
            console.log('Fetching readListFclass');
                    var deferred = $q.defer();
                    $http.get(urls.USER_SERVICE_API + 'fco/')
                               .then(
                                  function (response) {
                                  console.log('Fetched successfully listFco with id :');
                                  $localStorage.listfco = response.data;
                                  loadDependences();
                                  loadHierarchicalShow();
                                  deferred.resolve(response.data);
                                             },
                                  function (errResponse) {
                                  console.error('Error while loading listFco with id :');
                                  deferred.reject(errResponse);
                                           }
                                   );
                        return deferred.promise;
          }
//------------- Permette di rimuovere Requirements dai preferiti ---------------
           function removeElementFco(id) {
                console.log('Rimuovi elemento con: '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + 'fco/' + id)
                    .then(
                        function (response) {
                            readListFco();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

           function setFfBehaviour(id){
            console.log('Fetching ffbehaviour with id :'+ id);
                               var deferred = $q.defer();
                               $http.get(urls.USER_SERVICE_API + 'ffbehaviour/' + id)
                                          .then(
                                             function (response) {
                                             console.log('Fetched successfully ffbehaviour with id :'+ id);
                                             $localStorage.ffbehaviour = response.data;
                                             deferred.resolve(response.data);
                                                        },
                                             function (errResponse) {
                                             console.error('Error while loading ffbehaviour with id :'+ id );
                                             deferred.reject(errResponse);
                                                      }
                                              );
                                   return deferred.promise;

           }

      function setFfUserNotes(id){
             console.log('Fetching ffusernotes with id :'+ id);
                                var deferred = $q.defer();
                                $http.get(urls.USER_SERVICE_API + 'ffusernotes/' + id)
                                           .then(
                                              function (response) {
                                              console.log('Fetched successfullyffusernotes with id :'+ id);
                                              $localStorage.ffusernotes = response.data;
                                              deferred.resolve(response.data);
                                                         },
                                              function (errResponse) {
                                              console.error('Error while loading ffusernotes with id :'+ id );
                                              deferred.reject(errResponse);
                                                       }
                                               );
                                    return deferred.promise;

            }


              function loadDependences(){

                    var deferred = $q.defer();
                        $http.get(urls.USER_SERVICE_API + 'listdependence/')
                                   .then(
                                      function (response) {
                                       console.log('Fetched successfully listdependence');
                                       $localStorage.listdependence = response.data;
                                       deferred.resolve(response.data);
                                                                 },
                                       function (errResponse) {
                                       console.error('Error while loading listdependence' );
                                       deferred.reject(errResponse);
                                                               }
                                                       );
                           return deferred.promise;

                    }


              function loadHierarchicalShow(){

                    var deferred = $q.defer();
                        $http.get(urls.USER_SERVICE_API + 'listhierarchical/')
                                   .then(
                                      function (response) {
                                       console.log('Fetched successfully hierarchicalshow');
                                       $localStorage.hierarchicalshow = response.data;
                                       deferred.resolve(response.data);
                                                                 },
                                       function (errResponse) {
                                       console.error('Error while loading hierarchicalshow' );
                                       deferred.reject(errResponse);
                                                               }
                                                       );
                           return deferred.promise;

                    }

        }
    ]);