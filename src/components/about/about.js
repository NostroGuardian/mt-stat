import { DivComponent } from '../../common/div-component';
import './about.css';

export class About extends DivComponent {
  constructor() {
    super();
  }

  render() {
    this.el.innerHTML = `
        <div class="about">
        <div class="about__info">
          <span class="about__info-header">Разработчик и дизайнер</span>
          <span class="about__info-content">Иван Нестеров</span>
        </div>
        <div class="about__info">
          <span class="about__info-header">Последнее обновление</span>
          <span class="about__info-content">01.08.2024</span>
        </div>
        <div class="about__copy">
          <p class="about__copy-content">
            Копирование материалов<br />и элементов дизайна без согласия
            автора<br />проекта запрещено.
          </p>
          <p class="about__copy-content">
            <br />Все авторские права закреплены.
          </p>
        </div>
        <button class="about__button" onclick="location.href='/'">
          <img src="../../static/images/close-icon.png" alt="Close" />Закрыть
        </button>
      </div>
      `;
    return this.el;
  }
}
