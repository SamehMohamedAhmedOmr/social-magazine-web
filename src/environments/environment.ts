export const environment = {
  production: false,
  apisVersion: "v1" ,
  baseUrl: 'https://backend.j-fss.com',
  debug: false,

  url : function url (version: string = null) {
    return environment.baseUrl + '/api/' + ((version) ? version+'/' : '');
  }

};
