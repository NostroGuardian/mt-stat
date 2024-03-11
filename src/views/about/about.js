import { AbstractView } from '../../common/view';
import { About } from '../../components/about/about';
import { Logo } from '../../components/logo/logo';

export class AboutView extends AbstractView {
  constructor() {
    super();
    this.setTitle('О сайте');
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = '';
    main.append(new About().render());
    this.app.innerHTML = '';
    this.renderLogo();
    this.app.append(main);
  }

  renderLogo() {
    const logo = new Logo().render();
    this.app.append(logo);
  }
}
