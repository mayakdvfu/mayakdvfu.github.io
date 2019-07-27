<template>
  <section class="content">
    <div class="flex-container">
      <div class="about-pane">
        <div class="about-pane__inner">
          <p>МАЯК — это IT-клуб при ДВФУ в формате воркшопа, объединяющий студентов, интересующихся веб-разработкой, дизайном и информационными технологиями.</p>
          <br>
          <p>Наша миссия – создание локального IT-сообщества для обмена опытом и идеями, а также совместной работы над интересными проектами.</p>
        </div>
      </div>
      <div class="news-pane">
        <div class="card news-pane__latest">
          <h2 class="card-heading">Читать последнюю статью:</h2>
          <img class="__image" src="~static/Введение в git.png">
          <div class="info">
            <span class="title">Введение в Git</span>
            <span class="date">27 мая</span>
          </div>
        </div>
        <div class="card news-pane__list">
          <h2 class="card-heading">Что нового:</h2>
          <div class="changelog">
            <ul>
              <li><span class="date">07 май</span>  Новый проект <a href="#">Веб-сайт</a></li>
              <li><span class="date">27 апр</span>  Новая статья <a href="#">Введение в Git</a></li>
              <li><span class="date">27 апр</span>  Новая статья <a href="#">Введение в Github Pages</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index_page',
  components: {}
}
</script>

<style lang="sass">
@import '~assets/config';

body
  background: url('~static/background.svg')
  background-size: cover
  background-position: center
  height: 100%

main
  height: 100%

.content
  height: 100%;

.flex-container
  display: flex
  flex-direction: row
  align-items: center
  height: 100%
  justify-content: space-around

.about-pane
  width: 50vw;
  flex-grow: 1

  &__inner
    max-width: 480px
    margin: 0 auto
    background: url("~static/background2.svg") no-repeat;
    background-position: center;
    background-size: contain;

.news-pane
  width: 50vw
  flex-grow: 1

  &__latest
    height: 340px

    .info
      margin-top: 5px
      .title
        font-family: Montserrat
        font-style: normal
        font-weight: normal
        font-size: 20px
        line-height: 29px
        float: left
      .date
        font-family: Montserrat
        font-weight: 300
        font-style: normal
        font-weight: 300
        font-size: 18px
        line-height: 29px
        float: right


  &__list

  .card-heading
    @include font("Montserrat", 400)
    font-size: 24px;

  .card
    max-width: 480px
    background: rgba(255,255,255,.75)
    padding: 16px
    margin: 50px auto;
    // border-radius: 12px

  .changelog
    font-family: "Roboto Mono"
    font-size: 14px
    font-weight: 300
    color: black
    .date
      color: #888888


html, body, #__nuxt, #__layout
  height: 100%
</style>
