export const environment = {
  production: false,
  apisVersion: "v1" ,
  baseUrl: window["env"]["productionUrl"] || 'https://magazine-backend.sameh.store',
  debug: window["env"]["debug"] || false,

  url : function url (version: string = null) {
    return environment.baseUrl + '/api/' + ((version) ? version+'/' : '');
  }

};
