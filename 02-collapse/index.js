const collapsibleContent = document.querySelector('.collapsible__content');
const actionHidden = document.querySelector('.collapsible__action--hidden');
const actionShown = document.querySelector('.collapsible__action--visible');
const button = document.querySelector('.collapsible__button');

collapsibleContent.style.visibility = 'hidden';
actionShown.style.display = 'none';
button.addEventListener('click', handleClick);

const state = {
  isCollapsibleShown: false,
};

const animationDuration = 500;

const keyFrames = {
  showing: [
    { visibility: 'visible', opacity: 0 },
    { opacity: 0.3 },
    { opacity: 0.7 },
    { opacity: 1 },
  ],
  hiding: [
    { opacity: 1 },
    { opacity: 0.7 },
    { opacity: 0.3 },
    { opacity: 0, visibility: 'hidden' },
  ],
};

function handleClick() {
  const { isCollapsibleShown } = state;
  if (isCollapsibleShown) {
    hideCollapsible();
  } else {
    showCollapsible();
  }
  state.isCollapsibleShown = !isCollapsibleShown;
}

function hideCollapsible() {
  const animation = collapsibleContent.animate(
    keyFrames.hiding,
    animationDuration,
  );
  animation.onfinish = () => {
    collapsibleContent.style.visibility = 'hidden';
  };
  actionShown.style.display = 'none';
  actionHidden.style.display = 'inline';
}

function showCollapsible() {
  const animation = collapsibleContent.animate(
    keyFrames.showing,
    animationDuration,
  );
  animation.onfinish = () => {
    collapsibleContent.style.visibility = 'visible';
  };
  actionShown.style.display = 'inline';
  actionHidden.style.display = 'none';
}
