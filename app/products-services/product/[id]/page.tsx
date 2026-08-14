'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Import the products list from the Products component
const productsList = [
  {
    "id": "acetic-acid-90",
    "name": "Acetic Acid 90%",
    "category": "Industrial Chemicals",
    "description": "A highly concentrated solution of acetic acid, commonly used in industrial applications, chemical synthesis, and as a laboratory reagent.",
    "cas_number": "64-19-7",
    "concentration": "90%",
    "appearance": "Clear liquid, no color",
    "odor": "Strong vinegar odor",
    "ph": "~2.4",
    "density": "~1.06 g/mL",
    "boiling_point": "118°C",
    "freezing_point": "16.6°C",
    "solubility": "Mixes with water and most organic solvents",
    "stability": "Stable but will corrode metals",
    "applications": [
      "Vinyl acetate production",
      "Cellulose acetate production",
      "Acetate ester production",
      "Textile dyeing",
      "Food preservative",
      "pH control",
      "Pharmaceutical ingredients"
    ],
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Corrosive. Causes severe burns. Keep cool and ventilated. Avoid strong bases and oxidizing agents. Wear chemical gloves and eye protection.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "alcohol-gel-hand-sanitizer",
    "name": "Alcohol Gel Hand Sanitizer",
    "category": "Hygiene Products",
    "description": "A quick-drying, alcohol-based product designed to kill germs and bacteria on the skin. Commonly used for hand hygiene when soap and water are not available.",
    "active_ingredient": "Alcohol (Ethanol or Isopropyl)",
    "alcohol_content": "70%",
    "appearance": "Clear or slightly cloudy gel",
    "odor": "Light alcohol scent",
    "ph": "6.0–7.5",
    "solubility": "Fully water-soluble",
    "applications": [
      "Healthcare settings",
      "Workplaces",
      "Public transport",
      "General hand hygiene"
    ],
    "packaging": ["100mL", "500mL", "1L", "5L", "IBC bulk"],
    "safety_notes": "Flammable. Keep away from heat or flames. External use only. Use in well-ventilated spaces. Store below 30°C.",
    "supplier": "Pascom",
    "country": "Australia",
    "features": [
      "Kills 99.9% of germs fast",
      "No water needed",
      "Gentle on skin",
      "Dries quickly"
    ]
  },
  {
    "id": "trisodium-phosphate-5",
    "name": "Trisodium Phosphate 5%",
    "category": "Industrial Cleaners",
    "description": "A 5% aqueous solution of trisodium phosphate, widely used as a cleaning agent, degreaser, and food additive. Also serves as a buffering agent and emulsifier.",
    "cas_number": "7601-54-9",
    "concentration": "5%",
    "appearance": "White powder (solid form)",
    "odor": "None",
    "solubility": "Dissolves easily in water",
    "ph_5_percent_solution": "11.5–12.5",
    "density": "~2.52 g/cm³",
    "stability": "Stable unless mixed with acid",
    "applications": [
      "Food industry cleaning (removes fat, protein, minerals)",
      "Surface preparation for painting",
      "Commercial cleaning (floors, walls, machinery)",
      "Scale removal"
    ],
    "packaging": ["Bags", "Drums", "Bulk"],
    "safety_notes": "Can irritate skin and eyes. Avoid inhaling dust. Harmful if swallowed. Store in a dry, cool spot away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonia-solution",
    "name": "Ammonia Solution",
    "category": "Industrial Chemicals",
    "description": "Concentrated aqueous solutions of ammonia (ammonium hydroxide) in 10-30%, 19%, and 25% concentrations. Used in industrial cleaning, fertilizer production, and chemical synthesis.",
    "cas_number": "1336-21-6",
    "available_concentrations": ["10-30%", "19%", "25%"],
    "appearance": "Colorless liquid",
    "odor": "Strong, pungent ammonia smell",
    "applications": [
      "pH control in water treatment",
      "Surface cleaning and degreasing",
      "Fertilizer production (nitrogen source)",
      "Chemical synthesis",
      "Refrigeration systems stabilization",
      "Textile processing"
    ],
    "grades": {
      "10_30_percent": {
        "uses": ["pH control", "Neutralisation", "Light cleaning", "Laboratory use", "Water treatment"],
        "industries": ["Labs", "Water treatment", "Chemical blending"]
      },
      "19_percent": {
        "uses": ["Cleaning", "Degreasing", "Fertilizer blends"],
        "industries": ["Cleaning", "Agriculture", "Textiles"]
      },
      "25_percent": {
        "uses": ["Industrial cleaning", "Chemical production", "Cooling systems"],
        "industries": ["Manufacturing", "Chemical plants", "HVAC systems"]
      }
    },
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "Corrosive and toxic. Use safety gear and ensure ventilation. Keep away from acids. Store in a cool, ventilated spot.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bifluoride-98",
    "name": "Ammonium Bifluoride 98%",
    "category": "Industrial Chemicals",
    "description": "A high-purity crystalline compound used in glass etching, metal cleaning, and as a precursor in chemical synthesis. Highly corrosive and releases toxic fumes when heated.",
    "cas_number": "1341-49-7",
    "purity": "98%",
    "form": "Solid",
    "appearance": "White crystal solid",
    "odor": "Sharp/pungent",
    "solubility": "Mixes easily in water",
    "applications": [
      "Glass etching and frosting",
      "Aluminium and stainless-steel cleaning",
      "Electronics manufacturing",
      "Oilfield chemical blends",
      "Metal surface prep and treatment"
    ],
    "packaging": ["HDPE containers", "Fiber drums"],
    "safety_notes": "Corrosive. Releases toxic fumes when heated. Store in a cool, dry, well-ventilated space. Keep sealed.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "borax-35",
    "name": "Borax 3.5%",
    "category": "Industrial and Agricultural Solutions",
    "description": "A 3.5% solution of sodium tetraborate decahydrate used for its boron content in farming, cleaning, and manufacturing. Useful where accurate boron levels or mild cleaning power are needed.",
    "cas_number": "1303-96-4",
    "concentration": "3.5%",
    "appearance": "Clear liquid",
    "odor": "None",
    "solubility": "Dissolves easily in water",
    "ph": "9.0–9.5 (slightly alkaline)",
    "density": "~1.05 g/cm³",
    "stability": "Safe if stored properly",
    "applications": [
      "Agriculture (boron supplementation for soil)",
      "Cleaning (mild cleaner and deodorizer)",
      "Manufacturing (glass and ceramic production)",
      "Corrosion prevention",
      "Laundry and metallurgy"
    ],
    "packaging": ["Small to large quantities"],
    "safety_notes": "Wear gloves and goggles. Use in well-ventilated area. Store in a dry, cool place away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "calcium-chloride-94",
    "name": "Calcium Chloride 94%",
    "category": "Industrial Chemicals",
    "description": "A high-purity, white crystalline substance used in de-icing, dust control, and various industrial applications. It is hygroscopic and effective in controlling humidity and melting ice.",
    "cas_number": "10043-52-4",
    "purity": "94%",
    "form": "White powder or granules",
    "odor": "None",
    "solubility": "Dissolves in water, gives off heat",
    "ph_1_percent_solution": "8–10",
    "density": "~2.15 g/cm³",
    "melting_point": "772°C",
    "stability": "Stable under normal use",
    "applications": [
      "De-icing (roads and footpaths)",
      "Dust control (roads, mine sites, construction)",
      "Water treatment (hardness management)",
      "Food processing (firming agent)",
      "Oil and gas (drilling fluids)"
    ],
    "packaging": ["25kg bags", "Bulk bags", "IBCs"],
    "safety_notes": "Can irritate skin and eyes. Use gloves and eye protection. Work in ventilated area. Store in cool, dry place sealed tightly. Reacts with water, generating heat.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "calcium-hypochlorite",
    "name": "Calcium Hypochlorite",
    "category": "Disinfectants and Bleaching Agents",
    "description": "A powerful disinfectant and bleaching agent used for water treatment, sanitation, and industrial cleaning. Effective in killing bacteria, viruses, and algae.",
    "cas_number": "7778-54-3",
    "available_grades": ["65%", "70%"],
    "appearance": "White or greyish granules (65%) / White fine granules or powder (70%)",
    "odor": "Chlorine smell",
    "applications": [
      "Municipal water treatment",
      "Swimming pool sanitation",
      "Wastewater treatment",
      "Industrial bleaching",
      "Food processing sanitation",
      "Emergency water disinfection"
    ],
    "grade_65": {
      "chlorine_content": "Minimum 65%",
      "appearance": "White or greyish granules",
      "uses": ["Drinking water treatment", "Cooling towers", "Sewage plants"]
    },
    "grade_70": {
      "chlorine_content": "Minimum 70%",
      "appearance": "White fine granules or powder",
      "uses": ["Swimming pools", "Emergency water treatment", "Industrial bleaching"]
    },
    "packaging": ["45kg drums", "25kg pails", "Bulk options"],
    "safety_notes": "Strong oxidizer. Keep dry, cool, and out of sunlight. Use appropriate PPE.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "caustic-soda",
    "name": "Caustic Soda (Sodium Hydroxide)",
    "category": "Industrial Chemicals",
    "description": "A highly caustic and versatile chemical used in various industrial processes, including the production of soap, paper, and detergents. Available in solid and liquid forms.",
    "cas_number": "1310-73-2",
    "form": "White solid (flakes, beads, granules) or liquid",
    "odor": "Odourless",
    "solubility": "Very soluble in water (gives off heat)",
    "ph_1_percent_solution": "Above 13",
    "density": "~2.13 g/cm³",
    "melting_point": "318°C",
    "applications": [
      "Water treatment (pH control, neutralisation)",
      "Aluminium production (Bayer process)",
      "Soap and detergent manufacturing",
      "Paper and pulp processing",
      "Food industry (peeling, cocoa processing)",
      "Industrial degreasers and cleaners"
    ],
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "Highly corrosive. Wear gloves, eye protection, and protective clothing. Store in a cool, dry place with good airflow. Keep away from acids and moisture.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "caustic-soda-solutions",
    "name": "Caustic Soda Solutions (10-50%)",
    "category": "Industrial Chemicals",
    "description": "Diluted aqueous solutions of sodium hydroxide in concentrations of 10%, 20%, 31.5%, 40%, and 50%. Used in water treatment, chemical production, food processing, and cleaning.",
    "cas_number": "1310-73-2",
    "available_concentrations": ["10%", "20%", "31.5%", "40%", "50%"],
    "appearance": "Clear, odourless liquid",
    "concentration_details": {
      "10_percent": {"uses": ["pH control", "Light cleaning", "Mild neutralisation"], "industries": ["Water treatment", "Lab use"]},
      "20_percent": {"uses": ["General cleaning", "pH adjustment", "Basic chemical work"], "industries": ["Textiles", "Food processing", "Municipal treatment"]},
      "31.5_percent": {"uses": ["Cleaning systems", "Degreasing", "Water purification"], "industries": ["Dairy", "Beverage", "Manufacturing"]},
      "40_percent": {"uses": ["Heavy-duty degreasing", "Chemical production", "Mining"], "industries": ["Pulp and paper", "Metal treatment", "Chemical plants"]},
      "50_percent": {"uses": ["Industrial-scale pH control", "Demanding chemical processes"], "industries": ["Oil & gas", "Petrochemical", "Deep cleaning"]}
    },
    "applications": [
      "Neutralising acids and adjusting pH",
      "Cleaning and degreasing",
      "Water treatment",
      "Chemical production"
    ],
    "packaging": ["Custom packaging"],
    "safety_notes": "Corrosive. Use corrosion-resistant containers. Avoid skin and eye contact. Store in cool, dry place.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "fluorescein",
    "name": "Fluorescein",
    "category": "Tracer Dyes",
    "description": "A bright yellow-green fluorescent dye used in leak detection, water tracing, and medical testing. Glows clearly under UV light, making it easy to track water or fluid flow.",
    "cas_number": "2321-07-5",
    "common_form": "Sodium Fluorescein",
    "appearance": "Orange-red powder",
    "odor": "No smell",
    "solubility": "Mixes well in water, glows yellow-green under UV",
    "ph_1_percent_solution": "5–7",
    "stability": "Stores well if kept dry and out of light",
    "applications": [
      "Leak detection (pipes, tanks)",
      "Boiler system flow checks",
      "Groundwater and water tracing",
      "Medical eye examinations",
      "Research and corrosion inhibitor testing"
    ],
    "packaging": ["Small packs", "Bulk"],
    "safety_notes": "Low toxicity at normal use levels. Wear gloves, goggles, and mask to avoid dust. Store in a cool, dry place away from strong chemicals and light.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "citric-acid-monohydrate",
    "name": "Citric Acid Monohydrate",
    "category": "Food and Industrial Ingredients",
    "description": "A crystalline, colorless compound used as a natural preservative, flavoring agent, and pH adjuster in food, beverages, cleaning products, and cosmetics.",
    "cas_number": "5949-29-1",
    "appearance": "White crystals",
    "odor": "None",
    "solubility": "Dissolves easily in water",
    "ph_1_percent_solution": "3.0–4.0",
    "melting_point": "153°C (decomposes)",
    "purity": "≥99.5%",
    "applications": [
      "Food and beverages (tartness, preservation, flavour balance)",
      "Cleaning products (limescale removal, mineral binding)",
      "Cosmetics (pH balance in creams, shampoos, bath products)",
      "Pharmaceuticals (stabilizer, base ingredient)",
      "Water treatment (pH adjustment, metal binding)"
    ],
    "packaging": ["25kg bags", "Bulk"],
    "safety_notes": "May irritate skin and eyes. Wear gloves and eye protection. Store in a cool, dry place away from strong oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "citric-acid-solutions",
    "name": "Citric Acid Solutions (10% and 50%)",
    "category": "Industrial and Food Solutions",
    "description": "Diluted solutions of citric acid in 10% and 50% concentrations. Used in food production, cosmetics, pharmaceuticals, and water treatment for pH adjustment, preservation, and chelation.",
    "cas_number": "77-92-9",
    "available_concentrations": ["10%", "50%"],
    "10_percent_solution": {
      "appearance": "Clear, colourless liquid",
      "odor": "None",
      "solubility": "Dissolves fully in water",
      "uses": ["pH control in food", "Flavour balance", "Preservative", "Cosmetic pH balance", "Gentle exfoliation", "Water treatment (scale prevention)"]
    },
    "50_percent_solution": {
      "appearance": "Clear to slightly yellow liquid",
      "odor": "None",
      "solubility": "Dissolves fully in water",
      "uses": ["Pharmaceutical pH adjustments", "Cleaning (scale removal)", "Water treatment (alkalinity neutralisation)", "Metal cleaning"]
    },
    "applications": [
      "Food and beverage",
      "Cosmetics",
      "Pharmaceuticals",
      "Cleaning products",
      "Water treatment"
    ],
    "packaging": ["Bulk"],
    "safety_notes": "Store sealed, dry, and out of direct sunlight.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "potassium-hydroxide-90",
    "name": "Potassium Hydroxide 90%",
    "category": "Industrial Chemicals",
    "description": "A concentrated solid form of potassium hydroxide (caustic potash) used in the production of soaps, detergents, and other industrial chemicals. Also used as an electrolyte in alkaline batteries and for pH adjustment.",
    "cas_number": "1310-58-3",
    "purity": "90%",
    "form": "White, crystalline solid or flakes",
    "odor": "No smell",
    "solubility": "Dissolves easily in water, generates heat",
    "ph_1_percent_solution": ">13",
    "density": "~2.04 g/cm³",
    "melting_point": "406°C",
    "stability": "Stable normally but absorbs moisture and CO₂ from air",
    "applications": [
      "Soap manufacturing (liquid and soft bar soaps)",
      "Water treatment (pH adjuster)",
      "Chemical synthesis (potassium salts, pharmaceuticals)",
      "Electronics (alkaline batteries)",
      "Food processing (cocoa processing, cleaning)"
    ],
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "Causes severe burns. Wear chemical-resistant gloves, safety goggles, and protective clothing. Store cool and dry. Keep away from acids and aluminum. Use with good ventilation.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "citric-acid-anhydrous",
    "name": "Citric Acid Anhydrous",
    "category": "Food and Industrial Ingredients",
    "description": "A water-free form of citric acid used as an acidulant, preservative, and pH regulator in food, pharmaceuticals, and industrial applications. Enhances flavor, stabilizes active ingredients, and improves solubility.",
    "cas_number": "77-92-9",
    "appearance": "White crystalline powder",
    "odor": "Odourless",
    "solubility": "Fully soluble in water",
    "ph_1_percent_solution": "3.0–4.0",
    "density": "~1.66 g/cm³",
    "melting_point": "153°C",
    "applications": [
      "Food and beverage (flavouring, acidity control)",
      "Cleaning products (limescale and soap scum removal)",
      "Pharmaceuticals (pH adjustment, stability improvement)",
      "Cosmetics, detergents, water treatment"
    ],
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "May cause mild eye and skin irritation. Avoid dust inhalation. Use with adequate ventilation. Store in a cool, dry place away from moisture. Avoid strong alkalis and oxidizing agents.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "cobalt-sulphate",
    "name": "Cobalt Sulphate",
    "category": "Industrial Chemicals",
    "description": "A crystalline salt used in the production of pigments and batteries. Serves as a source of cobalt in chemical reactions and electroplating.",
    "cas_number": "10102-40-6",
    "common_form": "Heptahydrate (CoSO₄·7H₂O)",
    "appearance": "Pink to red crystals",
    "odor": "None",
    "solubility": "Fully dissolves in water",
    "ph_1_percent_solution": "4.0–5.5 (slightly acidic)",
    "density_dry": "~3.7 g/cm³",
    "stability": "Stable under normal conditions, decomposes when very hot",
    "applications": [
      "Lithium-ion battery cathode production (renewable energy, electric vehicles)",
      "Electroplating (rust prevention, surface hardening)",
      "Ceramics and pigments (blue colour in glass and glazes)",
      "Fertilizers (trace mineral supplement)"
    ],
    "packaging": ["Drums", "Bags", "Custom packs"],
    "safety_notes": "Can irritate skin and eyes. Avoid breathing dust. Use protective gear (gloves, goggles, clothes). Work in ventilated area. Harmful if swallowed. Store in dry, cool place away from strong acids and oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "copper-sulphate",
    "name": "Copper Sulphate",
    "category": "Industrial and Agricultural Chemicals",
    "description": "A bright blue crystalline compound used in agriculture, chemistry, and as a fungicide. Also used for algae control and in various chemical processes.",
    "cas_number": "7758-98-7",
    "common_name": "Cupric sulphate",
    "common_form": "Pentahydrate (CuSO₄·5H₂O)",
    "appearance": "Bright blue crystals or powder",
    "odor": "None",
    "solubility": "Mixes easily with water",
    "ph_1_percent_solution": "3.5–4.5",
    "density": "2.28 g/cm³",
    "stability": "Safe if stored properly",
    "applications": [
      "Agriculture (fungicide, algaecide)",
      "Animal feed supplement",
      "Mining (mineral flotation)",
      "Electroplating",
      "Leather treatment",
      "Textile dyeing",
      "Water treatment (algae control)"
    ],
    "packaging": ["25kg bags", "Bulk loads"],
    "safety_notes": "Wear gloves, goggles, and dust mask. Don't inhale dust. Store in a dry, cool place away from food and strong acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "d-nitro-uv",
    "name": "D Nitro UV",
    "category": "Industrial Coatings",
    "description": "A UV-curable chemical used in industrial coatings and printing. Cures quickly under UV light to form a strong, smooth finish.",
    "appearance": "Clear or slightly yellow liquid",
    "odor": "Mild",
    "solubility": "Cures under UV, doesn't mix with water",
    "viscosity": "Medium to high (adjustable)",
    "curing_method": "UV and LED",
    "stability": "Stable in normal conditions, keep away from UV light",
    "applications": [
      "Automotive coatings (scratch-resistant, glossy finishes)",
      "Packaging (fast-curing, food-safe coatings)",
      "Electronics (protective coatings for circuit boards and screens)",
      "Printing (quick-drying inks)"
    ],
    "packaging": ["Flexible packaging"],
    "safety_notes": "Use gloves and eye protection. Keep work areas ventilated. Store away from UV light. Solvent-free.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "di-water",
    "name": "DI Water (Deionized Water)",
    "category": "Laboratory and Industrial Water",
    "description": "High-purity deionised water with all dissolved ions removed. Used in laboratory experiments, industrial processes, and applications requiring high-purity water.",
    "cas_number": "7732-18-5",
    "appearance": "Clear, colourless liquid",
    "odor": "None",
    "solubility": "Fully soluble",
    "ph": "5.0–7.0 (neutral)",
    "conductivity": "Under 1 μS/cm",
    "stability": "Stable in normal conditions",
    "applications": [
      "Laboratory experiments",
      "Pharmaceutical production",
      "Electronics manufacturing",
      "Boiler feed water (prevents scale)",
      "Corrosion inhibitor preparation",
      "Oxygen scavenger preparation",
      "Automotive, cosmetics, semiconductor production"
    ],
    "packaging": ["20L drums", "200L drums", "1000L IBCs", "Custom packaging"],
    "safety_notes": "Not irritating. Not for drinking (no minerals). Store in clean, sealed containers away from dirt.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "edta-40",
    "name": "EDTA 40% Solution",
    "category": "Chelating Agents",
    "description": "A concentrated solution of ethylenediaminetetraacetic acid used primarily as a chelating agent to bind metal ions and prevent their undesirable reactions in various applications.",
    "cas_number": "64-02-8",
    "concentration": "40%",
    "active_ingredient": "Tetrasodium ethylenediaminetetraacetate",
    "appearance": "Clear to light yellow liquid",
    "odor": "Odourless",
    "solubility": "Fully dissolves in water",
    "ph": "10.5–12.0",
    "density": "~1.28 g/cm³",
    "stability": "Stable if stored properly",
    "applications": [
      "Water treatment (scale reduction in boilers, cooling towers, wastewater)",
      "Agriculture (improves nutrient absorption in fertilizers)",
      "Cleaning products (softens hard water)",
      "Textile processing (prevents metal interference with dyes)",
      "Cosmetics (prevents metal-triggered reactions)"
    ],
    "packaging": ["Bulk drums", "IBCs", "Custom packaging"],
    "safety_notes": "May cause mild irritation. Use gloves and eye protection. Work in well-ventilated area. Store in a cool, dry place away from strong oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
   {
    "id": "acetic-acid-90",
    "name": "Acetic Acid 90%",
    "category": "Industrial Chemicals",
    "description": "A highly concentrated solution of acetic acid, commonly used in industrial applications, chemical synthesis, and as a laboratory reagent.",
    "cas_number": "64-19-7",
    "concentration": "90%",
    "appearance": "Clear liquid, no color",
    "odor": "Strong vinegar odor",
    "ph": "~2.4",
    "density": "~1.06 g/mL",
    "boiling_point": "118°C",
    "freezing_point": "16.6°C",
    "solubility": "Mixes with water and most organic solvents",
    "stability": "Stable but will corrode metals",
    "applications": [
      "Vinyl acetate production",
      "Cellulose acetate production",
      "Acetate ester production",
      "Textile dyeing",
      "Food preservative",
      "pH control",
      "Pharmaceutical ingredients"
    ],
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Corrosive. Causes severe burns. Keep cool and ventilated. Avoid strong bases and oxidizing agents. Wear chemical gloves and eye protection.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "alcohol-gel-hand-sanitizer",
    "name": "Alcohol Gel Hand Sanitizer",
    "category": "Hygiene Products",
    "description": "A quick-drying, alcohol-based product designed to kill germs and bacteria on the skin. Commonly used for hand hygiene when soap and water are not available.",
    "active_ingredient": "Alcohol (Ethanol or Isopropyl)",
    "alcohol_content": "70%",
    "appearance": "Clear or slightly cloudy gel",
    "odor": "Light alcohol scent",
    "ph": "6.0–7.5",
    "solubility": "Fully water-soluble",
    "applications": [
      "Healthcare settings",
      "Workplaces",
      "Public transport",
      "General hand hygiene"
    ],
    "packaging": ["100mL", "500mL", "1L", "5L", "IBC bulk"],
    "safety_notes": "Flammable. Keep away from heat or flames. External use only. Use in well-ventilated spaces. Store below 30°C.",
    "supplier": "Pascom",
    "country": "Australia",
    "features": [
      "Kills 99.9% of germs fast",
      "No water needed",
      "Gentle on skin",
      "Dries quickly"
    ]
  },
  {
    "id": "trisodium-phosphate-5",
    "name": "Trisodium Phosphate 5%",
    "category": "Industrial Cleaners",
    "description": "A 5% aqueous solution of trisodium phosphate, widely used as a cleaning agent, degreaser, and food additive. Also serves as a buffering agent and emulsifier.",
    "cas_number": "7601-54-9",
    "concentration": "5%",
    "appearance": "White powder (solid form)",
    "odor": "None",
    "solubility": "Dissolves easily in water",
    "ph_5_percent_solution": "11.5–12.5",
    "density": "~2.52 g/cm³",
    "stability": "Stable unless mixed with acid",
    "applications": [
      "Food industry cleaning (removes fat, protein, minerals)",
      "Surface preparation for painting",
      "Commercial cleaning (floors, walls, machinery)",
      "Scale removal"
    ],
    "packaging": ["Bags", "Drums", "Bulk"],
    "safety_notes": "Can irritate skin and eyes. Avoid inhaling dust. Harmful if swallowed. Store in a dry, cool spot away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonia-solution",
    "name": "Ammonia Solution",
    "category": "Industrial Chemicals",
    "description": "Concentrated aqueous solutions of ammonia (ammonium hydroxide) in 10-30%, 19%, and 25% concentrations. Used in industrial cleaning, fertilizer production, and chemical synthesis.",
    "cas_number": "1336-21-6",
    "available_concentrations": ["10-30%", "19%", "25%"],
    "appearance": "Colorless liquid",
    "odor": "Strong, pungent ammonia smell",
    "applications": [
      "pH control in water treatment",
      "Surface cleaning and degreasing",
      "Fertilizer production (nitrogen source)",
      "Chemical synthesis",
      "Refrigeration systems stabilization",
      "Textile processing"
    ],
    "grades": {
      "10_30_percent": {
        "uses": ["pH control", "Neutralisation", "Light cleaning", "Laboratory use", "Water treatment"],
        "industries": ["Labs", "Water treatment", "Chemical blending"]
      },
      "19_percent": {
        "uses": ["Cleaning", "Degreasing", "Fertilizer blends"],
        "industries": ["Cleaning", "Agriculture", "Textiles"]
      },
      "25_percent": {
        "uses": ["Industrial cleaning", "Chemical production", "Cooling systems"],
        "industries": ["Manufacturing", "Chemical plants", "HVAC systems"]
      }
    },
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "Corrosive and toxic. Use safety gear and ensure ventilation. Keep away from acids. Store in a cool, ventilated spot.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bifluoride-98",
    "name": "Ammonium Bifluoride 98%",
    "category": "Industrial Chemicals",
    "description": "A high-purity crystalline compound used in glass etching, metal cleaning, and as a precursor in chemical synthesis. Highly corrosive and releases toxic fumes when heated.",
    "cas_number": "1341-49-7",
    "purity": "98%",
    "form": "Solid",
    "appearance": "White crystal solid",
    "odor": "Sharp/pungent",
    "solubility": "Mixes easily in water",
    "applications": [
      "Glass etching and frosting",
      "Aluminium and stainless-steel cleaning",
      "Electronics manufacturing",
      "Oilfield chemical blends",
      "Metal surface prep and treatment"
    ],
    "packaging": ["HDPE containers", "Fiber drums"],
    "safety_notes": "Corrosive. Releases toxic fumes when heated. Store in a cool, dry, well-ventilated space. Keep sealed.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "borax-35",
    "name": "Borax 3.5%",
    "category": "Industrial and Agricultural Solutions",
    "description": "A 3.5% solution of sodium tetraborate decahydrate used for its boron content in farming, cleaning, and manufacturing. Useful where accurate boron levels or mild cleaning power are needed.",
    "cas_number": "1303-96-4",
    "concentration": "3.5%",
    "appearance": "Clear liquid",
    "odor": "None",
    "solubility": "Dissolves easily in water",
    "ph": "9.0–9.5 (slightly alkaline)",
    "density": "~1.05 g/cm³",
    "stability": "Safe if stored properly",
    "applications": [
      "Agriculture (boron supplementation for soil)",
      "Cleaning (mild cleaner and deodorizer)",
      "Manufacturing (glass and ceramic production)",
      "Corrosion prevention",
      "Laundry and metallurgy"
    ],
    "packaging": ["Small to large quantities"],
    "safety_notes": "Wear gloves and goggles. Use in well-ventilated area. Store in a dry, cool place away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "calcium-chloride-94",
    "name": "Calcium Chloride 94%",
    "category": "Industrial Chemicals",
    "description": "A high-purity, white crystalline substance used in de-icing, dust control, and various industrial applications. It is hygroscopic and effective in controlling humidity and melting ice.",
    "cas_number": "10043-52-4",
    "purity": "94%",
    "form": "White powder or granules",
    "odor": "None",
    "solubility": "Dissolves in water, gives off heat",
    "ph_1_percent_solution": "8–10",
    "density": "~2.15 g/cm³",
    "melting_point": "772°C",
    "stability": "Stable under normal use",
    "applications": [
      "De-icing (roads and footpaths)",
      "Dust control (roads, mine sites, construction)",
      "Water treatment (hardness management)",
      "Food processing (firming agent)",
      "Oil and gas (drilling fluids)"
    ],
    "packaging": ["25kg bags", "Bulk bags", "IBCs"],
    "safety_notes": "Can irritate skin and eyes. Use gloves and eye protection. Work in ventilated area. Store in cool, dry place sealed tightly. Reacts with water, generating heat.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "calcium-hypochlorite",
    "name": "Calcium Hypochlorite",
    "category": "Disinfectants and Bleaching Agents",
    "description": "A powerful disinfectant and bleaching agent used for water treatment, sanitation, and industrial cleaning. Effective in killing bacteria, viruses, and algae.",
    "cas_number": "7778-54-3",
    "available_grades": ["65%", "70%"],
    "appearance": "White or greyish granules (65%) / White fine granules or powder (70%)",
    "odor": "Chlorine smell",
    "applications": [
      "Municipal water treatment",
      "Swimming pool sanitation",
      "Wastewater treatment",
      "Industrial bleaching",
      "Food processing sanitation",
      "Emergency water disinfection"
    ],
    "grade_65": {
      "chlorine_content": "Minimum 65%",
      "appearance": "White or greyish granules",
      "uses": ["Drinking water treatment", "Cooling towers", "Sewage plants"]
    },
    "grade_70": {
      "chlorine_content": "Minimum 70%",
      "appearance": "White fine granules or powder",
      "uses": ["Swimming pools", "Emergency water treatment", "Industrial bleaching"]
    },
    "packaging": ["45kg drums", "25kg pails", "Bulk options"],
    "safety_notes": "Strong oxidizer. Keep dry, cool, and out of sunlight. Use appropriate PPE.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "caustic-soda",
    "name": "Caustic Soda (Sodium Hydroxide)",
    "category": "Industrial Chemicals",
    "description": "A highly caustic and versatile chemical used in various industrial processes, including the production of soap, paper, and detergents. Available in solid and liquid forms.",
    "cas_number": "1310-73-2",
    "form": "White solid (flakes, beads, granules) or liquid",
    "odor": "Odourless",
    "solubility": "Very soluble in water (gives off heat)",
    "ph_1_percent_solution": "Above 13",
    "density": "~2.13 g/cm³",
    "melting_point": "318°C",
    "applications": [
      "Water treatment (pH control, neutralisation)",
      "Aluminium production (Bayer process)",
      "Soap and detergent manufacturing",
      "Paper and pulp processing",
      "Food industry (peeling, cocoa processing)",
      "Industrial degreasers and cleaners"
    ],
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "Highly corrosive. Wear gloves, eye protection, and protective clothing. Store in a cool, dry place with good airflow. Keep away from acids and moisture.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "caustic-soda-solutions",
    "name": "Caustic Soda Solutions (10-50%)",
    "category": "Industrial Chemicals",
    "description": "Diluted aqueous solutions of sodium hydroxide in concentrations of 10%, 20%, 31.5%, 40%, and 50%. Used in water treatment, chemical production, food processing, and cleaning.",
    "cas_number": "1310-73-2",
    "available_concentrations": ["10%", "20%", "31.5%", "40%", "50%"],
    "appearance": "Clear, odourless liquid",
    "concentration_details": {
      "10_percent": {"uses": ["pH control", "Light cleaning", "Mild neutralisation"], "industries": ["Water treatment", "Lab use"]},
      "20_percent": {"uses": ["General cleaning", "pH adjustment", "Basic chemical work"], "industries": ["Textiles", "Food processing", "Municipal treatment"]},
      "31.5_percent": {"uses": ["Cleaning systems", "Degreasing", "Water purification"], "industries": ["Dairy", "Beverage", "Manufacturing"]},
      "40_percent": {"uses": ["Heavy-duty degreasing", "Chemical production", "Mining"], "industries": ["Pulp and paper", "Metal treatment", "Chemical plants"]},
      "50_percent": {"uses": ["Industrial-scale pH control", "Demanding chemical processes"], "industries": ["Oil & gas", "Petrochemical", "Deep cleaning"]}
    },
    "applications": [
      "Neutralising acids and adjusting pH",
      "Cleaning and degreasing",
      "Water treatment",
      "Chemical production"
    ],
    "packaging": ["Custom packaging"],
    "safety_notes": "Corrosive. Use corrosion-resistant containers. Avoid skin and eye contact. Store in cool, dry place.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "fluorescein",
    "name": "Fluorescein",
    "category": "Tracer Dyes",
    "description": "A bright yellow-green fluorescent dye used in leak detection, water tracing, and medical testing. Glows clearly under UV light, making it easy to track water or fluid flow.",
    "cas_number": "2321-07-5",
    "common_form": "Sodium Fluorescein",
    "appearance": "Orange-red powder",
    "odor": "No smell",
    "solubility": "Mixes well in water, glows yellow-green under UV",
    "ph_1_percent_solution": "5–7",
    "stability": "Stores well if kept dry and out of light",
    "applications": [
      "Leak detection (pipes, tanks)",
      "Boiler system flow checks",
      "Groundwater and water tracing",
      "Medical eye examinations",
      "Research and corrosion inhibitor testing"
    ],
    "packaging": ["Small packs", "Bulk"],
    "safety_notes": "Low toxicity at normal use levels. Wear gloves, goggles, and mask to avoid dust. Store in a cool, dry place away from strong chemicals and light.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "citric-acid-monohydrate",
    "name": "Citric Acid Monohydrate",
    "category": "Food and Industrial Ingredients",
    "description": "A crystalline, colorless compound used as a natural preservative, flavoring agent, and pH adjuster in food, beverages, cleaning products, and cosmetics.",
    "cas_number": "5949-29-1",
    "appearance": "White crystals",
    "odor": "None",
    "solubility": "Dissolves easily in water",
    "ph_1_percent_solution": "3.0–4.0",
    "melting_point": "153°C (decomposes)",
    "purity": "≥99.5%",
    "applications": [
      "Food and beverages (tartness, preservation, flavour balance)",
      "Cleaning products (limescale removal, mineral binding)",
      "Cosmetics (pH balance in creams, shampoos, bath products)",
      "Pharmaceuticals (stabilizer, base ingredient)",
      "Water treatment (pH adjustment, metal binding)"
    ],
    "packaging": ["25kg bags", "Bulk"],
    "safety_notes": "May irritate skin and eyes. Wear gloves and eye protection. Store in a cool, dry place away from strong oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "citric-acid-solutions",
    "name": "Citric Acid Solutions (10% and 50%)",
    "category": "Industrial and Food Solutions",
    "description": "Diluted solutions of citric acid in 10% and 50% concentrations. Used in food production, cosmetics, pharmaceuticals, and water treatment for pH adjustment, preservation, and chelation.",
    "cas_number": "77-92-9",
    "available_concentrations": ["10%", "50%"],
    "10_percent_solution": {
      "appearance": "Clear, colourless liquid",
      "odor": "None",
      "solubility": "Dissolves fully in water",
      "uses": ["pH control in food", "Flavour balance", "Preservative", "Cosmetic pH balance", "Gentle exfoliation", "Water treatment (scale prevention)"]
    },
    "50_percent_solution": {
      "appearance": "Clear to slightly yellow liquid",
      "odor": "None",
      "solubility": "Dissolves fully in water",
      "uses": ["Pharmaceutical pH adjustments", "Cleaning (scale removal)", "Water treatment (alkalinity neutralisation)", "Metal cleaning"]
    },
    "applications": [
      "Food and beverage",
      "Cosmetics",
      "Pharmaceuticals",
      "Cleaning products",
      "Water treatment"
    ],
    "packaging": ["Bulk"],
    "safety_notes": "Store sealed, dry, and out of direct sunlight.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "potassium-hydroxide-90",
    "name": "Potassium Hydroxide 90%",
    "category": "Industrial Chemicals",
    "description": "A concentrated solid form of potassium hydroxide (caustic potash) used in the production of soaps, detergents, and other industrial chemicals. Also used as an electrolyte in alkaline batteries and for pH adjustment.",
    "cas_number": "1310-58-3",
    "purity": "90%",
    "form": "White, crystalline solid or flakes",
    "odor": "No smell",
    "solubility": "Dissolves easily in water, generates heat",
    "ph_1_percent_solution": ">13",
    "density": "~2.04 g/cm³",
    "melting_point": "406°C",
    "stability": "Stable normally but absorbs moisture and CO₂ from air",
    "applications": [
      "Soap manufacturing (liquid and soft bar soaps)",
      "Water treatment (pH adjuster)",
      "Chemical synthesis (potassium salts, pharmaceuticals)",
      "Electronics (alkaline batteries)",
      "Food processing (cocoa processing, cleaning)"
    ],
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "Causes severe burns. Wear chemical-resistant gloves, safety goggles, and protective clothing. Store cool and dry. Keep away from acids and aluminum. Use with good ventilation.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "citric-acid-anhydrous",
    "name": "Citric Acid Anhydrous",
    "category": "Food and Industrial Ingredients",
    "description": "A water-free form of citric acid used as an acidulant, preservative, and pH regulator in food, pharmaceuticals, and industrial applications. Enhances flavor, stabilizes active ingredients, and improves solubility.",
    "cas_number": "77-92-9",
    "appearance": "White crystalline powder",
    "odor": "Odourless",
    "solubility": "Fully soluble in water",
    "ph_1_percent_solution": "3.0–4.0",
    "density": "~1.66 g/cm³",
    "melting_point": "153°C",
    "applications": [
      "Food and beverage (flavouring, acidity control)",
      "Cleaning products (limescale and soap scum removal)",
      "Pharmaceuticals (pH adjustment, stability improvement)",
      "Cosmetics, detergents, water treatment"
    ],
    "packaging": ["Bulk", "Custom packaging"],
    "safety_notes": "May cause mild eye and skin irritation. Avoid dust inhalation. Use with adequate ventilation. Store in a cool, dry place away from moisture. Avoid strong alkalis and oxidizing agents.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "cobalt-sulphate",
    "name": "Cobalt Sulphate",
    "category": "Industrial Chemicals",
    "description": "A crystalline salt used in the production of pigments and batteries. Serves as a source of cobalt in chemical reactions and electroplating.",
    "cas_number": "10102-40-6",
    "common_form": "Heptahydrate (CoSO₄·7H₂O)",
    "appearance": "Pink to red crystals",
    "odor": "None",
    "solubility": "Fully dissolves in water",
    "ph_1_percent_solution": "4.0–5.5 (slightly acidic)",
    "density_dry": "~3.7 g/cm³",
    "stability": "Stable under normal conditions, decomposes when very hot",
    "applications": [
      "Lithium-ion battery cathode production (renewable energy, electric vehicles)",
      "Electroplating (rust prevention, surface hardening)",
      "Ceramics and pigments (blue colour in glass and glazes)",
      "Fertilizers (trace mineral supplement)"
    ],
    "packaging": ["Drums", "Bags", "Custom packs"],
    "safety_notes": "Can irritate skin and eyes. Avoid breathing dust. Use protective gear (gloves, goggles, clothes). Work in ventilated area. Harmful if swallowed. Store in dry, cool place away from strong acids and oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "copper-sulphate",
    "name": "Copper Sulphate",
    "category": "Industrial and Agricultural Chemicals",
    "description": "A bright blue crystalline compound used in agriculture, chemistry, and as a fungicide. Also used for algae control and in various chemical processes.",
    "cas_number": "7758-98-7",
    "common_name": "Cupric sulphate",
    "common_form": "Pentahydrate (CuSO₄·5H₂O)",
    "appearance": "Bright blue crystals or powder",
    "odor": "None",
    "solubility": "Mixes easily with water",
    "ph_1_percent_solution": "3.5–4.5",
    "density": "2.28 g/cm³",
    "stability": "Safe if stored properly",
    "applications": [
      "Agriculture (fungicide, algaecide)",
      "Animal feed supplement",
      "Mining (mineral flotation)",
      "Electroplating",
      "Leather treatment",
      "Textile dyeing",
      "Water treatment (algae control)"
    ],
    "packaging": ["25kg bags", "Bulk loads"],
    "safety_notes": "Wear gloves, goggles, and dust mask. Don't inhale dust. Store in a dry, cool place away from food and strong acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "d-nitro-uv",
    "name": "D Nitro UV",
    "category": "Industrial Coatings",
    "description": "A UV-curable chemical used in industrial coatings and printing. Cures quickly under UV light to form a strong, smooth finish.",
    "appearance": "Clear or slightly yellow liquid",
    "odor": "Mild",
    "solubility": "Cures under UV, doesn't mix with water",
    "viscosity": "Medium to high (adjustable)",
    "curing_method": "UV and LED",
    "stability": "Stable in normal conditions, keep away from UV light",
    "applications": [
      "Automotive coatings (scratch-resistant, glossy finishes)",
      "Packaging (fast-curing, food-safe coatings)",
      "Electronics (protective coatings for circuit boards and screens)",
      "Printing (quick-drying inks)"
    ],
    "packaging": ["Flexible packaging"],
    "safety_notes": "Use gloves and eye protection. Keep work areas ventilated. Store away from UV light. Solvent-free.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "di-water",
    "name": "DI Water (Deionized Water)",
    "category": "Laboratory and Industrial Water",
    "description": "High-purity deionised water with all dissolved ions removed. Used in laboratory experiments, industrial processes, and applications requiring high-purity water.",
    "cas_number": "7732-18-5",
    "appearance": "Clear, colourless liquid",
    "odor": "None",
    "solubility": "Fully soluble",
    "ph": "5.0–7.0 (neutral)",
    "conductivity": "Under 1 μS/cm",
    "stability": "Stable in normal conditions",
    "applications": [
      "Laboratory experiments",
      "Pharmaceutical production",
      "Electronics manufacturing",
      "Boiler feed water (prevents scale)",
      "Corrosion inhibitor preparation",
      "Oxygen scavenger preparation",
      "Automotive, cosmetics, semiconductor production"
    ],
    "packaging": ["20L drums", "200L drums", "1000L IBCs", "Custom packaging"],
    "safety_notes": "Not irritating. Not for drinking (no minerals). Store in clean, sealed containers away from dirt.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "edta-40",
    "name": "EDTA 40% Solution",
    "category": "Chelating Agents",
    "description": "A concentrated solution of ethylenediaminetetraacetic acid used primarily as a chelating agent to bind metal ions and prevent their undesirable reactions in various applications.",
    "cas_number": "64-02-8",
    "concentration": "40%",
    "active_ingredient": "Tetrasodium ethylenediaminetetraacetate",
    "appearance": "Clear to light yellow liquid",
    "odor": "Odourless",
    "solubility": "Fully dissolves in water",
    "ph": "10.5–12.0",
    "density": "~1.28 g/cm³",
    "stability": "Stable if stored properly",
    "applications": [
      "Water treatment (scale reduction in boilers, cooling towers, wastewater)",
      "Agriculture (improves nutrient absorption in fertilizers)",
      "Cleaning products (softens hard water)",
      "Textile processing (prevents metal interference with dyes)",
      "Cosmetics (prevents metal-triggered reactions)"
    ],
    "packaging": ["Bulk drums", "IBCs", "Custom packaging"],
    "safety_notes": "May cause mild irritation. Use gloves and eye protection. Work in well-ventilated area. Store in a cool, dry place away from strong oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ferric-sulphate",
    "name": "Ferric Sulphate",
    "category": "Industrial Chemicals",
    "description": "Solutions of ferric sulfate used primarily in water treatment and as a coagulant in various industrial processes. Effective in purifying water and treating wastewater.",
    "cas_number": "10028-22-5",
    "available_concentrations": ["41%", "40-50%"],
    "appearance": "Dark reddish-brown liquid",
    "odor": "None to mild",
    "solubility": "Mixes well with water",
    "applications": [
      "Drinking water treatment",
      "Industrial wastewater treatment",
      "Sludge removal",
      "Mining and ore processing",
      "Paper production"
    ],
    "concentration_41_percent": {
      "uses": ["Drinking water treatment", "Industrial wastewater", "Sludge removal"],
      "suitability": "Medium to large treatment plants"
    },
    "concentration_40_50_percent": {
      "uses": ["Mining", "Ore processing", "Paper making", "Heavy-duty wastewater"],
      "suitability": "Tough industrial applications"
    },
    "packaging": ["Drums", "IBCs", "Tankers"],
    "safety_notes": "Can cause irritation. Use protective equipment. Store in cool, ventilated area.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "fluorescein-40",
    "name": "Fluorescein 40%",
    "category": "Tracer Dyes",
    "description": "A fluorescent dye used to trace water flow, find leaks, and study how liquids move. The 40% concentration makes it easy to see, even when used in small amounts.",
    "cas_number": "518-47-8",
    "concentration": "40%",
    "active_ingredient": "Sodium fluorescein",
    "appearance": "Bright yellow-green liquid",
    "odor": "None",
    "solubility": "Fully dissolves in water",
    "ph": "6.5–7.5",
    "density": "~1.2 g/cm³",
    "stability": "Stable if kept away from sunlight",
    "applications": [
      "Water flow tracing (pipes, rivers)",
      "Leak detection",
      "Hydraulic tests",
      "Environmental testing",
      "HVAC and boiler tests"
    ],
    "packaging": ["Drums", "IBCs"],
    "safety_notes": "Non-toxic but stains. Use gloves and eye protection. Work in ventilated space. Store in a cool, dark place away from strong chemicals.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "high-flash-kerosene",
    "name": "High Flash Kerosene",
    "category": "Fuels and Solvents",
    "description": "A premium-grade, refined petroleum distillate with a high flash point, making it a safer alternative for various applications. Used as fuel for lamps, heaters, and certain engines, as well as a solvent and cleaning agent.",
    "cas_number": "8008-20-6",
    "appearance": "Clear, colourless liquid",
    "odor": "Low odour",
    "flash_point": "Over 61°C",
    "density": "0.78–0.82 g/cm³ at 15°C",
    "boiling_range": "150–300°C",
    "water_solubility": "Doesn't mix with water",
    "stability": "Safe under normal conditions",
    "applications": [
      "Heating",
      "Metalwork",
      "Lighting",
      "Home appliances",
      "Industrial processes",
      "Solvent and cleaning agent"
    ],
    "packaging": ["Drums", "IBCs", "Bulk"],
    "safety_notes": "Flammable (but higher flash point). Keep away from flames. Use gloves and safety glasses. Store in a cool, open area.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "hydrochloric-acid",
    "name": "Hydrochloric Acid",
    "category": "Industrial Chemicals",
    "description": "Acidic solutions used in various industrial and laboratory applications, including pH control and metal cleaning. Available in multiple concentrations.",
    "cas_number": "7647-01-0",
    "available_concentrations": ["5%", "10-35%", "15%", "20%", "28%", "32%"],
    "appearance": "Clear, colorless liquid",
    "odor": "Strong, sharp, irritating",
    "solubility": "Mixes easily with water",
    "applications": [
      "pH control in water treatment",
      "Metal cleaning (pickling)",
      "Mining and ore processing",
      "Food processing (approved grades)",
      "Chemical and pharmaceutical production",
      "Scale removal"
    ],
    "concentration_details": {
      "5_percent": {"uses": ["Labs", "Schools", "Light cleaning", "pH adjustments"]},
      "10_35_percent": {"uses": ["Surface treatment", "pH control", "General processing"]},
      "15_percent": {"uses": ["Water treatment", "Food industry (where approved)", "Lab work"]},
      "20_percent": {"uses": ["Mining", "Refining", "Chemical production"]},
      "28_percent": {"uses": ["Metal pickling", "Chemical manufacturing", "Large pH adjustments", "Synthesis"]},
      "32_percent": {"uses": ["Steel making", "Oil refining", "Large-scale water treatment"]}
    },
    "packaging": ["IBCs", "Drums", "Custom sizes"],
    "safety_notes": "Highly corrosive. Use corrosion-resistant containers. Store in cool, well-ventilated spot away from incompatible materials. Use appropriate PPE.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "hydrogen-peroxide",
    "name": "Hydrogen Peroxide",
    "category": "Industrial Chemicals",
    "description": "Clear, colorless aqueous solutions recognized for their potent oxidizing properties. Used as powerful bleaching agents, effective disinfectants, and essential components in numerous chemical synthesis processes.",
    "cas_number": "7722-84-1",
    "available_concentrations": ["30%", "50%"],
    "appearance": "Clear, colourless liquid",
    "odor": "Slightly sharp, mildly irritating",
    "solubility": "Completely water-soluble",
    "applications": [
      "Wastewater treatment",
      "Textile dyeing and bleaching",
      "Mining and metallurgy (oxidising metal ores)",
      "Food disinfection",
      "Pulp processing",
      "Chemical synthesis",
      "Environmental cleanup"
    ],
    "concentration_30_percent": {
      "uses": ["Disinfecting food processing equipment", "Cosmetic manufacturing", "Wastewater treatment"]
    },
    "concentration_50_percent": {
      "uses": ["Mining and metallurgy", "Pulp and paper bleaching", "Chemical syntheses", "Heavy-duty environmental cleanup"]
    },
    "packaging": ["Drums", "IBCs", "Bulk tanks"],
    "safety_notes": "Powerful oxidizer. Store in a cool, ventilated area away from heat, metals, and organic materials. Use appropriate PPE.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "methanol",
    "name": "Methanol",
    "category": "Industrial Solvents",
    "description": "A clear, colorless liquid with a slightly sweet odor. Widely used as a solvent, antifreeze, and in the production of chemicals. Toxic nature requires careful handling.",
    "cas_number": "67-56-1",
    "purity": "99.85% or higher",
    "appearance": "Clear, colourless",
    "odor": "Sweet, like alcohol",
    "solubility": "Mixes with water",
    "boiling_point": "64.7°C",
    "density": "0.7918 g/cm³ at 20°C",
    "flash_point": "11°C",
    "applications": [
      "Fuel additive (improves combustion, reduces smoke)",
      "Chemical production (formaldehyde, acetic acid)",
      "Water treatment (denitrification)",
      "Pharmaceuticals (medicine production)",
      "Paints, plastics, adhesives, pesticides",
      "Antifreeze and biodiesel"
    ],
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Highly flammable and toxic. Can cause blindness or death if swallowed or inhaled. Use in well-ventilated area. Wear gloves and eye protection. Keep away from fire and heat.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "methylene-chloride",
    "name": "Methylene Chloride (Dichloromethane)",
    "category": "Industrial Solvents",
    "description": "A volatile, colorless liquid with a sweet smell. Used as a solvent in industrial processes, paint stripping, and as a laboratory reagent.",
    "cas_number": "75-09-2",
    "chemical_formula": "CH₂Cl₂",
    "appearance": "Clear, colourless liquid",
    "odor": "Slightly sweet",
    "solubility": "Mixes with most organic solvents, doesn't mix with water",
    "boiling_point": "39.6°C",
    "applications": [
      "Paint removal (commercial strippers)",
      "Metal cleaning and degreasing (automotive, aerospace)",
      "Adhesives and sealants",
      "Polyurethane foam production (blowing agent)",
      "Pharmaceuticals (extraction, purification)"
    ],
    "packaging": ["Drums", "IBCs"],
    "safety_notes": "Flammable? No, but volatile with health risks. Use in well-ventilated areas. Wear gloves, eye protection, and respirator. Store cool and dry, away from sparks and strong oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "monoethylene-glycol",
    "name": "Monoethylene Glycol (MEG)",
    "category": "Industrial Chemicals",
    "description": "A colorless, odorless liquid used as an antifreeze, coolant, and raw material in various industries. Mixes well with water and stays liquid in cold temperatures.",
    "cas_number": "107-21-1",
    "chemical_formula": "C₂H₆O₂",
    "appearance": "Colourless, odourless liquid",
    "solubility": "Mixes with water in any amount",
    "density": "1.115 g/cm³ at 20°C",
    "boiling_point": "197.6°C",
    "freezing_point": "-12.9°C",
    "ph": "Neutral",
    "stability": "Stable in normal use. Keep away from strong oxidisers.",
    "applications": [
      "Coolants and antifreeze (automotive, industrial engines)",
      "Polyester fibre production",
      "Heat transfer fluid (HVAC systems)",
      "Solvent and humectant (inks, adhesives, paints)"
    ],
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Harmful if swallowed in large amounts. Use gloves and eye protection. Work in ventilated space. Store in a cool, dry area away from heat and oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "monoethylene-glycol-fiber-grade",
    "name": "Monoethylene Glycol Fiber Grade",
    "category": "Industrial Chemicals",
    "description": "A high-purity form of monoethylene glycol used primarily in the production of synthetic fibers like polyester. Also used in PET plastics and textiles.",
    "cas_number": "107-21-1",
    "purity": "≥99.9%",
    "appearance": "Clear, colourless liquid",
    "odor": "Almost none",
    "solubility": "Mixes with water in any amount",
    "density": "1.115 g/cm³ at 20°C",
    "boiling_point": "197.6°C",
    "freezing_point": "-12.9°C",
    "ph": "Neutral",
    "stability": "Stable in normal use. Keep away from strong oxidisers.",
    "applications": [
      "Polyester fibre and yarn production (clothing, fabric)",
      "PET plastic bottles and containers",
      "Humidity control in paper making",
      "Solvent in glues, inks, and resins"
    ],
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Use gloves, goggles, and protective clothes. Work in well-ventilated area. Store in a cool, dry place away from heat and strong chemicals. Harmful if swallowed in large amounts.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "nickel-catalysed-ammonium-bisulfite-65",
    "name": "Nickel Catalysed Ammonium Bisulfite 65%",
    "category": "Industrial Chemicals",
    "description": "A concentrated chemical that helps remove oxygen from water and fluid systems. Contains 65% ammonium bisulfite with a small amount of nickel catalyst for faster reaction.",
    "cas_number": "10102-40-6",
    "concentration": "65%",
    "active_ingredient": "Ammonium bisulfite (NH₄HSO₃)",
    "catalyst": "Nickel",
    "appearance": "Pale yellow liquid",
    "odor": "Mild",
    "solubility": "Fully dissolves in water",
    "ph": "4.0–6.0",
    "density": "1.3–1.4 g/cm³",
    "applications": [
      "Boiler water treatment (oxygen scavenger)",
      "Oil and gas pipeline corrosion protection",
      "Power generation water treatment",
      "Refinery process water",
      "Equipment protection during shutdowns"
    ],
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Use gloves, eye protection, and ensure good airflow. Store in a cool, dry place away from heat and oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "potassium-chloride",
    "name": "Potassium Chloride (KCl)",
    "category": "Industrial Chemicals",
    "description": "A white, crystalline salt used in fertilizers, medicine, and as a salt substitute. Provides potassium, an essential nutrient for plant growth and human health.",
    "cas_number": "7447-40-7",
    "available_grades": ["Standard", "98% High Purity"],
    "form": "White crystalline granules",
    "odor": "No smell",
    "solubility": "Dissolves well in water",
    "applications": [
      "Water treatment (pH adjustment, nutrients)",
      "Pharmaceuticals (medications, electrolyte solutions)",
      "Food production (salt substitute, flavor enhancer)",
      "Laboratories (buffer solutions, electrolyte for analysis)",
      "Fertilizers (potassium source for plants)",
      "Metal processing (flux, specialty chemicals)"
    ],
    "standard_grade": {
      "uses": ["Water treatment", "De-icing", "Basic chemical manufacturing"]
    },
    "high_purity_98_percent": {
      "uses": ["Pharmaceuticals", "Food production", "Laboratory applications"]
    },
    "packaging": ["Bags", "Drums", "Bulk containers"],
    "safety_notes": "Generally safe. Store in a cool, dry place away from moisture. Use sealed containers to prevent caking.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "potassium-hydroxide-solution",
    "name": "Potassium Hydroxide Solution",
    "category": "Industrial Chemicals",
    "description": "Concentrated solutions of potassium hydroxide (caustic potash) in 45% and 49% concentrations. Used in pharmaceuticals, water treatment, food production, soap making, and chemical processing.",
    "cas_number": "1310-58-3",
    "available_concentrations": ["45%", "49%"],
    "appearance": "Clear, colorless liquid",
    "odor": "No smell",
    "solubility": "Dissolves in water, generates heat",
    "applications": [
      "pH adjustment in water treatment",
      "Soap making (saponification)",
      "Biodiesel production (catalyst)",
      "Chemical synthesis (pharmaceuticals, specialty chemicals)",
      "Metal processing (cleaning, etching)",
      "Food processing (pH control)",
      "Battery manufacturing (alkaline batteries)"
    ],
    "concentration_45_percent": {
      "uses": ["Soap making", "Biodiesel production", "General pH adjustment"]
    },
    "concentration_49_percent": {
      "uses": ["Chemical synthesis", "Water treatment", "Demanding alkaline processes"]
    },
    "packaging": ["Small containers", "Bulk containers"],
    "safety_notes": "Very caustic and corrosive. Wear proper protective equipment. Ensure good ventilation. Keep containers sealed to prevent moisture absorption.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "silfax-1000",
    "name": "Silfax 1000",
    "category": "Industrial Defoamers",
    "description": "A high-performance silicone-based defoamer for industrial use. Controls foam in water treatment, paper making, and chemical processes.",
    "appearance": "Clear to slightly hazy liquid",
    "odor": "Mild smell",
    "solubility": "Mixes with water",
    "ph": "6.0–8.0 (neutral)",
    "density": "~1.0 g/cm³",
    "viscosity": "Low to medium",
    "stability": "Stable in normal storage",
    "applications": [
      "Water treatment plants (aeration tanks, clarifiers)",
      "Paper mills (coating, quality control)",
      "Chemical plants (reactors, distillation columns, mixers)",
      "Various industrial processes (foam control)"
    ],
    "packaging": ["Small containers", "Bulk IBCs"],
    "safety_notes": "Can irritate skin and eyes. Wear gloves and eye protection. Use in well-ventilated areas. Store in original containers in a cool, dry place away from sunlight and extreme temperatures.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "soda-ash-dense",
    "name": "Soda Ash Dense",
    "category": "Industrial Chemicals",
    "description": "A granular form of sodium carbonate used in glass manufacturing, water treatment, and chemical production. Effective in raising pH levels and acting as a cleaning agent.",
    "cas_number": "497-19-8",
    "appearance": "White, crystalline powder or granular solid",
    "odor": "No smell",
    "solubility": "Dissolves easily in water",
    "ph_1_percent_solution": "11.0–12.0 (strongly alkaline)",
    "bulk_density": "1.0–1.2 g/cm³",
    "melting_point": "851°C",
    "purity": "99.2% minimum",
    "stability": "Stable normally but absorbs moisture and CO₂ from air",
    "applications": [
      "Glass manufacturing (flux agent, lowers melting point)",
      "Water treatment (pH adjuster, water softener)",
      "Detergent production (builder)",
      "Chemical industry (sodium bicarbonate, silicates production)"
    ],
    "packaging": ["25kg bags", "Bulk containers"],
    "safety_notes": "Can irritate skin and eyes. Wear gloves and eye protection. Avoid inhaling dust. Store in a dry, ventilated area away from acids and moisture.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "soda-ash-dense-fcc",
    "name": "Soda Ash Dense FCC (Food Grade)",
    "category": "Food Grade Chemicals",
    "description": "A high-purity sodium carbonate that meets Food Chemicals Codex standards. Used in food processing, beverage production, and pharmaceuticals.",
    "cas_number": "497-19-8",
    "appearance": "White, crystalline powder or granular solid",
    "odor": "No smell",
    "solubility": "Dissolves easily in water",
    "ph_1_percent_solution": "11.0–12.0 (strongly alkaline)",
    "bulk_density": "1.0–1.2 g/cm³",
    "melting_point": "851°C",
    "stability": "Stable normally but absorbs moisture",
    "applications": [
      "Food processing (pH regulation, baking)",
      "Beverage production (water treatment)",
      "Dairy operations (processing aid)",
      "Pharmaceuticals (tablets, neutralizing agent)"
    ],
    "packaging": ["25kg bags", "Bulk containers"],
    "safety_notes": "Can cause moderate irritation. Wear gloves, safety goggles, and protective clothing. Store in a cool, dry, ventilated area away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-acetate-anhydrous",
    "name": "Sodium Acetate Anhydrous",
    "category": "Industrial Chemicals",
    "description": "A white, crystalline powder used in various industrial processes including chemical synthesis, textile dyeing, and as a food preservative. The anhydrous form is more potent and lasts longer than hydrated versions.",
    "cas_number": "127-09-3",
    "chemical_formula": "CH₃COONa",
    "appearance": "White, crystalline powder or granular solid",
    "odor": "No smell",
    "solubility": "Very soluble in water (1230 g/L at 20°C)",
    "ph_1_percent_solution": "8.0–9.0 (slightly alkaline)",
    "density": "~1.528 g/cm³",
    "melting_point": "324°C",
    "stability": "Stable normally, absorbs moisture from air",
    "applications": [
      "Food industry (pH buffer, flavor enhancer)",
      "Textile industry (mordant for dyeing)",
      "Concrete (accelerates curing in cold weather)",
      "Pharmaceuticals (buffer preparation, tablets)",
      "Laboratories (buffer solutions, protein crystallization)"
    ],
    "packaging": ["Lab quantities", "Bulk industrial"],
    "safety_notes": "Generally safe. Use protective equipment and good ventilation. Store in a cool, dry place away from moisture, strong acids, and oxidizers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-bicarbonate",
    "name": "Sodium Bicarbonate",
    "category": "Industrial and Food Grade Chemicals",
    "description": "A white crystalline powder used as a pH buffer, in water treatment, food processing, pharmaceuticals, and manufacturing. Also known as baking soda.",
    "cas_number": "144-55-8",
    "chemical_formula": "NaHCO₃",
    "appearance": "White, crystalline powder or granular solid",
    "odor": "No smell",
    "solubility": "Very soluble in water (96 g/L at 20°C)",
    "ph_1_percent_solution": "8.1–8.3 (mildly alkaline)",
    "density": "~2.16 g/cm³",
    "decomposition_point": "50°C (releases CO₂)",
    "stability": "Stable normally but decomposes when heated above 50°C",
    "applications": [
      "Water treatment (pH adjustment, alkalinity maintenance)",
      "Acid neutralization (acidic waste, corrosion prevention)",
      "Pharmaceuticals (tablets, antacids)",
      "Food industry (baking, beverages, preservation)",
      "Buffer solutions, cleaning products"
    ],
    "packaging": ["Small drums", "Bulk IBCs"],
    "safety_notes": "Generally safe. Use dust masks when handling fine powders. Store in a dry, cool place away from acids and moisture.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-bicarbonate-72",
    "name": "Sodium Bicarbonate 7.2%",
    "category": "Medical Grade Solutions",
    "description": "A sterile, isotonic buffer solution used in medical and industrial applications for pH control and alkalinity management. Pharmaceutical-grade 7.2% sodium bicarbonate in purified water.",
    "cas_number": "144-55-8",
    "concentration": "7.2% w/v",
    "appearance": "Clear, colorless liquid",
    "odor": "No smell",
    "ph": "7.0–8.5",
    "osmolality": "~857 mOsm/kg",
    "density": "~1.05 g/mL",
    "stability": "Stable under normal storage",
    "sterility": "Sterile when properly made and stored",
    "applications": [
      "IV therapy (corrects metabolic acidosis)",
      "Dialysis (pH adjustment)",
      "Laboratory buffer preparation",
      "Industrial water treatment (pH modification)"
    ],
    "packaging": ["Ampoules", "Bulk containers"],
    "safety_notes": "Medical use only under professional supervision. Monitor electrolyte levels during therapeutic use. Store at room temperature (15-25°C) in original container, protected from light.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-bisulfite-solutions",
    "name": "Sodium Bisulfite Solutions",
    "category": "Industrial Chemicals",
    "description": "Aqueous solutions of sodium bisulfite in 30% and 40% concentrations. Used as a reducing agent, preservative, and in water treatment processes.",
    "cas_number": "7631-90-5",
    "available_concentrations": ["30%", "40%"],
    "appearance": "Clear to pale yellow liquid",
    "odor": "Strong sulfurous odor",
    "solubility": "Fully soluble in water",
    "applications": [
      "Boiler water treatment (oxygen scavenger)",
      "Chlorine neutralization (wastewater, swimming pools, textile processing)",
      "Pulp and paper bleaching",
      "Food preservation",
      "Photography (developer solutions)"
    ],
    "concentration_30_percent": {
      "uses": ["Water treatment", "Boiler oxygen scavenging", "Preservative processes"],
      "industries": ["Municipal water", "Food processing"]
    },
    "concentration_40_percent": {
      "uses": ["Pulp bleaching", "Heavy-duty oxygen scavenging", "Large-scale chlorine neutralization"],
      "industries": ["Paper manufacturing", "Industrial water treatment"]
    },
    "packaging": ["Drums", "IBCs", "Bulk"],
    "safety_notes": "Can cause irritation. Use protective equipment and ventilation. Store in a cool, dry place away from sunlight and incompatible materials.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-bromide-photo-grade",
    "name": "Sodium Bromide (Photo Grade)",
    "category": "Industrial Chemicals",
    "description": "A high-purity chemical used in photographic processes, water treatment, and oil drilling. The photo grade ensures low impurities for sensitive applications.",
    "cas_number": "7647-15-6",
    "appearance": "White powder or crystals",
    "odor": "None",
    "solubility": "Mixes easily with water",
    "ph_1_percent_solution": "6.5–8.5",
    "density": "~3.21 g/cm³",
    "stability": "Stable at normal temperatures",
    "applications": [
      "Photographic processing (developers, emulsions)",
      "Oil and gas (dense fluids for pressure control, corrosion inhibition)",
      "Water treatment (cleaning systems)",
      "Chemical manufacturing (organic chemicals, medicines)"
    ],
    "packaging": ["25kg bags", "Bulk options"],
    "safety_notes": "Wear gloves, goggles, and protective clothing. Use in well-ventilated areas. Keep away from strong acids and oxidisers. Store in a dry, cool place.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-carbonate-solutions",
    "name": "Sodium Carbonate Solutions",
    "category": "Industrial Cleaners and Water Treatment",
    "description": "Solutions of sodium carbonate in 10% and 20% strengths. Used in cleaning products, water softening, and various industrial processes.",
    "cas_number": "497-19-8",
    "available_concentrations": ["10%", "20%"],
    "appearance": "Clear to slightly cloudy liquid",
    "odor": "No smell",
    "solubility": "Fully dissolves in water",
    "applications": [
      "Cleaning product formulation",
      "pH control in water treatment",
      "Textile industry",
      "Heavy-duty industrial cleaning",
      "Boiler water treatment",
      "Chemical processing"
    ],
    "concentration_10_percent": {
      "uses": ["Cleaning product mixes", "pH control", "Textile work"]
    },
    "concentration_20_percent": {
      "uses": ["Heavy-duty cleaning", "Stronger pH adjustment", "Boiler water treatment"]
    },
    "packaging": ["Bulk drums", "IBCs", "Custom amounts"],
    "safety_notes": "Can be irritating. Store in a dry, cool place away from incompatible materials. Use appropriate PPE.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-hexametaphosphate",
    "name": "Sodium Hexametaphosphate (SHMP)",
    "category": "Industrial Chemicals",
    "description": "A common chemical used to soften water and keep solids dispersed in liquids. Used in water treatment, food processing, ceramics, and detergents.",
    "cas_number": "10124-56-8",
    "form": "White powder or granules",
    "odor": "None",
    "solubility": "High in water",
    "ph_1_percent_solution": "6.0–8.0",
    "density": "~2.48 g/cm³",
    "melting_point": "Softens at 616°C",
    "stability": "Stable if kept dry and away from acids",
    "applications": [
      "Water treatment (scale prevention in boilers, cooling systems, pipes)",
      "Food processing (food additive E452i, texture improvement for meat, poultry, seafood)",
      "Ceramics (dispersant for clay mixtures)",
      "Detergents (prevents mineral interference)"
    ],
    "packaging": ["25kg bags", "Bulk sacks", "Custom sizes"],
    "safety_notes": "Can irritate skin and eyes. Use gloves and eye protection. Use in well-ventilated areas. Store in a dry place away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-hypochlorite-3",
    "name": "Sodium Hypochlorite 3%",
    "category": "Disinfectants and Bleach",
    "description": "A solution commonly used as a disinfectant and bleach. Effective for sanitizing surfaces, purifying water, and removing stains.",
    "cas_number": "7681-52-9",
    "concentration": "3%",
    "appearance": "Clear, pale yellow to greenish liquid",
    "odor": "Strong chlorine-like smell",
    "solubility": "Fully soluble in water",
    "ph": "10.0–11.5 (strongly alkaline)",
    "density": "~1.05 g/cm³",
    "stability": "Decomposes over time when exposed to heat, light, or acidic conditions",
    "applications": [
      "Surface sanitization",
      "Water purification",
      "Stain removal",
      "Disinfection"
    ],
    "packaging": ["Customizable options"],
    "safety_notes": "Can cause mild to moderate irritation. Wear gloves and protective eyewear. Use in a well-ventilated area. Avoid contact with acids, ammonia, and organic materials.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-metabisulfite-hp",
    "name": "Sodium Metabisulfite HP",
    "category": "Food and Industrial Chemicals",
    "description": "A high-purity white powder used as a preservative, antioxidant, and reducing agent in food, water treatment, and industry.",
    "cas_number": "10102-40-6",
    "form": "White powder",
    "odor": "None",
    "solubility": "High",
    "ph_1_percent_solution": "7.0–10.0",
    "density": "~3.24 g/cm³",
    "stability": "Stable if stored properly",
    "applications": [
      "Food preservation (dried fruit, juices, wine)",
      "Mining (ore flotation, cyanide removal)",
      "Water treatment (chlorine removal, wastewater treatment)",
      "Photographic chemicals, pharmaceuticals, textiles"
    ],
    "packaging": ["Drums", "Bags", "Custom amounts"],
    "safety_notes": "Use in a well-ventilated place. Wear gloves and eye protection. Avoid inhaling dust. Store in a cool, dry place away from acids and oxidisers.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-molybdate-dihydrate",
    "name": "Sodium Molybdate Dihydrate",
    "category": "Industrial Chemicals",
    "description": "A crystalline compound used as a molybdenum source and corrosion inhibitor in various industrial applications.",
    "cas_number": "10102-40-6",
    "appearance": "White powder",
    "odor": "No smell",
    "solubility": "Dissolves easily in water",
    "ph": "7–10 when mixed in water",
    "density": "3.24 g/cm³",
    "applications": [
      "Corrosion inhibitor (boiler water, cooling towers, closed-loop systems)",
      "Metal finishing",
      "Lubricants",
      "Agriculture (micronutrient)",
      "Alternative to oxygen scavengers (environmentally friendlier)"
    ],
    "packaging": ["25kg bags", "Bulk orders"],
    "safety_notes": "Wear gloves and eye protection. Work in well-ventilated area. Store in a cool, dry place away from strong acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-silicate-n-grade",
    "name": "Sodium Silicate N Grade 38%",
    "category": "Industrial Chemicals",
    "description": "A concentrated aqueous solution of sodium silicate used in adhesives, detergents, and water treatment. Acts as a binding and protective agent.",
    "cas_number": "1344-09-8",
    "concentration": "38%",
    "silica_content": "38% silicon dioxide (SiO₂)",
    "appearance": "Clear, viscous liquid",
    "odor": "None",
    "solubility": "Fully water-soluble",
    "ph": "11–13 (strongly alkaline)",
    "density": "~1.38 g/cm³ at 20°C",
    "stability": "Stable in normal conditions",
    "applications": [
      "Detergents and cleaners (boosts cleaning power)",
      "Ceramics and refractories (binds materials, high heat resistance)",
      "Water treatment (corrosion and scale prevention)",
      "Construction (concrete hardening, soil stabilisation)"
    ],
    "packaging": ["200L drums", "1000L IBCs", "Custom orders"],
    "safety_notes": "Wear gloves, goggles, and protective gear. Work in well-ventilated area. Store in a cool, dry place away from acids (reacts and gives off heat).",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "solvent-150",
    "name": "Solvent 150",
    "category": "Industrial Solvents",
    "description": "A high-flash aromatic hydrocarbon solvent used in paints, adhesives, cleaning products, and degreasers. Strong solvency with low odour.",
    "cas_number": "64742-94-5",
    "appearance": "Clear liquid, colourless to pale yellow",
    "odor": "Mild aromatic",
    "flash_point": ">60°C",
    "boiling_range": "190–210°C",
    "aromatic_content": "98–99%",
    "density": "~0.88 g/cm³",
    "solubility": "Not soluble in water; mixes with hydrocarbons",
    "applications": [
      "Paints and coatings (pigment mixing, film formation)",
      "Adhesives (works with most resins and binders)",
      "Degreasing (workshops, factories)",
      "Printing inks (improves flow, manages drying times)"
    ],
    "packaging": ["Drums", "IBCs", "Bulk"],
    "safety_notes": "Flammable (but high flash point). Wear gloves, goggles, and protective gear. Work in well-ventilated space. Store in a cool, dry place away from heat and flames.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sulfamic-acid-15",
    "name": "Sulfamic Acid 15% Solution",
    "category": "Industrial Cleaners",
    "description": "An aqueous solution of sulfamic acid used as a descaling agent and cleaner. Effective at removing limescale, rust, and other mineral deposits.",
    "cas_number": "5329-14-6",
    "concentration": "15%",
    "appearance": "Clear, colourless liquid",
    "odor": "None",
    "solubility": "Mixes completely with water",
    "ph": "1.2–1.5",
    "density": "1.07–1.09 g/cm³",
    "stability": "Safe to store normally",
    "applications": [
      "Boiler and cooling system descaling",
      "Food factory equipment cleaning",
      "Paper mill digester cleaning",
      "Oil and gas site cleaning (low corrosion risk)"
    ],
    "packaging": ["Custom sizes", "Drums", "IBCs"],
    "safety_notes": "Use gloves and eye protection. Use in well-ventilated area. Don't mix with strong oxidisers or chlorine-based products.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "tetrakis-hydroxymethyl-phosphonium-sulfate",
    "name": "Tetrakis Hydroxymethyl Phosphonium Sulfate 75% (THPS)",
    "category": "Industrial Biocides",
    "description": "A concentrated aqueous solution of THPS, an environmentally friendly biocide used in water treatment, oil and gas operations, and papermaking. Also functions as a flame retardant.",
    "cas_number": "55566-30-8",
    "concentration": "75%",
    "appearance": "Clear to pale yellow liquid",
    "odor": "Mild smell",
    "ph_1_percent_solution": "3.0–5.0",
    "specific_gravity": "1.4–1.5 g/mL",
    "viscosity": "Low viscosity liquid",
    "stability": "Stable under normal storage",
    "solubility": "Mixes completely with water",
    "applications": [
      "Water treatment (microbial control, biofilm prevention)",
      "Oil and gas drilling (antimicrobial, prevents bacterial contamination)",
      "Cooling towers (microbial control)",
      "Industrial cleaning (fast bacteria kill)",
      "Textile flame retardant"
    ],
    "packaging": ["Drums", "Bulk containers"],
    "safety_notes": "Can cause severe irritation or burns. Wear chemical-resistant gloves and safety goggles. Use with good ventilation. Store in a cool, dry place away from incompatible materials.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "tetrapotassium-pyrophosphate",
    "name": "Tetrapotassium Pyrophosphate (TKPP)",
    "category": "Industrial and Food Additives",
    "description": "A white, crystalline salt used as a food additive, detergent, and in water treatment. Acts as a buffering agent and sequestrant.",
    "cas_number": "7320-34-5",
    "form": "White powder or granules",
    "odor": "Odourless",
    "solubility": "Dissolves easily in water",
    "ph_1_percent_solution": "7.0–10.0",
    "density": "~2.33 g/cm³",
    "stability": "Safe under normal conditions, keep away from acids and heat",
    "applications": [
      "Cleaning products (dishwashing powders, industrial cleaners)",
      "Water treatment (scale and rust prevention)",
      "Food industry (food additive E450, texture improvement in meat, seafood, dairy)",
      "Ceramics and paints (keeps mixtures smooth)"
    ],
    "packaging": ["25kg bags", "Bulk packaging"],
    "safety_notes": "Can mildly irritate skin and eyes. Wear PPE. Avoid inhaling dust. Store in a dry, cool place away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "triethylene-glycol",
    "name": "Triethylene Glycol (TEG)",
    "category": "Industrial Chemicals",
    "description": "A colorless, odorless, and hygroscopic liquid used as a solvent, in antifreeze formulations, and for gas dehydration.",
    "cas_number": "112-27-6",
    "chemical_formula": "C₆H₁₄O₄",
    "appearance": "Clear, colourless liquid",
    "odor": "Odourless or slight smell",
    "solubility": "Mixes fully with water",
    "ph": "Neutral",
    "density": "~1.12 g/cm³ at 20°C",
    "boiling_point": "285°C",
    "stability": "Stays stable under normal storage",
    "applications": [
      "Natural gas dehydration (prevents rust and blockages)",
      "HVAC systems (moisture control)",
      "Plasticisers and lubricants",
      "Solvents and cleaning fluids",
      "Cosmetics (moisture retention)"
    ],
    "packaging": ["Drums", "IBCs", "Bulk"],
    "safety_notes": "Wear gloves and goggles. Work in well-ventilated space. Store in a cool, dry place away from oxidisers. Low toxicity but not for consumption.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "trisodium-phosphate-98",
    "name": "Trisodium Phosphate 98%",
    "category": "Industrial Cleaners",
    "description": "A highly concentrated, crystalline salt used as a cleaning agent, pH regulator, and in various industrial processes. Effective in degreasing and cleaning applications.",
    "cas_number": "7601-54-9",
    "purity": "98%",
    "appearance": "White powder",
    "odor": "None",
    "solubility": "Dissolves in water",
    "ph_1_percent_solution": "11.5–12.5",
    "density": "~2.5 g/cm³",
    "melting_point": "Breaks down over 100°C",
    "stability": "Stable in normal storage",
    "applications": [
      "Industrial cleaning (grease, grime)",
      "Metal work (surface preparation for painting/coating)",
      "Water treatment (water softening, scale prevention)",
      "Food processing equipment cleaning (where allowed)"
    ],
    "packaging": ["25kg bags", "Bulk"],
    "safety_notes": "Can irritate skin and eyes. Wear gloves, goggles, and protective clothing. Work in ventilated area. Store in a dry, cool place away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "urea",
    "name": "Urea",
    "category": "Fertilizers and Industrial Chemicals",
    "description": "A colorless, crystalline compound used in fertilizers, pharmaceuticals, and cosmetics. Contains about 46% nitrogen, making it one of the strongest solid nitrogen fertilisers.",
    "cas_number": "57-13-6",
    "appearance": "White powder or small granules",
    "odor": "None",
    "solubility": "Dissolves easily in water",
    "ph": "Neutral when mixed with water",
    "nitrogen_content": "~46%",
    "melting_point": "132°C (breaks down before boiling)",
    "stability": "Safe under normal conditions, breaks down slowly in humid air",
    "applications": [
      "Agriculture (nitrogen fertilizer for wheat, sugarcane, grasses, vegetables)",
      "Resin and glue production (urea-formaldehyde resins, melamine)",
      "Diesel exhaust fluid (AdBlue® production)",
      "Animal feed supplement",
      "Cosmetics and pharmaceuticals"
    ],
    "forms": ["Granular", "Prilled"],
    "packaging": ["Bulk bags", "25kg bags", "Custom sizes"],
    "safety_notes": "Store in a cool, dry spot with good airflow. Avoid moisture and direct sunlight. Wear gloves and eye protection when handling dusty material.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "urea-solutions",
    "name": "Urea Solutions",
    "category": "Fertilizers and Industrial Chemicals",
    "description": "Concentrated aqueous solutions of urea in 20% and 50% concentrations. Used in agriculture, medicine, cosmetics, and water treatment.",
    "cas_number": "57-13-6",
    "available_concentrations": ["20%", "50%"],
    "appearance": "Clear, colourless liquid",
    "odor": "No strong smell",
    "solubility": "Mixes well with water",
    "applications": [
      "Agriculture (nitrogen fertilizer)",
      "Diesel exhaust fluid (AdBlue®/DEF)",
      "Corrosion control in industrial systems",
      "Cosmetics and skincare (hydration)",
      "Pharmaceuticals and veterinary treatments",
      "Resin and adhesive production"
    ],
    "concentration_20_percent": {
      "uses": ["Skin creams", "Medicines", "Spray fertilizers", "Veterinary treatments"]
    },
    "concentration_50_percent": {
      "uses": ["Diesel Exhaust Fluid", "High-strength fertilizers", "Adhesives and resins"]
    },
    "packaging": ["5L", "20L", "200L drums", "1000L IBCs"],
    "safety_notes": "Store in a cool, dry place out of direct sunlight. Generally safe but avoid ingestion and eye contact.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "xylene-isomers",
    "name": "Xylene Isomers",
    "category": "Industrial Solvents",
    "description": "A mixture of three related aromatic hydrocarbons: ortho-xylene, meta-xylene, and para-xylene. Used as solvents in industrial applications, paint thinners, and chemical synthesis.",
    "cas_number": "1330-20-7",
    "chemical_formula": "C₈H₁₀",
    "appearance": "Clear, colourless liquid",
    "odor": "Sweet, aromatic",
    "water_solubility": "Doesn't mix with water",
    "solubility": "Mixes with most organic solvents",
    "density": "~0.86 g/cm³ at 20°C",
    "flash_point": "27°C",
    "boiling_point_range": "137–144°C",
    "stability": "Stable if stored right, flammable",
    "applications": [
      "Paints and coatings (smooth application, proper drying)",
      "Adhesives and sealants (spread and setting)",
      "Printing (cleaning inks, equipment maintenance)",
      "Cleaning (removes oils and residues)"
    ],
    "packaging": ["20L drums", "200L drums", "IBC containers", "Custom options"],
    "safety_notes": "Flammable. Use in well-ventilated spaces with gloves, goggles, and protective clothing. Store in sealed containers away from heat or flames.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sulfamic-acid-powder",
    "name": "Sulfamic Acid Powder 100%",
    "category": "Industrial Cleaners",
    "description": "A highly concentrated, solid acid used as a descaling agent and in various industrial applications. Effective in removing mineral deposits and used in chemical synthesis.",
    "cas_number": "5329-14-6",
    "purity": "100%",
    "form": "White, crystalline powder",
    "odor": "None",
    "solubility": "High in water",
    "ph_1_percent_solution": "1.0–1.5",
    "density": "~2.126 g/cm³",
    "melting_point": "205°C (decomposes)",
    "stability": "Stays stable in normal conditions",
    "applications": [
      "Descaling (boilers, heat exchangers, cooling systems)",
      "Cleaning (tiles, bathrooms, kitchen surfaces)",
      "Food industry (stainless steel cleaning)",
      "Paper mills (production equipment cleaning)",
      "pH control in formulations"
    ],
    "packaging": ["25kg bags", "50kg drums", "Custom packaging"],
    "safety_notes": "Wear gloves, goggles, and protective clothing. Work in well-ventilated area. Store in a cool, dry place away from moisture and strong chemicals.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-hypochlorite-solutions",
    "name": "Sodium Hypochlorite Solutions",
    "category": "Disinfectants and Bleach",
    "description": "Solutions in 5% and 12.5% concentrations used as disinfectants and bleach. Effective for sanitizing surfaces, purifying water, and removing stains.",
    "cas_number": "7681-52-9",
    "available_concentrations": ["5%", "12.5%"],
    "appearance": "Clear to pale yellow liquid",
    "odor": "Strong chlorine smell",
    "applications": [
      "Water treatment (disinfection)",
      "Food production sanitation (low concentrations)",
      "Hospital and hotel disinfection",
      "Industrial bleaching and cleaning",
      "Pool cleaning",
      "Laundry services"
    ],
    "concentration_5_percent": {
      "uses": ["Food production", "Cleaning", "Small water systems"]
    },
    "concentration_12.5_percent": {
      "uses": ["Public water treatment", "Large-scale disinfection", "Industrial bleaching"]
    },
    "packaging": ["5L packs", "Bulk containers"],
    "safety_notes": "Corrosive. Store in a cool place away from sunlight. Use appropriate PPE. Avoid contact with acids, ammonia, and organic materials.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sodium-chlorite-31",
    "name": "Sodium Chlorite 31%",
    "category": "Industrial Chemicals",
    "description": "A concentrated aqueous solution of sodium chlorite used as a powerful oxidizing agent and disinfectant. Used in water treatment, textile bleaching, and chlorine dioxide production.",
    "cas_number": "7758-19-2",
    "concentration": "31%",
    "appearance": "Clear to light yellow liquid",
    "odor": "Mild chlorine-like odour",
    "solubility": "Fully dissolves in water",
    "ph": "12–13 (alkaline)",
    "density": "~1.15 g/cm³",
    "stability": "Stable when stored properly",
    "applications": [
      "Chlorine dioxide production (water disinfection)",
      "Water treatment (germ removal, odour control)",
      "Food factory sanitation",
      "Pulp and paper bleaching",
      "Wastewater treatment (odour control)"
    ],
    "packaging": ["25L drums", "200L drums", "1000L IBCs"],
    "safety_notes": "Can irritate. Wear gloves, eye protection, and protective clothing. Store in a cool, ventilated space away from heat, acids, and organic materials.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-70",
    "name": "Ammonium Bisulphite 70%",
    "category": "Industrial Chemicals",
    "description": "A high-strength reducing agent used for oxygen removal in boiler water treatment, oilfield applications, and industrial preservation.",
    "cas_number": "10102-43-9",
    "concentration": "70%",
    "chemical_formula": "NH₄HSO₃",
    "appearance": "Pale yellow liquid",
    "odor": "Mild, sulphurous",
    "solubility": "Fully water-soluble",
    "ph": "4.0–5.0",
    "density": "~1.35–1.4 g/cm³",
    "stability": "Stable under ambient conditions",
    "applications": [
      "Boiler feedwater treatment (oxygen scavenger)",
      "Oil and gas production (corrosion prevention)",
      "Pulp bleaching (lignin removal, brightness control)",
      "Pipeline corrosion protection"
    ],
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Corrosive. Store in a cool, dry, ventilated area away from oxidizers. Use gloves and eye protection.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-65",
    "name": "Ammonium Bisulphite 65%",
    "category": "Industrial Chemicals",
    "description": "A versatile chemical solution used for oxygen scavenging, corrosion control, and preservation of pipelines and equipment.",
    "cas_number": "10192-30-0",
    "concentration": "65%",
    "appearance": "Clear to yellowish liquid",
    "odor": "Sulfur-like odor",
    "solubility": "Fully soluble in water",
    "ph": "4.5–5.5 (acidic)",
    "density": "~1.28 g/cm³",
    "stability": "Stable under normal handling conditions",
    "applications": [
      "Boiler oxygen scavenger",
      "Water treatment systems",
      "Oilfield processes",
      "Corrosion control"
    ],
    "packaging": ["Customizable options"],
    "safety_notes": "Can corrode metal surfaces over time. Use gloves and goggles. Ensure good ventilation. Keep away from strong oxidizers and acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-60",
    "name": "Ammonium Bisulphite 60%",
    "category": "Industrial Chemicals",
    "description": "A high-purity oxygen scavenger formulated for aggressive corrosion control in critical industrial systems. Reacts rapidly with dissolved oxygen.",
    "cas_number": "10102-43-9",
    "concentration": "60%",
    "chemical_formula": "NH₄HSO₃",
    "appearance": "Pale yellow liquid",
    "odor": "Mild, sulphurous",
    "solubility": "Fully water-soluble",
    "ph": "4.0–5.0",
    "density": "~1.35–1.4 g/cm³",
    "stability": "Stable under ambient conditions",
    "applications": [
      "High-temperature boiler feedwater treatment",
      "Oil and gas pipelines (corrosion inhibitor)",
      "Paper manufacturing",
      "Food-grade caramel colour production"
    ],
    "packaging": ["Drums", "IBCs", "Tanker loads"],
    "safety_notes": "May irritate skin or respiratory system. Store in a cool, dry, ventilated area away from oxidising agents and acids. Use PPE.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-40",
    "name": "Ammonium Bisulphite 40%",
    "category": "Industrial Chemicals",
    "description": "A lower-concentration solution used in water treatment, paper bleaching, and food preservation. Serves as an efficient oxygen scavenger for moderate-duty corrosion control.",
    "cas_number": "10102-43-9",
    "concentration": "40%",
    "appearance": "Pale yellow liquid",
    "odor": "Mild sulphurous",
    "solubility": "Fully water-soluble",
    "density": "~1.3 g/cm³",
    "ph": "4.0–5.0",
    "stability": "Stable under ambient conditions",
    "applications": [
      "Boiler feedwater treatment (oxygen removal)",
      "Cooling systems (corrosion inhibitor)",
      "Oilfield water injection",
      "Food-grade processes (caramel colour production)"
    ],
    "packaging": ["Drums", "IBCs", "Bulk containers"],
    "safety_notes": "May cause irritation on contact. Use PPE. Store in a cool, dry, ventilated space away from oxidising agents.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-food-grade",
    "name": "Ammonium Bisulphite Food Grade",
    "category": "Food Additives",
    "description": "A high-purity additive used in the food and beverage industry as a preservative and antioxidant. Effective in preventing microbial growth and maintaining product freshness.",
    "cas_number": "10192-30-0",
    "appearance": "Clear to slightly yellow liquid",
    "odor": "Low to no detectable odor",
    "solubility": "Completely soluble in water",
    "ph": "5.0–6.0",
    "density": "~1.14 g/cm³",
    "stability": "Stable in sealed packaging when stored properly",
    "applications": [
      "Food preservation",
      "Antioxidant in food processing",
      "Beverage industry",
      "Processing environments"
    ],
    "packaging": ["Food-safe containers"],
    "safety_notes": "Approved for controlled food use. Low risk of skin and eye irritation. Do not mix with strong oxidizers. Store in a clean, dry location.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-sulphite-solution-40",
    "name": "Ammonium Sulphite Solution 40%",
    "category": "Industrial Chemicals",
    "description": "A clear, water-soluble liquid used in pulp and paper bleaching, photographic development, and as a reducing agent in various industrial processes.",
    "cas_number": "10196-04-0",
    "concentration": "40%",
    "appearance": "Pale yellow liquid",
    "odor": "Mild sulphur-like",
    "solubility": "Fully soluble in water",
    "ph": "4.0–5.5",
    "density": "~1.3 g/cm³",
    "stability": "Stable under ambient conditions",
    "applications": [
      "Boiler feedwater treatment (oxygen scavenger)",
      "Cooling towers and closed-loop systems (corrosion inhibitor)",
      "Pulp and paper bleaching (lignin breakdown)",
      "Chemical processing",
      "Power generation"
    ],
    "packaging": ["Drums", "IBCs", "Tankers"],
    "safety_notes": "May irritate skin and eyes. Use PPE. Store in a cool, ventilated area away from oxidising materials.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-solution",
    "name": "Ammonium Bisulphite Solution",
    "category": "Industrial Chemicals",
    "description": "A clear, sulfur-based liquid used in water treatment, pulp bleaching, and as an effective oxygen scavenger in boiler feedwater systems.",
    "cas_number": "10192-30-0",
    "appearance": "Pale yellow liquid",
    "odor": "Sulphurous odor",
    "solubility": "Fully soluble in water",
    "applications": [
      "Boiler feedwater treatment (oxygen removal)",
      "Oil and gas production (corrosion inhibitor)",
      "Cooling towers and closed-loop systems",
      "Pulp and paper bleaching",
      "Food manufacturing (caramel color production)"
    ],
    "packaging": ["Drums", "IBCs", "Bulk"],
    "safety_notes": "Store in a cool, well-ventilated environment away from heat sources and oxidizers. Use gloves and eye protection.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-nickel",
    "name": "Ammonium Bisulphite Nickel",
    "category": "Specialty Industrial Chemicals",
    "description": "A specialized formulation used in metal finishing, electroplating, and catalyst applications. Integrates nickel ions with the reducing power of bisulphite.",
    "cas_number": "10192-30-0 (Base Component)",
    "appearance": "Pale green to yellowish solution",
    "odor": "Mild sulfurous odor",
    "solubility": "Fully soluble in water",
    "ph": "3.5–5.0 (acidic)",
    "density": "1.25–1.30 g/cm³ (varies by formulation)",
    "stability": "Stable in sealed containers under controlled conditions",
    "applications": [
      "Metal finishing and electroplating",
      "Catalyst systems",
      "Nickel-based product production",
      "Metallurgical sector"
    ],
    "packaging": ["Customizable options"],
    "safety_notes": "May cause irritation or allergic reaction due to nickel. Toxic if ingested. Avoid mixing with oxidizers, acids, and incompatible metals. Store in a cool, well-ventilated facility.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ammonium-bisulphite-cobalt",
    "name": "Ammonium Bisulphite Cobalt",
    "category": "Specialty Industrial Chemicals",
    "description": "A specialized chemical solution containing cobalt ions, designed for applications in catalyst systems, electronics, and electroplating. Offers enhanced redox performance.",
    "cas_number": "10102-40-6",
    "appearance": "Pale yellow to amber liquid",
    "solubility": "Fully soluble in water",
    "density": "1.3–1.4 g/cm³ (varies with concentration)",
    "ph": "3.5–5.5 (slightly acidic)",
    "stability": "Stable at room temperature, degrades at high heat",
    "applications": [
      "Boiler feedwater treatment (rapid oxygen scavenging)",
      "Oil and gas systems (corrosion prevention)",
      "Catalyst systems and electronics",
      "Petrochemical and gas treatment processes",
      "Pulp and paper processing"
    ],
    "packaging": ["IBCs", "Drums", "Custom configurations"],
    "safety_notes": "Use in ventilated areas. Avoid inhalation and skin contact. Use appropriate PPE. Store away from acids.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "sulfuric-acid-solutions",
    "name": "Sulfuric Acid Solutions",
    "category": "Industrial Chemicals",
    "description": "Versatile and highly corrosive liquids available in 60%, 93%, and 98% concentrations. Used in fertilizer production, chemical manufacturing, petroleum refining, metal processing, and water treatment.",
    "cas_number": "7664-93-9",
    "available_concentrations": ["60%", "93%", "98%"],
    "appearance": "Clear to slightly yellow liquid",
    "odor": "Sharp smell",
    "applications": [
      "Chemical manufacturing",
      "Wastewater treatment",
      "Mineral processing in mining",
      "pH control",
      "Fertiliser production",
      "Oil refining",
      "Battery acid (93%)",
      "Explosives manufacturing"
    ],
    "concentration_60_percent": {
      "uses": ["Wastewater treatment", "pH adjustment", "Some chemical processes"],
      "characteristics": "Easier to handle than stronger acids, clear or light yellow, syrupy"
    },
    "concentration_93_percent": {
      "uses": ["Fertiliser production", "Oil refining", "Battery acid"],
      "characteristics": "Standard for most industrial uses, strong but manageable"
    },
    "concentration_98_percent": {
      "uses": ["Chemical manufacturing", "Explosives", "Laboratories"],
      "characteristics": "Strongest and purest, very little water, heavy oily feel"
    },
    "packaging": ["Drums", "IBCs", "Bulk tankers"],
    "safety_notes": "Highly corrosive. Wear proper safety gear. Avoid contact with metals and organic materials. Store in acid-safe containers in a cool, dry area.",
    "supplier": "Pascom",
    "country": "Australia"
  },
  {
    "id": "ferric-chloride",
    "name": "Ferric Chloride",
    "category": "Industrial Chemicals",
    "description": "A chemical used in water treatment, electronics, and metal processing. Available in 40% and 42% solutions.",
    "cas_number": "7705-08-0",
    "available_concentrations": ["40%", "42%"],
    "appearance": "Dark brown liquid",
    "odor": "Slightly acidic (40%) / Stronger acidic smell (42%)",
    "solubility": "Dissolves easily in water",
    "applications": [
      "Water treatment (impurity removal)",
      "PCB manufacturing (etching)",
      "Wastewater treatment (heavy metal removal)",
      "Metal surface treatment (corrosion prevention)"
    ],
    "concentration_40_percent": {
      "uses": ["Water treatment plants", "PCB manufacturing", "Industrial wastewater treatment"],
      "characteristics": "Easy to handle, works well for regular use"
    },
    "concentration_42_percent": {
      "uses": ["Advanced PCB production", "Metal surface treatment", "Large-scale water purification"],
      "characteristics": "Stronger, thicker, for heavy-duty tasks"
    },
    "packaging": ["Bulk", "IBCs", "Drums"],
    "safety_notes": "Corrosive. Store in a cool, well-ventilated place. Wear protective gear. Delivery across Australia.",
    "supplier": "Pascom",
    "country": "Australia"
  }
];

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = productsList.find(p => p.id === productId);
  const [selectedTab, setSelectedTab] = useState('overview');

  if (!product) {
    return (
      <div className="min-h-screen bg-red-950 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-white/70 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products-services">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-950 min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-linear-to-br from-red-900 to-red-950 py-24 px-4 md:px-8 border-b border-red-700/30">
        <div className="max-w-7xl mx-auto">
          <Link href="/products-services" className="inline-flex items-center gap-3 text-red-300 hover:text-red-200 hover:bg-red-900/40 mb-20 py-3 px-5 rounded-lg transition-all font-semibold text-base">
            <i className="fa-solid fa-arrow-left text-base"></i> Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-black/30 border border-red-700/30">
              <Image
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop"
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="bg-red-600/40 border border-red-500/60 px-4 py-2 rounded-full text-red-200 text-sm font-bold tracking-wider uppercase inline-block mb-4">
                  {product.category}
                </span>
                <h1 className="text-5xl font-bold text-white mb-4">{product.name}</h1>
                <p className="text-white/70 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.cas_number && (
                  <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-4">
                    <p className="text-red-300 text-sm font-semibold mb-1">CAS Number</p>
                    <p className="text-white font-mono">{product.cas_number}</p>
                  </div>
                )}
                {product.concentration && (
                  <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-4">
                    <p className="text-red-300 text-sm font-semibold mb-1">Concentration</p>
                    <p className="text-white">{product.concentration}</p>
                  </div>
                )}
                {product.ph && (
                  <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-4">
                    <p className="text-red-300 text-sm font-semibold mb-1">pH</p>
                    <p className="text-white">{product.ph}</p>
                  </div>
                )}
                {product.density && (
                  <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-4">
                    <p className="text-red-300 text-sm font-semibold mb-1">Density</p>
                    <p className="text-white">{product.density}</p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <Link href={`/products-services/enquiry/${productId}`}>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-xl">
                  Request Information
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-red-700/30 pb-4">
            {[
              { id: 'overview', label: 'Overview', icon: 'fa-flask' },
              { id: 'properties', label: 'Properties', icon: 'fa-vial' },
              { id: 'applications', label: 'Applications', icon: 'fa-cube' },
              { id: 'safety', label: 'Safety & Packaging', icon: 'fa-shield' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  selectedTab === tab.id
                    ? 'bg-red-600 text-white'
                    : 'bg-red-900/20 text-white/70 hover:text-white hover:bg-red-900/40'
                }`}
              >
                <i className={`fa-solid ${tab.icon} text-sm`}></i>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-red-900/20 border border-red-700/30 rounded-2xl p-8">
            {/* Overview Tab */}
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">Product Overview</h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  {product.description}
                </p>
                {product.features && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-red-300 mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80">
                          <i className="fa-solid fa-check text-red-400"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Properties Tab */}
            {selectedTab === 'properties' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">Physical Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.appearance && (
                    <div className="bg-red-900/30 rounded-lg p-5 border border-red-700/40">
                      <p className="text-red-300 font-semibold mb-2">Appearance</p>
                      <p className="text-white/80">{product.appearance}</p>
                    </div>
                  )}
                  {product.odor && (
                    <div className="bg-red-900/30 rounded-lg p-5 border border-red-700/40">
                      <p className="text-red-300 font-semibold mb-2">Odor</p>
                      <p className="text-white/80">{product.odor}</p>
                    </div>
                  )}
                  {product.boiling_point && (
                    <div className="bg-red-900/30 rounded-lg p-5 border border-red-700/40">
                      <p className="text-red-300 font-semibold mb-2">Boiling Point</p>
                      <p className="text-white/80">{product.boiling_point}</p>
                    </div>
                  )}
                  {product.freezing_point && (
                    <div className="bg-red-900/30 rounded-lg p-5 border border-red-700/40">
                      <p className="text-red-300 font-semibold mb-2">Freezing Point</p>
                      <p className="text-white/80">{product.freezing_point}</p>
                    </div>
                  )}
                  {product.solubility && (
                    <div className="bg-red-900/30 rounded-lg p-5 border border-red-700/40">
                      <p className="text-red-300 font-semibold mb-2">Solubility</p>
                      <p className="text-white/80">{product.solubility}</p>
                    </div>
                  )}
                  {product.stability && (
                    <div className="bg-red-900/30 rounded-lg p-5 border border-red-700/40">
                      <p className="text-red-300 font-semibold mb-2">Stability</p>
                      <p className="text-white/80">{product.stability}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {selectedTab === 'applications' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.applications?.map((app, i) => (
                    <div key={i} className="flex items-center gap-3 bg-red-900/30 rounded-lg p-4 border border-red-700/40">
                      <i className="fa-solid fa-circle-check text-red-400 text-lg shrink-0"></i>
                      <span className="text-white/80">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Safety & Packaging Tab */}
            {selectedTab === 'safety' && (
              <div className="space-y-8">
                {product.safety_notes && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <i className="fa-solid fa-triangle-exclamation text-red-400"></i> Safety Information
                    </h2>
                    <div className="bg-red-900/40 border border-red-600/40 rounded-lg p-6">
                      <p className="text-white/80 leading-relaxed">{product.safety_notes}</p>
                    </div>
                  </div>
                )}

                {product.packaging && (
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                      <i className="fa-solid fa-box text-red-400"></i> Packaging Options
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {product.packaging.map((pkg, i) => (
                        <div key={i} className="bg-red-900/30 border border-red-700/40 rounded-lg p-5 text-center">
                          <i className="fa-solid fa-cube text-red-400 text-2xl mb-3 block"></i>
                          <p className="text-white/80 font-medium">{pkg}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Info Section */}
      <section className="w-full py-16 px-4 md:px-8 border-t border-red-700/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-900/20 border border-red-700/30 rounded-2xl p-8 text-center">
              <i className="fa-solid fa-globe text-4xl text-red-400 mb-4"></i>
              <p className="text-red-300 font-semibold mb-2">Country of Origin</p>
              <p className="text-white text-lg">{product.country}</p>
            </div>
            <div className="bg-red-900/20 border border-red-700/30 rounded-2xl p-8 text-center">
              <i className="fa-solid fa-building text-4xl text-red-400 mb-4"></i>
              <p className="text-red-300 font-semibold mb-2">Supplier</p>
              <p className="text-white text-lg">{product.supplier}</p>
            </div>
            <div className="bg-red-900/20 border border-red-700/30 rounded-2xl p-8 text-center">
              <i className="fa-solid fa-tag text-4xl text-red-400 mb-4"></i>
              <p className="text-red-300 font-semibold mb-2">Category</p>
              <p className="text-white text-lg">{product.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-red-600 to-red-800 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Need more information about this product? Request a quote, download the SDS, or contact our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* href={`/products-services/enquiry/${productId}`} */}
            <Link href="/products-inqurie-form" target='_blank'>
              <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
                <i className="fa-solid fa-envelope"></i> Enquiry
              </button>
            </Link>
            <Link href="/sds-request-form" target='_blank'>
              <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                <i className="fa-solid fa-file-pdf"></i> Request SDS
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
