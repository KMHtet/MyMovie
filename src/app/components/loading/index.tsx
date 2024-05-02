import React, {RefObject, useRef} from 'react';
import {LoaddingView} from './LoadingView';
import {LoadingProps} from './Type';
export * from './LoadingView';
export * from './Type';

let refs: RefObject<LoaddingView>[] = [];

function addNewRef(newRef: LoaddingView) {
  refs.push({
    current: newRef,
  });
}
function removeOldRef(oldRef?: LoaddingView) {
  refs = refs.filter(r => r.current !== oldRef);
}
export function LoaddingModal(props: LoadingProps) {
  const loaddingRef = useRef<LoaddingView>();

  const setRef = React.useCallback(ref => {
    if (ref) {
      loaddingRef.current = ref;
      addNewRef(ref);
    } else {
      removeOldRef(loaddingRef?.current);
    }
  }, []);

  return <LoaddingView ref={setRef} {...props} />;
}

function getRef() {
  const reversePriority = [...refs].reverse();
  const activeRef = reversePriority.find(ref => ref?.current !== null);
  if (!activeRef) {
    return null;
  }

  return activeRef.current;
}
LoaddingModal.show = (props?: LoadingProps) => {
  getRef()?.show(props);
};
LoaddingModal.close = () => {
  getRef()?.close();
};
