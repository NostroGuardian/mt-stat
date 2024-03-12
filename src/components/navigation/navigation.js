import { DivComponent } from '../../common/div-component';
import './navigation.css';

export class Navigation extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = `
        <div class="navigation">
            <button class="navigation__button" onclick="location.href='#about'">
            <img src="../static/images/info-icon.png" alt="Information" />
            </button>
            <div id="search"></div>
            <button class="navigation__button" onclick="window.location = 'https://api.tanki.su/wot/auth/login/?application_id=ddcd15128e9912b105d51431793ac39b&redirect_uri=http://127.0.0.1:8080/'">
            <img src="../static/images/${
              this.appState.isAuthorized
                ? 'authorized-icon.png'
                : 'login-icon.png'
            }" alt="Login" />
            </button>
        </div> 
    `;
    return this.el;
  }
}
