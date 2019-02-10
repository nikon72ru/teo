<?php namespace Processwire; ?>
<section class="breadcrumbs">
  <div class="container container_center">
    <div class="breadcrumbs__grid">
        <?php foreach ($page->parents()->append($page) as $parent): ?>
          <div class="breadcrumbs__cell"><a href="<?= $parent->url ?>"
                                            class="breadcrumbs__link canSpeak"><?= $parent->title ?></a></div>
        <?php endforeach; ?>
    </div>
    <h2 class="breadcrumbs__heading canSpeak">вопрос-ответ</h2>
  </div>
</section>

<section class="faq">
  <div class="container container_center">
    <div class="faq__grid uk-accordion" data-uk-accordion="{showfirst:false}">
      <?php foreach($page->faq_block as $block): ?>
          <?php $in_this_block = 0; foreach ($block->faq_item as $i => $quest) if (checkLanguage($quest->reference_on_language, $user->language)) $in_this_block++;?>
          <?php if($in_this_block > 0):?>
          <div class="faq__cell__fulline"><h3><?=$block->text_page_title?></h3></div>
      <div class="faq__cell">
          <?php foreach ($block->faq_item as $i => $quest): if ($i % 2 == 0 && checkLanguage($quest->reference_on_language, $user->language)): ?>
            <h3 class="uk-accordion-title canSpeak"><?= $quest->repeater_faq_quest ?></h3>
            <div class="uk-accordion-content canSpeak"><?= $quest->repeater_faq_answer ?></div>
          <?php endif; endforeach; ?>
      </div>
      <div class="faq__cell">
          <?php foreach ($block->faq_item as $i => $quest): if ($i % 2 == 1 && checkLanguage($quest->reference_on_language, $user->language)): ?>
            <h3 class="uk-accordion-title canSpeak"><?= $quest->repeater_faq_quest ?></h3>
            <div class="uk-accordion-content canSpeak"><?= $quest->repeater_faq_answer ?></div>
          <?php endif; endforeach; ?>
      </div>
      <?php endif; endforeach; ?>
    </div>
    <h3 class="faq__subheading canSpeak">Не нашли ответ?</h3>
    <p class="faq__text canSpeak">Вы можете <a href="#question" data-uk-offcanvas="{mode:'slide'}" style="padding-left: 0" class="faq__link">задать
        вопрос,</a> мы обязательно Вам ответим.</p>
  </div>
</section>

<div id="question" class="uk-offcanvas">
  <div class="uk-offcanvas-bar">
    <a class="uk-offcanvas-close"></a>
    <div class="uk-offcanvas-bar-inner sidebar sidebar_big">
      <a href="" class="sidebar__logo">
        <img src="<?= $config->urls->templates . 'assets/img/rifey-main.png' ?>" style="margin-left:35%;" alt="" class="sidebar__logo-img">
      </a>
      <form id="question__form" class="form" action="/" method="post">
        <div class="form__element form__element_name">
          <label class="label canSpeak" for="name9">Имя</label>
          <input id="name9" class="input js-input" type="text" name="name9" value="">
        </div>
        <div class="form__element form__element_name">
          <label class="label canSpeak" for="mail9">E-mail</label>
          <input id="mail9" class="input js-input" type="text" name="mail9" value="">
        </div>
        <div class="form__element form__element_name">
          <label class="label canSpeak" for="text9">Ваш вопрос</label>
          <textarea id="text9" class="input js-input" type="text" name="text9" value=""></textarea>
        </div>
        <p class="form__text canSpeak">Нажимая кнопку Отправить, Вы соглашаетесь на<a href="/privacy"> обработку персональных данных</a></a></p>
        <div class="form__element form__element_send">
          <div class="send">
            <span class="send__text canSpeak">отправить</span>
            <button id="submit_form2" class="send__button" type="submit" name="submit" value="order"></button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>