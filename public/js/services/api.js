angular.module('ApiService', []).service('ApiService', function($http){

  //Wagers
  function getWagers(){
    return $http.get('/wagers');
  }

  //Users
  function getUser(id){
    return $http.get('/users/' + id);
  }

  //Teams
  function getTeams(){
    return $http.get('/teams');
  }

  //Groups
  function getGroups() {
    return $http.get('/groups');
  }

  function getGroup(id) {
    return $http.get('/groups/' + id);
  }

  return { 

    getWagers: getWagers,
    getUser  : getUser,
    getTeams : getTeams,
    getGroups: getGroups,
    getGroup : getGroup

   }
})