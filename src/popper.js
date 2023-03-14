import { computePosition } from '@floating-ui/dom';

// Code derived from https://github.com/bryanmylee/svelte-popperjs/blob/master/src/index.ts
export function createPopperActions(initOptions) {
  let contentNode;
  let options = initOptions;
  let popperInstance = null;
  let referenceNode;

  const initPopper = () => {
    if (referenceNode && contentNode) {
      computePosition(referenceNode, contentNode).then((x, y) => {
        Object.assign(contentNode.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      });
    }
  };

  const referenceAction = (node) => {
    referenceNode = node;
    initPopper();
    return {};
  };

  const contentAction = (node, contentOptions) => {
    contentNode = node;
    options = Object.assign(Object.assign({}, initOptions), contentOptions);
    initPopper();

    return {
      update(newContentOptions) {
        options = Object.assign(
          Object.assign({}, initOptions),
          newContentOptions
        );
        if (popperInstance && options) {
          popperInstance.setOptions(options);
        }
      }
    };
  };

  return [referenceAction, contentAction, () => popperInstance];
}
