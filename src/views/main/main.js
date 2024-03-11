import { AbstractView } from '../../common/view';
import onChange from 'on-change';
import { Logo } from '../../components/logo/logo';
import { Navigation } from '../../components/navigation/navigation';
import { Search } from '../../components/search/search';
import { Stats } from '../../components/stats/stats';

export class MainView extends AbstractView {
  state = {
    loading: false,
    searchQuery: undefined,
    playerData: null,
    playerClan: null,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('Танковая Статистика');
  }

  appStateHook(path) {
    if (path === 'isAuthorized') {
      console.log('isAuthorized');
    }
  }

  async stateHook(path) {
    if (path === 'loading') {
      console.log('loading');
      this.render();
    }

    if (path === 'searchQuery') {
      console.log('SEARCH');
      this.state.loading = true;
      const playerData = await this.loadStats(this.state.searchQuery);
      this.state.playerData = playerData;
      const playerClan = await this.loadClan(this.state.playerData.account_id);
      this.state.playerClan = playerClan;
      this.state.loading = false;
      console.log(this.state.playerData);
    }

    if (path === 'playerData') {
      console.log('playerData');
      this.render();
    }
  }

  async loadStats(nickname) {
    const res = await fetch(
      `https://api.tanki.su/wot/account/list/?application_id=ddcd15128e9912b105d51431793ac39b&search=${nickname}`
    );
    const player = await res.json();

    const playerData = await fetch(
      `https://api.tanki.su/wot/account/info/?application_id=ddcd15128e9912b105d51431793ac39b&account_id=${player.data[0].account_id}`
    );

    const stats = await playerData.json();
    return stats.data[player.data[0].account_id];
  }

  async loadClan(accountId) {
    const res = await fetch(
      `https://api.tanki.su/wot/clans/accountinfo/?application_id=ddcd15128e9912b105d51431793ac39b&account_id=${accountId}`
    );
    const clan = await res.json();

    return clan.data[accountId];
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = '';
    main.append(new Navigation(this.appState).render());
    main.append(new Stats(this.state).render());
    this.app.innerHTML = '';
    this.renderLogo();
    this.app.append(main);
    this.renderSearch();
  }

  renderLogo() {
    const logo = new Logo().render();
    this.app.append(logo);
  }

  renderSearch() {
    const search = new Search(this.state).render();
    const nav = document.getElementById('search');
    nav.append(search);
  }
}
