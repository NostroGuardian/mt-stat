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
            <button class="navigation__button">
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
