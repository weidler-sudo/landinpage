declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
    intercomSettings?: any;
    Intercom?: any;
    voiceflow?: any;
    [key: string]: any;
  }
}

export {};
