import { DivComponent } from '../../common/div-component';
import './stats.css';

export class Stats extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    if (this.state.loading === true) {
      this.el.innerHTML = `
        <section class="content__loading">
            <img src="../../static/images/loading-icon.png" alt="Loading" />
        </section>
      `;
      return this.el;
    }

    if (this.state.playerData === null) {
      this.el.innerHTML = `
        <div class="content__start">
            Найдите игрока по никнейму в строке поиска<br />
            или войдите в аккаунт
        </div>
      `;
      return this.el;
    }

    this.el.innerHTML = `
        <div class="stats">
        <div class="stats__info">
          <div class="stats__info-wrapper">
            <div class="stats__col-50">
              <div class="stats__element">
                <div class="stats__title">Никнейм</div>
                <div class="stats__content">${
                  this.state.playerData.nickname
                }</div>
              </div>

              <div class="stats__element">
                <div class="stats__title">Регистрация</div>
                <div class="stats__content">${new Date(
                  this.state.playerData.created_at * 1000
                ).toLocaleDateString('ru-RU')}</div>
              </div>
            </div>

            <div class="stats__col-50">
              <div class="stats__element">
                <div class="stats__title">Рейтинг</div>
                <div class="stats__content">${new Intl.NumberFormat(
                  'ru-RU'
                ).format(this.state.playerData.global_rating)}</div>
              </div>

              <div class="stats__element">
                <div class="stats__title">Последний бой</div>
                <div class="stats__content">${new Date(
                  this.state.playerData.last_battle_time * 1000
                ).toLocaleDateString('ru-RU')}</div>
              </div>
            </div>
          </div>
          <div class="stats__info-wrapper">
            <div class="stats__col-50">
              <div class="stats__element">
                <div class="stats__title">Клан</div>
                <div class="stats__content">${
                  this.state.playerClan.clan.name
                }</div>
              </div>

              <div class="stats__element">
                <div class="stats__title">Должность</div>
                <div class="stats__content">${
                  this.state.playerClan.role_i18n
                }</div>
              </div>
            </div>

            <div class="stats__col-50">
              <div class="stats__element">
                <div class="stats__title">Тег</div>
                <div class="stats__content">[${
                  this.state.playerClan.clan.tag
                }]</div>
              </div>

              <div class="stats__element">
                <div class="stats__title">Дней в клане</div>
                <div class="stats__content">${new Intl.NumberFormat(
                  'ru-RU'
                ).format(
                  Math.floor(
                    (new Date().getTime() -
                      new Date(
                        this.state.playerClan.joined_at * 1000
                      ).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )
                )}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="stats__balance">
          <div class="stats__element">
            <div class="stats__title">Дни премиума</div>
            <div class="stats__content">-</div>
          </div>

          <div class="stats__element">
            <div class="stats__title">Золото</div>
            <div class="stats__content">-</div>
          </div>

          <div class="stats__element">
            <div class="stats__title">Серебро</div>
            <div class="stats__content">-</div>
          </div>

          <div class="stats__element">
            <div class="stats__title">Боны</div>
            <div class="stats__content">-</div>
          </div>

          <div class="stats__element">
            <div class="stats__title">Свободный опыт</div>
            <div class="stats__content">-</div>
          </div>
        </div>

        <div class="stats__main">
          <div class="stats__col-25">
            <div class="stats__element">
              <div class="stats__title">Победы</div>
              <div class="stats__content">${(
                (this.state.playerData.statistics.all.wins /
                  this.state.playerData.statistics.all.battles) *
                100
              ).toFixed(2)}%</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Всего фрагов</div>
              <div class="stats__content">
              ${new Intl.NumberFormat('ru-RU').format(
                this.state.playerData.statistics.all.frags
              )}</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Знаки классности «Мастер»</div>
              <div class="stats__content">-</div>
            </div>
          </div>

          <div class="stats__col-25">
            <div class="stats__element">
              <div class="stats__title">Бои</div>
              <div class="stats__content">
              ${new Intl.NumberFormat('ru-RU').format(
                this.state.playerData.statistics.all.battles
              )}</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Попадания</div>
              <div class="stats__content">${(
                (this.state.playerData.statistics.all.hits /
                  this.state.playerData.statistics.all.shots) *
                100
              ).toFixed(2)}%</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Максимальный урон за бой</div>
              <div class="stats__content">${new Intl.NumberFormat(
                'ru-RU'
              ).format(this.state.playerData.statistics.all.max_damage)}</div>
            </div>
          </div>

          <div class="stats__col-25">
            <div class="stats__element">
              <div class="stats__title">Максимальный опыт за бой</div>
              <div class="stats__content">${new Intl.NumberFormat(
                'ru-RU'
              ).format(this.state.playerData.statistics.all.max_xp)}</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Средний урон</div>
              <div class="stats__content">-</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Деревьев повалено</div>
              <div class="stats__content">${new Intl.NumberFormat(
                'ru-RU'
              ).format(this.state.playerData.statistics.trees_cut)}</div>
            </div>
          </div>

          <div class="stats__col-25">
            <div class="stats__element">
              <div class="stats__title">Средний опыт за бой</div>
              <div class="stats__content">${new Intl.NumberFormat(
                'ru-RU'
              ).format(
                this.state.playerData.statistics.all.battle_avg_xp
              )}</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Максимум уничтожено за бой</div>
              <div class="stats__content">${new Intl.NumberFormat(
                'ru-RU'
              ).format(this.state.playerData.statistics.all.max_frags)}</div>
            </div>

            <div class="stats__element">
              <div class="stats__title">Выстрелов</div>
              <div class="stats__content">${new Intl.NumberFormat(
                'ru-RU'
              ).format(this.state.playerData.statistics.all.shots)}</div>
            </div>
          </div>
        </div>
      </div>
    `;
    return this.el;
  }
}
