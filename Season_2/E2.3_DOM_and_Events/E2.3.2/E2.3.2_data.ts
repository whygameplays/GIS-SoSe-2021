namespace E2_3_2 {

    export interface Lightsaberparts {
        image: string;
        origin: string;
    }
  
    export interface AllParts {
        A_Sabers: Lightsaberparts[];
        B_Tops: Lightsaberparts[];
        C_Connectors: Lightsaberparts[];
        D_Bottoms: Lightsaberparts[];
    }

    export interface Selection {
        A_Saber: Lightsaberparts;
        B_Top: Lightsaberparts;
        C_Connector: Lightsaberparts;
        D_Bottom: Lightsaberparts;
    }

    export let parts: AllParts = {
        A_Sabers: [
        { image: "./lightsaber/A_Saber_1238/small/saber_blue_s.png", origin: "Blue Saber" },
        { image: "./lightsaber/A_Saber_1238/small/saber_green_s.png", origin: "Green Saber" },
        { image: "./lightsaber/A_Saber_1238/small/saber_red_s.png", origin: "Red Saber" },
        { image: "./lightsaber/A_Saber_1238/small/saber_violett_s.png", origin: "Violett Saber" },
        { image: "./lightsaber/A_Saber_1238/small/saber_white_s.png", origin: "White Saber" },
        { image: "./lightsaber/A_Saber_1238/small/saber_yellow_s.png", origin: "Yellow Saber" }
      ],

      B_Tops: [
        { image: "./lightsaber/B_Top_65/small/alu_gloss_top_s.png", origin: "Aluminium Gloss" },
        { image: "./lightsaber/B_Top_65/small/alu_matte_top_s.png", origin: "Aluminium Matte" },
        { image: "./lightsaber/B_Top_65/small/bsteel_gloss_top_s.png", origin: "Black Steel Gloss" },
        { image: "./lightsaber/B_Top_65/small/bsteel_matte_top_s.png", origin: "Black Steel Matte" }
      ],

      C_Connectors: [
        { image: "./lightsaber/C_Connector_115/small/connector_blue_s.png", origin: "Blue Connector" },
        { image: "./lightsaber/C_Connector_115/small/connector_gold_s.png", origin: "Gold Connector" },
        { image: "./lightsaber/C_Connector_115/small/connector_green_s.png", origin: "Green Connector" },
        { image: "./lightsaber/C_Connector_115/small/connector_red_s.png", origin: "Red Connector" },
        { image: "./lightsaber/C_Connector_115/small/connector_silver_s.png", origin: "Silver Connector" },
        { image: "./lightsaber/C_Connector_115/small/connector_violett_s.png", origin: "Violett Connector" }
      ],

      D_Bottoms: [
        { image: "./lightsaber/D_Bottom_682/small/alu_gloss_bottom_s.png", origin: "Aluminium Gloss" },
        { image: "./lightsaber/D_Bottom_682/small/alu_gloss_bottom_s.png", origin: "Aluminium Matte" },
        { image: "./lightsaber/D_Bottom_682/small/alu_gloss_bottom_s.png", origin: "Black Steel Gloss" },
        { image: "./lightsaber/D_Bottom_682/small/alu_gloss_bottom_s.png", origin: "Black Steel Matte" }
      ]
    };
  }