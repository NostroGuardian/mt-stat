import { DivComponent } from '../../common/div-component';
import './logo.css';

export class Logo extends DivComponent {
  constructor() {
    super();
  }

  render() {
    this.el.innerHTML = `
      <div class="logo">
        <h1 class="logo__text">Танковая<br />Статистика</h1>
        <span class="logo__version">v1.0.0</span>
      </div>
    `;
    return this.el;
  }
}
