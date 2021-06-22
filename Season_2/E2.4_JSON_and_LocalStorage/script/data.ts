namespace E2_4 {
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

  export let partsJSON: string =
    `{
      "sabers": [
        { "image": "./img/lightsaber/A_Saber_1238/small_rotated/saber_blue_s.png", "origin": "Blue Saber" },
        { "image": "./img/lightsaber/A_Saber_1238/small_rotated/saber_green_s.png", "origin": "Green Saber" },
        { "image": "./img/lightsaber/A_Saber_1238/small_rotated/saber_red_s.png", "origin": "Red Saber" },
        { "image": "./img/lightsaber/A_Saber_1238/small_rotated/saber_violett_s.png", "origin": "Violett Saber" },
        { "image": "./img/lightsaber/A_Saber_1238/small_rotated/saber_white_s.png", "origin": "White Saber" },
        { "image": "./img/lightsaber/A_Saber_1238/small_rotated/saber_yellow_s.png", "origin": "Yellow Saber" }
      ],

      "tops": [
        { "image": "./img/lightsaber/B_Top_65/small_rotated/alu_gloss_top_s.png", "origin": "Aluminium Gloss" },
        { "image": "./img/lightsaber/B_Top_65/small_rotated/alu_matte_top_s.png", "origin": "Aluminium Matte" },
        { "image": "./img/lightsaber/B_Top_65/small_rotated/bsteel_gloss_top_s.png", "origin": "Black Steel Gloss" },
        { "image": "./img/lightsaber/B_Top_65/small_rotated/bsteel_matte_top_s.png", "origin": "Black Steel Matte" }
      ],
      
      "connectors": [
        { "image": "./img/lightsaber/C_Connector_115/small_rotated/connector_blue_s.png", "origin": "Blue Connector" },
        { "image": "./img/lightsaber/C_Connector_115/small_rotated/connector_gold_s.png", "origin": "Gold Connector" },
        { "image": "./img/lightsaber/C_Connector_115/small_rotated/connector_green_s.png", "origin": "Green Connector" },
        { "image": "./img/lightsaber/C_Connector_115/small_rotated/connector_red_s.png", "origin": "Red Connector" },
        { "image": "./img/lightsaber/C_Connector_115/small_rotated/connector_silver_s.png", "origin": "Silver Connector" },
        { "image": "./img/lightsaber/C_Connector_115/small_rotated/connector_violett_s.png", "origin": "Violett Connector" }
      ],

      "bottoms": [
        { "image": "./img/lightsaber/D_Bottom_682/small_rotated/alu_gloss_bottom_s.png", "origin": "Aluminium Gloss" },
        { "image": "./img/lightsaber/D_Bottom_682/small_rotated/alu_matte_bottom_s.png", "origin": "Aluminium Matte" },
        { "image": "./img/lightsaber/D_Bottom_682/small_rotated/bsteel_gloss_bottom_s.png", "origin": "Black Steel Gloss" },
        { "image": "./img/lightsaber/D_Bottom_682/small_rotated/bsteel_matte_bottom_s.png", "origin": "Black Steel Matte" }
      ]
    }`;
}