import * as jsxRuntime from 'react/jsx-runtime';

export const data = {
  ISLAND_PROPS: [],
  islandToPathMap: {}
};

//@ts-ignore
const originJsx = jsxRuntime.jsx;
//@ts-ignore
const originJsxs = jsxRuntime.jsxs;

const internalJsx = (jsx, type, props, ...args) => {
  if (props && props.__island) {
    data.ISLAND_PROPS.push(props || {});
    const id = type.name;
    // The __island prop has been transformed to component path string by babel-plugin-island
    data.islandToPathMap[id] = props.__island;
    delete props.__island;

    return jsx('div', {
      __island: `${id}:${data.ISLAND_PROPS.length - 1}`,
      children: jsx(type, props, ...args)
    });
  }
  return jsx(type, props, ...args);
};

export const jsx = (...args) => internalJsx(originJsx, ...args);

export const jsxs = (...args) => internalJsx(originJsxs, ...args);

//@ts-ignore
export const Fragment = jsxRuntime.Fragment;
