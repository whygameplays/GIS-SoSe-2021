namespace E2_5 {
  export interface SaberPart {
    image: string;
    origin: string;
  }

  export interface AllParts {
    sabers: SaberPart[];
    tops: SaberPart[];
    connectors: SaberPart[];
    bottoms: SaberPart[];
  }

  export interface Selection {
    saber?: SaberPart;
    top?: SaberPart;
    connector?: SaberPart;
    bottom?: SaberPart;
  }
}