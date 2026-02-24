export {};

declare global {
  interface ImportMeta {
    env: {
      [key: string]: string | boolean | number | undefined;
      PROD: boolean;
      DEV: boolean;
    };
  }
}
