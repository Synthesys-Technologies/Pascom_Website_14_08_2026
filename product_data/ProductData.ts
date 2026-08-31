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

  {
    slug: "methanol",
    name: "Methanol",
    description:
      "Methanol, also known as wood alcohol, is a clear, colorless liquid with a slightly sweet odor. It is widely used as a solvent, antifreeze, and in the production of chemicals. Due to its toxic nature, it requires careful handling and proper storage.",
    sections: [
      {
        type: "overview",
        title: "Methanol – Essential Solvent & Industrial Chemical",
        content:
          "Methanol is a clear liquid used in lots of industries. People use it as a solvent, fuel additive, or to make other chemicals. It works well in factories and labs. You'll see it in energy plants, drug manufacturing, and production lines.\n\nIn Australia, many businesses use this chemical because it's clean, reliable, and not too expensive. It helps in making fuel, plastics, and even in cleaning dirty water.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          "Methanol is also called methyl alcohol or wood alcohol. It's the simplest type of alcohol with the formula CH₃OH. It's light, burns easily, and smells like regular alcohol but a bit sweeter. Big factories make it by mixing carbon monoxide and hydrogen with a catalyst. The result is a clean product that works in many ways.\n\nBecause it dissolves things well and doesn't freeze easily, methanol shows up in antifreeze, biodiesel, and in making formaldehyde and other chemicals.",
      },
      {
        type: "",
        title: "Common Uses for Methanol",
        content:
          "In fuel, it helps petrol burn better and cuts down on smoke.\n\nIn chemical plants, it helps make things like formaldehyde and acetic acid.\n\nIn water treatment, it helps clean water by feeding bacteria that remove bad stuff.\n\nDrug companies use it to make medicine.\n\nIt's also used in paint, plastics, adhesives, and pesticides because it mixes well with other chemicals.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "Pascom supplies methanol across Australia. You can get it in drums, big containers, or full truckloads. We deliver on time and help you pick what works best for you. If you want a quote, click here.",
      },
      {
        type: "safety",
        title: "How to Handle Methanol Safely",
        content:
          "Methanol burns easily and is toxic. Don't breathe it in or drink it. Always use gloves and goggles. Keep it away from fire and heat. Use it where there's fresh air.\n\nFor full safety details, you can get the Safety Data Sheet (SDS).",
      },
      {
        type: "",
        title: "Need Methanol in Australia?",
        content:
          "Pascom can help. We deliver all over Australia and offer good prices on methanol. Contact us here to get a quote or ask a question.",
      },
      {
        type: "",
        title: "Quick Facts",
        properties: [
          {
            label: "CAS Number",
            value: "67-56-1",
          },
          {
            label: "Look",
            value: "Clear, colourless",
          },
          {
            label: "Smell",
            value: "Sweet, like alcohol",
          },
          {
            label: "Purity",
            value: "99.85% or higher",
          },
          {
            label: "Mixes with water",
            value: "Yes",
          },
          {
            label: "Boils at",
            value: "64.7°C",
          },
          {
            label: "Density",
            value: "0.7918 g/cm³ at 20°C",
          },
          {
            label: "Fire risk",
            value: "High, flash point at 11°C",
          },
        ],
      },
      {
        type: "",
        title: "Safety Basics",
        properties: [
          {
            label: "Danger",
            value:
              "Toxic, can cause blindness or death if swallowed or breathed in.",
          },
          {
            label: "Use",
            value: "Always wear gloves and eye protection.",
          },
          {
            label: "Store",
            value: "Keep in a cool, dry place, away from fire.",
          },
          {
            label: "Disposal",
            value: "Follow the rules, don't dump it anywhere.",
          },
        ],
      },
    ],
  },
  {
    slug: "methylene-chloride",
    name: "Methylene Chloride",
    description:
      "Methylene chloride, also known as dichloromethane, is a volatile, colorless liquid with a sweet smell. It is widely used as a solvent in industrial processes, paint stripping, and as a laboratory reagent. Due to its high evaporation rate and solvent properties, it requires careful handling.",
    sections: [
      {
        type: "overview",
        title: "Methylene Chloride – A Reliable Solvent for Industrial Use",
        content:
          "Methylene Chloride, also known as dichloromethane (DCM), is a clear, fast-evaporating liquid used in a wide range of industries. It's valued for how well it dissolves tough materials and how little it leaves behind. You'll find it in everything from paint strippers and adhesives to metal cleaners and foam production.\n\nMany businesses across Australia use Methylene Chloride because it works—whether that's breaking down old paint, cleaning metal parts, or helping make pharmaceutical products.",
      },
      {
        type: "",
        title: "What is Methylene Chloride?",
        content:
          "Methylene Chloride (DCM) is a type of chlorinated solvent. It has the chemical formula CH₂Cl₂. It's colourless, has a slightly sweet smell, and doesn't mix with water—but it does mix well with most other solvents. It boils at about 39.6°C, so it dries fast. That's useful in any job where quick evaporation matters.\n\nIt's powerful, but it also needs careful handling. This is a chemical that comes with health risks, so proper safety practices are important.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Here are some of the main ways Methylene Chloride is used in industry:\n\nPaint Removal: Breaks down paint quickly and effectively. Often used in commercial strippers.\n\nMetal Cleaning: Helps clean and degrease metal parts, especially in automotive and aerospace work.\n\nAdhesives: Used to make glues and sealants—its quick drying helps speed up production.\n\nFoam Production: Acts as a blowing agent in making polyurethane foams.\n\nPharmaceuticals: Used in processes like extraction and purification.\n\nIt's a go-to solvent when strength, speed, and reliability matter.",
      },
      {
        type: "",
        title: "Why Work with Pascom?",
        content:
          "Pascom supplies high-quality Methylene Chloride across Australia. We offer it in different package sizes—drums, IBCs, and more—so you can get what fits your setup. We also follow strict quality and safety standards to make sure you're getting a product you can rely on.\n\nNeed it delivered? We've got you covered, with delivery and pickup options Australia-wide.\nRequest a quote here.",
      },
      {
        type: "safety",
        title: "Safe Use and Storage",
        content:
          "Always wear gloves, eye protection, and a respirator when working with Methylene Chloride. Only use it in well-ventilated areas, and don't breathe in the vapour.\n\nStore it somewhere cool and dry, away from sparks or anything it might react with (like strong oxidisers). For full safety info, get the SDS here.",
      },
      {
        type: "",
        title: "Order Methylene Chloride in Australia",
        content:
          "We supply Methylene Chloride in bulk or smaller volumes, with flexible options for delivery and pickup.\nContact us to get a quote.",
      },
    ],
  },
  {
    slug: "monoethylene-glycol",
    name: "Monoethylene glycol",
    description:
      "Monoethylene glycol is a colorless, odorless liquid commonly used as an antifreeze and coolant in automotive and industrial applications. It is also utilized in the production of resins, plastics, and as a solvent in various processes. This compound is toxic and requires careful handling.",
    sections: [
      {
        type: "overview",
        title: "Monoethylene Glycol – Industrial Coolant and Solvent",
        content:
          "Monoethylene Glycol (MEG) is a simple but important chemical. It's mainly used as a coolant, heat transfer fluid, and raw material in different industries. It's a good choice for companies that need something reliable for cooling systems or industrial processes. You'll often see it used in automotive, HVAC, textiles, and plastics.\n\nMEG mixes well with water and stays liquid in cold temperatures, which makes it useful in closed cooling systems, in making polyester fibres, and as an ingredient in chemical production.",
      },
      {
        type: "",
        title: "What Is Monoethylene Glycol?",
        content:
          "Monoethylene Glycol (MEG) is an organic liquid. It has the chemical formula C₂H₆O₂. It's colourless, odourless, and a little thick. It's made from ethylene oxide. People use it because it holds water (hygroscopic), doesn't freeze easily, and boils at a high temperature.\n\nIt's a main ingredient in antifreeze, de-icing fluids, and is used to make polyester fibres and resins. Some people call it just ethylene glycol, but in Australia, Monoethylene Glycol is the common term.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "You can find Monoethylene Glycol in a lot of industries:\n\nCoolants and antifreeze: MEG keeps car and industrial engines from freezing or overheating.\n\nPolyester fibre production: MEG is one of the main ingredients for making polyester.\n\nHeat transfer fluid: HVAC systems use it to keep temperatures steady.\n\nSolvent and humectant: MEG is used in inks, adhesives, and paints because it helps products stay stable and perform well.",
      },
      {
        type: "",
        title: "Why Buy from Pascom?",
        content:
          "Pascom supplies Monoethylene Glycol across Australia. We provide high-purity MEG in drums, IBCs, and bulk. We follow all industry standards, and our deliveries are on time. Our team can help you with product advice or questions.\nRequest a quote.",
      },
      {
        type: "safety",
        title: "Safe Handling and Storage",
        content:
          "Handle MEG like you would any industrial chemical. Use gloves and eye protection. Work in a ventilated space if you're using a lot. Don't swallow it or let it touch your skin for too long. You can find more safety details in the Safety Data Sheet (SDS).\n\nStore MEG in a cool, dry area, away from heat and oxidisers. This keeps it safe and effective for longer.",
      },
      {
        type: "",
        title: "Buy Monoethylene Glycol in Australia",
        content:
          "Pascom supplies Monoethylene Glycol with fast delivery and local pickup across Australia.\nContact us for prices, packaging, and other details.",
      },
    ],
  },
  {
    slug: "monoethylene-glycol-fiber-grade",
    name: "Monoethylene Glycol Fiber Grade",
    description:
      "Monoethylene glycol fiber grade is a high-purity form of monoethylene glycol used primarily in the production of synthetic fibers like polyester. This colorless, odorless liquid is used to enhance fiber properties and improve manufacturing processes.",
    sections: [
      {
        type: "overview",
        title:
          "Monoethylene Glycol Fiber Grade – Essential Raw Material for Polyester and Textiles",
        content:
          "Monoethylene Glycol Fiber Grade is a high-purity chemical. It's used to make polyester fibres, PET plastics, and textiles. You'll find it in packaging, clothing, and even plastic bottles. Companies choose it because it's clean, stable, and works well in big production lines.\n\nIn Australia, Monoethylene Glycol Fiber Grade is common in factories making polyester and plastic. It's known for being consistent and easy to work with.",
      },
      {
        type: "",
        title: "What Is Monoethylene Glycol Fiber Grade?",
        content:
          "Monoethylene Glycol, or MEG, is a simple chemical. It looks like a clear liquid and doesn't have much of a smell. The chemical formula is C₂H₆O₂.\n\nWhen people say \"fiber grade,\" they mean it's very pure. It's made for making polyester fibres and textiles. It has very low impurities and moisture, which helps when making plastics and fabrics.",
      },
      {
        type: "",
        title: "Where Is It Used?",
        content:
          "Monoethylene Glycol Fiber Grade is mainly used to make polyester. This includes things like clothes, fabric, and yarn. It's also used to make plastic bottles and containers (PET plastic).\n\nOutside of textiles and plastics, MEG helps control humidity in paper making. It's also used as a solvent in glues, inks, and resins. People like it because it mixes well with water and doesn't break down easily.",
      },
      {
        type: "",
        title: "Why Buy From Us",
        content:
          "We supply Monoethylene Glycol Fiber Grade across Australia. Our MEG is high purity, low in moisture, and packed for easy use. You can get it in drums, IBCs, or bulk tankers.\n\nWe ship quickly and can give technical support if needed.\n\nRequest a Quote",
      },
      {
        type: "safety",
        title: "How To Handle It Safely",
        content:
          "Always use gloves, goggles, and protective clothes when handling MEG. Work in a space with good airflow. Store it in a cool, dry place, away from heat and strong chemicals.\n\nFor full safety details, get the SDS here.",
      },
      {
        type: "",
        title: "Buying MEG in Australia",
        content:
          "We offer delivery and pick-up options across Australia. You can choose from different packaging sizes to suit your needs.\n\nContact us here for more details.",
      },
      {
        type: "",
        title: "Quick Facts About MEG Fiber Grade",
        properties: [
          {
            label: "CAS Number",
            value: "107-21-1",
          },
          {
            label: "Look",
            value: "Clear, colourless liquid",
          },
          {
            label: "Smell",
            value: "Almost none",
          },
          {
            label: "Mixes with Water",
            value: "Yes, in any amount",
          },
          {
            label: "Purity",
            value: "At least 99.9%",
          },
          {
            label: "Density",
            value: "1.115 g/cm³ (at 20°C)",
          },
          {
            label: "Boiling Point",
            value: "197.6°C",
          },
          {
            label: "Freezing Point",
            value: "-12.9°C",
          },
          {
            label: "pH",
            value: "Neutral",
          },
          {
            label: "Stability",
            value: "Stable in normal use. Keep away from strong oxidisers.",
          },
        ],
      },
      {
        type: "",
        title: "Safety Reminders",
        properties: [
          {
            label: "Skin & Eyes",
            value: "Can cause slight irritation. Use gloves and goggles.",
          },
          {
            label: "Breathing It In",
            value: "Vapours may irritate if the air isn't fresh.",
          },
          {
            label: "Swallowing",
            value: "Harmful if taken in large amounts.",
          },
          {
            label: "Storage",
            value: "Keep it sealed and away from heat or unsafe chemicals.",
          },
        ],
      },
    ],
  },
  {
    slug: "nickel-catalysed-ammonium-bisulfite-65",
    name: "Nickel Catalysed Ammonium Bisulfite 65%",
    description:
      "Nickel Catalysed Ammonium Bisulfite 65% is a specialized chemical solution used primarily in industrial and laboratory processes. It contains ammonium bisulfite catalyzed by nickel, and is often employed in organic synthesis and as a reducing agent. This solution is typically clear and requires careful handling due to its chemical reactivity.",
    sections: [
      {
        type: "overview",
        title:
          "Nickel Catalysed Ammonium Bisulfite 65% – Oxygen Scavenger for Industrial Use",
        content:
          "Nickel Catalysed Ammonium Bisulfite 65% is a concentrated chemical that helps remove oxygen from water and fluid systems. It contains 65% ammonium bisulfite (NH₄HSO₃) with a small amount of nickel to make it work faster. It's mostly used in industries like oil and gas, power generation, and water treatment across Australia.\n\nThis product helps lower the risk of corrosion, keeps systems running longer, and cuts down on repairs.",
      },
      {
        type: "",
        title: "What It Is",
        content:
          "This is a liquid solution of ammonium bisulfite with nickel added. The nickel helps it react faster with oxygen. It's usually used at 65% strength and works well where fast oxygen removal is needed. In some places, it's also called ammonium Bisulphite (UK spelling).\n\nIt protects pipelines, boilers, and storage tanks, especially in systems with changing temperatures and high flow rates.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Nickel Catalysed Ammonium Bisulfite 65% is mainly used in boiler water treatment to stop corrosion. It's also used in oil and gas operations to protect pipelines and lower maintenance costs.\n\nOther common uses:\n\nWater treatment in power plants\n\nProcess water in refineries and chemical plants\n\nProtecting equipment during shutdowns\n\nWhen people compare sulfite vs bisulfite, bisulfite is often picked because it dissolves better and is easier to handle, especially in closed systems.",
      },
      {
        type: "safety",
        title: "Safe Handling and Storage",
        content:
          "Wear gloves, eye protection, and make sure there's good airflow when using this product. Knowing the difference between sulfite and bisulfite helps you use it safely.\n\nKeep it in a cool, dry place away from heat and oxidisers. For full safety info, check the Safety Data Sheet (SDS).",
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
            label: "Concentration",
            value: "65% Ammonium Bisulfate with Nickel",
          },
          {
            label: "Appearance",
            value: "Pale yellow liquid",
          },
          {
            label: "Smell",
            value: "Mild",
          },
          {
            label: "Solubility",
            value: "Fully dissolves in water",
          },
          {
            label: "pH",
            value: "4.0 – 6.0",
          },
          {
            label: "Density",
            value: "1.3 – 1.4 g/cm³",
          },
          {
            label: "Use",
            value: "Oxygen scavenger, corrosion inhibitor",
          },
          {
            label: "Packaging",
            value: "Drums, IBCs, bulk tankers",
          },
          {
            label: "Delivery",
            value: "Available Australia-wide",
          },
        ],
      },
    ],
  },
  {
    slug: "potassium-chloride-kcl-98",
    name: "Potassium Chloride KCI, 98%",
    description:
      "Potassium chloride (KCl) and potassium chloride 98% are white, crystalline salts commonly used in fertilizers, medicine, and as a salt substitute. It is soluble in water and provides potassium, an essential nutrient for plant growth and human health. It is generally safe to handle, but requires proper storage and usage.",
    sections: [
      {
        type: "overview",
        title: "Potassium Chloride KCl – Industrial Grades",
        content:
          "Potassium Chloride KCl comes in different purity grades. It's used in pharmaceuticals, water treatment, food production, fertilizers, and labs. It's a white crystalline salt that dissolves well in water.",
      },
      {
        type: "",
        title: "What Is Potassium Chloride KCl?",
        content:
          "Potassium Chloride is KCl – potassium and chlorine ions. It's a mineral salt found in nature. Dissolves easily in water. Has neutral pH. Also called muriate of potash or sylvite. It's a source of potassium ions for industrial uses. Looks like white or colorless crystals. No smell. Good for food and pharmaceutical use.",
      },
      {
        type: "",
        title: "Available Grades",
        content:
          "We have different purity levels for different needs.\n\nStandard Grade\nStandard grade works for general industrial use when you don't need high purity. Used in water treatment, de-icing, and basic chemical manufacturing. Good performance for bulk processes. Comes as white crystalline granules. Flows well and dissolves consistently.\n\n98% High Purity Grade\nThe 98% grade meets strict standards for pharmaceuticals, food production, and labs. Has minimal impurities. Good for sensitive processes that need precise chemical composition. Dissolves well in water. Better for applications where contamination matters.",
      },
      {
        type: "",
        title: "Industrial Uses",
        content:
          "Potassium Chloride is used in many industries. Water treatment plants use it for pH adjustment and nutrients. Drug makers use the high-purity grade for medications and electrolyte solutions. Food companies use it instead of table salt and as a flavor enhancer.\n\nLabs use it in buffer solutions and as an electrolyte for analysis. Fertilizer companies use it as a potassium source for plants. Industrial processes use it as a flux in metal processing and to make specialty chemicals.\n\nIt's thermally stable. Dissolves predictably. Cost-effective in different grades. Both standard and high-purity work well at different temperatures and pH levels.",
      },
      {
        type: "",
        title: "Why Choose Our Potassium Chloride?",
        content:
          "Our products meet Australian quality standards. We follow industry regulations. We control quality during manufacturing and packaging. This keeps product specs consistent. We have custom packaging for different volume needs.\n\nWe're a trusted supplier in Australia. We provide technical support and documentation for all grades. We handle storage properly and deliver on time nationwide.\n\nRequest a Quote",
      },
      {
        type: "safety",
        title: "Packaging, Delivery & Documentation",
        content:
          "CAS Number: 7447-40-7\n\nWe have bags, drums, and bulk containers. Pick what works for your application. Store it cool and dry. Keep it away from moisture and incompatible materials. Use sealed containers to prevent caking.\n\nWe deliver or you can pick up. All shipments have proper labels and handling instructions.\n\nRequest SDS",
      },
      {
        type: "",
        title: "Buy Potassium Chloride KCl in Australia",
        content:
          "Our Potassium Chloride gives you reliable performance and quality. Standard grade for general use. 98% for specialized processes. Both give good value and work well.\n\nWe handle small lab orders to large industrial orders. We provide documentation, technical support, and deliver nationwide.\n\nContact us about your Potassium Chloride needs",
      },
    ],
  },
  {
    slug: "potassium-hydroxide-solution",
    name: "Potassium Hydroxide Solution 45%, 49%",
    description:
      "Potassium hydroxide 45% and 49% are highly concentrated solutions of potassium hydroxide used in various industrial and chemical processes. This colorless, caustic liquid is a strong base and is highly corrosive, necessitating careful handling and storage.",
    sections: [
      {
        type: "overview",
        title: "Potassium Hydroxide Solution – Industrial Grades",
        content:
          "Potassium hydroxide solution is an alkaline chemical. We have different concentrations. It's used in pharmaceuticals, water treatment, food production, soap making, and chemical processing.",
      },
      {
        type: "",
        title: "What Is Potassium Hydroxide Solution?",
        content:
          "It's a clear, colorless liquid. KOH dissolved in water. Strong alkaline. Very caustic and absorbs moisture from air. Used for pH adjustment, neutralization, and industrial reactions. Also called caustic potash solution or potassium hydrate solution. It's a raw material for manufacturing.",
      },
      {
        type: "",
        title: "Available Concentrations",
        content:
          "We have different concentrations for different needs.\n\n45% Solution\nMedium concentration for general industrial use. Good for soap making, biodiesel production, and pH adjustment. Handles well while staying effective. Clear, colorless liquid. Thick and caustic.\n\n49% Solution\nHigh concentration for demanding processes. Works for chemical synthesis, water treatment, and when you need strong alkaline conditions. More cost-effective when you need high alkalinity. Dissolves well. Works at different temperatures.",
      },
      {
        type: "",
        title: "Industrial Uses",
        content:
          "Potassium hydroxide solution is used for:\n\npH adjustment in water treatment and industrial processes\nSoap making – needed for saponification\nBiodiesel production – catalyst for the process\nChemical synthesis – makes pharmaceuticals and specialty chemicals\nMetal processing – cleaning and etching\nFood processing – pH control (food-grade versions)\nBattery manufacturing – goes in alkaline batteries\n\nIt's strongly alkaline. Dissolves well. Cost-effective for pH control. Works reliably at different concentrations.",
      },
      {
        type: "",
        title: "Why Choose Our Potassium Hydroxide?",
        content:
          "We meet Australian and international standards. Follow local regulations and safety standards. Have flexible packaging from small containers to bulk. Keep consistent supply and deliver fast across Australia. Our team can help with application and handling.\n\nWe're a trusted supplier in Australia. We provide technical expertise and good customer service.\n\nRequest a Quote",
      },
      {
        type: "safety",
        title: "Packaging, Delivery & Documentation",
        content:
          "CAS Number: 1310-58-3\n\nStorage & Handling:\nStore cool and dry away from incompatible materials\nWear proper protective equipment\nMake sure ventilation is good\nKeep containers sealed tight to prevent moisture absorption\n\nDelivery & Pickup:\nWe deliver across Australia\nYou can pick up from our facilities\nWe have lab quantities to bulk industrial volumes\nSafe transport with proper hazmat handling\n\nRequest SDS",
      },
      {
        type: "",
        title: "Buy Potassium Hydroxide Solution in Australia",
        content:
          "Our 45% and 49% grades work well for different industrial uses. Both are quality products with consistent alkalinity and good handling.\n\nNeed moderate alkalinity for soap making? Or high concentration for chemical synthesis? Our products work reliably. We provide technical support and flexible supply.\n\nContact us about your needs.",
      },
    ],
  },
  {
    slug: "silfax-1000",
    name: "Silfax 1000",
    description:
      "Silfax 1000 is a high-performance silicone-based fluid used primarily in industrial applications for lubrication and as a release agent. This clear, non-reactive liquid offers excellent thermal stability and low surface tension, making it ideal for use in demanding environments.",
    sections: [
      {
        type: "overview",
        title: "Silfax 1000 – Industrial Silicone Defoamer",
        content:
          "Silfax 1000 is a silicone defoamer for industrial use. It controls foam in water treatment, paper making, and chemical processes. It's a concentrated liquid.\n\nManufacturing plants use Silfax 1000 to stop foam during production. Foam slows things down and affects quality. This product works fast and lasts a long time, even in tough conditions.",
      },
      {
        type: "",
        title: "What Is Silfax 1000?",
        content:
          "It's a defoamer with silicone polymers and stabilizers. Works at different pH levels. Works in water-based and non-water systems. You don't need much, which saves money.",
      },
      {
        type: "",
        title: "Where to Use It",
        content:
          "Water treatment plants use Silfax 1000 in aeration tanks and clarifiers. It stops foam buildup and helps treatment work better. Paper mills use it because foam messes with coating and quality.\n\nChemical plants use it in reactors, distillation columns, and mixers. It handles high temperatures and extreme pH levels. Works with surfactants and other chemicals too.",
      },
      {
        type: "",
        title: "Why Buy from Pascom?",
        content:
          "We're a silicone defoamer supplier in Australia. We keep quality consistent and stock reliable. We have different sizes – small containers to bulk IBCs. Our team helps you figure out the right amount to use.\n\nNeed help picking the right product? We'll show you how to use it. For specs or bulk orders, request a quote today.",
      },
      {
        type: "safety",
        title: "How to Handle and Store",
        content:
          "Keep Silfax 1000 in its original container. Store it somewhere cool and dry. Keep it out of sunlight and extreme temperatures. Wear gloves and eye protection. Make sure you have good ventilation. Don't get it on your skin or in your eyes.\n\nFor safety info, request the safety data sheet.",
      },
      {
        type: "",
        title: "Buy Silfax 1000 in Australia",
        content:
          "Contact Pascom for pricing and delivery across Australia. We deliver or you can pick up. Our team can help with your foam problems.",
      },
      {
        type: "",
        title: "Product Specifications",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Packaging Options",
            value: "Ask us about options. We might have custom options too.",
          },
          {
            label: "CAS",
            value: "Proprietary blend",
          },
          {
            label: "Appearance",
            value: "Clear to slightly hazy liquid",
          },
          {
            label: "Odour",
            value: "Mild smell",
          },
          {
            label: "Solubility",
            value: "Mixes with water",
          },
          {
            label: "pH",
            value: "Neutral (6.0-8.0)",
          },
          {
            label: "Density",
            value: "About 1.0 g/cm³",
          },
          {
            label: "Viscosity",
            value: "Low to medium thickness",
          },
          {
            label: "Stability",
            value: "Stable in normal storage",
          },
          {
            label: "Reactivity",
            value: "Works with most industrial chemicals",
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
              "Can irritate. Wear gloves, goggles, and protective clothing",
          },
          {
            label: "Inhalation Risk",
            value: "Use where there's good air flow. Don't breathe vapours",
          },
          {
            label: "Ingestion Hazard",
            value: "Don't swallow. Get medical help if you do",
          },
          {
            label: "Environmental",
            value: "Don't let it get into waterways. Dispose properly",
          },
          {
            label: "Storage",
            value: "Keep in original containers. Store cool and dry",
          },
        ],
      },
    ],
  },
  {
    slug: "soda-ash-dense",
    name: "Soda Ash Dense",
    description:
      "Soda Ash Dense is a granular form of sodium carbonate, widely used in glass manufacturing, water treatment, and chemical production. This white, odorless powder is a strong alkali, making it effective in raising pH levels and acting as a cleaning agent in various industrial processes.",
    sections: [
      {
        type: "overview",
        title: "Soda Ash Dense – Sodium Carbonate for Industrial Use",
        content:
          "Soda Ash Dense is sodium carbonate used in industrial processes across Australia. It's a white, crystalline powder with high bulk density. Works well in manufacturing, water treatment, and chemical processing.\n\nIndustries use Soda Ash Dense because it dissolves well and stays stable. The dense form is better for storage, transport, and automated feeding than the light version.",
      },
      {
        type: "",
        title: "What Is Soda Ash Dense?",
        content:
          "Soda Ash Dense is sodium carbonate (Na₂CO₃). Made through the Solvay process. Has higher bulk density than soda ash light. Also called washing soda in some uses. Usually 99.2% pure minimum. Flows well for industrial use.",
      },
      {
        type: "",
        title: "Industrial Applications",
        content:
          "In glass manufacturing, Soda Ash Dense works as a flux agent. Lowers the melting point of silica. Makes container glass, flat glass, and fiberglass production more efficient. Water treatment facilities use it as a pH adjuster. Neutralizes acid conditions and softens hard water by removing calcium and magnesium.\n\nDetergent makers use it as a builder. Makes cleaning work better and stops dirt from sticking back. Chemical industry uses it to make sodium bicarbonate, sodium silicates, and other sodium compounds. Knowing the difference between soda ash dense vs light helps you pick the right grade.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "We're a soda ash supplier in Australia. We deliver quality product with reliable supply. Have flexible packaging – 25kg bags to bulk containers. Our team helps with application guidance and quality assurance. Contact us for pricing.",
      },
      {
        type: "safety",
        title: "Safe Handling & Documentation",
        content:
          "Store Soda Ash Dense somewhere dry with good ventilation. Keep away from acids and moisture. Wear gloves and eye protection. Generally safe but can irritate skin and eyes. Request the Safety Data Sheet for full safety info. You can also check chemical properties for more details.",
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
            value: "497-19-8",
          },
          {
            label: "Appearance",
            value: "White, crystalline powder or granular solid",
          },
          {
            label: "Odour",
            value: "No smell",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water",
          },
          {
            label: "pH",
            value: "Strongly alkaline (pH 11.0-12.0 for 1% solution)",
          },
          {
            label: "Bulk Density",
            value: "About 1.0-1.2 g/cm³",
          },
          {
            label: "Melting Point",
            value: "851°C",
          },
          {
            label: "Stability",
            value: "Stable normally but absorbs moisture and CO₂ from air",
          },
          {
            label: "Reactivity",
            value:
              "Works with most substances but reacts with acids, releases CO₂",
          },
        ],
      },
      {
        type: "",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Irritation",
            value:
              "Can irritate. Wear gloves, goggles, and protective clothing",
          },
          {
            label: "Inhalation Risk",
            value:
              "Dust can irritate breathing. Use with good ventilation or wear dust mask",
          },
          {
            label: "Ingestion Hazard",
            value: "Can cause stomach irritation if you swallow a lot",
          },
          {
            label: "Reactivity Risk",
            value: "Keep away from strong acids – releases carbon dioxide gas",
          },
          {
            label: "Storage",
            value: "Store cool, dry, ventilated. Away from acids and moisture",
          },
        ],
      },
    ],
  },
  {
    slug: "soda-ash-dense-fcc-food-grade",
    name: "Soda Ash Dense FCC (Food Grade)",
    description:
      "Soda Ash Dense FCC (Food Grade) is a high-purity sodium carbonate used in food processing and various industrial applications. This white, odorless powder is essential for controlling pH levels and as a leavening agent in baking. It is highly effective but must be handled with care due to its alkalinity.",
    sections: [
      {
        type: "overview",
        title: "Soda Ash Dense FCC Food Grade – Food Grade Sodium Carbonate",
        content:
          "Soda Ash Dense FCC Food Grade is high-purity sodium carbonate that meets Food Chemicals Codex standards. Used in food processing, beverage production, and pharmaceuticals. It's a white, crystalline powder. Works as an alkaline chemical for pH adjustment and buffering.\n\nIndustries across Australia use Soda Ash Dense FCC Food Grade for its quality and food safety compliance. It helps maintain good processing conditions while meeting safety standards for consumer products.",
      },
      {
        type: "",
        title: "What Is Soda Ash Dense FCC Food Grade?",
        content:
          'This sodium carbonate meets Food Chemicals Codex specs. Has minimal impurities. Safe for food contact. "Dense" means higher bulk density than light soda ash. Good for applications needing controlled dissolution rates. Also called sodium carbonate dense grade or washing soda in some industries.',
      },
      {
        type: "",
        title: "Food Industry Applications",
        content:
          "In food processing, Soda Ash Dense FCC Food Grade does several jobs. Regulates pH in baking. Treats water for beverage production. Processing aid in dairy operations. Works as a pH buffer in food manufacturing. Keeps acidity levels right during production. Pharmaceutical companies use it for tablets and as a neutralizing agent.\n\nDense vs light soda ash – dense has better flow and controlled dissolution. Works better in automated dosing systems for large-scale food production.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "We're a soda ash supplier in Australia. We provide reliable bulk supply. Have 25kg bags to bulk containers. We test for quality. Fast delivery across Australia. Technical support for your applications. Contact us for enquiries or bulk orders.",
      },
      {
        type: "safety",
        title: "Safe Handling & Documentation",
        content:
          "Store Soda Ash Dense FCC Food Grade somewhere cool and dry. Keep away from moisture and incompatible materials. Wear gloves and eye protection. Request our Safety Data Sheet for details. Also see NIOSH guidelines for sodium carbonate.",
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
            value: "497-19-8",
          },
          {
            label: "Appearance",
            value: "White, crystalline powder or granular solid",
          },
          {
            label: "Odour",
            value: "No smell",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water",
          },
          {
            label: "pH",
            value: "Strongly alkaline (pH 11.0-12.0 for 1% solution)",
          },
          {
            label: "Bulk Density",
            value: "About 1.0-1.2 g/cm³ (dense grade)",
          },
          {
            label: "Melting Point",
            value: "851°C (1564°F)",
          },
          {
            label: "Stability",
            value: "Stable normally but absorbs moisture",
          },
          {
            label: "Reactivity",
            value:
              "Works with most substances. Can react with acids, releases carbon dioxide",
          },
        ],
      },
      {
        type: "",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Irritation",
            value:
              "Can cause moderate irritation. Wear gloves, safety goggles, and protective clothing",
          },
          {
            label: "Inhalation Risk",
            value:
              "Dust can irritate breathing. Use with good ventilation or wear respiratory protection",
          },
          {
            label: "Ingestion Hazard",
            value:
              "Can cause stomach irritation if you swallow a lot. Get medical help if ingested",
          },
          {
            label: "Reactivity Risk",
            value:
              "Keep away from strong acids – releases carbon dioxide gas quickly",
          },
          {
            label: "Storage",
            value:
              "Store cool, dry, ventilated. Away from acids and moisture-sensitive materials",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-acetate-anhydrous",
    name: "Sodium acetate anhydrous",
    description:
      "Sodium acetate anhydrous is a white, crystalline powder commonly used in various industrial processes, including chemical synthesis, textile dyeing, and as a food preservative. It is the sodium salt of acetic acid and is highly soluble in water, making it useful in buffering solutions and other applications.",
    sections: [
      {
        type: "overview",
        title: "Sodium Acetate Anhydrous – Industrial Chemical",
        content:
          "Sodium Acetate Anhydrous is a food grade chemical used in food processing, pharmaceuticals, textiles, and labs. It's a white crystalline powder (CH₃COONa). Dissolves well in water. Works as a buffering agent, preservative, and chemical intermediate.\n\nIndustries in Australia use Sodium Acetate Anhydrous for everything from concrete acceleration to drug manufacturing. The anhydrous form has no water, so it's more potent and lasts longer than hydrated versions.",
      },
      {
        type: "",
        title: "What Is Sodium Acetate Anhydrous?",
        content:
          "It's the sodium salt of acetic acid. Made by neutralizing acetic acid with sodium hydroxide or sodium carbonate. Has no water molecules, unlike the trihydrate form. Good for applications needing exact chemical concentrations. Also called sodium ethanoate. Stable under normal storage.",
      },
      {
        type: "",
        title: "Industrial Applications",
        content:
          "In food, Sodium Acetate Anhydrous works as a pH buffer and flavor enhancer. Makes salt and vinegar chips taste tangy. Textile industry uses it as a mordant for dyeing. Helps fabrics get bright, lasting colors. In concrete, it accelerates curing in cold weather.\n\nDrug makers use it for buffer prep and in tablets. Labs use it for buffer solutions and protein crystallization studies.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "We're a sodium acetate supplier in Australia. We deliver quality product with documentation and technical support. Have flexible packaging – lab quantities to bulk industrial. Meet Australian standards. Full traceability documentation. Contact us for pricing.",
      },
      {
        type: "safety",
        title: "Safe Handling & Product Info",
        content:
          "Store Sodium Acetate Anhydrous cool and dry. Keep from moisture and incompatible materials. Generally safe but use protective equipment and good ventilation. Request our Safety Data Sheet",
      },
      {
        type: "",
        title: "Available for Delivery & Pick up",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Packaging Options",
            value: "Ask us about options. Custom packaging might be available.",
          },
          {
            label: "CAS",
            value: "127-09-3",
          },
          {
            label: "Appearance",
            value: "White, crystalline powder or granular solid",
          },
          {
            label: "Odour",
            value: "No smell",
          },
          {
            label: "Solubility",
            value: "Very soluble in water (1230 g/L at 20°C)",
          },
          {
            label: "pH",
            value: "Slightly alkaline (pH 8.0–9.0 for 1% solution)",
          },
          {
            label: "Density",
            value: "About 1.528 g/cm³",
          },
          {
            label: "Melting Point",
            value: "324°C (615°F)",
          },
          {
            label: "Stability",
            value: "Stable normally, absorbs moisture from air",
          },
          {
            label: "Reactivity",
            value:
              "Works with most substances. Can react with strong acids and oxidizers",
          },
        ],
      },
      {
        type: "",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Irritation",
            value:
              "Usually not irritating but can cause mild irritation with long contact. Wear gloves and safety glasses",
          },
          {
            label: "Inhalation Risk",
            value:
              "Dust can mildly irritate breathing. Use with good ventilation or wear dust mask for large amounts",
          },
          {
            label: "Ingestion Hazard",
            value:
              "Safe for food use in regulated amounts. Large amounts can upset stomach",
          },
          {
            label: "Reactivity Risk",
            value:
              "Keep away from strong acids and oxidizers – can cause decomposition",
          },
          {
            label: "Storage",
            value:
              "Store cool, dry, ventilated in sealed containers to prevent moisture absorption",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-bicarbonate",
    name: "Sodium Bicarbonate",
    description:
      "Sodium bicarbonate, commonly known as baking soda, is a white, crystalline powder widely used in baking, cleaning, and as an antacid. It is a mild base that reacts with acids, making it useful in various household and industrial applications. This compound is non-toxic but should be handled with care to avoid irritation.",
    sections: [
      {
        type: "overview",
        title: "Sodium Bicarbonate – Multi-Purpose Industrial Chemical",
        content:
          "Sodium Bicarbonate is a white crystalline powder. Works as a pH buffer chemical in many industrial applications. Also called baking soda or sodium hydrogen carbonate. The formula is NaHCO₃. Used in water treatment, food processing, pharmaceuticals, and manufacturing in Australia and worldwide.\n\nIndustries use Sodium Bicarbonate for its buffering properties, mild alkalinity, and non-toxic nature. It neutralizes acids while keeping systems stable. Good for applications needing precise pH control and safe handling.",
      },
      {
        type: "",
        title: "What Is Sodium Bicarbonate?",
        content:
          "It's a white, fine powder made through the Solvay process. Combines sodium chloride, ammonia, and carbon dioxide. Molecular weight is 84.01 g/mol. Dissolves well in water. In the US, it's called sodium hydrogen carbonate. Both names mean the same thing. Chemically stable and food-grade safe for many uses.",
      },
      {
        type: "",
        title: "Industrial Applications",
        content:
          "In water treatment systems, Sodium Bicarbonate adjusts pH to maintain alkalinity in boilers, cooling towers, and municipal water. Works as an acid neutralization agent. Safely neutralizes acidic waste and prevents corrosion in pipes and tanks. Drug companies use it in tablets and antacids. Food industry uses it for baking, beverages, and preservation.\n\nBicarbonate vs carbonate – bicarbonate gives gentler pH adjustment than stronger carbonates. Better for sensitive processes.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "We're a sodium bicarbonate supplier in Australia. We have pharmaceutical-grade and technical-grade with consistent quality. Flexible packaging from small drums to bulk IBCs. Competitive pricing and fast delivery across Australia. Contact us for inquiries or bulk orders.",
      },
      {
        type: "safety",
        title: "Safe Handling & Product Info",
        content:
          "Store Sodium Bicarbonate dry and cool. Keep away from acids and moisture to prevent decomposition. Generally safe but use dust masks when handling fine powders. Request our SDS",
      },
      {
        type: "",
        title: "Product Specifications & Availability",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Packaging Options",
            value: "Ask us about options. Custom packaging might be available.",
          },
          {
            label: "CAS",
            value: "144-55-8",
          },
          {
            label: "Appearance",
            value: "White, crystalline powder or granular solid",
          },
          {
            label: "Odour",
            value: "No smell",
          },
          {
            label: "Solubility",
            value: "Very soluble in water (96 g/L at 20°C)",
          },
          {
            label: "pH",
            value: "Mildly alkaline (pH 8.1-8.3 for 1% solution)",
          },
          {
            label: "Density",
            value: "About 2.16 g/cm³",
          },
          {
            label: "Melting Point",
            value: "Decomposes at 50°C, releases CO₂ and H₂O",
          },
          {
            label: "Stability",
            value: "Stable normally but decomposes when heated above 50°C",
          },
          {
            label: "Reactivity",
            value:
              "Works with most substances. Reacts with acids to release carbon dioxide",
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
              "Usually not irritating. Minimal protective equipment needed",
          },
          {
            label: "Inhalation Risk",
            value:
              "Dust can cause mild breathing irritation. Use with good ventilation",
          },
          {
            label: "Ingestion",
            value: "Food-grade is safe to eat in normal amounts",
          },
          {
            label: "Reactivity",
            value: "Keep from strong acids – releases CO₂ gas",
          },
          {
            label: "Storage",
            value: "Store cool, dry, ventilated. Away from acids and moisture",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-bicarbonate-7-2",
    name: "Sodium Bicarbonate 7.2%",
    description:
      "Sodium bicarbonate 7.2% is a buffered solution used in medical, laboratory, and industrial settings to neutralize acids and regulate pH levels. This clear, odorless liquid is commonly employed in various applications, including as an antacid or in chemical processes requiring precise pH control.",
    sections: [
      {
        type: "overview",
        title: "Sodium Bicarbonate 7.2% – Medical Grade Buffer Solution",
        content:
          "Sodium bicarbonate 7.2% is a sterile, isotonic buffer solution. Used in medical and industrial applications for pH control and alkalinity management. It's pharmaceutical-grade – 7.2% sodium bicarbonate in purified water. Good for IV therapy, dialysis, and lab work.\n\nHealthcare facilities and industrial operations in Australia use sodium bicarbonate 7.2% to maintain pH levels in critical processes. Helps ensure safe treatment outcomes while meeting quality standards.",
      },
      {
        type: "",
        title: "What Is Sodium Bicarbonate 7.2%?",
        content:
          "Made by dissolving pharmaceutical-grade sodium bicarbonate (NaHCO₃) in sterile water for injection. Creates a stable liquid for controlled alkalinization. Also called sodium hydrogen carbonate solution. Works as a buffering agent in medical and industrial processes. The exact concentration makes it good for consistent pH modification and correcting metabolic alkalosis.",
      },
      {
        type: "",
        title: "Medical & Industrial Uses",
        content:
          "In IV therapy, sodium bicarbonate 7.2% corrects metabolic acidosis and restores acid-base balance in patients. Works as a pH adjustment chemical in dialysis. Ensures proper electrolyte balance during treatment. Labs use it for buffer prep and analytical procedures needing precise alkalinity control. Industrial water treatment uses it when pH modification is needed for system performance.\n\nBicarbonate vs carbonate solutions – bicarbonate is often better for medical use. Has gentler buffering action. Works better with biological systems.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "We're a sodium bicarbonate supplier in Australia. We supply pharmaceutical-grade solutions. Have packaging from ampoules to bulk containers. We ensure quality, regulatory compliance, and fast delivery. Technical support for your applications. Contact us for enquiries or bulk orders.",
      },
      {
        type: "safety",
        title: "Safe Use & Documentation",
        content:
          "Store sodium bicarbonate 7.2% cool and dry. Away from sunlight and incompatible materials. Use protective equipment when handling. Use sterile technique for medical applications.",
      },
      {
        type: "",
        title: "Product Information",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Packaging Options",
            value: "Ask us about options. Custom packaging might be available.",
          },
          {
            label: "CAS",
            value: "144-55-8",
          },
          {
            label: "SDS Available",
            value: "Request SDS here",
          },
          {
            label: "Appearance",
            value: "Clear, colorless liquid",
          },
          {
            label: "Odour",
            value: "No smell",
          },
          {
            label: "Concentration",
            value: "7.2% w/v sodium bicarbonate",
          },
          {
            label: "pH",
            value: "About 7.0-8.5",
          },
          {
            label: "Osmolality",
            value: "About 857 mOsm/kg",
          },
          {
            label: "Density",
            value: "About 1.05 g/mL",
          },
          {
            label: "Stability",
            value: "Stable under normal storage",
          },
          {
            label: "Sterility",
            value: "Sterile when properly made and stored",
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
              "Usually not irritating but can cause mild irritation. Rinse with water if contact happens",
          },
          {
            label: "Inhalation",
            value:
              "Minimal risk with normal use. Make sure work areas have good ventilation",
          },
          {
            label: "Ingestion",
            value:
              "Medical use only under professional supervision. Small accidental amounts usually not harmful",
          },
          {
            label: "Medical Precautions",
            value:
              "Monitor electrolyte levels during therapeutic use. Don't use in patients with severe alkalosis",
          },
          {
            label: "Storage",
            value:
              "Store at room temperature (15-25°C) in original container. Protect from light and contamination",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-bisulfite-solutions",
    name: "Sodium Bisulfite Solutions 30%, 40%",
    description:
      "Sodium bisulfite 30% and 40% are aqueous solutions of sodium bisulfite, commonly used as a reducing agent, preservative, and in water treatment processes. This clear to pale yellow liquid has a strong sulfurous odor and is known for its ability to neutralize chlorine and bleach, requiring careful handling.",
    sections: [
      {
        type: "overview",
        title: "Sodium Bisulfite Solutions – Industrial Grades",
        content:
          "Sodium bisulfite solutions come in different concentrations. Used in water treatment, food production, pulp and paper manufacturing, and photography. Good for oxygen scavenging, chlorine neutralization, and preservation.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          "Sodium bisulfite (NaHSO₃) is a white crystalline powder. Forms clear, slightly acidic solutions in water. Works as a reducing agent and antioxidant. Dissolves well. Also called sodium hydrogen sulfite. Removes dissolved oxygen and neutralizes chlorine in industrial processes.",
      },
      {
        type: "",
        title: "Available Concentrations",
        content:
          "We have two concentrations for different industrial needs.\n\n30% Solution\nThe 30% grade works for water treatment, boiler oxygen scavenging, and preservative processes. Handles well. Used in municipal water treatment and food processing. Clear to slightly yellow liquid. Has a sulfur dioxide smell.\n\n40% Solution\nThe 40% solution is for demanding applications. Pulp bleaching, heavy-duty oxygen scavenging, and large-scale chlorine neutralization. Works well in paper manufacturing and industrial water treatment when you need stronger chemical action.",
      },
      {
        type: "",
        title: "Industrial Uses",
        content:
          "These chemical solutions work as oxygen scavengers in boiler water treatment. Prevents corrosion and makes equipment last longer. Protects metal surfaces in closed-loop systems as a corrosion inhibitor. Neutralizes chlorine in wastewater treatment, swimming pools, and textile processing.\n\nBenefits include fast oxygen removal, cost-effective corrosion protection, and reliable performance at different concentrations. Good pH buffering. Stable in various operating conditions.",
      },
      {
        type: "",
        title: "Why Choose Our Sodium Bisulfite?",
        content:
          "Our solutions meet Australian quality standards and industrial specs. We test consistently for quality. Custom packaging available for your needs and delivery schedule.\n\nWe're a trusted sodium bisulfite supplier in Australia. Reliable supply and technical support for all concentrations. Made to pharmaceutical and food-grade standards where needed.\n\nRequest a Quote",
      },
      {
        type: "safety",
        title: "Packaging, Delivery & Documentation",
        content:
          "CAS Number: 7631-90-5\n\nAvailable in drums, IBCs, and bulk. Store cool and dry. Away from sunlight and incompatible materials. Use proper protective equipment and ventilation when handling.\n\nPickup and delivery available across Australia. Flexible scheduling. Complete documentation and certificates of analysis included with shipments.\n\nRequest SDS",
      },
      {
        type: "",
        title: "Buy Sodium Bisulfite Solutions in Australia",
        content:
          "Contact us for 30% and 40% sodium bisulfite solutions. Industrial-grade with reliable performance, consistent quality, and competitive pricing. Custom supply options for your operations.\n\nWe're Australia's trusted chemical supplier for sodium bisulfite. Technical expertise and dependable logistics.",
      },
    ],
  },
  {
    slug: "sodium-bromide-photo-grade",
    name: "Sodium Bromide (Photo Grade)",
    description:
      "Sodium bromide photo grade is a high-purity chemical used primarily in photographic processes, such as the preparation of photographic emulsions and developer solutions. This white crystalline powder is soluble in water and is essential in producing high-quality photographic materials.",
    sections: [
      {
        type: "overview",
        title:
          "Sodium Bromide (Photo Grade) – High Purity for Industrial and Photographic Use",
        content:
          "Sodium Bromide (Photo Grade) is a high-purity chemical used in industries like photography, water treatment, and oil drilling. It dissolves easily in water and stays stable during use. It's especially useful in photographic processing and chemical manufacturing where low impurities are important.\n\nWe supply Sodium Bromide (Photo Grade) across Australia. Many businesses choose it because it's consistent and reliable for demanding industrial tasks.",
      },
      {
        type: "",
        title: "What Is Sodium Bromide (Photo Grade)?",
        content:
          "Sodium Bromide (NaBr) is a simple salt. It looks like a white powder or small crystals. There's no smell. It mixes well with water and has a neutral or slightly alkaline pH (around 6.5 to 8.5 in a 1% solution). \"Photo Grade\" means it's very pure, making it suitable for sensitive work like photographic emulsions and specialty chemicals.\n\nIts CAS Number is 7647-15-6. People use it when they need a clean, stable chemical with very low contamination.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "You'll find Sodium Bromide (Photo Grade) in:\n\nPhotography: Used in developers and emulsions to help with image quality.\n\nOil and Gas: Works as a dense fluid to help control pressure and limit corrosion during drilling.\n\nWater Treatment: Used in some water cleaning systems.\n\nChemical Manufacturing: Helps make certain organic chemicals and medicines.\n\nIt's often chosen because it helps protect equipment from rust and keeps processes running smoothly.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "7647-15-6",
          },
          {
            label: "Appearance",
            value: "White powder or crystals",
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
            value: "6.5–8.5",
          },
          {
            label: "Density",
            value: "About 3.21 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable at normal temperatures",
          },
          {
            label: "Reactivity",
            value:
              "Can react with strong acids or oxidisers and give off bromine gas",
          },
        ],
      },
      {
        type: "safety",
        title: "Safety Basics",
        content:
          "Wear gloves, goggles, and protective clothing when handling this product. Use it in areas with good airflow to avoid breathing in dust. Keep it away from strong acids and oxidisers. Store it in a dry, cool place.\n\nYou can check the full safety sheet on our SDS page.",
      },
      {
        type: "",
        title: "Ordering Information",
        content:
          "We supply Sodium Bromide (Photo Grade) in different packaging sizes, from 25 kg bags to bulk options. Delivery and local pick-up are both available. For a quote or any questions, contact us here.",
      },
    ],
  },
  {
    slug: "sodium-carbonate-solutions",
    name: "Sodium Carbonate Solutions 10%, 20%",
    description:
      "Sodium Carbonate 10% and 20% are solutions of sodium carbonate in water, commonly used in cleaning products, water softening, and various industrial processes. This alkaline solution is effective for removing grease and stains but can be irritating to the skin and eyes, necessitating careful handling.",
    sections: [
      {
        type: "overview",
        title: "Sodium Carbonate Solution – Simple, Reliable, Industrial Use",
        content:
          "We supply Sodium Carbonate Solution in 10% and 20% strengths. It's used in many industries like water treatment, food processing, cleaning, and manufacturing. The product mixes easily with water and does the job well.",
      },
      {
        type: "",
        title: "What is It?",
        content:
          "Sodium Carbonate (also called soda ash or washing soda) is a basic chemical with the formula Na₂CO₃. It's mostly used to control pH, clean surfaces, or help in making other products. In liquid form, it looks clear or a little cloudy.",
      },
      {
        type: "",
        title: "Product Options",
        content:
          "10% Solution:\nThe 10% version is a milder option. It's useful when you don't need strong alkalinity, like for:\n\nCleaning product mixes\npH control in water plants\nTextile industry work\nAppearance: Clear to slightly cloudy, no smell, fully dissolves in water.\n\n20% Solution:\nThe 20% version is stronger and suits tougher jobs, like:\n\nHeavy-duty industrial cleaning\nStronger pH adjustment in chemical work\nBoiler water treatment\nAppearance: Clear to slightly cloudy, no smell, stronger alkaline, dissolves fully in water.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Both 10% and 20% options are good for:\n\nKeeping pH levels steady in water systems\nSimple and cost-effective cleaning\nWork across different industries\nEasy to handle or dilute as needed",
      },
      {
        type: "",
        title: "Why Order From Us?",
        content:
          "Good quality, made to meet Australian standards\nPackaging that fits your needs\nFast supply across Australia\nAsk for a Quote",
      },
      {
        type: "safety",
        title: "Product Details",
        content:
          "CAS Number: 497-19-8\nPackaging: Bulk drums, IBCs, or custom amounts\nStorage: Keep in a dry, cool place away from materials it might react with\nDelivery: Quick delivery across Australia, pickup available too\nRequest the SDS",
      },
      {
        type: "",
        title: "Order Sodium Carbonate in Australia",
        content:
          "Need 10% or 20% Sodium Carbonate Solution in Australia? We keep things simple — good quality, fair prices, flexible supply.\n\nGet a Quote and we'll sort it out for you.",
      },
    ],
  },
  {
    slug: "sodium-hexametaphosphate",
    name: "Sodium Hexametaphosphate",
    description:
      "Sodium hexametaphosphate is a white, crystalline powder commonly used as a sequestrant, emulsifier, and texturizer in various industrial and food applications. It plays a key role in water treatment, food processing, and detergents. This chemical is highly soluble in water and requires careful handling due to its potential health effects.",
    sections: [
      {
        type: "overview",
        title: "Sodium Hexametaphosphate – Simple Water Softener & Dispersant",
        content:
          "Sodium Hexametaphosphate (SHMP) is a common chemical used to soften water and keep solids dispersed in liquids. It's used in industries like water treatment, food processing, ceramics, and detergents. In Australia, it helps businesses prevent scale build-up, stabilise mixtures, and improve product consistency.\n\nIt comes as a white powder or granules. It dissolves well in water, which makes it easy to use in both factories and households.",
      },
      {
        type: "",
        title: "What Is Sodium Hexametaphosphate?",
        content:
          "Sodium Hexametaphosphate is a type of phosphate salt. It's made from polymer chains of sodium phosphate. Its main job is to grab onto minerals like calcium and magnesium so they don't cause scale. It's usually sold at 65%–70% purity. You'll find it in water treatment plants, food factories, and other industrial processes.\n\nSome people call it sodium metaphosphate, but in Australia, Sodium Hexametaphosphate is the usual name.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Sodium Hexametaphosphate is used for:\n\nWater Treatment: It binds to calcium and magnesium, stopping scale from building up in boilers, cooling systems, and pipes.\n\nFood Processing: Approved as a food additive (E452i). It helps meat, poultry, and seafood keep the right texture and hold together during processing.\n\nCeramics: Helps disperse clay so ceramic mixtures flow better.\n\nDetergents: Stops minerals in water from leaving stains or interfering with washing.",
      },
      {
        type: "",
        title: "Why Get It from Pascom?",
        content:
          "Pascom supplies Sodium Hexametaphosphate across Australia in 25kg bags or bulk sacks. We keep stock ready and offer reliable delivery. You can order food-grade or industrial-grade SHMP. Request a quote to get details and pricing.",
      },
      {
        type: "safety",
        title: "Safe Use & Storage",
        content:
          "Wear gloves and eye protection when handling SHMP, since it can irritate skin and eyes. Use it in well-ventilated areas to avoid breathing in dust. Request the SDS for full safety information. Store it in a dry place, away from acids, to keep it stable.",
      },
      {
        type: "",
        title: "Where to Buy SHMP in Australia",
        content:
          "Pascom delivers Sodium Hexametaphosphate anywhere in Australia. You can also pick it up from our locations. Custom packaging is available if you need it. Get in touch for ordering info.",
      },
      {
        type: "",
        title: "Product Specs",
        properties: [
          {
            label: "CAS Number",
            value: "10124-56-8",
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
            label: "Water Solubility",
            value: "High",
          },
          {
            label: "pH (1% Solution)",
            value: "6.0 – 8.0",
          },
          {
            label: "Density",
            value: "~2.48 g/cm³",
          },
          {
            label: "Melting Point",
            value: "Softens at 616°C before breaking down",
          },
          {
            label: "Storage",
            value: "Stable if kept dry and away from acids",
          },
          {
            label: "Delivery",
            value:
              "Delivery and pickup available across Australia. Packaging includes 25kg bags, bulk sacks, or custom sizes.",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-hypochlorite-3",
    name: "Sodium Hypochlorite 3%",
    description:
      "Sodium hypochlorite 5-12.5% is a solution commonly used as a disinfectant and bleach. This clear to slightly yellow liquid is effective for sanitizing surfaces, purifying water, and removing stains. Its strength varies based on concentration, but it requires careful handling due to its corrosive nature.",
    sections: [
      {
        type: "overview",
        title: "Sodium Hypochlorite 3%",
        content:
          "Sodium hypochlorite 3% is a solution commonly used as a disinfectant and bleach. This clear to slightly yellow liquid is effective for sanitizing surfaces, purifying water, and removing stains. It requires careful handling due to its corrosive nature.",
      },
      {
        type: "",
        title: "Available for Delivery & Pick up",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Purchasing Options for Packaging",
            value:
              "Details are available upon request. Customizable options may be available. Please inquire about the options.",
          },
          {
            label: "CAS",
            value: "7681-52-9",
          },
          {
            label: "Appearance",
            value: "Clear, pale yellow to greenish liquid",
          },
          {
            label: "Odor",
            value: "Strong chlorine-like smell",
          },
          {
            label: "Solubility",
            value: "Fully soluble in water",
          },
          {
            label: "pH",
            value:
              "Strongly alkaline (typically between 10.0–11.5 for a 3% solution)",
          },
          {
            label: "Density",
            value: "Approx. 1.05 g/cm³",
          },
          {
            label: "Stability",
            value:
              "Decomposes over time when exposed to heat, light, or acidic conditions",
          },
          {
            label: "Oxidizing Properties",
            value:
              "Strong oxidizer; reacts with organic materials and reducing agents",
          },
        ],
      },
      {
        type: "",
        title: "Other Names",
        content:
          "Liquid Bleach\nHypochlorous Acid, Sodium Salt\nSodium Oxychloride Solution",
      },
      {
        type: "safety",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Irritation",
            value:
              "Can cause mild to moderate irritation; wear gloves and protective eyewear.",
          },
          {
            label: "Inhalation Risk",
            value:
              "Vapors or mist may cause respiratory discomfort; use in a well-ventilated area.",
          },
          {
            label: "Ingestion Hazard",
            value:
              "Harmful if swallowed; may cause nausea, vomiting, and gastrointestinal distress.",
          },
          {
            label: "Reactivity Risk",
            value:
              "Avoid contact with acids, ammonia, and organic materials to prevent toxic gas formation.",
          },
          {
            label: "Storage",
            value:
              "Store in a cool, dry, well-ventilated area, away from heat, sunlight, and incompatible substances.",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-metabisulfite-hp",
    name: "Sodium Metabisulfite HP",
    description:
      "Sodium metabisulfite HP is a white crystalline powder used primarily as a preservative and antioxidant in food and beverage processing. It also serves as a reducing agent in various industrial applications. This chemical is soluble in water and has a sulfurous odor.",
    sections: [
      {
        type: "overview",
        title: "Sodium Metabisulfite HP – Food and Industrial Grade",
        content:
          "Sodium Metabisulfite HP is a high-purity white powder used in food, water treatment, and industry. It works well where clean, reliable chemicals are needed. You'll find it in food factories, mines, and water plants. People use it as a preservative, antioxidant, and reducing agent to keep products stable and processes running smoothly.\n\nBusinesses across Australia use Sodium Metabisulfite HP because it's consistent and helps them meet safety and quality rules.",
      },
      {
        type: "",
        title: "What is Sodium Metabisulfite HP?",
        content:
          "It's a refined version of sodium metabisulfite (Na₂S₂O₅). It comes as a white, odourless powder that dissolves easily in water. The solution is mildly acidic. Most people use it to remove oxygen or unwanted chemicals. In food, it stops spoilage and helps keep colours fresh. You might also see it called \"sodium metabisulphite\" in some countries. It's used in industries that need high-purity chemicals.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "Food: Helps preserve dried fruit, juices, and wine.\n\nMining: Used in ore flotation and cyanide removal.\n\nWater: Removes chlorine and treats wastewater.\n\nOther: Found in photo chemicals, medicines, and textiles.\n\nIt dissolves quickly and doesn't leave much residue, which helps with cleaner production.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "We supply Sodium Metabisulfite HP in Australia. Our product meets high standards and comes in different pack sizes to suit your needs. You can order in bulk or smaller amounts. Delivery is fast and reliable. Request a quote here.",
      },
      {
        type: "safety",
        title: "How to Store and Handle It",
        content:
          "Use it in a well-ventilated place. Wear gloves and eye protection. Don't breathe in the dust. Store it somewhere cool and dry, away from acids and oxidisers. Ask for the SDS here if you need full safety details.",
      },
      {
        type: "",
        title: "Buy Sodium Metabisulfite HP in Australia",
        content:
          "Order Sodium Metabisulfite HP today with fast delivery or pickup. We offer bulk orders or custom pack sizes. Get a quote here.",
      },
      {
        type: "",
        title: "Product Information",
        properties: [
          {
            label: "CAS",
            value: "10102-40-6",
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
            value: "High",
          },
          {
            label: "pH (1% Solution)",
            value: "7.0–10.0",
          },
          {
            label: "Density",
            value: "~3.24 g/cm³",
          },
          {
            label: "Melting Point",
            value: "Breaks down at high heat",
          },
          {
            label: "Stability",
            value: "Stable if stored properly",
          },
          {
            label: "Delivery",
            value:
              "Delivery and pickup across Australia. Available in drums, bags, or custom amounts. Inquire here.",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-molybdate-dihydrate",
    name: "Sodium Molybdate Dihydrate",
    description:
      "Sodium molybdate dihydrate is a crystalline compound used as a molybdenum source in various industrial and chemical processes. It is commonly employed in analytical chemistry and as a corrosion inhibitor. This white, water-soluble powder has applications in metallurgy and agriculture.",
    sections: [
      {
        type: "overview",
        title: "Sodium Molybdate Dihydrate – Corrosion Protection Made Simple",
        content:
          "Sodium Molybdate Dihydrate is a white powder used to stop corrosion in many industries. You'll see it in water treatment, metal finishing, and cooling systems. It dissolves easily in water and helps protect equipment without being toxic.\n\nIn Australia, many businesses use Sodium Molybdate Dihydrate to reduce corrosion in closed systems. It slows down rusting, keeps equipment in better shape, and helps systems last longer.",
      },
      {
        type: "",
        title: "What Is Sodium Molybdate Dihydrate?",
        content:
          "It's a chemical made from molybdenum oxide and sodium hydroxide. You get a stable white powder that contains water (called a dihydrate). When mixed with water, it stays neutral (not too acidic or alkaline). In Australia, people usually use the dihydrate form because it's easy to store and handle.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Sodium Molybdate Dihydrate works well as a corrosion inhibitor in boiler water, cooling towers, and closed-loop systems. Some companies also use it instead of oxygen scavengers because it's less harmful to the environment. You'll also find it in metal finishing, lubricants, and even in farming as a micronutrient.\n\nIf you compare sulphite vs molybdate, molybdate systems often win. They cut down corrosion and don't cause as many environmental problems.",
      },
      {
        type: "",
        title: "How to Order",
        content:
          "We supply Sodium Molybdate Dihydrate across Australia. You can get it in 25kg bags or order in bulk. Our team keeps stock ready and delivers quickly. We also help with custom orders if you need something specific. Request a quote anytime.",
      },
      {
        type: "safety",
        title: "Safe Handling Tips",
        content:
          "Wear gloves and eye protection when handling Sodium Molybdate Dihydrate. Make sure you work in a space with good airflow. Store it somewhere cool and dry. Keep it away from strong acids because that can release molybdic acid. You can get the SDS from us.",
      },
      {
        type: "",
        title: "Buy Sodium Molybdate Dihydrate in Australia",
        content:
          "We offer pickup and delivery options. You can order small or large amounts depending on what you need. Contact us here to get started.",
      },
      {
        type: "",
        title: "Quick Facts",
        properties: [
          {
            label: "CAS Number",
            value: "10102-40-6",
          },
          {
            label: "Looks Like",
            value: "White powder",
          },
          {
            label: "Smell",
            value: "No smell",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water",
          },
          {
            label: "pH Level",
            value: "Around 7–10 when mixed in water",
          },
          {
            label: "Density",
            value: "3.24 g/cm³",
          },
          {
            label: "Melting Point",
            value: "Breaks down at high heat",
          },
          {
            label: "Storage Tip",
            value: "Keep away from strong acids",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-silicate-n-grade-38",
    name: "Sodium Silicate N Grade 38%",
    description:
      "Sodium silicate N grade 38% is a concentrated aqueous solution of sodium silicate, often used in industrial applications such as adhesives, detergents, and water treatment. This clear, viscous liquid has a high alkaline pH and acts as a binding and protective agent.",
    sections: [
      {
        type: "overview",
        title: "Sodium Silicate N Grade 38% – A Reliable Industrial Liquid",
        content:
          "Sodium Silicate N Grade 38% is a clear, alkaline liquid. It's used in many industries as a binder, adhesive, or coating. It contains 38% silicon dioxide (SiO₂), which makes it stable and easy to use.\n\nIndustries across Australia use it to lower costs, improve performance, and make processes more efficient.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          'Sodium silicate (also called liquid glass) is made of sodium oxide (Na₂O) and silicon dioxide (SiO₂). The "N Grade 38%" means it has 38% silica content. This makes it useful in demanding processes where strong bonding and chemical resistance are needed.\n\nIt\'s easy to handle. It flows well and works with most dosing systems — manual or automated.',
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Sodium Silicate N Grade 38% is used in:\n\nDetergents and cleaners – It boosts cleaning power in powders and liquids.\n\nCeramics and refractories – It binds materials and helps them handle high heat.\n\nWater treatment – It prevents corrosion and scale buildup in pipes and tanks.\n\nConstruction – It helps harden concrete and stabilise soil.",
      },
      {
        type: "",
        title: "Why Get It from Pascom",
        content:
          "Pascom supplies Sodium Silicate N Grade 38% across Australia. We offer:\n\nReliable quality\n\nFast delivery\n\nPackaging options from 200-litre drums to 1000-litre IBCs\n\nCustom orders if needed\n\nWe test each batch to make sure it's consistent. Request a quote for pricing or bulk supply.",
      },
      {
        type: "safety",
        title: "Safety and Storage",
        content:
          "Wear gloves, goggles, and protective gear when handling it. Work in a well-ventilated area. Don't let it touch your skin or eyes.\n\nStore it in a cool, dry place. Keep it away from acids. It reacts with acids and gives off heat. Request the SDS for full safety info.",
      },
      {
        type: "",
        title: "Order Sodium Silicate N Grade 38% in Australia",
        content:
          "You can pick up your order or get it delivered. We offer flexible packaging — bulk, drums, or IBCs. Send an enquiry for more details or to place a bulk order.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "1344-09-8",
          },
          {
            label: "Appearance",
            value: "Clear, viscous liquid",
          },
          {
            label: "Odour",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Fully water-soluble",
          },
          {
            label: "pH",
            value: "Around 11–13 (strongly alkaline)",
          },
          {
            label: "Density",
            value: "~1.38 g/cm³ at 20°C",
          },
          {
            label: "Stability",
            value: "Stable in normal conditions",
          },
          {
            label: "Reactivity",
            value: "Reacts with acids to form silica gel and heat",
          },
        ],
      },
    ],
  },
  {
    slug: "solvent-150",
    name: "Solvent 150",
    description:
      "Solvent 150 is a versatile industrial solvent used in various applications such as cleaning, degreasing, and as a carrier in chemical formulations. It is a clear, volatile liquid known for its effectiveness in dissolving oils, greases, and resins. Proper handling is essential to ensure safety and effectiveness.",
    sections: [
      {
        type: "overview",
        title: "Solvent 150 – High-Flash Aromatic Solvent for Industrial Use",
        content:
          "Solvent 150 is an aromatic hydrocarbon solvent used in a wide range of industries across Australia. It has strong solvency, a high flash point, and low odour. That makes it a reliable option for paints, adhesives, cleaning products, and degreasers.\n\nIndustries like mining, automotive, and manufacturing use it often. It's effective, but not overly volatile like some lighter solvents, which helps with safety and handling.",
      },
      {
        type: "",
        title: "What Is Solvent 150?",
        content:
          "Solvent 150 is made during petroleum refining. It's a narrow-cut aromatic solvent with a flash point above 60°C and aromatic content between 98–99%. It works well as a cleaner and diluent and is less toxic than many faster-evaporating options.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "You'll find Solvent 150 used in:\n\nPaints and coatings – helps with pigment mixing and film formation.\n\nAdhesives – works well with most resins and binders.\n\nDegreasing – used in workshops and factories for cleaning parts and surfaces.\n\nPrinting inks – improves flow and helps manage drying times.\n\nBecause of its high flash point, it's safer to use in busy work environments where heat or open flames are a concern.",
      },
      {
        type: "",
        title: "Why Get It From Us?",
        content:
          "We supply Solvent 150 across Australia in different packaging options — drums, IBCs, or bulk. We keep quality consistent, and we deliver fast. If you have special packaging or delivery needs, let us know.\nRequest a quote here.",
      },
      {
        type: "safety",
        title: "Handling and Storage",
        content:
          "When using Solvent 150, wear gloves, goggles, and other protective gear. Work in a well-ventilated space. Avoid skin and eye contact. Don't breathe in vapours.\nTo get the full safety details, request the SDS.",
      },
      {
        type: "",
        title: "Order Solvent 150 in Australia",
        content:
          "We offer both small and bulk quantities of Solvent 150, available for pickup or delivery across the country.\nContact us to talk about what you need.",
      },
      {
        type: "",
        title: "Product Info",
        properties: [
          {
            label: "CAS Number",
            value: "64742-94-5",
          },
          {
            label: "Appearance",
            value: "Clear liquid, colourless to pale yellow",
          },
          {
            label: "Odour",
            value: "Mild aromatic",
          },
          {
            label: "Flash Point",
            value: ">60°C",
          },
          {
            label: "Boiling Range",
            value: "190–210°C",
          },
          {
            label: "Aromatic Content",
            value: "98–99%",
          },
          {
            label: "Density",
            value: "~0.88 g/cm³",
          },
          {
            label: "Solubility",
            value: "Not soluble in water; mixes with hydrocarbons",
          },
          {
            label: "Storage",
            value: "Keep in a cool, dry place away from heat and flames",
          },
        ],
      },
    ],
  },
  {
    slug: "sulfamic-acid-15-solution",
    name: "Sulfamic Acid 15% Solution",
    description:
      "Sulfamic acid 15% is an aqueous solution of sulfamic acid, widely utilized as a descaling agent and cleaner in various industrial and household applications. This clear, acidic liquid is particularly effective at removing limescale, rust, and other mineral deposits. It also finds use in certain electroplating processes and as a catalyst in some chemical reactions.",
    sections: [
      {
        type: "overview",
        title: "Sulfamic Acid 15% Solution – Simple and Safe Descaling Option",
        content:
          "Sulfamic Acid 15% Solution is a reliable cleaning and descaling liquid. It's used in many industries across Australia. The solution contains 15% sulphamic acid and is ready to use. You don't need to mix anything. It works well for removing rust, scale, and mineral deposits in industrial cleaning, water treatment, and maintenance jobs.\n\nMany businesses choose this product because it's safer to handle than stronger acids. It does the job without damaging your equipment.",
      },
      {
        type: "",
        title: "What Is Sulfamic Acid 15%?",
        content:
          "Sulfamic acid (or amidosulfonic acid) is a stable acid that doesn't give off fumes. This 15% solution is already diluted, so you can use it straight away. There's no need to handle powder or make up a mix. This makes the process quicker and safer.\n\nSulfamic acid is known for being gentle on metals like stainless steel and copper while still being strong enough to clean off tough scale and rust.",
      },
      {
        type: "",
        title: "Where You Can Use It",
        content:
          "You can use Sulfamic Acid 15% Solution in many places:\n\nIn boilers and cooling systems to clean pipes and remove scale.\n\nIn food factories to clean equipment.\n\nIn paper mills to keep digesters clean.\n\nIn oil and gas sites for cleaning without much risk of corrosion.\n\nIt helps keep machines running properly without causing extra wear.",
      },
      {
        type: "",
        title: "Buying from Pascom",
        content:
          "Pascom supplies Sulfamic Acid 15% Solution in Australia. You can get it in small or large amounts. Delivery is fast, and you can ask for custom packaging if you need it. To place an order, request a quote.",
      },
      {
        type: "safety",
        title: "Safe Use and Storage",
        content:
          "Always wear gloves and eye protection when using this product. Use it in a well-ventilated area. Don't mix it with strong oxidisers or chlorine-based products. You can request the SDS here.\n\nIf you need to know more about how it compares to other cleaners, like sulphite or bisulphite, we can help.",
      },
      {
        type: "",
        title: "Ordering in Australia",
        content:
          "Pascom offers Sulfamic Acid 15% Solution for pick-up or delivery anywhere in Australia. You can get it in drums or IBCs. Get in touch to talk about what you need.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "5329-14-6",
          },
          {
            label: "Appearance",
            value: "Clear, colourless liquid",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Concentration",
            value: "15% sulphamic acid",
          },
          {
            label: "pH Level",
            value: "About 1.2–1.5",
          },
          {
            label: "Density",
            value: "About 1.07–1.09 g/cm³",
          },
          {
            label: "Solubility",
            value: "Mixes completely with water",
          },
          {
            label: "Stability",
            value: "Safe to store normally",
          },
          {
            label: "Packaging",
            value: "Custom sizes available.",
          },
        ],
      },
    ],
  },
  {
    slug: "tetrakis-hydroxymethyl-phosphonium-sulfate-75",
    name: "Tetrakis Hydroxymethyl Phosphonium Sulfate 75%",
    description:
      "Tetrakis Hydroxymethyl Phosphonium Sulfate 75% is a concentrated aqueous solution of Tetrakis Hydroxymethyl Phosphonium Sulfate (THPS), widely recognized as an environmentally friendly biocide. This clear to pale yellow liquid is primarily used in water treatment, oil and gas operations, and papermaking industries for its excellent microbial control properties. It also functions as a flame retardant in textiles and other materials.",
    sections: [
      {
        type: "overview",
        title:
          "Tetrakis Hydroxymethyl Phosphonium Sulfate 75% – Industrial Biocide",
        content:
          "Tetrakis Hydroxymethyl Phosphonium Sulfate 75% is a biocide chemical for industrial water treatment systems. Controls microbes and prevents biofilm. It's a concentrated solution with 75% active THPS. Used in oil and gas operations, cooling towers, and industrial process water.\n\nIndustries in Australia and worldwide use Tetrakis Hydroxymethyl Phosphonium Sulfate 75% to kill bacteria, fungi, and algae in water systems. Keeps systems running efficiently. Prevents microbial corrosion.",
      },
      {
        type: "",
        title: "What Is Tetrakis Hydroxymethyl Phosphonium Sulfate 75%?",
        content:
          "High-purity THPS dissolved in water. Makes a stable liquid with broad-spectrum antimicrobial activity. Also called THPS 75%. Works better than traditional biocides because of its phosphonium chemistry. The concentrated formula means efficient dosing for large water systems.",
      },
      {
        type: "",
        title: "Industrial Uses",
        content:
          "In water treatment systems, Tetrakis Hydroxymethyl Phosphonium Sulfate 75% controls microbial growth and prevents biofilm in cooling circuits and process water loops. Works as an antimicrobial in oil and gas drilling. Prevents bacterial contamination in drilling fluids and completion brines. In industrial cleaning, it kills bacteria fast – both free-floating and attached. Low environmental impact.\n\nTHPS vs glutaraldehyde biocides – THPS often works better. It's more stable, works at different pH levels, and doesn't persist in the environment as long.",
      },
      {
        type: "",
        title: "Why Choose Pascom?",
        content:
          "We're a THPS supplier in Australia. We supply quality concentrated solutions. Have drums to bulk containers. We ensure quality, regulatory compliance, and fast delivery. Technical support for your applications. Contact us for enquiries or bulk orders.",
      },
      {
        type: "safety",
        title: "Safe Use & Documentation",
        content:
          "Store Tetrakis Hydroxymethyl Phosphonium Sulfate 75% cool and dry. Away from incompatible materials and sunlight. Wear gloves, eye protection, and respiratory protection when handling concentrated solutions.",
      },
      {
        type: "",
        title: "Product Information",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Packaging Options",
            value: "Ask us about options. Custom packaging might be available.",
          },
          {
            label: "CAS",
            value: "55566-30-8",
          },
          {
            label: "SDS Available",
            value: "Request SDS here",
          },
          {
            label: "Appearance",
            value: "Clear to pale yellow liquid",
          },
          {
            label: "Odour",
            value: "Mild smell",
          },
          {
            label: "Concentration",
            value: "75% w/w THPS in water",
          },
          {
            label: "pH",
            value: "About 3.0-5.0 (1% solution)",
          },
          {
            label: "Specific Gravity",
            value: "About 1.4-1.5 g/mL",
          },
          {
            label: "Viscosity",
            value: "Low viscosity liquid",
          },
          {
            label: "Stability",
            value: "Stable under normal storage",
          },
          {
            label: "Solubility",
            value: "Mixes completely with water",
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
              "Can cause severe irritation or burns. Wear chemical-resistant gloves and safety goggles",
          },
          {
            label: "Inhalation Risk",
            value:
              "Can irritate breathing. Use with good ventilation or wear respiratory protection",
          },
          {
            label: "Ingestion Hazard",
            value:
              "Harmful if swallowed. Get medical help immediately if accidentally ingested",
          },
          {
            label: "Environmental Precautions",
            value:
              "Don't let it get into waterways. Biodegradable under aerobic conditions",
          },
          {
            label: "Storage",
            value:
              "Keep in original container. Store cool, dry, ventilated. Away from incompatible materials and heat",
          },
        ],
      },
    ],
  },
  {
    slug: "tetrapotassium-pyrophosphate",
    name: "Tetrapotassium Pyrophosphate",
    description:
      "Tetrapotassium Pyrophosphate is a white, crystalline salt used as a food additive, detergent, and in water treatment. It acts as a buffering agent and sequestrant, helping to stabilize and improve the effectiveness of various products. This compound is commonly utilized in both industrial and household applications.",
    sections: [
      {
        type: "overview",
        title: "Tetrapotassium Pyrophosphate – What It Is and How It's Used",
        content:
          "Tetrapotassium Pyrophosphate (TKPP) is a simple, white powder or granules that dissolve well in water. It's used in lots of industries because it helps with cleaning, controlling pH, and stopping scale build-up. You'll find it in cleaning products, water treatment, and some food products.\n\nIn Australia, many businesses use TKPP to make cleaners work better, manage pH during manufacturing, and keep food products stable. It doesn't leave much residue and is easy to mix, which is why it's popular.",
      },
      {
        type: "",
        title: "What Exactly Is Tetrapotassium Pyrophosphate?",
        content:
          "TKPP is a type of phosphate salt with the formula K₄P₂O₇. It's mildly alkaline, with a pH around 7 to 10 when mixed with water. People use it because it grabs onto metal ions, prevents scale, and keeps formulas stable. It comes in both food-grade and industrial-grade forms, depending on what you need.",
      },
      {
        type: "",
        title: "Common Uses in Australia",
        content:
          "Here's where it shows up most:\n\nCleaning products: TKPP helps break down dirt and grease. It's used in dishwashing powders and industrial cleaners.\n\nWater treatment: Stops scale and rust from building up in pipes and systems.\n\nFood industry: It's allowed as a food additive (E450), used to improve texture in meats, seafood, and dairy.\n\nCeramics and paints: Keeps mixtures smooth and easy to work with.\n\nTKPP is useful because it works in lots of different places without causing problems.",
      },
      {
        type: "",
        title: "Why Buy from Pascom?",
        content:
          "Pascom supplies tetrapotassium pyrophosphate in Australia with options for 25 kg bags or bulk packaging. You get good quality, reliable deliveries, and helpful support. Request a quote if you need bulk amounts or special packaging.",
      },
      {
        type: "safety",
        title: "How to Handle It Safely",
        content:
          "When working with TKPP, wear gloves and safety goggles. Avoid breathing in dust. Keep it in a dry place away from acids. You can request the SDS if you need full safety details.",
      },
      {
        type: "",
        title: "Buying Tetrapotassium Pyrophosphate in Australia",
        content:
          "Pascom delivers across Australia and can organise pickup too. We offer flexible packaging for your needs. Contact us for more info or to place an order.",
      },
      {
        type: "",
        title: "Quick Product Info",
        properties: [
          {
            label: "CAS Number",
            value: "7320-34-5",
          },
          {
            label: "Look",
            value: "White, powder or granules",
          },
          {
            label: "Smell",
            value: "Odourless",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water",
          },
          {
            label: "pH (1% solution)",
            value: "7.0–10.0",
          },
          {
            label: "Density",
            value: "About 2.33 g/cm³",
          },
          {
            label: "Melting Point",
            value: "Breaks down before melting",
          },
          {
            label: "Stability",
            value:
              "Safe under normal conditions, but keep away from acids and heat",
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
              "Can mildly irritate skin and eyes, so wear PPE.\n\nDon't breathe in the dust—use ventilation or a mask.\n\nIt's not meant to be eaten.\n\nStore it dry, cool, and away from acids.",
          },
        ],
      },
    ],
  },
  {
    slug: "triethylene-glycol",
    name: "Triethylene Glycol",
    description:
      "Triethylene glycol is a colorless, odorless, and hygroscopic liquid used primarily as a solvent and in the production of plastics and resins. It is commonly employed in industrial processes and as a component in antifreeze formulations. This chemical is known for its low toxicity and ability to retain moisture.",
    sections: [
      {
        type: "overview",
        title: "Triethylene Glycol – Simple and Reliable for Industrial Use",
        content:
          "Triethylene Glycol (TEG) is a clear, odourless liquid that's used in many industries. It's mainly known for removing water from gas and air systems. Because it absorbs water so well, it helps keep pipelines and equipment running safely.\n\nIn Australia, it's commonly used in gas plants, air-conditioning systems, and chemical production. People choose it because it's stable, doesn't evaporate easily, and is low in toxicity.",
      },
      {
        type: "",
        title: "What Is Triethylene Glycol?",
        content:
          "Triethylene Glycol comes from mixing ethylene oxide with water. It's a thick liquid with strong water-absorbing ability. Its chemical formula is C₆H₁₄O₄. It boils at 285°C and doesn't produce much vapour, which makes it good for closed systems. The industrial grade is usually 99% pure and stores well under normal conditions.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "TEG is mainly used to dry out natural gas. It helps stop rust and blockages in pipelines. It's also used in air systems, especially in HVAC setups, to keep moisture levels down. You'll also find it in things like plasticisers, lubricants, and solvents. Because it's fairly safe and biodegradable, it sometimes shows up in cosmetic products and cleaning fluids too.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "We supply Triethylene Glycol in bulk, with options like drums or IBCs. You get steady quality, quick delivery across Australia, and support if you need help with your setup. To get pricing, request a quote here.",
      },
      {
        type: "safety",
        title: "Safe Handling Tips",
        content:
          "Wear gloves and goggles when handling TEG. Work in a space with good airflow and avoid getting it on your skin or in your eyes. You can get the full safety sheet here. Store it in a cool, dry place, away from things like oxidisers.",
      },
      {
        type: "",
        title: "Order Triethylene Glycol in Australia",
        content:
          "Need Triethylene Glycol for your site? We offer pick-up and delivery across Australia. To ask a question or get a price, contact us or submit your enquiry online.",
      },
      {
        type: "",
        title: "Product Info",
        properties: [
          {
            label: "CAS Number",
            value: "112-27-6",
          },
          {
            label: "Looks Like",
            value: "Clear, colourless liquid",
          },
          {
            label: "Smell",
            value: "Odourless or slight smell",
          },
          {
            label: "Solubility",
            value: "Mixes fully with water",
          },
          {
            label: "pH Level",
            value: "Neutral",
          },
          {
            label: "Density",
            value: "About 1.12 g/cm³ (20°C)",
          },
          {
            label: "Boiling Point",
            value: "285°C",
          },
          {
            label: "Stability",
            value: "Stays stable under normal storage",
          },
          {
            label: "Reacts With",
            value: "Keep away from strong oxidisers",
          },
        ],
      },
      {
        type: "",
        title: "Quick Safety Notes",
        properties: [
          {
            label: "Skin & Eyes",
            value: "Can irritate, wear protective gear.",
          },
          {
            label: "Breathing",
            value: "Low vapour risk, avoid breathing heated vapour.",
          },
          {
            label: "Swallowing",
            value: "Low toxicity but not for eating.",
          },
          {
            label: "Storage",
            value:
              "Seal containers well. Keep in a ventilated, cool place away from sunlight and reactive chemicals.",
          },
        ],
      },
    ],
  },
  {
    slug: "trisodium-phosphate-98",
    name: "Trisodium Phosphate 98%",
    description:
      "Trisodium phosphate 98% is a highly concentrated, crystalline salt used primarily as a cleaning agent, pH regulator, and in various industrial processes. This white, odorless powder is highly alkaline and effective in degreasing and cleaning applications.",
    sections: [
      {
        type: "overview",
        title: "Trisodium Phosphate 98% – Industrial Cleaning Agent",
        content:
          "Trisodium Phosphate 98% is a strong cleaner used in many industries. It removes grease, oil, and mineral build-up. It's common in food processing, metal work, and water systems in Australia.\n\nWith 98% purity, it works well for heavy cleaning and surface prep, making it a reliable choice for factories and workshops.",
      },
      {
        type: "",
        title: "What Is Trisodium Phosphate 98%?",
        content:
          "Trisodium Phosphate (TSP) is a simple chemical (Na₃PO₄). It looks like a white powder, dissolves easily in water, and makes an alkaline solution.\n\nThis makes it good for tough cleaning, surface preparation, and fixing water pH levels. It also helps remove stubborn stains and can improve the lifespan of equipment.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Trisodium Phosphate 98% is often used in:\n\nIndustrial Cleaning: Cuts through grease and grime in kitchens, food factories, and workshops.\n\nMetal Work: Prepares surfaces before painting or coating so the finish lasts longer.\n\nWater Systems: Helps soften water and stop scale from building up in pipes and boilers.\n\nFood Processing: Used in small amounts for cleaning equipment (where allowed).",
      },
      {
        type: "",
        title: "Why Buy from Pascom",
        content:
          "Pascom supplies Trisodium Phosphate 98% in Australia. You can get it in 25 kg bags or in bulk. We keep stock ready for quick delivery.\n\nWe offer simple supply options without hassle. Request a quote here.",
      },
      {
        type: "safety",
        title: "Safe Handling and Storage",
        content:
          "Wear gloves, goggles, and protective clothing when using TSP. Work in a ventilated area to avoid breathing in dust. It can irritate skin and eyes.\n\nStore it in a dry, cool place away from acids. Request the full safety sheet here.",
      },
      {
        type: "",
        title: "Order Trisodium Phosphate 98% in Australia",
        content:
          "We offer delivery and pickup options across Australia. Small or bulk orders are available. Contact us to place an order.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "7601-54-9",
          },
          {
            label: "Look",
            value: "White powder",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Dissolves in water",
          },
          {
            label: "pH (1% solution)",
            value: "11.5 – 12.5",
          },
          {
            label: "Density",
            value: "~2.5 g/cm³",
          },
          {
            label: "Melting Point",
            value: "Breaks down over 100°C",
          },
          {
            label: "Storage",
            value: "Stays stable in normal storage",
          },
        ],
      },
      {
        type: "",
        title: "Safety Summary",
        properties: [
          {
            label: "Safety Summary",
            value:
              "Can irritate skin and eyes\n\nAvoid breathing in the dust\n\nHarmful if swallowed in large amounts\n\nKeep away from acids, store in a dry place",
          },
        ],
      },
    ],
  },
  {
    slug: "urea",
    name: "Urea",
    description:
      "Urea is a colorless, crystalline compound commonly used in fertilizers, pharmaceuticals, and cosmetics. It is a byproduct of protein metabolism in the body and is known for its ability to retain moisture and improve the texture of various products.",
    sections: [
      {
        type: "overview",
        title: "Urea – A Reliable Nitrogen Fertiliser for Farms and Industry",
        content:
          "Urea is a simple, effective fertiliser used widely in Australian farming and industry. It contains about 46% nitrogen, making it one of the strongest solid nitrogen fertilisers available. It helps crops grow well and is also useful in different industrial processes.\n\nUrea's chemical makeup means it's not just for farms. It's used in factories, animal feed, and other industries. You can get it in granular or prilled forms, which makes it easy to use in broadacre farming, horticulture, and industrial work across Australia.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          "Urea (CO(NH₂)₂) is made by reacting ammonia and carbon dioxide under pressure. It comes out as white, odourless crystals or small granules. It dissolves quickly in water, so plants can absorb it fast.\n\nBesides farming, it is used in making resins, glues, and diesel exhaust fluids like AdBlue®. Its high nitrogen level and wide uses make it a key product in many industries around the world.",
      },
      {
        type: "",
        title: "Main Uses in Farming and Industry",
        content:
          "On farms, it is a go-to source of nitrogen. It helps crops like wheat, grasses, sugarcane, and vegetables grow stronger and give better yields. In industry, it's used to make things like urea-formaldehyde resins, melamine, and AdBlue® for diesel engines.\n\nFarmers and businesses like this chemical because it's easy to use, affordable, and effective at supplying nitrogen or working as a chemical ingredient.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "Pascom is a reliable Urea supplier in Australia. We supply high-quality chemicals in bulk or smaller packs, depending on what you need. Everything goes through strict quality checks to make sure it's safe and works well.\n\nWe offer both granular and prilled Urea with flexible delivery across Australia. You can get it fast, whether you're running a farm or a factory. To ask a question or get a price, Request a Quote.",
      },
      {
        type: "safety",
        title: "How to Store and Handle Safely",
        content:
          "Keep Urea in a cool, dry spot with good airflow. Don't let it get wet or sit in the sun, or it might clump together. Wear gloves and eye protection when handling, especially if it's dusty. For full safety details, request the Urea SDS here.",
      },
      {
        type: "",
        title: "Urea Available Across Australia",
        content:
          "If you need fertiliser or raw materials, Urea is available for delivery or pick-up anywhere in Australia. For info on bulk orders or packing options, get in touch.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS",
            value: "57-13-6",
          },
          {
            label: "Looks Like",
            value: "White powder or small granules",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Solubility",
            value: "Dissolves easily in water",
          },
          {
            label: "pH",
            value: "Neutral when mixed with water",
          },
          {
            label: "Nitrogen Level",
            value: "About 46%",
          },
          {
            label: "Melting Point",
            value: "132°C (breaks down before boiling)",
          },
          {
            label: "Stability",
            value:
              "Safe under normal conditions but can break down slowly in humid air",
          },
          {
            label: "Delivery and Pick-Up",
            value:
              "Available in bulk bags, 25 kg bags, or custom sizes. Contact us for options that fit your needs.",
          },
        ],
      },
    ],
  },
  {
    slug: "urea-solution-20-50",
    name: "Urea solution 20%, 50%",
    description:
      "Urea solutions 20% and 50% are concentrated aqueous solutions of urea, commonly used in industrial applications, agriculture, and as a fertilizer. This clear liquid is utilized for its ability to provide essential nitrogen and as a source of nutrients for various processes.",
    sections: [
      {
        type: "overview",
        title: "Urea Solution – 20% and 50% Grades for Industry Use",
        content:
          "We supply Urea Solution in two grades: 20% and 50%. It's used in farming, medicine, cosmetics, and water treatment. Our products are easy to handle and mix well with water. We deliver across Australia and focus on quality and reliable supply.",
      },
      {
        type: "",
        title: "What Is This Solution?",
        content:
          "Urea, also called Carbamide, is a simple organic compound (CO(NH2)2). It's colourless, dissolves easily in water, and has no smell. People use it as a nitrogen fertilizer, in skincare products, and in industrial processes like making resins. You might also hear it called Urea Water or Industrial Urea Liquid.",
      },
      {
        type: "",
        title: "Available Urea Grades",
        content:
          "Urea Solution 20%\n20% solution is a lower strength option where you need more control over nitrogen levels. It's often used for:\n\nSkin creams and moisturisers\nMedicines and veterinary treatments\nSpray fertilizers for fast nitrogen absorption\nLooks like: clear, colourless liquid with no strong smell. Mixes easily with water.\n\nUrea Solution 50%\n50% solution is more concentrated. It's a good choice when you need a higher nitrogen level. Common uses include:\n\nDiesel Exhaust Fluid (AdBlue®/DEF)\nHigh-strength fertilizers\nMaking adhesives and resins\nLooks like: clear, thicker liquid with no strong smell. Mixes well with water.",
      },
      {
        type: "",
        title: "Where People Use It",
        content:
          "Urea solution is useful in many industries. Some common uses are:\n\nFarming, as a nitrogen fertilizer\nReducing exhaust emissions in diesel engines\nControlling corrosion in industrial systems\nHydrating skin in personal care products\nIt's flexible, easy to use, and follows industry safety rules.",
      },
      {
        type: "",
        title: "Why Buy From Us?",
        content:
          "Clean and stable product\nDifferent packaging options\nFast delivery around Australia\nWe supply both 20% and 50% urea solutions for small or bulk orders.\nRequest a Quote",
      },
      {
        type: "safety",
        title: "Packaging, Delivery, and Safety",
        content:
          "CAS Number: 57-13-6\nPackaging: 5L, 20L, 200L drums, or 1000L IBCs\nDelivery: Pickup or delivery across Australia\nStorage: Keep in a cool, dry place out of direct sunlight\nRequest Safety Data Sheet",
      },
      {
        type: "",
        title: "Order Urea Solution in Australia",
        content:
          "Need Urea Solution in 20% or 50%? We've got it. Choose the right option for farming, industry, or personal care. Fast delivery, flexible orders.\nGet a Quote",
      },
    ],
  },
  {
    slug: "xylene-isomers",
    name: "Xylene Isomers",
    description:
      "Xylene isomers are a group of three related aromatic hydrocarbons: ortho-xylene, meta-xylene, and para-xylene. These colorless liquids are widely used as solvents in industrial applications, paint thinners, and chemical synthesis. They have a sweet, aromatic odor and are known for their effectiveness in dissolving various substances.",
    sections: [
      {
        type: "overview",
        title: "Xylene Isomer – A Reliable Industrial Solvent",
        content:
          "Xylene Isomer is a clear, colourless liquid used in many industries across Australia. It's known for good solvency and a steady evaporation rate. You'll find it in paints, coatings, adhesives, and cleaning products.\n\nIt works well to dissolve grease, oil, and resins. This makes it a solid choice for anyone needing a dependable solvent.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          "Xylene Isomer is a mix of three types: ortho-xylene, meta-xylene, and para-xylene. The chemical formula is C₈H₁₀. It comes from petroleum and has a sweet smell.\n\nPeople use it because it's strong, doesn't mix with water, and works in lots of settings. Some just call it \"Xylene,\" but the isomer mix gives more stable performance in industrial jobs.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "Xylene Isomer is used in:\n\nPaints and Coatings – Helps paints and varnishes go on smoothly and dry well.\n\nAdhesives and Sealants – Improves how adhesives spread and set.\n\nPrinting – Cleans inks and keeps printing equipment in good shape.\n\nCleaning – Removes oils and residues from machines and metal surfaces.\n\nIts steady evaporation rate and strength make it useful anywhere clean surfaces and smooth finishes are important.",
      },
      {
        type: "",
        title: "Xylene Isomer from Pascom",
        content:
          "Pascom supplies Xylene Isomer in Australia. You can get it in 20L drums, 200L drums, or IBC containers. Delivery is fast and packaging is flexible.\n\nWe stick to strict quality checks and reliable service. Request a quote to see what we can do for you.",
      },
      {
        type: "safety",
        title: "Safe Handling",
        content:
          "Xylene Isomer is flammable. Use it in well-ventilated spaces with gloves, goggles, and protective clothing. Store it in sealed containers away from heat or flames.\n\nFor full safety advice, check the Safety Data Sheet (SDS). Always follow local rules for safe use and disposal.",
      },
      {
        type: "",
        title: "Order Xylene Isomer in Australia",
        content:
          "Need Xylene Isomer? Pascom offers nationwide delivery and pickup. Choose the right size and order what you need. Contact us here to get started.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "1330-20-7",
          },
          {
            label: "Look",
            value: "Clear, colourless liquid",
          },
          {
            label: "Smell",
            value: "Sweet, aromatic",
          },
          {
            label: "Water Solubility",
            value: "Doesn't mix with water",
          },
          {
            label: "Mixes With",
            value: "Most organic solvents",
          },
          {
            label: "Density",
            value: "About 0.86 g/cm³ (20°C)",
          },
          {
            label: "Flash Point",
            value: "27°C",
          },
          {
            label: "Boiling Point Range",
            value: "137–144°C",
          },
          {
            label: "Stability",
            value: "Stable if stored right, flammable",
          },
          {
            label: "Packaging Options",
            value:
              "20L drums, 200L drums, IBC containers. Custom options available.",
          },
        ],
      },
    ],
  },
  {
    slug: "sulfamic-acid-powder-100",
    name: "Sulfamic Acid Powder 100%",
    description:
      "Sulfamic acid 100% is a highly concentrated, solid acid used primarily as a descaling agent and in various industrial applications. This white, crystalline powder is effective in removing mineral deposits and is also utilized in chemical synthesis. It requires careful handling due to its acidic nature.",
    sections: [
      {
        type: "overview",
        title: "Sulfamic Acid Powder 100% – Simple and Reliable Cleaning Agent",
        content:
          "Sulfamic Acid Powder 100% is a straightforward way to clean and remove scale in many industries. It's a white, odourless powder that's easy to use and doesn't absorb moisture from the air. You'll find it in places like metal workshops, food factories, and water treatment plants.\n\nIn Australia, it's a trusted choice for getting rid of limescale, rust, and mineral deposits. It cleans well without giving off dangerous fumes. It also helps keep equipment running smoothly without long downtime.",
      },
      {
        type: "",
        title: "What Is Sulfamic Acid?",
        content:
          "Sulfamic acid (CAS 5329-14-6) comes from sulphuric acid and urea. It's a stable, crystalline powder that dissolves quickly in water. The solution is clear and odourless.\n\nPeople use it because it works well for cleaning and adjusting pH, and it's safer than stronger acids. It does the job without the risks of more hazardous chemicals.",
      },
      {
        type: "",
        title: "Where It's Used",
        content:
          "Here's where Sulfamic Acid Powder 100% usually comes in handy:\n\nDescaling: Clears out scale in boilers, heat exchangers, and cooling systems.\n\nCleaning: Good for tiles, bathrooms, and kitchen surfaces. It doesn't corrode most metals.\n\nFood industry: Safe for cleaning stainless steel in food plants.\n\nPaper mills: Helps clean production equipment like felt wires.\n\npH control: Used in different formulations to balance pH.\n\nIt's a solid choice when you need something safer than hydrochloric acid but just as effective.",
      },
      {
        type: "",
        title: "Why Buy From Us",
        content:
          "We supply Sulfamic Acid Powder 100% in Australia with reliable quality. You get high purity and secure packaging. Whether you need a few bags or a bulk order, we've got options.\nRequest a quote here.",
      },
      {
        type: "safety",
        title: "Safe Handling Tips",
        content:
          "Wear gloves, goggles, and protective clothing when using it. Work in a place with good airflow so you don't breathe in dust. It's safer than many other acids, but you should still avoid direct contact. Store it somewhere cool and dry, away from moisture and strong chemicals.\nRequest the full safety guide (SDS) here.",
      },
      {
        type: "",
        title: "Order Sulfamic Acid Powder 100% in Australia",
        content:
          "You can order Sulfamic Acid Powder 100% for quick delivery or pickup. We offer flexible packaging for whatever amount you need.\nGet a quote today.",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "5329-14-6",
          },
          {
            label: "Form",
            value: "White, crystalline powder",
          },
          {
            label: "Smell",
            value: "None",
          },
          {
            label: "Water Solubility",
            value: "High",
          },
          {
            label: "pH (1% solution)",
            value: "1.0–1.5",
          },
          {
            label: "Density",
            value: "About 2.126 g/cm³",
          },
          {
            label: "Melting Point",
            value: "205°C (breaks down at this point)",
          },
          {
            label: "Stability",
            value: "Stays stable in normal conditions",
          },
          {
            label: "Reacts With",
            value: "Strong bases and oxidisers",
          },
        ],
      },
      {
        type: "",
        title: "Packaging and Delivery",
        properties: [
          {
            label: "Sizes",
            value: "25 kg bags, 50 kg drums, or custom packaging",
          },
          {
            label: "Delivery",
            value: "Pickup or Australia-wide shipping",
          },
          {
            label: "Inquiries",
            value: "Ask us about bulk orders here.",
          },
        ],
      },
    ],
  },
  {
    slug: "sodium-hypochlorite-solutions",
    name: "Sodium Hypochlorite Solutions 5%, 12.5%",
    description:
      "Sodium hypochlorite 5% and 12.5% solutions are commonly used as disinfectants and bleach. This clear to slightly yellow liquid is effective for sanitizing surfaces, purifying water, and removing stains. Its strength varies based on concentration, but it requires careful handling due to its corrosive nature.",
    sections: [
      {
        type: "overview",
        title: "Sodium Hypochlorite – Industrial-Grade Solutions",
        content:
          "Sodium Hypochlorite is used in many industries. We supply it in two common strengths: 5% and 12.5%. It's used for water treatment, cleaning in food production, general disinfection, and more. As a sodium hypochlorite supplier in Australia, we provide reliable products with simple ordering and delivery.",
      },
      {
        type: "",
        title: "What Is Sodium Hypochlorite?",
        content:
          'Sodium Hypochlorite (NaOCl) is a clear or pale yellow liquid with a strong smell, like chlorine. Most people know it as liquid bleach. It kills bacteria, viruses, and algae. It\'s also used to whiten fabrics and clean surfaces. You might also see it called "Hypochlorous acid sodium salt."',
      },
      {
        type: "",
        title: "Product Options",
        content:
          "🧪 5% Solution\nThis lower concentration is often used in food production, cleaning, and small water systems. It's easier to handle and safer for regular use. You'll see it as a pale yellow liquid with a bleach smell.\n\n🧪 12.5% Solution\nThis stronger option is used for bigger jobs — like treating public water, disinfecting large areas, and industrial bleaching. It's common for pool cleaning, laundry services, and waste treatment plants.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "Industries use Sodium Hypochlorite because it works well and is easy to apply. Common uses include:\n\n✅ Keeping water clean and safe to drink\n\n✅ Sanitising food areas (at low concentrations)\n\n✅ Disinfecting hospitals and hotels\n\n✅ Bleaching and cleaning in factories\n\nIt's useful because it does the job quickly and doesn't cost much to use.",
      },
      {
        type: "",
        title: "Why Buy from Us?",
        content:
          "✅ We keep quality consistent across every batch\n\n✅ Our products follow Australian safety rules\n\n✅ You can choose packaging sizes based on your needs\n\n✅ Fast delivery across Australia\n\nRequest a Quote",
      },
      {
        type: "safety",
        title: "📦 Packaging and Delivery",
        content:
          "CAS Number: 7681-52-9\n\nWe offer options from small 5L packs to large bulk containers. Store it in a cool place, away from sunlight and incompatible materials. You can pick it up or get it delivered anywhere in Australia.\n\nRequest SDS",
      },
      {
        type: "",
        title: "🇦🇺 Order Sodium Hypochlorite in Australia",
        content:
          "Get the grade you need, 5% or 12.5%, delivered to your site. We make it simple to order, with flexible pack sizes and quick service.\n\nGet a Quote Today",
      },
    ],
  },
  {
    slug: "sodium-chlorite-31",
    name: "Sodium Chlorite 31%",
    description:
      "Sodium Chlorite 31% is a concentrated aqueous solution of sodium chlorite, commonly used as a powerful oxidizing agent and disinfectant. This clear, yellowish liquid is widely applied in water treatment for disinfection, in the textile industry for bleaching, and in the production of chlorine dioxide.",
    sections: [
      {
        type: "overview",
        title: "Sodium Chlorite 31% – Reliable Water Treatment Chemical",
        content:
          "Sodium Chlorite 31% is a clear or slightly yellow liquid used for water treatment, disinfection, and industrial bleaching. It's common in Australia for making chlorine dioxide, which is useful in water plants, food processing, and the pulp and paper industry.\n\nIt helps remove harmful germs, keeps odours under control, and supports clean production environments. Since it's a stable liquid, it's easier to handle than chlorine gas.",
      },
      {
        type: "",
        title: "What Is Sodium Chlorite 31%?",
        content:
          "Sodium Chlorite 31% is made by reacting sodium chlorate with certain reducing agents. It contains 31% active sodium chlorite by weight. The main reason people use it is to produce chlorine dioxide when needed. This cuts down on risks because there's no need to store chlorine gas.\n\nIt's available in bulk, meets Australian water treatment standards, and comes with full traceability.",
      },
      {
        type: "",
        title: "Where It's Used and Why It Helps",
        content:
          "Sodium Chlorite 31% is used in many industries because it's reliable:\n\nIn water plants, it's used to make chlorine dioxide for disinfecting drinking water.\n\nIn food factories, it keeps equipment clean and helps lower contamination.\n\nIn paper mills, it's used for bleaching without making as many harmful by-products.\n\nIn wastewater plants, it helps with odour control and treating industrial waste.\n\nIt's more stable than other oxidisers, releases chlorine dioxide in a controlled way, and reduces unwanted reactions.",
      },
      {
        type: "",
        title: "Why Buy from Us",
        content:
          "We supply Sodium Chlorite 31% across Australia with consistent quality and flexible delivery. You can get it in 25L drums, 200L drums, or 1000L IBCs.\n\nWe also provide safety data sheets (SDS) and can help you figure out what's best for your operation. Get a Quote or contact us for advice.",
      },
      {
        type: "safety",
        title: "Handling and Storage",
        content:
          "This chemical needs careful handling. Always wear gloves, eye protection, and protective clothing. Keep it in a cool, ventilated space, away from heat, acids, and organic materials.\n\nRead the SDS",
      },
      {
        type: "",
        title: "Buying Options in Australia",
        content:
          "We offer pickup and delivery Australia-wide. Bulk supply or custom packaging available. Contact us to order or ask questions.\n\nPackaging Options: 25L, 200L, and 1000L IBCs.\n\nCAS Number: 7758-19-2",
      },
      {
        type: "",
        title: "Product Details",
        properties: [
          {
            label: "Appearance",
            value: "Clear to light yellow liquid",
          },
          {
            label: "Smell",
            value: "Mild chlorine-like odour",
          },
          {
            label: "Solubility",
            value: "Fully dissolves in water",
          },
          {
            label: "pH",
            value: "12–13 (alkaline)",
          },
          {
            label: "Density",
            value: "Around 1.15 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable when stored properly",
          },
          {
            label: "Reactivity",
            value:
              "Reacts with acids and organic materials, releases chlorine dioxide when activated",
          },
        ],
      },
      {
        type: "",
        title: "Safety Notes",
        properties: [
          {
            label: "Skin and Eyes",
            value: "Can irritate, use proper protection",
          },
          {
            label: "Breathing",
            value: "Don't inhale fumes; good ventilation is important",
          },
          {
            label: "Swallowing",
            value: "Harmful if swallowed",
          },
          {
            label: "Reactions",
            value: "Keep away from acids and organics",
          },
          {
            label: "Storage",
            value: "Cool, dry, and ventilated area only",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-70",
    name: "Ammonium Bisulphite – 70%",
    description:
      "Ammonium Bisulphite 70% is a high-concentration sulfur-based solution widely used in oxygen scavenging for boiler water treatment, oilfield applications, and industrial preservation. Known for its efficiency in preventing corrosion, this chemical is vital in ensuring system longevity in industrial environments.",
    sections: [
      {
        type: "overview",
        title:
          "Ammonium Bisulphite-70%: A Powerful Oxygen Scavenger for Industrial Use",
        content:
          "Ammonium Bisulphite – 70% is a high-strength reducing agent widely used in industries that require effective oxygen removal. With its potent 70% concentration, it is one of the most efficient chemicals for preventing corrosion and oxidation in systems exposed to air or dissolved gases.\n\nThis pale yellow liquid is chemically composed of NH₄HSO₃ and is typically applied in environments where metal components, pipelines, or storage systems are vulnerable to rust and degradation. Its ability to bind with and neutralize dissolved oxygen makes it ideal for water treatment, oil and gas production, and pulp bleaching applications.",
      },
      {
        type: "",
        title: "Key Applications and Industrial Benefits",
        content:
          "In the oil and gas industry, Ammonium Bisulphite – 70% is injected into water lines to eliminate oxygen before it reaches sensitive metal surfaces. This helps reduce the risk of corrosion, extending the lifespan of infrastructure. It's also essential in boiler feedwater treatment to prevent oxygen pitting and scaling.\n\nAdditionally, it's used in the pulp and paper industry as a reducing agent for lignin removal and brightness control. Its high reactivity ensures minimal chemical waste and improved processing efficiency.",
      },
      {
        type: "safety",
        title: "Storage and Handling Considerations",
        content:
          "While highly effective, Ammonium Bisulphite – 70% should be handled with care. It must be stored in cool, dry, and ventilated areas away from oxidizers. Proper PPE including gloves and eye protection is recommended.\n\nFor technical data and safety sheets,",
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-65",
    name: "Ammonium Bisulphite – 65%",
    description:
      "Ammonium Bisulphite 65% is a versatile chemical solution used in industrial settings for oxygen scavenging, corrosion control, and preservation of pipelines and equipment. Its high sulfur content makes it effective in water treatment and oilfield processes.",
    sections: [
      {
        type: "overview",
        title: "Ammonium Bisulphite – 65%",
        content:
          "Ammonium Bisulphite 65% is a versatile chemical solution used in industrial settings for oxygen scavenging, corrosion control, and preservation of pipelines and equipment. Its high sulfur content makes it effective in water treatment and oilfield processes.",
      },
      {
        type: "",
        title: "Available for Delivery & Pick up",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Purchasing Options for Packaging",
            value:
              "Details are available upon request. Customizable options may be available. Please inquire about the options.",
          },
          {
            label: "CAS",
            value: "10192-30-0",
          },
          {
            label: "Appearance",
            value: "Clear to yellowish liquid",
          },
          {
            label: "Odor",
            value: "Sulfur-like odor",
          },
          {
            label: "Solubility",
            value: "Fully soluble in water",
          },
          {
            label: "pH",
            value: "Typically acidic (approx. 4.5 – 5.5)",
          },
          {
            label: "Density",
            value: "Approx. 1.28 g/cm³ at 65% concentration",
          },
          {
            label: "Stability",
            value: "Stable under normal handling conditions",
          },
          {
            label: "Corrosive Properties",
            value: "May corrode metal surfaces if exposed over long periods",
          },
        ],
      },
      {
        type: "",
        title: "Other Names",
        content:
          "Ammonium Hydrogen Sulfite\nABS Solution\nBoiler Oxygen Scavenger",
      },
      {
        type: "safety",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Irritation",
            value: "Use gloves and goggles to prevent irritation",
          },
          {
            label: "Inhalation Risk",
            value: "Ensure good ventilation to minimize exposure to vapors",
          },
          {
            label: "Ingestion Hazard",
            value: "Do not ingest; harmful if swallowed",
          },
          {
            label: "Reactivity Risk",
            value: "Keep away from strong oxidizers and acids",
          },
          {
            label: "Storage",
            value: "Store in a cool, dark, well-ventilated location",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-60",
    name: "Ammonium Bisulphite – 60%",
    description:
      "Ammonium Bisulphite – 60% is a moderately concentrated sulfur-based compound primarily used for oxygen scavenging in industrial water systems and oilfield operations. It is also applied in preservation and bleaching processes across various industries.",
    sections: [
      {
        type: "overview",
        title:
          "Ammonium Bisulphite – 60% – High-Concentration Oxygen Scavenger for Demanding Applications",
        content:
          "Ammonium Bisulphite – 60% is a high-purity oxygen scavenger chemical formulated for aggressive corrosion control in critical industrial systems. With a powerful 60% concentration, it rapidly reacts with dissolved oxygen, making it ideal for use in high-pressure boiler feedwater treatment, petrochemical processing, and oilfield operations.\n\nThis advanced formulation is used throughout Australia to protect valuable infrastructure from oxidation damage, ensuring safety, reliability, and efficiency.",
      },
      {
        type: "",
        title: "What Is Ammonium Bisulphite – 60%?",
        content:
          "Ammonium Bisulphite – 60% is a concentrated aqueous solution containing 60% ammonium bisulphite (NH₄HSO₃) by weight. It's made by combining ammonia and sulphur dioxide under controlled conditions to yield a pale yellow liquid with excellent solubility and reactivity. In American usage, this may also be referred to as ammonium bisulfite (US spelling).\n\nThe 60% strength provides increased efficiency for applications where fast oxygen elimination is necessary, especially under elevated temperatures and pressures.",
      },
      {
        type: "",
        title: "Key Industrial Applications",
        content:
          "Ammonium Bisulphite – 60% is used extensively in:\n\nHigh-temperature boiler feedwater treatment systems to prevent scaling and internal corrosion.\nAs a high-performance corrosion inhibitor in oil and gas pipelines, refineries, and offshore platforms.\nPaper manufacturing and food-grade caramel colour production, where reactivity must be tightly controlled.\n\nCompared to similar agents, it offers excellent results in both acidic and neutral systems. When evaluating sulphite vs bisulphite performance, bisulphite provides faster reaction times and superior solubility for demanding operations.",
      },
      {
        type: "",
        title: "Why Choose Us as Your Supplier?",
        content:
          "As a leading ammonium bisulphite supplier Australia, we provide high-concentration solutions like Ammonium Bisulphite – 60% in bulk quantities tailored to industrial specifications. Packaging options include drums, IBCs, and tanker loads.\n\nWe guarantee consistent product quality, technical support, and Australia-wide distribution. Enquire now to get a quote.",
      },
      {
        type: "safety",
        title: "Safe Handling & Storage",
        content:
          "Always store Ammonium Bisulphite – 60% in a cool, dry, and ventilated area. Avoid contact with oxidising agents and acids. Use protective gloves, safety glasses, and respirators where necessary. Refer to our SDS request form to access full safety documentation.\n\nFor best results, understanding sulphite vs bisulphite chemistry can help you choose the most effective solution for your operational needs.",
      },
      {
        type: "",
        title: "Buy Ammonium Bisulphite – 60% in Australia",
        content:
          "Looking for high-strength Ammonium Bisulphite – 60%? We supply this powerful scavenger to industries across Australia with fast shipping and expert support. Ideal for mission-critical systems requiring reliable oxygen removal.\n\nClick here to request a custom quote.",
      },
      {
        type: "",
        title: "✅ Additional Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "10102-43-9",
          },
          {
            label: "Concentration",
            value: "60%",
          },
          {
            label: "Appearance",
            value: "Pale yellow liquid",
          },
          {
            label: "Odour",
            value: "Mild, sulphurous",
          },
          {
            label: "Solubility",
            value: "Fully water-soluble",
          },
          {
            label: "pH",
            value: "4.0–5.0",
          },
          {
            label: "Density",
            value: "Approx. 1.35–1.4 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable under ambient conditions",
          },
          {
            label: "Precautions",
            value: "May irritate skin or respiratory system; PPE recommended",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-40",
    name: "Ammonium Bisulphite – 40%",
    description:
      "Ammonium Bisulphite – 40% is a lower-concentration solution commonly used in water treatment, paper bleaching, and food preservation (in some cases). It serves as an efficient oxygen scavenger and is ideal for applications that require reduced reactivity or milder chemical action.",
    sections: [
      {
        type: "overview",
        title:
          "Ammonium Bisulphite – 40% – Reliable Oxygen Scavenger for Industrial Water Systems",
        content:
          "Ammonium Bisulphite – 40% is a widely used oxygen scavenger chemical engineered for safe, efficient removal of dissolved oxygen in industrial processes. Its 40% concentration makes it ideal for moderate-duty corrosion control, particularly in boiler feedwater treatment and oil & gas operations.\n\nThis stable, pale yellow solution is trusted across Australian industries to protect pipelines, heat exchangers, and storage tanks from oxygen-related corrosion. As a cost-effective and effective corrosion inhibitor, it ensures operational safety and equipment longevity.",
      },
      {
        type: "",
        title: "What Is Ammonium Bisulphite – 40%?",
        content:
          "Ammonium Bisulphite – 40% is a liquid blend of ammonia and sulphur dioxide, producing the active chemical NH₄HSO₃. This 40% concentration is carefully formulated to balance performance and safety. In the US, the term is often spelled as ammonium bisulfite (US spelling).\n\nThis solution is commonly used in closed-loop systems, where removing dissolved oxygen is vital to prevent pitting, scaling, and oxidation damage. The 40% grade is suitable for systems that don't require highly reactive scavengers, offering dependable performance across applications.",
      },
      {
        type: "",
        title: "Key Industrial Applications",
        content:
          "Ammonium Bisulphite – 40% is used extensively in:\n\nBoiler feedwater treatment to eliminate oxygen that causes corrosion and scale formation in boiler tubes.\nAs a corrosion inhibitor in cooling systems, pipelines, and oilfield water injection processes.\nFood-grade processes such as caramel colour production, where controlled reactivity is required.\n\nWhen comparing sulphite vs bisulphite solutions, the bisulphite variant is generally preferred for water-based systems due to its higher solubility and effectiveness at lower pH levels.",
      },
      {
        type: "",
        title: "Why Choose Us as Your Supplier?",
        content:
          "We are a leading ammonium bisulphite supplier Australia, offering high-quality 40% solutions tailored to your industrial needs. Our product is available in drums, IBCs, and bulk containers, ensuring flexibility for different scale requirements.\n\nWe guarantee product consistency, local support, and timely shipping. Request a quote or product consultation here.",
      },
      {
        type: "safety",
        title: "Safe Handling & Storage",
        content:
          "Store in a cool, dry, and ventilated space away from oxidising agents. Use gloves, eye protection, and protective clothing while handling the chemical. Refer to the SDS for full safety details, which you can request via our SDS Request Form.\n\nUnderstanding sulphite vs bisulphite chemistry is important for selecting the right solution for your process requirements.",
      },
      {
        type: "",
        title: "Buy Ammonium Bisulphite – 40% in Australia",
        content:
          "Ammonium Bisulphite – 40% is available for nationwide delivery and local pickup. We support industries across mining, food production, and water treatment with high-purity chemical solutions.\n\nContact us today to learn more or to place an order.",
      },
      {
        type: "",
        title: "✅ Additional Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "10102-43-9",
          },
          {
            label: "Concentration",
            value: "40%",
          },
          {
            label: "Appearance",
            value: "Pale yellow liquid",
          },
          {
            label: "Odour",
            value: "Mild sulphurous",
          },
          {
            label: "Solubility",
            value: "Fully water-soluble",
          },
          {
            label: "Density",
            value: "Approx. 1.3 g/cm³",
          },
          {
            label: "pH",
            value: "4.0–5.0",
          },
          {
            label: "Stability",
            value: "Stable under ambient conditions",
          },
          {
            label: "Safety Notes",
            value: "May cause irritation on contact; always use PPE",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-food-grade",
    name: "Ammonium Bisulphite Food Grade",
    description:
      "Ammonium Bisulphite Food Grade is a high-purity additive used in the food and beverage industry as a preservative and antioxidant. It is especially effective in preventing microbial growth and maintaining product freshness in processing environments.",
    sections: [
      {
        type: "overview",
        title: "Ammonium Bisulphite Food Grade",
        content:
          "Ammonium Bisulphite Food Grade is a high-purity additive used in the food and beverage industry as a preservative and antioxidant. It is especially effective in preventing microbial growth and maintaining product freshness in processing environments.\n\nThe document titled Ammonium Bisulphite Food Grade provides comprehensive information on the quality and specifications of Ammonium Bisulphite Food Grade. This formal document serves as a detailed guide for understanding the properties and applications of Ammonium Bisulphite Food Grade in various food-related industries. For those seeking precise details on Ammonium Bisulphite Food Grade, this document is an invaluable resource.",
      },
      {
        type: "",
        title: "Available for Delivery & Pick up",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Purchasing Options for Packaging",
            value:
              "Details are available upon request. Customizable options may be available. Please inquire about the options.",
          },
          {
            label: "CAS",
            value: "10192-30-0",
          },
          {
            label: "Appearance",
            value: "Clear to slightly yellow liquid",
          },
          {
            label: "Odor",
            value: "Low to no detectable odor",
          },
          {
            label: "Solubility",
            value: "Completely soluble in water",
          },
          {
            label: "pH",
            value: "Around 5.0 – 6.0",
          },
          {
            label: "Density",
            value: "Approx. 1.14 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable in sealed packaging when stored properly",
          },
          {
            label: "Corrosive Properties",
            value: "Non-corrosive under typical food-grade storage conditions",
          },
        ],
      },
      {
        type: "",
        title: "Other Names",
        content: "ABS Food Grade\nAmmonium Hydrogen Sulfite\nPreservative EBS",
      },
      {
        type: "safety",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Irritation",
            value: "Low risk, but use gloves and protection in bulk handling",
          },
          {
            label: "Inhalation Risk",
            value: "Minimal; ensure basic ventilation in enclosed environments",
          },
          {
            label: "Ingestion Hazard",
            value: "Approved for controlled food use; avoid unregulated intake",
          },
          {
            label: "Reactivity Risk",
            value: "Do not mix with strong oxidizers",
          },
          {
            label: "Storage",
            value: "Keep in food-safe containers in a clean, dry location",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonium-sulphite-solution-40",
    name: "Ammonium Sulphite Solution – 40%",
    description:
      "Ammonium Sulphite Solution – 40% is a clear, water-soluble liquid widely used in pulp and paper bleaching, photographic development, and as a reducing agent in various industrial processes. Its moderate concentration makes it suitable for controlled applications.",
    sections: [
      {
        type: "overview",
        title:
          "Ammonium Sulphite Solution – 40% – Premium Oxygen Scavenger for Industrial Applications",
        content:
          "Ammonium Sulphite Solution – 40% is a widely used oxygen scavenger chemical designed for medium-strength corrosion control in industrial water systems. Its carefully maintained 40% concentration ensures predictable performance, especially in applications such as boiler feedwater treatment, chemical processing, and pulp and paper operations.\n\nWith its effective oxygen-removal properties, Ammonium Sulphite Solution – 40% helps extend the life of your equipment by preventing oxidation and corrosion inside pipes, heat exchangers, and tanks. It is trusted across Australia in sectors including power generation, oil refining, and manufacturing.",
      },
      {
        type: "",
        title: "What Is Ammonium Sulphite Solution – 40%?",
        content:
          "Ammonium Sulphite Solution – 40% is produced by reacting sulphur dioxide with aqueous ammonia. This process results in a pale yellow, water-soluble liquid containing 40% active ammonium sulphite by weight. Though chemically different, some industries may refer to it as ammonium bisulfite (US spelling) in the United States.\n\nThe 40% strength formulation provides a reliable balance between stability and reactivity, making it a safer alternative to stronger reductive agents for oxygen control.",
      },
      {
        type: "",
        title: "Key Industrial Applications",
        content:
          "This solution is ideal for:\n\nBoiler feedwater treatment to eliminate dissolved oxygen before it causes scale and internal corrosion.\nUse as a corrosion inhibitor in cooling towers, pipework, and closed-loop systems.\nBleaching and lignin breakdown in the pulp and paper industry.\n\nThe debate between sulphite vs bisulphite is often resolved in favour of sulphite when lower reactivity and thermal stability are key priorities. That's why Ammonium Sulphite Solution – 40% is an ideal fit for moderate-risk systems needing controlled protection.",
      },
      {
        type: "",
        title: "Why Choose Our Supply?",
        content:
          "As an experienced ammonium bisulphite supplier Australia, we also offer reliable, industrial-grade Ammonium Sulphite Solution – 40%. Our solutions come with technical support, fast shipping, and optional safety training. Packaging options include drums, IBCs, and tankers for various volumes.\n\nRequest a quote for bulk orders here.",
      },
      {
        type: "safety",
        title: "Safe Handling & Storage",
        content:
          "Store in cool, well-ventilated areas away from oxidising materials. Use gloves, eye protection, and respiratory masks as needed. For safety guidance, refer to the official SDS via our SDS Request Form.\n\nA proper understanding of sulphite vs bisulphite helps ensure correct product selection based on risk, temperature, and application intensity.",
      },
      {
        type: "",
        title: "Buy Ammonium Sulphite Solution – 40% in Australia",
        content:
          "If you're looking for high-quality Ammonium Sulphite Solution – 40% in Australia, we provide fast dispatch, local support, and reliable packaging. Available for delivery and pickup in all states.\n\nGet in touch to learn more or place an order.",
      },
      {
        type: "",
        title: "✅ Additional Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "10196-04-0",
          },
          {
            label: "Concentration",
            value: "40%",
          },
          {
            label: "Appearance",
            value: "Pale yellow liquid",
          },
          {
            label: "Odour",
            value: "Mild sulphur-like",
          },
          {
            label: "Solubility",
            value: "Fully soluble in water",
          },
          {
            label: "pH",
            value: "4.0–5.5",
          },
          {
            label: "Density",
            value: "Approx. 1.3 g/cm³",
          },
          {
            label: "Stability",
            value: "Stable under ambient conditions",
          },
          {
            label: "Precautions",
            value: "May irritate skin and eyes; use proper PPE",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-solution",
    name: "Ammonium Bisulphite Solution",
    description:
      "Ammonium Bisulphite Solution is a clear, sulfur-based liquid used in industrial water treatment, pulp bleaching, and as an effective oxygen scavenger in boiler feedwater systems. It is known for reducing corrosion and maintaining system performance.",
    sections: [
      {
        type: "overview",
        title:
          "Ammonium Bisulphite Solution – High-Performance Oxygen Scavenger",
        content:
          "Ammonium Bisulphite Solution is a powerful and reliable oxygen scavenger chemical widely used in industrial systems that require protection from oxygen-induced corrosion. This pale yellow liquid contains a stable concentration of active NH₄HSO₃, typically ranging from 40% to 70%, and is ideal for applications in water treatment, oil and gas production, and food processing.\n\nIndustries across Australia and globally depend on Ammonium Bisulphite Solution to eliminate dissolved oxygen from pipelines, storage tanks, and process water loops. As a result, it helps extend equipment life and ensures safer, more efficient operations.",
      },
      {
        type: "",
        title: "What Is Ammonium Bisulphite Solution?",
        content:
          "This solution is formulated by reacting ammonia with sulfur dioxide, creating a stable liquid that is both reactive and easy to handle. In the U.S., it's commonly referred to as ammonium bisulfite (US spelling). Its chemical properties make it ideal for oxygen removal in various closed-loop systems such as cooling towers and feedwater lines.",
      },
      {
        type: "",
        title: "Industrial Applications & Benefits",
        content:
          "In boiler feedwater treatment systems, Ammonium Bisulphite Solution is injected to remove oxygen before it can cause internal rusting or pitting. The compound also works as a corrosion inhibitor in high-pressure pipelines found in oil refineries and offshore rigs. In the paper and pulp sector, it plays a role in bleaching processes and lignin breakdown. It's also approved for certain food manufacturing processes like caramel color production.\n\nAs a sulphite vs bisulphite comparison shows, the bisulphite form is often preferred in industries where stability and controlled reactivity are crucial.",
      },
      {
        type: "",
        title: "Why Choose Pascom as Your Supplier?",
        content:
          "As a trusted ammonium bisulphite supplier Australia, Pascom provides reliable bulk supply with packaging options ranging from drums to IBCs. We ensure product quality, fast delivery across regions, and technical support for your specific application needs. For inquiries or bulk orders, click here to contact us.",
      },
      {
        type: "safety",
        title: "Safe Use & Product Documentation",
        content:
          "Always store Ammonium Bisulphite Solution in a cool, well-ventilated environment, away from heat sources and oxidizers. Use gloves and eye protection when handling. For a detailed safety guide, refer to Hydrite's official data sheet.",
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-nickel",
    name: "Ammonium Bisulphite Nickel",
    description:
      "Ammonium Bisulphite Nickel is a specialized formulation employed in metal finishing, electroplating, and catalyst applications. It integrates nickel ions with the reducing power of bisulphite to enhance deposition control, corrosion resistance, and bath stability in industrial processes.",
    sections: [
      {
        type: "overview",
        title: "Ammonium Bisulphite Nickel",
        content:
          "Ammonium Bisulphite Nickel is a specialized formulation employed in metal finishing, electroplating, and catalyst applications. It integrates nickel ions with the reducing power of bisulphite to enhance deposition control, corrosion resistance, and bath stability in industrial processes.\n\nThe document titled Ammonium Bisulphite Nickel examines the properties and applications of ammonium bisulphite nickel in various industrial processes. This compound, known for its high purity and stability, plays a crucial role in the production of nickel-based products. The research delves into the chemical composition and reactions involving ammonium bisulphite nickel, shedding light on its significance in the metallurgical sector.",
      },
      {
        type: "",
        title: "Available for Delivery & Pick up",
        sub: "Available for Delivery & Pick up",
        properties: [
          {
            label: "Purchasing Options for Packaging",
            value:
              "Details are available upon request. Customizable options may be available. Please inquire about the options.",
          },
          {
            label: "CAS",
            value: "10192-30-0 (Base Component)",
          },
          {
            label: "Appearance",
            value:
              "Pale green to yellowish solution, depending on nickel content",
          },
          {
            label: "Odor",
            value: "Mild sulfurous odor",
          },
          {
            label: "Solubility",
            value: "Fully soluble in water",
          },
          {
            label: "pH",
            value: "Acidic (typically 3.5 – 5.0)",
          },
          {
            label: "Density",
            value: "Varies by formulation; approx. 1.25 – 1.30 g/cm³",
          },
          {
            label: "Stability",
            value:
              "Stable in sealed containers under controlled conditions; avoid prolonged air exposure",
          },
          {
            label: "Corrosive Properties",
            value:
              "May exhibit corrosivity to unprotected metal surfaces and sensitive alloys",
          },
        ],
      },
      {
        type: "",
        title: "Other Names",
        content:
          "Nickel-Bisulphite Complex Solution\nNickel-Ammonium Bisulfite\nNickel Reducing Agent Blend",
      },
      {
        type: "safety",
        title: "Safety Considerations",
        properties: [
          {
            label: "Skin & Eye Irritation",
            value:
              "Use appropriate PPE as contact may cause irritation or allergic reaction due to nickel",
          },
          {
            label: "Inhalation Risk",
            value:
              "Mist or vapor may lead to respiratory discomfort; use local exhaust ventilation",
          },
          {
            label: "Ingestion Hazard",
            value: "Toxic if ingested; do not allow oral exposure",
          },
          {
            label: "Reactivity Risk",
            value:
              "Avoid mixing with oxidizers, acids, and incompatible metals",
          },
          {
            label: "Storage",
            value:
              "Store in a cool, well-ventilated facility, protected from light and heat",
          },
        ],
      },
    ],
  },
  {
    slug: "ammonium-bisulphite-cobalt",
    name: "Ammonium Bisulphite Cobalt",
    description:
      "Ammonium Bisulphite Cobalt is a specialized chemical solution containing cobalt ions, designed for applications in catalyst systems, electronics, and electroplating. It offers enhanced redox performance and is frequently used in petrochemical and gas treatment processes.",
    sections: [
      {
        type: "overview",
        title:
          "Ammonium Bisulphite Cobalt – Premium Oxygen Scavenger for Industrial Systems",
        content:
          "Ammonium Bisulphite Cobalt is a high-performance oxygen scavenger chemical designed for industries requiring advanced corrosion protection. Formulated with cobalt as a catalyst, it enhances the oxygen removal rate, making it highly effective for boiler feedwater treatment, oil & gas systems, and closed-loop water cycles.\n\nThis specialised blend is widely used across industrial plants in Australia to protect pipelines, heaters, and tanks from oxygen-induced deterioration. Its efficiency as a corrosion inhibitor makes it a reliable choice for critical operations demanding high purity and rapid oxygen reduction.",
      },
      {
        type: "",
        title: "What Is Ammonium Bisulphite Cobalt?",
        content:
          "Ammonium Bisulphite Cobalt is a modified solution of ammonium bisulphite (NH₄HSO₃), containing trace amounts of cobalt salt as a catalyst. This results in faster oxygen scavenging reactions and higher stability in feedwater systems. In American usage, it may be referred to as ammonium bisulfite (US spelling).\n\nThe product typically appears as a pale yellow to amber liquid with concentration levels ranging from 40% to 70%. It is water-soluble, reactive, and engineered to meet demanding industrial conditions.",
      },
      {
        type: "",
        title: "Key Industrial Applications",
        content:
          "As a rapid-response oxygen scavenger chemical, Ammonium Bisulphite Cobalt is crucial in environments where dissolved oxygen must be eliminated efficiently. Its primary uses include:\n\nInjection into boiler feedwater treatment systems to prevent rust and metal fatigue.\nCorrosion prevention in oil refineries, offshore drilling rigs, and petrochemical facilities, acting as a powerful corrosion inhibitor.\nApplicable in pulp and paper processing, especially where bleaching requires precise oxygen control.\n\nCompared to other compounds, its formulation highlights the distinction between sulphite vs bisulphite, with the bisulphite variant providing controlled reactivity and better solubility for industrial dosing.",
      },
      {
        type: "",
        title: "Why Choose Us as Your Supplier?",
        content:
          "As a reliable ammonium bisulphite supplier Australia, we offer this cobalt-enhanced solution in bulk volumes suitable for commercial-scale operations. Our product is backed by technical documentation, prompt delivery, and safe packaging solutions tailored to your application.\n\nPackaging options include IBCs, drums, and custom configurations. To discuss your exact needs, request a quote here.",
      },
      {
        type: "safety",
        title: "Safe Handling & Storage",
        content:
          "Handle with care using gloves, eye protection, and appropriate PPE. Ensure adequate ventilation when using. Avoid exposure to acids to prevent decomposition. Understanding the chemistry of sulphite vs bisulphite compounds can help determine the correct chemical for your system.\n\nFor detailed product handling protocols and documentation, visit the SDS request page.",
      },
      {
        type: "",
        title: "Buy Ammonium Bisulphite Cobalt in Australia",
        content:
          "Whether you require pick-up or Australia-wide delivery, we offer fast dispatch and expert support for bulk chemical supply. Our Ammonium Bisulphite Cobalt is ideal for industries that value performance, stability, and compliance.\n\nContact us to inquire about your packaging and bulk requirements today.",
      },
      {
        type: "",
        title: "✅ Additional Product Details",
        properties: [
          {
            label: "CAS Number",
            value: "10102-40-6",
          },
          {
            label: "Appearance",
            value: "Pale yellow to amber liquid",
          },
          {
            label: "Solubility",
            value: "Fully soluble in water",
          },
          {
            label: "Density",
            value: "Approx. 1.3–1.4 g/cm³ (varies with concentration)",
          },
          {
            label: "pH",
            value: "Slightly acidic (3.5–5.5)",
          },
          {
            label: "Stability",
            value: "Stable at room temperature; degrades at high heat",
          },
          {
            label: "Safety",
            value:
              "Use in ventilated areas; avoid inhalation and skin contact; refer to SDS for full handling guide",
          },
        ],
      },
    ],
  },
  {
    slug: "sulfuric-acid-solutions",
    name: "Sulfuric Acid Solutions 60%, 93%, 98%",
    description:
      "Sulfuric Acid Solutions, available in 60%, 93%, and 98% concentrations, are versatile and highly corrosive liquids essential across numerous industries. These clear to slightly yellow solutions are widely utilized in the production of fertilizers, chemicals, and detergents, as well as in petroleum refining, metal processing (such as pickling and electroplating), and water treatment applications. Their strong acidic, oxidizing, and dehydrating properties make them indispensable as catalysts and reactants in a vast array of industrial and chemical synthesis processes, including the manufacturing of explosives, dyes, pigments, and in lead-acid batteries.",
    sections: [
      {
        type: "overview",
        title: "Sulfuric Acid Solutions – 60%, 93%, and 98%",
        content:
          "We supply sulfuric acid in 60%, 93%, and 98% strengths. These are industrial grades, used in manufacturing, water treatment, mining, and chemical processing. We deliver across Australia.",
      },
      {
        type: "",
        title: "What Is It?",
        content:
          'Sulfuric acid (H₂SO₄) is a strong, corrosive acid. People have called it "oil of vitriol" for centuries. It\'s one of the most used industrial chemicals in the world. It looks clear or slightly yellow and has a sharp smell.',
      },
      {
        type: "",
        title: "Concentration Grades We Offer",
        content:
          "60% Solution:\nThis is a mid-strength option. It's common in wastewater treatment, pH adjustment, and some chemical processes. It's easier to handle than stronger acids. It's usually clear or light yellow and thick like syrup.\n\n93% Solution:\nThis is standard for most industrial uses. It's used to make fertiliser, refine oil, and in battery acid. It's strong but still manageable in typical industrial settings.\n\n98% Solution:\nThis is the strongest and purest option. It's used in chemical manufacturing, explosives, and labs. It has very little water and a heavy, oily feel.",
      },
      {
        type: "",
        title: "Common Uses",
        content:
          "Industries use our sulfuric acid for things like:\n\nMaking chemicals\n\nTreating wastewater\n\nProcessing minerals in mining\n\nControlling pH levels\n\nBenefits include:\n\nHigh reactivity for faster processing\n\nReliable performance in industrial systems\n\nBulk supply options to cut costs",
      },
      {
        type: "",
        title: "Why Buy from Us?",
        content:
          "We supply quality sulfuric acid in Australia with:\n\nConsistent purity\n\nCompliance with local standards\n\nDrums, IBCs, or bulk delivery\n\nFast shipping and local pickup options\n\n👉 Request a Quote",
      },
      {
        type: "safety",
        title: "Packaging and Delivery Info",
        content:
          "CAS Number: 7664-93-9\n\nPackaging: Drums, IBCs, or bulk tankers\n\nStorage: Keep in a cool, dry, acid-safe area\n\nHandling: Wear proper safety gear; avoid contact with metals and organic stuff\n\nDelivery: Fast and flexible options across Australia\n\n👉 Request SDS",
      },
      {
        type: "",
        title: "Order Sulfuric Acid in Australia",
        content:
          "Get 60%, 93%, or 98% sulfuric acid from a reliable Australian supplier. We offer safe packaging, fast delivery, and good service.\n\n👉 Contact Us to get a quick quote.",
      },
    ],
  },
  {
    slug: "ferric-chloride-40-42",
    name: "Ferric chloride – 40%, 42%",
    description:
      "Ferric Chloride – High-Purity Options for Industrial Use. Ferric chloride is a chemical used in many industries. It comes in 40% and 42% solutions and works well for things like water treatment, electronics, and metal processing. We supply high-quality ferric chloride that's reliable for both regular and heavy-duty work.",
    sections: [
      {
        type: "overview",
        title: "Ferric Chloride – High-Purity Options for Industrial Use",
        content:
          "Ferric chloride is a chemical used in many industries. It comes in 40% and 42% solutions and works well for things like water treatment, electronics, and metal processing. We supply high-quality ferric chloride that's reliable for both regular and heavy-duty work.",
      },
      {
        type: "",
        title: "What is it?",
        content:
          "Ferric chloride (FeCl₃) is an inorganic compound. In liquid form, it's dark brown or yellowish. People also call it Iron(III) chloride. It dissolves easily in water and produces hydrochloric acid. It's known for strong oxidizing properties and is used in many industrial jobs.",
      },
      {
        type: "",
        title: "Concentration Options",
        content:
          "Ferric Chloride 40% Solution\nThe 40% solution is common in:\n\nWater treatment plants, to help remove impurities\n\nPCB (printed circuit board) manufacturing, for etching\n\nIndustrial wastewater treatment, to remove heavy metals\n\nKey Details:\n\nColour: Dark brown liquid\n\nSmell: Slightly acidic\n\nLooks: Clear or murky, depends on storage\n\nThis option is easy to handle and works well for regular use.\n\nFerric Chloride 42% Solution\nThe 42% solution is stronger and used when more power is needed, like:\n\nAdvanced PCB production, for quicker etching\n\nMetal surface treatment, to reduce corrosion\n\nLarge-scale water purification, to improve clarity\n\nKey Details:\n\nColour: Dark brown liquid\n\nSmell: Stronger acidic smell\n\nLooks: Thicker than 40%\n\nIt's good for heavy-duty tasks and can cut down on how much you need to use.",
      },
      {
        type: "",
        title: "Where is it used?",
        content:
          "Industries use ferric chloride for:\n\nMaking water clearer\n\nEtching circuit boards\n\nProtecting metal surfaces\n\nMany other industrial processes",
      },
      {
        type: "",
        title: "Why Buy From Us",
        content:
          "Every batch is tested\n\nMeets Australian safety rules\n\nFlexible packaging (bulk, IBCs, drums)\n\nDelivery across Australia\n\nQuick customer support\n\n📎 Request a Quote",
      },
      {
        type: "safety",
        title: "Storage, Delivery & Safety",
        content:
          "CAS Number: 7705-08-0\n\nStorage: Keep in a cool, well-ventilated place\n\nHandling: Wear protective gear, it's corrosive\n\nDelivery: Australia-wide delivery or local pickup\n\n📎 Request SDS",
      },
      {
        type: "",
        title: "Ready to Order?",
        content:
          "We supply both 40% and 42% ferric chloride for industrial use. Get reliable supply, flexible packaging, and good prices.\n\n📎 Contact us to order.",
      },
    ],
  },
];
