import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector('input').value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.innerHTML = `
        <div class="search">
            <input type="text" placeholder="Поиск игрока..." />
            <img src="../static/images/search-icon.png" alt="Search" value="${
              this.state.searchQuery ? this.state.searchQuery : ''
            }" />
        </div>
    `;

    this.el.querySelector('input').addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        this.search();
      }
    });

    return this.el;
  }
}
