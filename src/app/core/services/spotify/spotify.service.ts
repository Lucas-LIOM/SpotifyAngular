import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  urlLogin(){ // Obter o login do usuário e gerar o token para utilização no Spotify Clone (string)

    const authEndPoint = `${SpotifyConfiguration.authEndPoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`; // ID do Cliente
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`; // Redireciona para a Autorização do Spotify (conexão com a conta do usuário)
    const scopes = `scopes=${SpotifyConfiguration.scopes.join('20%')}&`; // Regrinhas dos eventos
    const responseType = `response_type=token&show_dialog=true`; // Retorna o evento da autorização concluida
    return authEndPoint + clientId + redirectUrl + scopes + responseType;

    // Base: Cristian William
  }

  tokenUrlCallBack(){
    console.log(window.location.hash)
    if(!window.location.hash)
    return '';

    const params = window.location.href
  }
}
