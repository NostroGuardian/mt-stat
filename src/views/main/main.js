import { AbstractView } from '../../common/view';
import onChange from 'on-change';
import { Logo } from '../../components/logo/logo';

export class MainView extends AbstractView {
  state = {
    loading: false,
    searchQuery: undefined,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.setTitle('Танковая Статистика');
  }

  appStateHook(path) {
    if (path === 'isAuthorized') {
      console.log('isAuthorized');
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = '';
    this.renderLogo();
    this.app.append(main);
  }

  renderLogo() {
    const logo = new Logo().render();
    this.app.append(logo);
  }
}
