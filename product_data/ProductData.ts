interface ProductSection {
  type?: string;
  title: string;
  content?: string;
  sub?: string;
  properties?: Array<{
    label: string;
    value: string;
  }>;
}

interface Product {
  slug: string;
  name: string;
  description: string;
  sections: ProductSection[];
}

export const productsList: Product[] = [
  {
    slug: "acetic-acid-90",
    name: "Acetic Acid 90%",
    description:
      "Acetic acid 90% is a highly concentrated solution of acetic acid, commonly used in industrial applications, chemical synthesis, and as a laboratory reagent. This colorless liquid has a pungent, vinegar-like odor and is highly corrosive, requiring careful handling.",

    sections: [
      {
        type: "overview",
        title: "Acetic Acid 90% – Industrial Grade Chemical",
        content:
          "This is high-strength acetic acid that we use in serious industrial work. It’s basically concentrated vinegar, but way stronger than anything you’d find in your kitchen. We’re talking 90% pure acetic acid here.Most factories need this stuff for making other chemicals or controlling pH levels. It’s clear, has that sharp vinegar smell, and it works fast. Industries use it because it’s reliable and gets the job done.",
      },
      {
        type: "",
        title: "What exactly is this chemical?",
        content:
          "It’s acetic acid mixed with water to get exactly 90% concentration. Some people call it glacial acetic acid concentrate. We make it through fermentation or synthetic processes – both ways give you a clean, stable product.The 90% strength means it’s much more powerful than regular vinegar. That’s why it works for industrial processes that need serious acidic conditions.",
      },
      {
        type: "",
        title: "Where do people use it?",
        content:
          "Chemical plants use this to make vinyl acetate, cellulose acetate, and different acetate esters. Textile companies need it for dyeing fabrics – it helps colors stick better. Food manufacturers use it as a preservative and to control acidity levels. And pharmaceutical companies use it to make active ingredients.When you compare acetic acid vs regular vinegar, this industrial grade is way more concentrated. Regular vinegar is around 5% acetic acid. This is 90%. Big difference.",
      },
      {
        type: "",
        title: "Why buy from Pascom?",
        content:
          "We’re an Australian acetic acid supplier that keeps stock ready. You can get it in drums, IBCs, or bulk tankers. We handle the paperwork, make sure it meets regulations, and ship fast. Plus our technical team can help figure out what you need for your specific process.Need to place an order or ask questions?",
      },

      {
        type: "safety",
        title: "Safety and Handling Information",
        content:
          "This stuff is corrosive. Keep it cool and ventilated. Don’t let it near strong bases or oxidizing agents – they don’t mix well. Always wear chemical gloves and eye protection.",
      },
      {
        type: "",
        title: "Product Specs",
        sub: "Available for delivery and pickup",
        properties: [
          {
            label: "Packaging",
            value: "We have options. Ask us what works for your setup.",
          },
          {
            label: "CAS number",
            value: "64-19-7",
          },
          {
            label: "Safety data",
            value: "Get the SDS here",
          },
        ],
      },
      {
        type: "",
        title: "What it looks like:",
        properties: [
          {
            label: "Appearance",
            value: "Clear liquid, no color",
          },
          {
            label: "Smell",
            value: "Strong vinegar odor",
          },
          {
            label: "Concentration",
            value: "90% acetic acid",
          },
          {
            label: "pH",
            value: "Around 2.4 (very acidic)",
          },
          {
            label: "Density",
            value: "About 1.06 g/mL at room temperature",
          },
          {
            label: "Boiling point",
            value: "118°C",
          },
          {
            label: "Freezing point",
            value: "16.6°C",
          },
          {
            label: "Mixes with",
            value: "Water and most organic solvents",
          },
          {
            label: "Stability",
            value: "Stable but will corrode metals",
          },
        ],
      },
      {
        type: "",
        title: "Safety stuff you need to know:",
        properties: [
          {
            label: "Skin contact",
            value: "Burns badly. Wear chemical gloves and protective clothes.",
          },
          {
            label: "Breathing it in:",
            value:
              "Irritates your lungs. Work in ventilated areas or use breathing protection.",
          },
          {
            label: "If swallowed:",
            value: " Don’t. It causes severe internal burns.",
          },
          {
            label: "Chemical reactions:",
            value: "Keep away from bases, oxidizers, and reactive metals.",
          },
          {
            label: "Density",
            value: "About 1.06 g/mL at room temperature",
          },
          {
            label: "Storage",
            value: "Use corrosion-resistant containers. Keep cool and dry.",
          },
          {
            label: "Freezing point",
            value: "16.6°C",
          },
          {
            label: "Spills",
            value: "Neutralize with baking soda. Make sure area is ventilated.",
          },
        ],
      },
    ],
  },
  {
    slug: "alcohol-gel-hand-sanitizer",
    name: "Alcohol gel hand sanitizer",
    description:
      "Alcohol Gel Hand Sanitizer is a quick-drying, alcohol-based product designed to kill germs and bacteria on the skin. It is commonly used for hand hygiene when soap and water are not available. This clear, gel-like substance is effective and convenient but requires proper storage and usage to ensure safety.",
    sections: [
      {
        type: "overview",
        title: "Alcohol gel hand sanitizer – Fast, Simple Hand Cleaning",
        content:
          "Alcohol gel hand sanitizer helps kill 99.9% of germs fast. No water or soap needed. Use it at work, in healthcare settings, on public transport, or just out and about. It's quick to apply and dries fast.",
      },
      {
        type: "",
        title: "What is Alcohol hand sanitizer gel?",
        content:
          "This gel is made with 70% alcohol (ethanol or isopropyl). It also includes ingredients like glycerin and aloe vera to keep your hands from drying out. The gel spreads easily and doesn't leave a sticky feeling.",
      },
      {
        type: "",
        title: "Why People Use It",
        content:
          "Kills germs fast – Works against bacteria and viruses.\n\nNo water needed – Just apply and go.\n\nGentle on skin – Won't dry out your hands with normal use.\n\nMeets hygiene rules – Safe for food prep, medical settings, and offices.\n\nDries quickly – No residue left behind.",
      },
      {
        type: "",
        title: "Why Ours",
        content:
          "Pascom's Alcohol gel hand sanitizer is made to high standards. We offer bulk orders with fast delivery across Australia. You can also ask for custom labels and sizes.\n\nRequest a Quote",
      },
      {
        type: "safety",
        title: "Use It Safely",
        content:
          "For external use only.\n\nKeep away from heat or flames.\n\nUse in well-ventilated spaces.\n\nDon't use on broken skin.\n\nStore below 30°C.\n\nWant the SDS? Get it here.",
      },
      {
        type: "",
        title: "Order in Australia",
        content:
          "Need Alcohol gel hand sanitizer? We deliver across the country. Bulk sizes and custom packaging available.\n\nContact us to place your order.",
      },
      {
        type: "",
        title: "Product Info",
        properties: [
          {
            label: "Appearance",
            value: "Clear or slightly cloudy gel",
          },
          {
            label: "Smell",
            value: "Light alcohol scent",
          },
          {
            label: "Alcohol content",
            value: "70%",
          },
          {
            label: "Solubility",
            value: "Fully water-soluble",
          },
          {
            label: "pH level",
            value: "6.0–7.5",
          },
          {
            label: "Sizes",
            value: "100mL, 500mL, 1L, 5L, IBC bulk",
          },
        ],
      },
      {
        type: "",
        title: "Safety Notes",
        properties: [
          {
            label: "Skin",
            value: "Safe with normal use. Stop if irritation happens.",
          },
          {
            label: "Inhalation",
            value: "Use ventilation in large spaces.",
          },
          {
            label: "Eyes",
            value: "Rinse with water if contact happens.",
          },
          {
            label: "Fire risk",
            value: "Flammable – keep away from flames.",
          },
        ],
      },
    ],
  },
  {
    slug: "trisodium-phosphate-5",
    name: "Trisodium Phosphate 5%",
    description:
      "Trisodium Phosphate 5% is an aqueous solution of trisodium phosphate, widely utilized across various industries. This clear, alkaline liquid is commonly employed as a cleaning agent, a degreaser, and a food additive. It also serves as a buffering agent and an emulsifier in numerous applications.",
    sections: [
      {
        type: "overview",
        title: "Trisodium Phosphate 5% – A Reliable Cleaner for Industrial Use",
        content:
          "Trisodium Phosphate 5% is a strong, industrial-grade cleaner and degreaser. It's used in many industries because it cuts through grease, oil, and buildup. When mixed with water, it forms a 5% solution that's good for cleaning surfaces, preparing them for painting, and removing scale. It's often used in food processing, dairy plants, and commercial cleaning jobs.\n\nAcross Australia, businesses count on Trisodium Phosphate 5% to keep work areas clean and safe.",
      },
      {
        type: "",
        title: "What It Is",
        content:
          "Trisodium Phosphate (TSP) is a white powder with the formula Na₃PO₄. A 5% solution gives you controlled alkalinity. That means it's strong enough to clean, but safe for most surfaces when used correctly. TSP breaks down organic material and helps remove tough grime, which is why it's used in places where hygiene matters, like food factories and dairy operations.",
      },
      {
        type: "",
        title: "Where It's Used and Why",
        content:
          "Here are some common uses for Trisodium Phosphate 5%:\n\nFood Industry: Helps remove fat, protein, and minerals from equipment.\nPaint Prep: Cleans surfaces so paint sticks better.\nCommercial Cleaning: Cuts grease and grime on floors, walls, and machinery.\nScale Removal: Clears out mineral buildup in pipes and tanks.\n\nIts high pH makes it effective without damaging most equipment when handled properly.",
      },
      {
        type: "",
        title: "Why Get It from Pascom?",
        content:
          "Pascom is a trusted supplier of Trisodium Phosphate 5% in Australia. We offer high-quality product with flexible packaging bags, drums, or bulk. Fast delivery and good service are part of the deal. Need a custom order? Get a quote here.",
      },
      {
        type: "safety",
        title: "Handling and Storage",
        content:
          "Wear gloves and eye protection when using Trisodium Phosphate 5%. Store it in a dry, cool spot away from acids. Always check the SDS before use.",
      },
      {
        type: "",
        title: "Buy Trisodium Phosphate 5% in Australia",
        content:
          "We ship across Australia and offer pickup too. Want bulk pricing or custom packaging? Send us a quick message.",
      },
      {
        type: "",
        title: "Product Info",
        properties: [
          {
            label: "CAS",
            value: "7601-54-9",
          },
          {
            label: "Appearance",
            value: "White powder",
          },
          {
            label: "Odour",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water",
          },
          {
            label: "pH (5% solution)",
            value: "Around 11.5–12.5",
          },
          {
            label: "Density",
            value: "About 2.52 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable unless mixed with acid",
          },
        ],
      },
      {
        type: "",
        title: "Safety Info",
        properties: [
          {
            label: "Skin and Eyes",
            value: "Can irritate use protection.",
          },
          {
            label: "Breathing",
            value: "Don't inhale dust wear a mask or ventilate well.",
          },
          {
            label: "Swallowing",
            value: "Harmful don't ingest.",
          },
          {
            label: "Storage",
            value: "Keep it sealed, dry, and cool.",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonia-solution",
    name: "Ammonia solution 10-35%, 19%, 25%",
    description:
      "Ammonia solutions of 10-30%, 19%, and 25% are concentrated aqueous solutions of ammonia, commonly used in industrial cleaning, fertilizer production, and chemical synthesis. This colorless liquid has a strong, pungent odor and is highly corrosive and toxic, requiring careful handling and proper ventilation.",
    sections: [
      {
        type: "overview",
        title: "Ammonia Solution – Grades for Industrial Use",
        content:
          "Ammonia solution (also called aqueous ammonia or ammonium hydroxide) is a common chemical used in many industries. It comes in different strengths 10–30%, 19%, and 25% depending on what you need it for. You'll find it in agriculture, cleaning, water treatment, chemical manufacturing, and cooling systems.",
      },
      {
        type: "",
        title: "What is it?",
        content:
          "It's a clear liquid made by mixing ammonia gas with water. It has a strong smell and is highly alkaline. The chemical name is NH₄OH.\n\nPeople use it to neutralise acids, clean surfaces, add nitrogen to soil, and support chemical processes. It works well because it mixes easily with water and reacts quickly.",
      },
      {
        type: "",
        title: "Ammonia Solution Grades We Offer",
        content:
          "We supply different strengths for different jobs. Here's a quick breakdown:\n\n10–30% Ammonia Solution\nThis is a flexible range, adjusted to what you need. It's used in water treatment, labs, and general industrial settings.\n\nUsed for: pH control, neutralisation, light cleaning\n\nLook and smell: Clear with strong odour\n\nIndustries: Labs, water treatment, chemical blending\n\n19% Ammonia Solution\nA mid-range strength. Strong enough to clean well, but easier to handle than higher concentrations.\n\nUsed for: Cleaning, degreasing, fertiliser blends\n\nLook and smell: Colorless with sharp smell\n\nIndustries: Cleaning, agriculture, textiles\n\n25% Ammonia Solution\nThis is a strong grade, mainly for heavy-duty industrial use.\n\nUsed for: Industrial cleaning, chemical production, cooling systems\n\nLook and smell: Strong ammonia smell, clear liquid\n\nIndustries: Manufacturing, chemical plants, HVAC systems",
      },
      {
        type: "",
        title: "Common Uses in Industry",
        content:
          "It is a reliable and affordable chemical with many roles:\n\nControls pH in water treatment\n\nCleans surfaces in food and sanitation\n\nAdds nitrogen in farming\n\nHelps stabilise refrigeration systems\n\nChoosing the right grade helps keep processes safe and efficient.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "We supply ammonia solution across Australia with:\n\nQuality product from trusted sources\n\nCompliance with Australian safety rules\n\nCustom packaging to match your specs\n\nFast delivery and safety data if you need it\n\n🔗 Request a Quote",
      },
      {
        type: "safety",
        title: "Packaging & Safety Info",
        content:
          "CAS Number: 1336-21-6\n\nStorage: Keep in a cool, ventilated spot, away from acids\n\nHandling: Use safety gear; make sure the area has airflow\n\nDelivery: Bulk and pickup options available in Australia\n\n🔗 Request SDS",
      },
      {
        type: "",
        title: "Order Ammonia Solution in Australia",
        content:
          "We supply ammonia solution in 10–30%, 19%, and 25% strengths. Whether you're using it for cleaning, chemical work, or farming, we can help you get the right grade.\n\n🔗 Enquire Now to get started.",
      },
    ],
  },
  {
    slug: "ammonium-bifluoride-98",
    name: "Ammonium bifluoride 98%",
    description:
      "Ammonium bifluoride 98% is a crystalline compound commonly used in industrial applications, including glass etching, metal cleaning, and as a precursor in chemical synthesis. This white solid is highly corrosive and releases toxic fumes when heated, necessitating careful handling and storage.",
    sections: [
      {
        type: "overview",
        title: "Ammonium Bifluoride 98% – High Purity for Industrial Use",
        content:
          "Ammonium bifluoride 98% is a solid chemical used in industries that need strong cleaning, etching, or surface treatment. It's highly effective and works well in processes like glass etching, metal prep, and oilfield operations.",
      },
      {
        type: "",
        title: "What It Is",
        content:
          "Ammonium bifluoride (NH₄HF₂) is a white, crystalline solid. It's acidic, corrosive, and dissolves easily in water. It reacts fast with materials like glass and metal, which is why it's commonly used in etching and cleaning.\n\nAlso known as:\n\nNH₄HF₂\n\nAmmonium hydrogen fluoride\n\nAmmonium acid fluoride",
      },
      {
        type: "",
        title: "Available Grade",
        content:
          "We supply it in one grade:\n\n98% Purity – Solid Form\nThis is the strongest and most effective version. It's made for industrial tasks that need deep etching or chemical reactions involving fluoride.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "You'll find it in:\n\nGlass etching and frosting\n\nAluminium and stainless-steel cleaning\n\nElectronics manufacturing\n\nOilfield chemical blends\n\nMetal surface prep and treatment",
      },
      {
        type: "",
        title: "Physical Details",
        properties: [
          {
            label: "Appearance",
            value: "White crystal solid",
          },
          {
            label: "Smell",
            value: "Sharp/pungent",
          },
          {
            label: "Solubility",
            value: "Mixes easily in water",
          },
        ],
      },
      {
        type: "",
        title: "Why Use It",
        content:
          "Removes oxides and surface buildup\n\nGives precise etching on glass\n\nWorks well in acidizing for oil and gas\n\nHelps with micro-cleaning in electronics\n\nEasy to mix and apply\n\nConsistent quality\n\nCost-efficient for industrial use",
      },
      {
        type: "",
        title: "Why Buy from Us",
        content:
          "We're an Australian supplier offering:\n\nHigh-purity chemical\n\nCompliance with local standards\n\nStrong packaging options\n\nSupport for large or custom orders\n\n🔗 Request a Quote",
      },
      {
        type: "safety",
        title: "Packaging, Delivery & Docs",
        content:
          "CAS Number: 1341-49-7\n\nPackaging: HDPE containers or fiber drums (on request)\n\nStorage: Cool, dry, well-ventilated space; keep sealed\n\nDelivery: Australia-wide shipping or site delivery\n\n🔗 Request SDS",
      },
      {
        type: "",
        title: "Order in Australia",
        content:
          "We supply ammonium bifluoride 98% to industries across the country. If you need high purity, reliable delivery, and full documentation, we can help.\n\n🔗 Contact Us",
      },
    ],
  },
  {
    slug: "borax-3-5",
    name: "Borax 3.5%",
    description:
      "Borax 3.5% is a mild solution of sodium borate, often used as a cleaning agent, laundry booster, or in various household applications. This white, powdery substance dissolves easily in water and is valued for its effectiveness in softening water, controlling odors, and as a general-purpose cleaner.",
    sections: [
      {
        type: "overview",
        title: "Borax 3.5% – A Simple, Reliable Solution",
        content:
          "Borax 3.5% is a boron-based liquid used in farming, cleaning, and manufacturing. It contains 3.5% boron, making it useful wherever accurate boron levels or mild cleaning power are needed. You'll find it used across homes, farms, and factories in Australia.\n\nIt's stable, easy to work with, and does what it's meant to whether you're treating soil, cleaning equipment, or handling industrial processes.",
      },
      {
        type: "",
        title: "What It Is",
        content:
          'Borax 3.5% is a water-based solution made from sodium tetraborate decahydrate. People just call it "borax." It\'s made from natural minerals that include boron, sodium, oxygen, and water.\n\nYou can mix it with water, and it works well in different settings. Some use it at home. Others use it in large-scale operations.',
      },
      {
        type: "",
        title: "What It's Used For",
        content:
          "Farming: Adds boron to soil when crops are lacking it. This helps with plant health and yield.\n\nCleaning: Acts as a mild cleaner and deodoriser in commercial cleaning products.\n\nManufacturing: Used in glass and ceramic production. It helps those materials handle heat and chemicals better.\n\nCorrosion prevention: Helps stop rust and metal damage in some systems.\n\nLaundry and metallurgy: Boosts cleaning in laundry products and helps in metalwork processes.\n\nIt's one of those products that quietly shows up in a lot of places.",
      },
      {
        type: "",
        title: "Why Buy from Us",
        content:
          "We supply Borax 3.5% across Australia. You can get it in small or large quantities, depending on what you need. It's consistent, high quality, and we ship fast.\n\nRequest a quote or talk to us if you have questions.",
      },
      {
        type: "safety",
        title: "Safe Handling",
        content:
          "Wear gloves and goggles when using it. Use it in a space with good airflow.\n\nFor full safety info, check the SDS form. Store it in a dry, cool place, away from acids and anything it doesn't mix well with.",
      },
      {
        type: "",
        title: "How To Order",
        content:
          "We ship Australia-wide or you can pick it up. Custom packaging is available.\n\nClick here to order or reach out if you want to know more.",
      },
      {
        type: "",
        title: "Quick Facts",
        properties: [
          {
            label: "CAS",
            value: "1303-96-4",
          },
          {
            label: "Looks like",
            value: "Clear liquid",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Dissolves in water easily",
          },
          {
            label: "pH",
            value: "Slightly alkaline (9.0–9.5)",
          },
          {
            label: "Density",
            value: "~1.05 g/cm³",
          },
          {
            label: "Stability",
            value: "Safe if stored properly",
          },
          {
            label: "Safety Tips",
            value:
              "Don't get it in your eyes or on your skin for long. Don't eat it. Follow basic safety practices.",
          },
        ],
      },
    ],
  },
  {
    slug: "calcium-chloride-94",
    name: "Calcium chloride 94%",
    description:
      "Calcium chloride 94% is a high-purity, white crystalline substance widely used in de-icing, dust control, and various industrial applications. It is hygroscopic, meaning it readily absorbs moisture from the air, making it effective in controlling humidity and melting ice.",
    sections: [
      {
        type: "overview",
        title: "Calcium Chloride 94% – Versatile Industrial-Grade Chemical",
        content:
          "Calcium Chloride 94% is a solid white chemical used in many industries. It absorbs moisture fast, dissolves easily in water, and works well in harsh conditions. It's commonly used for drying, de-icing, and dust control.\n\nAcross Australia, it's used in construction, mining, water treatment, and even food processing because it's reliable and efficient.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          "Calcium Chloride (CaCl₂) is a type of salt. The 94% grade means it's highly pure. It usually comes as a powder or in small white pellets.\n\nIt pulls moisture from the air. That makes it useful as a drying agent. It also lowers the freezing point of water, which is why it's often used to melt ice.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "You'll find Calcium Chloride 94% in these industries:\n\nDe-icing: Melts ice on roads and footpaths, even in freezing temperatures.\n\nDust control: Used on dirt roads, mine sites, and construction areas to keep dust down.\n\nWater treatment: Helps manage water hardness and is used in wastewater systems.\n\nFood: Safe for use in processing added to cheese and canned food as a firming agent.\n\nOil and gas: Added to drilling fluids to adjust weight and prevent shale from breaking apart.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "We supply Calcium Chloride 94% across Australia. You can order it in 25kg bags, bulk bags, or IBCs. Delivery and pickup options are available. We also offer custom packaging if needed.\nRequest a Quote if you're looking for a bulk supply.",
      },
      {
        type: "safety",
        title: "Handling and Storage",
        content:
          "Use gloves and eye protection when handling Calcium Chloride. The powder can irritate skin and eyes. Work in a well-ventilated area to avoid breathing in dust.\n\nStorage: Keep in a cool, dry place. Seal tightly to keep moisture out.\n\nReacts with water: It heats up when mixed with water, so handle with care.\n\nEnvironment: Not toxic, but large amounts can change soil or water salinity.\n\nYou can request the SDS for full safety info.",
      },
      {
        type: "",
        title: "Quick Facts",
        properties: [
          {
            label: "CAS Number",
            value: "10043-52-4",
          },
          {
            label: "Form",
            value: "White powder or granules",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Dissolves in water; gives off heat",
          },
          {
            label: "pH (1% solution)",
            value: "8–10",
          },
          {
            label: "Density",
            value: "About 2.15 g/cm³",
          },
          {
            label: "Melting Point",
            value: "772°C",
          },
          {
            label: "Stability",
            value: "Stable under normal use",
          },
          {
            label: "Packaging",
            value: "25kg bags, bulk bags, or IBCs",
          },
          {
            label: "Delivery",
            value: "Available across Australia",
          },
        ],
      },
      {
        type: "",
        title: "Need Calcium Chloride 94%?",
        content:
          "We're ready to help with supply across Australia. Contact us to place an order or request the SDS.",
      },
    ],
  },
  {
    slug: "calcium-hypochlorite",
    name: "Calcium hypochlorite 65%, 70%",
    description:
      "Calcium hypochlorite 65% and 70% are powerful disinfectants and bleaching agents commonly used for water treatment, sanitation, and in industrial cleaning processes. This white, granular substance is a strong oxidizer and is highly effective in killing bacteria, viruses, and algae, making it essential in maintaining clean water supplies.",
    sections: [
      {
        type: "overview",
        title: "Calcium Hypochlorite for Industrial Use – 65% & 70% Grades",
        content:
          "Calcium Hypochlorite is a strong disinfectant used in water treatment, sanitation, and industrial cleaning. We supply two high-quality grades, 65% and 70%, to suit different operational needs.",
      },
      {
        type: "",
        title: "What It Is",
        content:
          "Calcium Hypochlorite (Ca(ClO)₂) is a white or light grey powder with a chlorine smell. People also call it:\n\nBleaching powder\n\nChlorinated lime\n\nCal hypo\n\nIt's a simple, effective chemical that works well for disinfection and bleaching.",
      },
      {
        type: "",
        title: "Available Grades",
        content:
          "We offer two concentration levels. Both are suited to industrial work, just with different strengths.\n\nCalcium Hypochlorite 65%\nChlorine Content: Minimum 65%\n\nAppearance: White or greyish granules\n\nUsed for:\n\nDrinking water treatment\n\nCooling towers\n\nSewage plants\n\nThis is a balanced option strong enough for disinfection but more economical for large volumes.\n\nCalcium Hypochlorite 70%\nChlorine Content: Minimum 70%\n\nAppearance: White fine granules or powder\n\nUsed for:\n\nSwimming pools\n\nEmergency water treatment\n\nIndustrial bleaching\n\nThis grade gives you more oxidizing power when you need stronger results.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Industries use it for:\n\nCleaning municipal water\n\nTreating industrial wastewater\n\nSanitizing food processing areas\n\nKeeping pools safe\n\nEmergency disinfection\n\nIt's reliable, efficient, and cost-effective.",
      },
      {
        type: "",
        title: "Why Buy From Us",
        content:
          "If you're in Australia and need Calcium Hypochlorite, here's what you get with us:\n\nConsistent product quality\n\nLocal compliance and safety standards\n\nPackaging that fits your operation\n\nOn-time delivery across the country\n\n📄 Request a Quote\n📄 Request SDS",
      },
      {
        type: "safety",
        title: "Packaging & Delivery",
        content:
          "CAS Number: 7778-54-3\n\nPackaging Options:\n\n45kg drums\n\n25kg pails\n\nBulk options available\n\nStorage: Keep it dry, cool, and out of sunlight\n\nDelivery: We ship Australia-wide. Pickup available too.",
      },
      {
        type: "",
        title: "Need a Reliable Supply?",
        content:
          "We stock both 65% and 70% Calcium Hypochlorite. Whether you're running a treatment plant or managing sanitation at scale, we can help.\n\n📦 Get a Quote Today",
      },
    ],
  },
  {
    slug: "caustic-soda",
    name: "Caustic soda",
    description:
      "Caustic soda, also known as sodium hydroxide, is a highly caustic and versatile chemical used in various industrial processes, including the production of soap, paper, and detergents. This white, solid substance is highly corrosive and can cause severe burns. Proper safety measures must be observed to avoid harm.",
    sections: [
      {
        type: "overview",
        title: "Caustic Soda – What It Is and Why It Matters",
        content:
          "Caustic soda, or sodium hydroxide (NaOH), is a strong, versatile chemical. It's used in a wide range of industries across Australia — from water treatment and cleaning to food processing and manufacturing.\n\nIt comes in both solid (flakes, beads, granules) and liquid forms. It mixes easily with water and reacts fast, which makes it useful for many jobs like adjusting pH levels, making soap, or refining aluminium.",
      },
      {
        type: "",
        title: "What Is Caustic Soda?",
        content:
          "Caustic soda is made by running electricity through saltwater. The result is a white, odourless solid with a very high pH. When mixed with water, it gives off heat and dissolves quickly.\n\nIt's good at breaking down grease, fats, and proteins. That's why it's used in cleaning products, industrial processes, and water treatment.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Industries across Australia use caustic soda every day. Here are some examples:\n\nWater Treatment – Helps control pH and neutralise acids.\n\nAluminium Production – Used in the Bayer process to extract alumina from bauxite.\n\nSoap and Detergents – Needed to turn fats and oils into soap.\n\nPaper and Pulp – Removes lignin and helps control acidity.\n\nFood Industry – Used for peeling fruits and vegetables, making cocoa, and pretzels.\n\nIt's also common in strong degreasers and industrial cleaners because it dissolves organic material so well.",
      },
      {
        type: "",
        title: "Buying from Us",
        content:
          "We supply caustic soda across Australia in both solid and liquid forms. You can order in bulk or request custom packaging based on what you need. Delivery is fast and reliable.\nRequest a quote here.",
      },
      {
        type: "safety",
        title: "Safety Comes First",
        content:
          "Caustic soda is corrosive. Always wear gloves, eye protection, and protective clothing when handling it. Store it in a cool, dry place with good airflow. Keep it away from acids and moisture.\n\nFor full safety details, request the SDS here.",
      },
      {
        type: "",
        title: "Basic Info",
        properties: [
          {
            label: "CAS",
            value: "1310-73-2",
          },
          {
            label: "Form",
            value: "White solid (flakes or pellets)",
          },
          {
            label: "Smell",
            value: "Odourless",
          },
          {
            label: "Solubility",
            value: "Very soluble in water",
          },
          {
            label: "pH (1% solution)",
            value: "Above 13",
          },
          {
            label: "Density",
            value: "About 2.13 g/cm³",
          },
          {
            label: "Melting Point",
            value: "318°C",
          },
        ],
      },
      {
        type: "",
        title: "Order Caustic Soda in Australia",
        content:
          "We offer pickup and delivery across the country. Packaging is flexible and can be customised.\nContact us today to learn more or place an order.",
      },
    ],
  },
  {
    slug: "caustic-soda-10-50",
    name: "Caustic soda 10-50%",
    description:
      "Caustic soda 10-50% solutions (10%, 20%, 31.5%, 40%, and 50%) are diluted aqueous solutions of sodium hydroxide, commonly used in various industrial and cleaning applications. This colorless, highly alkaline solution is effective in saponification and as a pH adjuster, but requires careful handling due to its corrosive nature.",
    sections: [
      {
        type: "overview",
        title:
          "Caustic Soda 10-50% Solutions – Multiple Concentrations for Industrial Use",
        content:
          "Caustic Soda (Sodium Hydroxide) is a basic chemical used in many industries. At Pascom, we supply Caustic Soda 10-50% (in 10%, 20%, 31.5%, 40%, and 50%) concentrations. These are used in water treatment, chemical production, food processing, and more. Whether you need a mild or highly concentrated solution, we can supply what works for your process.",
      },
      {
        type: "",
        title: "What is Caustic Soda?",
        content:
          "Caustic Soda, also known as Sodium Hydroxide or NaOH, is a strong alkaline compound. When dissolved in water, it becomes a clear, odourless liquid. It's used for pH control, cleaning, and chemical reactions in a wide range of industries.\n\nOther names:\n\nSodium Hydroxide\n\nNaOH\n\nLye (used in some cleaning products)\n\nBecause it's highly alkaline, it's useful for neutralising acids, adjusting pH, and making other chemicals.",
      },
      {
        type: "",
        title: "Concentrations We Offer",
        content:
          "We provide Caustic Soda in these standard solutions:\n\n🔹 10% Solution\nUses: pH control, light cleaning, mild neutralisation\n\nIndustries: Water treatment, lab use, low-risk applications\n\nNotes: Less corrosive; easier to store and handle\n\n🔹 20% Solution\nUses: General cleaning, pH adjustment, basic chemical work\n\nIndustries: Textiles, food processing, municipal treatment\n\nNotes: Balanced strength, easy to work with\n\n🔹 31.5% Solution\nUses: Cleaning systems, degreasing, water purification\n\nIndustries: Dairy, beverage, manufacturing\n\nNotes: Good reactivity; commonly used in processing lines\n\n🔹 40% Solution\nUses: Heavy-duty degreasing, chemical production, mining\n\nIndustries: Pulp and paper, metal treatment, chemical plants\n\nNotes: Higher strength; needs careful handling\n\n🔹 50% Solution\nUses: Industrial-scale pH control, demanding chemical processes\n\nIndustries: Oil & gas, petrochemical, deep cleaning\n\nNotes: Strongest grade; highly reactive and dense",
      },
      {
        type: "",
        title: "Key Uses",
        content:
          "Neutralising acids and adjusting pH\n\nCleaning and degreasing\n\nWater treatment\n\nMaking and breaking down chemicals\n\nWhy it matters: Caustic Soda 10-50% solutions are versatile, cost-effective, and available in strengths to match the job.",
      },
      {
        type: "",
        title: "Why Get It From Pascom?",
        content:
          "Consistent quality\n\nMeets Australian standards\n\nLocal delivery and pickup options\n\nCustom packaging if needed\n\n🔗 Request a Quote",
      },
      {
        type: "safety",
        title: "Storage & Delivery",
        content:
          "CAS Number: 1310-73-2\n\nHandling: Use corrosion-resistant containers; avoid skin and eye contact\n\nDelivery: Fast dispatch; flexible pickup\n\n🔗 Request SDS",
      },
      {
        type: "",
        title: "Order Caustic Soda 10-50% in Australia",
        content:
          "We supply Caustic Soda 10-50% to industries across Australia. Choose the grade that suits your operation. We'll handle the rest—quickly and reliably.\n\n🔗 Get in Touch for a quote or supply details.",
      },
    ],
  },
  {
    slug: "citric-acid-monohydrate",
    name: "Citric acid monohydrate",
    description:
      "Citric acid monohydrate (C₆H₈O₇·H₂O) is a crystalline, colorless compound used as a natural preservative and flavoring agent in food and beverages. It is also utilized in cleaning products and cosmetics for its chelating properties. This mild acid is generally safe but should be handled properly.",
    sections: [
      {
        type: "overview",
        title: "Citric Acid Monohydrate – Food Grade & Industrial Use",
        content:
          "Citric Acid Monohydrate is a simple white powder used in a lot of industries. It mixes easily in water and helps with things like flavour, pH balance, and cleaning. You'll find it in food, drinks, cleaning products, cosmetics, and even medicine.\n\nIn Australia, it's trusted for being safe, effective, and high quality. Whether you're making food, treating water, or formulating a skincare product, citric acid monohydrate does the job.",
      },
      {
        type: "",
        title: "What It Is",
        content:
          'Citric acid monohydrate is just citric acid with one water molecule added. It\'s made through fermentation using things like sugar beets or molasses. It looks like a white crystal and tastes sharply acidic.\n\nPeople often call it just "citric acid," but this monohydrate form is easier to handle, especially in dry, powder-based mixes.',
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Citric acid monohydrate is used in all sorts of industries:\n\nFood & Drinks: Adds tartness, preserves freshness, and balances flavours in things like soft drinks, lollies, and sauces.\n\nCleaning Products: Helps remove limescale and boosts cleaning power by binding minerals.\n\nCosmetics: Balances pH in creams, shampoos, and bath products.\n\nPharma: Acts as a stabiliser or base ingredient in tablets and syrups.\n\nWater Treatment: Helps adjust pH and bind metal ions in water systems.\n\nIt's plant-based, breaks down easily in the environment, and works well in eco-friendly products.",
      },
      {
        type: "",
        title: "Why Buy from Pascom?",
        content:
          "We supply citric acid monohydrate to businesses across Australia—both food-grade and industrial-grade. You can get it in 25kg bags or bulk, and we deliver fast.\n\nRequest a quote here.",
      },
      {
        type: "safety",
        title: "Storage & Safety",
        content:
          "Wear gloves and eye protection when handling citric acid monohydrate. It can irritate skin and eyes. Store it in a cool, dry spot, away from strong oxidisers.\n\nNeed full safety info? Get the SDS here.",
      },
      {
        type: "",
        title: "Buy Citric Acid Monohydrate in Australia",
        content:
          "Need a reliable supply? We've got you covered. We offer competitive prices, nationwide delivery, and both food and industrial options. Place an enquiry here or get in touch for more details.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "5949-29-1",
          },
          {
            label: "Appearance",
            value: "White crystals",
          },
          {
            label: "Odour",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water",
          },
          {
            label: "pH (1% solution)",
            value: "3.0–4.0",
          },
          {
            label: "Melting Point",
            value: "153°C (decomposes)",
          },
          {
            label: "Purity",
            value: "≥99.5%",
          },
        ],
      },
    ],
  },
  {
    slug: "citric-acid-10-50",
    name: "Citric acid 10%, 50%",
    description:
      "Citric acid 10% and 50% are diluted solutions of citric acid commonly used in food and beverage applications, cleaning products, and as a pH adjuster in various formulations. This clear liquid has a tart taste and is mildly acidic, making it useful for its chelating and preserving properties.",
    sections: [
      {
        type: "overview",
        title: "Citric Acid Solutions for Industrial Use",
        content:
          "We supply Citric Acid in 10% and 50% liquid solutions. These are used in industries like food production, cosmetics, pharmaceuticals, and water treatment. If you need high-quality citric acid in Australia, we can help.",
      },
      {
        type: "",
        title: "What is it?",
        content:
          "Citric Acid (CAS: 77-92-9) is a weak organic acid found in citrus fruits. It dissolves easily in water and has a sour taste. It's useful for adjusting pH, acting as a preservative, and improving product stability. You might also see it called 2-hydroxypropane-1,2,3-tricarboxylic acid.",
      },
      {
        type: "",
        title: "Citric Acid Grades We Offer",
        content:
          "We supply two main grades:\n\n10% Solution\nThis is a low-strength option, good for when you need mild acidity. Common uses include:\n\nFood: pH control, flavour balance, preservative.\n\nCosmetics: pH balance, gentle exfoliation.\n\nWater treatment: prevent scale, stabilise pH.\n\nKey Details:\n\nLooks: clear, colourless liquid\n\nSmell: none\n\nSolubility: dissolves fully in water\n\n50% Solution\nThis is a stronger option for more demanding uses, like:\n\nPharmaceuticals: buffering or pH adjustments.\n\nCleaning: removes scale, binds metals.\n\nWater treatment: neutralises alkalinity, cleans metal.\n\nKey Details:\n\nLooks: clear to slightly yellow liquid\n\nSmell: none\n\nSolubility: dissolves fully in water",
      },
      {
        type: "",
        title: "Why People Use it?",
        content:
          "Easy way to adjust pH\n\nBinds metal ions (chelating agent)\n\nBiodegradable and non-toxic\n\nIndustries using it include:\n\nFood and beverage\n\nCosmetics\n\nPharmaceuticals\n\nCleaning products\n\nWater treatment",
      },
      {
        type: "",
        title: "Why Order from Us",
        content:
          "Consistent quality\n\nFollows Australian standards\n\nFlexible packaging\n\nFast delivery across Australia\n\n📄 Need safety data? Request SDS\n\n📦 Want a quote? Request pricing here\n\nStorage Tip: Keep it sealed, dry, and out of direct sunlight.",
      },
    ],
  },
  {
    slug: "potassium-hydroxide-90",
    name: "Potassium hydroxide 90%",
    description:
      "Potassium hydroxide 90% is a concentrated solid form of potassium hydroxide, commonly used in the production of soaps, detergents, and other industrial chemicals. This white, deliquescent substance is also utilized in various chemical syntheses, as an electrolyte in alkaline batteries, and for pH adjustment in a wide range of applications.",
    sections: [
      {
        type: "overview",
        title: "Potassium Hydroxide 90% – Industrial Grade Alkali",
        content:
          "Potassium Hydroxide 90% is a caustic alkali used in many industrial processes that need strong alkaline solutions. It's a white, crystalline solid. Used for soap making and chemical processing. Industries across Australia use this industrial grade potassium hydroxide.\n\nIt's one of the strongest bases available. Provides alkalinity for saponification, pH adjustment, and chemical synthesis. The high concentration means you use less, which saves money.",
      },
      {
        type: "",
        title: "What Is Potassium Hydroxide 90%?",
        content:
          "Also called caustic potash. Made by electrolysis of potassium chloride solution. The 90% concentration means high purity with minimal water. Good for applications where water is a problem. Different from sodium hydroxide – makes softer, more soluble soaps. Preferred for specific industrial uses.",
      },
      {
        type: "",
        title: "Industrial Applications",
        content:
          "In soap manufacturing, Potassium Hydroxide 90% makes liquid soaps and soft bar soaps. It converts fats and oils through saponification. Water treatment facilities use it as a pH adjuster to maintain alkalinity. Chemical manufacturers use it to produce potassium salts, pharmaceuticals, and specialty chemicals.\n\nElectronics industry uses it for alkaline batteries. Its ionic conductivity and stability work better than other alkalis. Food processing uses it for cocoa processing and food-grade cleaning.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "We're a potassium hydroxide supplier in Australia. We deliver consistently across all states. We help with technical requirements. Have flexible packaging – small quantities to bulk. Our quality processes ensure you get the 90% concentration you need. Contact our technical team for pricing.",
      },
      {
        type: "safety",
        title: "Safe Handling & Storage",
        content:
          "Wear chemical-resistant gloves, safety goggles, and protective clothing. Store cool and dry. Keep away from acids and aluminum. Make sure ventilation is good – it releases heat when dissolved in water. Request our Safety Data Sheet for full safety info.",
      },
      {
        type: "",
        title: "Buy Potassium Hydroxide 90% in Australia",
        content:
          "We supply quality potassium hydroxide for industrial needs. Delivery and pickup available across Australia. Good pricing for bulk orders. Request a quote to discuss what you need.",
      },
      {
        type: "",
        title: "Product Specifications",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Packaging Options",
            value: "Ask us about options. Custom packaging might be available.",
          },
          {
            label: "CAS",
            value: "1310-58-3",
          },
          {
            label: "Appearance",
            value: "White, crystalline solid or flakes",
          },
          {
            label: "Odour",
            value: "No smell",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water, makes heat",
          },
          {
            label: "pH",
            value: "Very alkaline (pH >13 for 1% solution)",
          },
          {
            label: "Density",
            value: "About 2.04 g/cm³",
          },
          {
            label: "Melting Point",
            value: "406°C (763°F)",
          },
          {
            label: "Stability",
            value: "Stable normally but absorbs moisture and CO₂ from air",
          },
          {
            label: "Reactivity",
            value: "Very reactive with acids, metals, and organic compounds",
          },
        ],
      },
      {
        type: "",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Contact",
            value:
              "Causes severe burns. Wear chemical-resistant gloves, safety goggles, and protective clothing",
          },
          {
            label: "Inhalation Risk",
            value:
              "Dust and vapors irritate breathing. Use with good ventilation or wear respiratory protection",
          },
          {
            label: "Ingestion Hazard",
            value: "Very dangerous if swallowed. Causes severe internal burns",
          },
          {
            label: "Reactivity Risk",
            value:
              "Violent reaction with acids and water. Makes heat when dissolved",
          },
          {
            label: "Storage",
            value:
              "Keep in cool, dry, ventilated area. Away from acids, metals, and moisture",
          },
        ],
      },
    ],
  },
  {
    slug: "citric-acid-anhydrous",
    name: "Citric acid Anhydrous",
    description:
      "Citric Acid Anhydrous is a water-free form of citric acid, widely used as an acidulant, preservative, and pH regulator in food, pharmaceuticals, and industrial applications. It enhances flavor, stabilizes active ingredients, and improves solubility in formulations.",
    sections: [
      {
        type: "overview",
        title: "Citric Acid Anhydrous – Versatile Food-Grade Acid",
        content:
          "Citric Acid Anhydrous is a fine, white, crystalline powder used in many industries. It's common in food production, cleaning products, and pharmaceuticals. Its main job is to adjust acidity, act as a preservative, and improve product stability.\n\nAcross Australia, Citric Acid Anhydrous is used by manufacturers and processors looking for a dependable, multi-purpose acid that dissolves easily in water and mixes well with other ingredients.",
      },
      {
        type: "",
        title: "What Is Citric Acid Anhydrous?",
        content:
          'This product is a natural acid found in citrus fruits, but the commercial version is made through fermentation of sugars. The "anhydrous" form means it has no water content, making it more concentrated than the monohydrate type. It\'s odourless, with a sharp, clean acidic taste, and is fully soluble in water.',
      },
      {
        type: "",
        title: "Main Uses and Applications",
        content:
          "Citric Acid Anhydrous is widely used in the food and beverage industry to add a sour flavour or control acidity in drinks, jams, and sweets. In cleaning products, it helps break down limescale and soap scum. The pharmaceutical sector uses it in tablets and syrups to adjust pH and improve stability. It's also used in cosmetics, detergents, and even in water treatment systems.",
      },
      {
        type: "",
        title: "Why Choose Our Citric Acid Anhydrous?",
        content:
          "As a trusted supplier in Australia, we provide Citric Acid Anhydrous with consistent quality and purity. Available in bulk packaging options, we supply to food manufacturers, cleaning product producers, and industrial customers. You can request a quote here or get in touch to discuss your needs.",
      },
      {
        type: "safety",
        title: "Safe Handling and Storage",
        content:
          "Handle with care to avoid dust inhalation. Use gloves and protective eyewear. Store in a cool, dry place, away from moisture, since the anhydrous form easily absorbs water from the air. Safety Data Sheets are available on request through our SDS request form.",
      },
      {
        type: "",
        title: "Buy Citric Acid Anhydrous in Australia",
        content:
          "We offer fast delivery and local pick-up options for Citric Acid Anhydrous. Packaging options can be customised depending on your business needs. For details, contact us here.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "77-92-9",
          },
          {
            label: "Appearance",
            value: "White crystalline powder",
          },
          {
            label: "Odour",
            value: "Odourless",
          },
          {
            label: "Solubility",
            value: "Fully soluble in water",
          },
          {
            label: "pH (1% solution)",
            value: "3.0 – 4.0",
          },
          {
            label: "Density",
            value: "Approx. 1.66 g/cm³",
          },
          {
            label: "Melting Point",
            value: "153°C",
          },
          {
            label: "Reactivity",
            value: "Avoid mixing with strong alkalis or oxidising agents",
          },
          {
            label: "Safety Notes",
            value:
              "May cause mild eye and skin irritation. Use with adequate ventilation. Avoid breathing dust. Refer to the SDS for more details.",
          },
        ],
      },
    ],
  },
  {
    slug: "cobalt-sulphate",
    name: "Cobalt Sulphate",
    description:
      "Cobalt sulphate is a crystalline salt commonly used in various industrial processes, including the production of pigments and batteries. This pink or red compound is soluble in water and serves as a source of cobalt in chemical reactions and electroplating.",
    sections: [
      {
        type: "overview",
        title: "Cobalt Sulphate – Industrial Grade Chemical",
        content:
          "Cobalt Sulphate is a solid, pink or red powder used in different industries. It's valued for its high cobalt content and ability to dissolve in water. You'll mostly find it in batteries, electroplating, pigments, and farming.\n\nWe supply high-purity Cobalt Sulphate in Australia. Our product meets strict quality standards and works well for large factories or smaller jobs.",
      },
      {
        type: "",
        title: "What is it?",
        content:
          "Cobalt Sulphate's chemical formula is CoSO₄. Most people use the heptahydrate form (CoSO₄·7H₂O) because it's easy to handle and dissolves well. It's made by mixing cobalt or cobalt oxide with sulphuric acid.\n\nYou'll see it used a lot in making lithium-ion batteries, especially the battery parts called cathodes. This makes it important in industries like renewable energy and electric vehicles.",
      },
      {
        type: "",
        title: "How People Use It",
        content:
          "Cobalt Sulphate has a lot of uses because it's stable and dissolves easily. You'll find it in:\n\nBatteries: Used to make cathodes in lithium-ion batteries for cars, electronics, and storage systems.\n\nElectroplating: Helps coat metals to stop rust and make surfaces harder.\n\nCeramics and Pigments: Makes a bright blue colour in glass and ceramic glazes.\n\nFarming: Added to fertilisers as a trace mineral, especially in areas where the soil doesn't have enough cobalt.\n\nBecause of this, it is important in both newer industries like green energy and older industries like farming and manufacturing.",
      },
      {
        type: "",
        title: "Why Buy From Us",
        content:
          "We supply Cobalt Sulphate across Australia. You get good quality, flexible packaging, and on-time delivery. Our product meets Australian regulations. You can order in bulk or smaller amounts. Request a quote here.",
      },
      {
        type: "safety",
        title: "Safety and Storage",
        content:
          "Always use protective gear like gloves, goggles, and protective clothes when handling Cobalt Sulphate. Work in a ventilated area. Keep it in a cool, dry place away from things like strong acids or oxidisers. You can request the SDS here.",
      },
      {
        type: "",
        title: "Buy Cobalt Sulphate in Australia",
        content:
          "We offer Cobalt Sulphate in drums, bags, or custom packs. Delivery and pickup options are available. Click here to enquire if you need a quote.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "10102-40-6",
          },
          {
            label: "Looks like",
            value: "Pink to red crystals",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Fully dissolves in water",
          },
          {
            label: "pH",
            value: "Slightly acidic, around 4.0–5.5 in a 1% solution",
          },
          {
            label: "Density",
            value: "About 3.7 g/cm³ (when dry)",
          },
          {
            label: "Stability",
            value:
              "Doesn't break down under normal conditions, but breaks down when very hot",
          },
        ],
      },
      {
        type: "",
        title: "Safety Notes",
        properties: [
          {
            label: "Skin and Eyes",
            value: "Can irritate; wear protective gear.",
          },
          {
            label: "Breathing",
            value: "Avoid breathing in dust. Use good ventilation or a mask.",
          },
          {
            label: "Eating",
            value: "Don't eat it. It's harmful if swallowed.",
          },
          {
            label: "Storage",
            value:
              "Keep in a dry, cool place away from incompatible materials.",
          },
        ],
      },
    ],
  },
  {
    slug: "copper-sulphate",
    name: "Copper Sulphate",
    description:
      "Copper sulphate is a bright blue crystalline compound used in various applications, including agriculture, chemistry, and as a fungicide. It is soluble in water and commonly used for treating plant diseases and as a laboratory reagent.",
    sections: [
      {
        type: "overview",
        title: "Copper Sulphate – A Practical Chemical for Industry Use",
        content:
          "Copper sulphate is a simple but useful chemical. Many industries use it, like farming, mining, and manufacturing. It's easy to spot because of its bright blue colour. People use it to stop fungus, kill algae, and in many chemical processes. If you work with crops, treat water, or process metals, copper sulphate is a basic product that gets the job done.\n\nYou can buy it as granules, powder, or crystals. This makes it easy to handle for different jobs.",
      },
      {
        type: "",
        title: "What is it?",
        content:
          "The chemical name for copper sulphate is cupric sulphate (CuSO₄). Most people see it as a pentahydrate (CuSO₄·5H₂O), which means it has water in its structure and looks bright blue. It's made by treating copper with hot sulphuric acid or from oxidising copper minerals. It dissolves well in water and is often called blue vitriol or bluestone.",
      },
      {
        type: "",
        title: "Where Is It Used",
        content:
          "In Australia, many industries rely on copper sulphate. Farmers use it to stop fungus and algae on crops and in water. It also goes into animal feed to fix copper shortages.\n\nIn mining, it helps separate minerals during flotation. In factories, it's used for electroplating, treating leather, and dyeing fabrics. Water plants use it to control algae.",
      },
      {
        type: "",
        title: "Why Buy from Pascom?",
        content:
          "Pascom supplies copper sulphate that's high quality and always in stock. You can order it in small bags (25kg) or bulk loads. We deliver across Australia or you can pick it up.\n\nIf you want a quote or have questions, contact us here.",
      },
      {
        type: "safety",
        title: "How to Handle Copper Sulphate Safely",
        content:
          "Wear gloves, goggles, and a dust mask when handling it. Don't breathe in the dust. Store it in a dry, cool place away from food or strong acids. You can get full safety details from the Safety Data Sheet (SDS).",
      },
      {
        type: "",
        title: "Order Copper Sulphate in Australia",
        content:
          "Pascom has copper sulphate ready for farming, mining, and industrial use. We offer fast delivery or pickup across Australia. Get a quote here.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS number",
            value: "7758-98-7",
          },
          {
            label: "Look",
            value: "Bright blue crystals or powder",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Mixes easily with water",
          },
          {
            label: "pH (1% solution)",
            value: "About 3.5 – 4.5",
          },
          {
            label: "Density",
            value: "2.28 g/cm³",
          },
          {
            label: "Stability",
            value: "Safe if stored properly",
          },
          {
            label: "Reacts with",
            value: "Keep away from strong acids and reducing agents",
          },
        ],
      },
    ],
  },
  {
    slug: "d-nitro-uv",
    name: "D Nitro UV",
    description:
      "D Nitro UV is a specialized chemical used in industrial processes and laboratories, often for its UV-sensitive properties. This compound is designed to react or degrade under ultraviolet light, making it valuable for applications requiring UV detection or testing. It is typically handled with care due to its chemical nature.",
    sections: [
      {
        type: "overview",
        title: "D Nitro UV – UV Curing Solution for Industrial Use",
        content:
          "D Nitro UV is a UV-curable chemical used in industrial coatings and printing. It cures quickly under UV light and sticks well to surfaces. It leaves a strong, smooth finish. You'll see it used in automotive, packaging, electronics, and printing. It helps reduce curing time and improves product quality on fast production lines in Australia.",
      },
      {
        type: "",
        title: "What is D Nitro UV?",
        content:
          "D Nitro UV is a solvent-free chemical mix. It contains oligomers, monomers, and photoinitiators. When it's hit by UV light, it cures instantly and forms a tough surface. It doesn't release harmful VOCs, so it's a safer option for industries looking to cut emissions. You can use it with standard UV or LED curing setups.",
      },
      {
        type: "",
        title: "Where D Nitro UV is Used",
        content:
          "You'll find D Nitro UV used in:\n\nAutomotive – scratch-resistant, glossy finishes for plastic and metal parts.\n\nPackaging – fast-curing, food-safe coatings for labels, cartons, and films.\n\nElectronics – protective coatings for circuit boards and screens.\n\nPrinting – quick-drying inks with bright colours and tough finishes.\n\nIt helps reduce energy use, cures fast, and makes surfaces more durable.",
      },
      {
        type: "",
        title: "Why Choose This Product",
        content:
          "We supply D Nitro UV in Australia with stable quality and flexible packaging. You can also get help from our technical team if you need it. For pricing or questions, request a quote.",
      },
      {
        type: "safety",
        title: "How to Store and Handle It",
        content:
          "Keep D Nitro UV in a cool, dry place away from sunlight. Always wear gloves and goggles when using it. Work in a ventilated space to avoid breathing in vapours. Request the safety data sheet here.",
      },
      {
        type: "",
        title: "Ordering D Nitro UV in Australia",
        content:
          "We deliver across Australia and offer pick-up too. Packaging sizes can be adjusted based on your needs. Get in touch to place an order or ask a question.",
      },
      {
        type: "",
        title: "Quick Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "On request",
          },
          {
            label: "Appearance",
            value: "Clear or slightly yellow liquid",
          },
          {
            label: "Smell",
            value: "Mild",
          },
          {
            label: "Solubility",
            value: "Cures under UV, doesn't mix with water",
          },
          {
            label: "Viscosity",
            value: "Medium to high (adjustable)",
          },
          {
            label: "Curing",
            value: "Works with UV and LED",
          },
          {
            label: "Stability",
            value: "Stable in normal conditions, but keep away from UV light",
          },
          {
            label: "Uses",
            value: "Coatings, adhesives, printing inks, films",
          },
        ],
      },
      {
        type: "",
        title: "Safety Notes",
        properties: [
          {
            label: "Safety Notes",
            value:
              "Use gloves and eye protection\n\nKeep work areas ventilated\n\nStore away from UV light\n\nCheck the SDS for more safety info",
          },
        ],
      },
    ],
  },
  {
    slug: "di-water",
    name: "DI water",
    description:
      "Deionized (DI) water is purified water with all dissolved ions removed, making it ideal for laboratory experiments, industrial processes, and applications requiring high-purity water. It is free from salts and minerals, ensuring minimal interference in chemical reactions and preventing equipment corrosion.",
    sections: [
      {
        type: "overview",
        title: "DI Water – Pure Water for Lab and Industrial Use",
        content:
          "DI Water is high-purity deionised water. It's used where clean water really matters — like in labs, pharma production, electronics, and industrial work. It has very low conductivity and almost no dissolved solids. This helps prevent problems caused by water impurities.\n\nIn Australia, many industries use DI Water for jobs like mixing chemicals, rinsing equipment, or running tests where minerals can cause issues.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          "DI Water, or deionised water, is made by removing minerals from regular water. This is done with ion exchange resins, which take out charged particles like calcium, magnesium, chloride, and nitrate.\n\nThe result is ultra-pure water with conductivity usually under 1 μS/cm. This makes it good for industrial and lab work. It's different from distilled water — deionisation removes charged particles more efficiently.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "DI Water is used wherever clean water is needed. Here are some examples:\n\nIn boilers, it prevents scale build-up and helps systems run better.\n\nIt's used to make corrosion inhibitors, because minerals can make corrosion worse.\n\nIt's part of oxygen scavenger chemicals, keeping reactions free from salts.\n\nIt's also used in making cars, cosmetics, and semiconductors.",
      },
      {
        type: "",
        title: "DI Water Supply from Pascom",
        content:
          "Pascom supplies DI Water in Australia. You can get it in 20L drums, 200L drums, or 1000L IBCs. We offer quick delivery and can pack it to suit your needs. For prices or custom options, Request a Quote.",
      },
      {
        type: "safety",
        title: "Storage and Safety",
        content:
          "DI Water is easy to handle, but you should store it in clean, safe containers. Gloves and eye protection are good practice when handling large amounts. For full safety details, you can request the SDS.",
      },
      {
        type: "",
        title: "Order DI Water in Australia",
        content:
          "Need DI Water in bulk or small packs? Pascom offers both pickup and delivery. Whether it's for a lab or a factory, we can help. Contact us to order or ask questions.\n\nAvailable in:\n\n20L drums\n\n200L drums\n\n1000L IBCs\n\nCustom packaging on request\n\nCAS Number: 7732-18-5",
      },
      {
        type: "",
        title: "Quick Facts",
        properties: [
          {
            label: "Look",
            value: "Clear, colourless liquid",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Fully soluble",
          },
          {
            label: "pH",
            value: "Neutral (5.0–7.0)",
          },
          {
            label: "Conductivity",
            value: "Under 1 μS/cm",
          },
          {
            label: "Stability",
            value: "Stable in normal conditions",
          },
        ],
      },
      {
        type: "",
        title: "Safety Summary",
        properties: [
          {
            label: "Skin/Eyes",
            value: "Not irritating, but keep it clean",
          },
          {
            label: "Breathing",
            value: "No risks",
          },
          {
            label: "Drinking",
            value: "Not harmful but not for drinking — no minerals",
          },
          {
            label: "Storage",
            value: "Keep in clean, sealed containers away from dirt",
          },
        ],
      },
    ],
  },
  {
    slug: "edta-40",
    name: "EDTA 40%",
    description:
      "EDTA 40% is a concentrated solution of ethylenediaminetetraacetic acid, used primarily as a chelating agent in various industrial, medical, and laboratory applications. This clear liquid binds metal ions to prevent their undesirable reactions, aiding in processes like water treatment and metal analysis.",
    sections: [
      {
        type: "overview",
        title: "EDTA 40% Solution – Chelating Agent for Industrial Use",
        content:
          "EDTA 40% Solution is a clear to slightly yellow liquid used in industries to remove unwanted metal ions. It contains 40% active Ethylenediaminetetraacetic Acid (EDTA). This helps with metal ion control in water treatment, farming, cleaning products, and textiles.\n\nIn Australia, many businesses use EDTA 40% to improve product quality and cut down on problems caused by hard water minerals and metals.",
      },
      {
        type: "",
        title: "What is it?",
        content:
          "EDTA 40% is a liquid form of tetrasodium ethylenediaminetetraacetate. It binds metals like calcium, magnesium, iron, and manganese. This makes it easier to control metal levels during production. It also helps cut down on chemical waste.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "Water Treatment: Reduces scale in boilers, cooling towers, and wastewater systems.\n\nAgriculture: Helps plants absorb nutrients better when added to fertilisers.\n\nCleaning Products: Improves cleaning by softening hard water.\n\nTextile Processing: Stops metals from affecting dyes, giving cleaner colours.\n\nCosmetics: Helps products last longer by preventing metal-triggered reactions.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "We supply EDTA 40% Solution across Australia. Our product is consistent and high quality. You can order it in bulk drums, IBCs, or other packaging to suit your needs. Fast delivery is available nationwide. Request a quote to get started.",
      },
      {
        type: "safety",
        title: "Handling and Storage",
        content:
          "Use gloves and eye protection when handling EDTA 40%. Work in a well-ventilated area and avoid skin or eye contact. Store it in a cool, dry place away from strong oxidisers. You can request the full safety data sheet here.",
      },
      {
        type: "",
        title: "Product Summary",
        properties: [
          {
            label: "CAS Number",
            value: "64-02-8",
          },
          {
            label: "Appearance",
            value: "Clear to light yellow liquid",
          },
          {
            label: "Odour",
            value: "Odourless",
          },
          {
            label: "Solubility",
            value: "Fully dissolves in water",
          },
          {
            label: "pH",
            value: "10.5–12.0",
          },
          {
            label: "Density",
            value: "Around 1.28 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable if stored properly",
          },
          {
            label: "Reactivity",
            value: "Avoid contact with strong oxidisers",
          },
        ],
      },
      {
        type: "",
        title: "Safety Notes",
        properties: [
          {
            label: "Skin and Eyes",
            value: "May cause mild irritation. Wear protection.",
          },
          {
            label: "Inhalation",
            value: "Low risk, but don't inhale mist.",
          },
          {
            label: "Swallowing",
            value: "Harmful in large amounts. Get medical help if swallowed.",
          },
          {
            label: "Storage",
            value: "Keep sealed in a ventilated, dry area.",
          },
        ],
      },
      {
        type: "",
        title: "Order EDTA 40% Solution in Australia",
        content:
          "We offer EDTA 40% Solution with quick pick-up or delivery options. For prices or more details, contact us.",
      },
    ],
  },
  {
    slug: "ferric-sulphate",
    name: "Ferric sulphate 41%, 40-50%",
    description:
      "Ferric sulphate 41%, 40-50% concentrations are solutions of ferric sulfate used primarily in water treatment and as a coagulant in various industrial processes. This yellowish-brown liquid is effective in purifying water and treating wastewater, but it requires careful handling due to its chemical properties.",
    sections: [
      {
        type: "overview",
        title:
          "Ferric Sulphate – Versatile Concentrations for Industrial Applications",
        content:
          "Ferric Sulphate is a chemical used in lots of industries. You'll see it in water treatment, mining, paper production, and wastewater plants. It comes in different strengths, like 41% and 40-50%, so you can pick what works best for your job.",
      },
      {
        type: "",
        title: "What Is Ferric Sulphate?",
        content:
          "Ferric Sulphate (or iron(III) sulphate) is a liquid used to clean water. It helps remove dirt and impurities by making them clump together and sink. The liquid is dark red-brown, doesn't smell much, and mixes well with water. Some people spell it \"ferric sulfate\" — both are fine.\n\nMain Things to Know:\nGood at clearing out particles\n\nHelps settle out solids quickly\n\nDoesn't create a lot of sludge\n\nA cleaner option compared to some other chemicals",
      },
      {
        type: "",
        title: "Concentration Options",
        content:
          "Ferric Sulphate 41%\nThis version is often used in:\n\nDrinking water treatment\n\nCleaning industrial wastewater\n\nHelping with sludge removal\n\nLooks like: a dark reddish-brown liquid\nWorks well for: medium to large treatment plants\nWhy use it: it's affordable and keeps sludge under control.\n\nFerric Sulphate 40-50%\nThis is a stronger version. It's useful when you're dealing with tough jobs like:\n\nMining and ore processing\n\nMaking paper\n\nIndustrial wastewater with lots of impurities\n\nLooks like: thicker red-brown liquid\nWhy use it: stronger cleaning power, so you need less of it.",
      },
      {
        type: "",
        title: "Where People Use Ferric Sulphate",
        content:
          "Water treatment: clears out dirt and cuts down phosphorus\n\nMining: helps separate solids from liquids\n\nPaper making: improves product quality and reduces waste\n\nWhy People Like It:\nQuick settling of impurities\n\nLess sludge than other options\n\nWorks across a wide pH range\n\nYou don't need to adjust it much",
      },
      {
        type: "",
        title: "Why Get It from Us",
        content:
          "We supply Ferric Sulphate in Australia. Here's what we offer:\n\nReliable quality\n\nMeets local standards\n\nPackaged how you need it — drums, IBCs, or tankers\n\nHelp if you have questions",
      },
      {
        type: "safety",
        title: "Quick Info",
        content:
          "CAS Number: 10028-22-5\n\nHow to store it: keep in a cool, ventilated spot\n\nDelivery: we ship anywhere in Australia or you can pick it up\n\nNeed pricing or details?\nRequest a Quote\n\nOr\nRequest the Safety Data Sheet (SDS)",
      },
    ],
  },
  {
    slug: "fluorescein-40",
    name: "Fluorescein 40%",
    description:
      "Fluorescein 40% is a bright green dye used in various applications including tracer studies, fluorescence microscopy, and as a diagnostic agent in ophthalmology. It is a water-soluble compound known for its vivid fluorescence under UV light.",
    sections: [
      {
        type: "overview",
        title: "Fluorescein 40% – High-Visibility Tracer Dye",
        content:
          "Fluorescein 40% is a fluorescent dye used to trace water flow, find leaks, and study how liquids move. It's common in water treatment, leak detection, and environmental testing. The 40% concentration makes it easy to see, even when used in small amounts. It's a good option for both industrial and environmental work in Australia.\n\nIt glows bright green under UV light, so it's easy to track. People use it in hydraulic tests, pipeline leak checks, and research. It's safe to handle, non-toxic, and won't harm the environment.",
      },
      {
        type: "",
        title: "What Is Fluorescein 40%?",
        content:
          "It's a water-based dye made from sodium fluorescein. It contains 40% active dye. This makes it very visible when tracing how water or other liquids move. Some countries call it sodium fluorescein.\n\nIt's used in closed-loop systems, streams, and reservoirs. It's a simple, cost-effective way to track water flow or do flow-related tests.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Fluorescein 40% is mostly used to trace water flow in pipes and rivers. Water companies and councils use it to find leaks and check pipe connections.\n\nEnvironmental teams use it in rivers to see how water spreads and to test for pollution. It's also used in HVAC systems and boiler tests in industrial settings.",
      },
      {
        type: "",
        title: "Why Buy From Us",
        content:
          "We supply Fluorescein 40% across Australia. It's reliable and lasts well in storage. We can pack it in drums or IBCs and offer fast delivery.\n\nIf you need it for research, maintenance, or testing, we can help. Request a quote or contact us for more details.",
      },
      {
        type: "safety",
        title: "How To Handle It",
        content:
          "Fluorescein 40% is safe, but it stains. Use gloves and eye protection. Work in a ventilated space and avoid skin contact. For full safety details, check the SDS here.\n\nYou can also read more about fluorescein on Wikipedia.",
      },
      {
        type: "",
        title: "Order Fluorescein 40% in Australia",
        content:
          "We deliver Australia-wide and can do custom packaging or concentrations if you need them. Contact us to place an order.",
      },
      {
        type: "",
        title: "Product Info",
        properties: [
          {
            label: "CAS",
            value: "518-47-8",
          },
          {
            label: "Look",
            value: "Bright yellow-green liquid",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Fully dissolves in water",
          },
          {
            label: "pH",
            value: "Around 6.5 to 7.5",
          },
          {
            label: "Density",
            value: "~1.2 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable if kept away from sunlight",
          },
          {
            label: "Storage",
            value: "Store in a cool, dark place away from strong chemicals",
          },
          {
            label: "Note",
            value:
              "This product is non-toxic but can irritate skin or eyes. Use gloves and follow standard chemical safety rules.",
          },
        ],
      },
    ],
  },
  {
    slug: "high-flash-kerosene",
    name: "High Flash Kerosene",
    description:
      "High Flash Kerosene is a premium-grade, refined petroleum distillate with a high flash point, making it a safer alternative for various applications. This clear, colorless liquid is primarily used as a fuel for lamps, heaters, and certain engines, as well as a solvent in industrial processes and a cleaning agent.",
    sections: [
      {
        type: "overview",
        title: "High Flash Kerosene – Reliable Fuel for Industry and Home",
        content:
          "High Flash Kerosene is a clean, low-sulphur fuel. It burns well and is safer to use because of its higher flash point. People use it for heating, metalwork, and at home for things like heaters and lamps. It burns clean, with less smoke and smell, making it a good choice for both businesses and households in Australia.",
      },
      {
        type: "",
        title: "What is High Flash Kerosene?",
        content:
          "High Flash Kerosene is a clear fuel with a flash point over 61°C. This means it's less likely to catch fire by accident. It doesn't smell much, it's stable, and it meets strict industry standards. It burns efficiently, with little soot.",
      },
      {
        type: "",
        title: "Where People Use It",
        content:
          "Industries like metalwork, ceramics, and manufacturing use High Flash Kerosene because it heats evenly and burns clean. It's also used where equipment needs low-sulphur fuel, helping prevent rust and damage.\n\nAt home, people use it for heaters, lamps, and stoves. It's low on smoke and odour, so it's more comfortable to use indoors.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "We supply High Flash Kerosene across Australia. You get consistent quality and different options for how it's packed—drums, IBCs, or bulk. Delivery is quick and we respond fast to enquiries.\nRequest a quote here.",
      },
      {
        type: "safety",
        title: "How to Store and Use It Safely",
        content:
          "Keep High Flash Kerosene in a cool, open area away from flames. Use gloves and safety glasses when handling it. Check the Safety Data Sheet for full details. You can also read more on Wikipedia.",
      },
      {
        type: "",
        title: "Ready to Order?",
        content:
          "If you need fuel that burns clean and is easy to handle, try High Flash Kerosene. We deliver across Australia and offer flexible packaging. Get in touch to talk about prices and delivery.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS",
            value: "8008-20-6",
          },
          {
            label: "Look",
            value: "Clear, colourless liquid",
          },
          {
            label: "Smell",
            value: "Low odour",
          },
          {
            label: "Flash Point",
            value: "Over 61°C",
          },
          {
            label: "Density",
            value: "0.78–0.82 g/cm³ at 15°C",
          },
          {
            label: "Boiling Range",
            value: "150–300°C",
          },
          {
            label: "Water Solubility",
            value: "Doesn't mix with water",
          },
          {
            label: "Stability",
            value: "Safe under normal conditions",
          },
          {
            label: "Use",
            value: "Heating, metalwork, lighting, home appliances",
          },
        ],
      },
    ],
  },
  {
    slug: "hydrochloric-acid",
    name: "Hydrochloric acid 10-35%, 15%, 20%, 28%, 32%, and 5%",
    description:
      "Hydrochloric acid 10-35%, 15%, 20%, 28%, 32%, and 5% are acidic solutions used in various industrial and laboratory applications, including pH control and metal cleaning. This clear, colorless liquid is highly corrosive and emits a sharp, irritating odor, necessitating careful handling and appropriate safety measures.",
    sections: [
      {
        type: "overview",
        title: "Hydrochloric Acid – Industrial Concentrations Available",
        content:
          "Hydrochloric acid is a common industrial chemical. It comes in different strengths, including 5%, 10-35%, 15%, 20%, 28%, and 32%. Many industries use it for things like water treatment, food processing, mining, chemical manufacturing, and pharmaceuticals. We supply high-quality hydrochloric acid in all standard grades.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          "Hydrochloric acid (HCl) is a clear liquid with a strong smell. It's made by dissolving hydrogen chloride gas in water. People also call it muriatic acid. It's highly acidic, mixes easily with water, and reacts with many materials. You'll find it used for pH control, cleaning metals, and chemical production.\n\nAlso called: muriatic acid, hydrogen chloride solution.",
      },
      {
        type: "",
        title: "Concentration Grades We Offer",
        content:
          "5% concentration\nUsed in labs, cleaning, and light pH adjustments. Good for schools and light industrial use.\n\nCommon uses: labs, schools, light cleaning.\n\n10–35% concentration\nCovers a wide range of industrial needs like cleaning and chemical processing.\n\nCommon uses: surface treatment, pH control, general processing.\n\n15% concentration\nWorks well for water treatment, food production, and lab work where medium strength is needed.\n\nCommon uses: water plants, food industry (where approved), labs.\n\n20% concentration\nA bit stronger, used in mining, refining, and chemical production.\n\nCommon uses: mining, minerals, industrial processing.\n\n28% concentration\nHigher grade used in metal pickling, chemical manufacturing, and industrial cleaning.\n\nCommon uses: metal work, large pH adjustments, synthesis.\n\n32% concentration\nOne of the strongest grades, common in heavy industries like steel, oil refining, and big water plants.\n\nCommon uses: steel making, oil refining, large-scale water treatment.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Hydrochloric acid is used for:\n\npH control in water plants\n\nMetal cleaning\n\nMining and ore processing\n\nFood processing (approved grades)\n\nChemical and drug production\n\nIt's good for removing scale, controlling corrosion (after neutralising), and is affordable for acid treatments.",
      },
      {
        type: "",
        title: "Why Buy From Us",
        content:
          "We supply hydrochloric acid made to Australian quality standards. You get:\n\nConsistent product quality\n\nFlexible packaging (big or small orders)\n\nQuick delivery\n\nFull safety compliance\n\n📄 Need a quote? Request it here",
      },
      {
        type: "safety",
        title: "Packaging and Delivery",
        content:
          "CAS Number: 7647-01-0\n\nPackaging: IBCs, drums, custom sizes\n\nStorage: Keep in a cool, well-ventilated spot away from incompatible materials. Use corrosion-resistant containers.\n\nDelivery: Fast delivery across Australia, pickup available.\n\n📄 Need a safety sheet? Get it here",
      },
      {
        type: "",
        title: "Order Hydrochloric Acid in Australia",
        content:
          "We supply hydrochloric acid in different strengths for industrial use. You get good quality, flexible options, and fast service.\n\n📄 Request a quote for pricing and availability.",
      },
    ],
  },
  {
    slug: "hydrogen-peroxide",
    name: "Hydrogen peroxide solution (30%,50%)",
    description:
      "Hydrogen Peroxide solutions, available in 30% and 50% concentrations, are clear, colorless aqueous solutions recognized for their potent oxidizing properties. These versatile liquids are widely utilized across various industries as powerful bleaching agents, effective disinfectants and antiseptics, and essential components in numerous chemical synthesis and industrial processes.",
    sections: [
      {
        type: "overview",
        title: "Hydrogen Peroxide – Industrial-Grade Solutions (30% & 50%)",
        content:
          "Hydrogen peroxide might seem simple at first glance — just a clear liquid, really — but it's surprisingly powerful and incredibly versatile. We supply it in two industrial-strength concentrations: Hydrogen Peroxide 30% and Hydrogen Peroxide 50%. These are widely used across industries like wastewater treatment, textile dyeing and bleaching, mining, food disinfection… even pulp processing. It's one of those chemicals that quietly does a lot of the heavy lifting in modern industrial workflows. You may not see it, but it's there, working behind the scenes.\n\nWhether you need a low-foaming version or something stronger and purer for tougher jobs, both grades deliver solid, dependable performance.",
      },
      {
        type: "",
        title: "What Is Hydrogen Peroxide?",
        content:
          "Hydrogen peroxide (H₂O₂), also known by its IUPAC name *hydrogen dioxide*, is a transparent, colourless liquid with very strong oxidising properties. That might sound a bit technical, but all it really means is: it reacts easily with other substances — and fast. That's what makes it such a good bleaching agent and disinfectant.\n\nIn industrial use, it breaks down into just water and oxygen. Nothing nasty left behind. That's a huge plus, especially when environmental safety is a concern. It does its job and quietly vanishes — no mess, no lingering residue. Pretty neat.",
      },
      {
        type: "",
        title: "📊 Available Concentration Grades",
        content:
          "🧪 Hydrogen Peroxide 30%\nThis one's right in the middle — not too strong, not too weak. It's ideal for general use, like disinfecting food processing equipment or cosmetic manufacturing facilities. You'll also find it commonly used in wastewater treatment systems.\n\nIt's got a pungent, sharp smell (kind of hard to ignore), and while it looks like plain water, don't be fooled — it's reactive and needs to be handled with care. Safety gear isn't just recommended; it's essential.\n\n🧪 Hydrogen Peroxide 50%\nNow this one packs a punch. It's the high-concentration, industrial-grade type that's used in mining and metallurgy — especially when oxidising metal ores. Also crucial in pulp and paper bleaching, chemical syntheses, and environmental cleanup projects. If there's a tough stain on the Earth itself, this is what you bring.\n\nThe 50% solution works efficiently and creates minimal by-products, making it popular for operations where both performance and environmental responsibility matter.",
      },
      {
        type: "",
        title: "🏭 Key Applications & Benefits",
        content:
          "Acts as a reliable oxidising agent in various chemical reactions\nHighly effective for bleaching and sterilising processes\nUsed for deodorising and sanitising industrial surfaces and equipment\nBreaks down into harmless water and oxygen, reducing environmental impact\n\nIt's kind of remarkable how many sectors rely on it. From making things cleaner to making things whiter — it gets the job done. And it doesn't leave a trail of chemicals behind. That's part of what makes it such a quiet hero in industrial chemistry.",
      },
      {
        type: "",
        title: "🛡️ Why Choose Our Hydrogen Peroxide Solutions?",
        content:
          "We don't just ship chemicals—we support your entire operation. As one of the trusted hydrogen peroxide suppliers in Australia, we make sure every batch meets strict quality and safety standards. It's all tested, verified, and packaged with compliance in mind. (No leaky barrels, no surprises.)\n\nWhether you're running a massive pulp mill or just need a few drums for equipment sanitisation, we can help. We offer flexible packaging, technical advice.\n\n🔗 Request a Quote",
      },
      {
        type: "safety",
        title: "📦 Packaging, Delivery & Documentation",
        content:
          "CAS Number: 7722-84-1\nAppearance: Clear, colourless liquid\nOdour: Slightly sharp, mildly irritating\nSolubility: Completely water-soluble\nStorage: Keep in a cool, ventilated area. Definitely away from heat, metals, or anything organic.\nPackaging: Available in drums, IBCs, and bulk tanks\n\nWe offer both delivery and local pick-up across Australia. Need a custom dilution or unusual packaging? Just ask. It might be doable.\n\n🔗 Request SDS",
      },
      {
        type: "",
        title: "🇦🇺 Buy Hydrogen Peroxide 30% & 50% in Australia",
        content:
          "From Perth to far-flung mining towns, our hydrogen peroxide solutions are trusted for their consistency, compliance, and quality. They're not flashy, but they're essential — and that's often more important.\n\n🔗 Request a Quote",
      },
    ],
  },
  
];
