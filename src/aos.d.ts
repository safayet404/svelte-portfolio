declare module 'aos' {
    const AOS: {
      init: (options?: object) => void;
      refresh: () => void;
      refreshHard: () => void;
    };
    export = AOS;
  }
  