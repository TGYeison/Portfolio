declare module "*.jpg";
declare module "*.png";
declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent&lt;React.SVGProps &amp; { title: string };

  const src: string;
  export default src;
}