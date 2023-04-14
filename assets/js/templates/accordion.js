const accordion = document.getElementById('accordion');

accordion.addEventListener('click', function accordionAction(accordionEvent) {
  var activePanel = accordionEvent.target.closest('.accordion__panel');

  if (!activePanel) return;

  toggleAccordion(activePanel);
});

/**
 * Why? Sets the attributes and data attributes on the elements to expand panels and show and hide text
 * @param panelToActivate
 */
function toggleAccordion(panelToActivate) {
  var buttons = panelToActivate.parentElement.querySelectorAll('button');
  var panels = accordion.querySelectorAll('.accordion__panel');
  var contents = panelToActivate.parentElement.querySelectorAll('.accordion__content');

  buttons.forEach(function hideButton(button) {
    button.setAttribute('aria-expanded', "false");
  });

  panels.forEach(function shrinkPanel(panel) {
    panel.dataset.accordionExpanded = "false";
  });

  contents.forEach(function hideTextContent(content) {
    content.setAttribute('aria-hidden', "true")
  });

  panelToActivate.querySelector('button').setAttribute('aria-expanded', "true");
  panelToActivate.dataset.accordionExpanded = "true";
  panelToActivate.querySelector('.accordion__content').setAttribute('aria-hidden',  'false');
}