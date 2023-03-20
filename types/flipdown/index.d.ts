declare module "flipdown" {
  class FlipDown {
    constructor(
      unixTimestamp: number,
      elementId?: string,
      options?: FlipDownOptions
    );

    start(): this;

    ifEnded(callback: () => void): this;

    readonly version: string;
  }

  interface FlipDownOptions {
    theme?: "light" | "dark";
    headings?: string[];
  }

  export = FlipDown;
}
