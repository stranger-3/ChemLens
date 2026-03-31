const compounds = [
  {
    name: "Water",
    formula: "H2O",
    theory: [
      "Essential for all known forms of life.",
      "Cohesive and adhesive properties.",
      "High specific heat capacity.",
      "Polar molecule with hydrogen bonding.",
      "Liquid at room temperature.",
      "Solvent for many substances.",
      "Participates in chemical reactions.",
      "Has unique density behavior when frozen.",
      "Involved in photosynthesis.",
      "Regulates temperature in organisms."
    ],
    properties: "Boiling: 100°C, Freezing: 0°C, Density: 1 g/mL, Colorless, Odorless",
    uses: "Drinking, Cleaning, Industrial processes, Agriculture",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Water_molecule_3D.svg/120px-Water_molecule_3D.svg.png"
  },
  {
    name: "Glucose",
    formula: "C6H12O6",
    theory: [
      "Monosaccharide sugar important in biology.",
      "Primary energy source for cells.",
      "Can be stored as glycogen in animals.",
      "Occurs naturally in fruits and honey.",
      "Soluble in water.",
      "Participates in cellular respiration.",
      "Exists in alpha and beta forms.",
      "Sweet taste.",
      "Building block for polysaccharides.",
      "Used in fermentation to produce ethanol."
    ],
    properties: "Molecular weight: 180.16 g/mol, Melting: 146°C, Soluble in water, Sweet taste",
    uses: "Energy source, Fermentation, Medicine, Food industry",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Glucose_Haworth.svg/120px-Glucose_Haworth.svg.png"
  },
  {
    name: "Ethanol",
    formula: "C2H5OH",
    theory: [
      "Volatile, flammable, colorless liquid.",
      "Produced by fermentation of sugars.",
      "Used as solvent and fuel.",
      "Has intoxicating effects in humans.",
      "Polar molecule, miscible with water.",
      "Can be oxidized to acetaldehyde.",
      "Common in alcoholic beverages.",
      "Used in laboratories as a reagent.",
      "Effective disinfectant.",
      "Boiling point 78.37°C."
    ],
    properties: "Boiling: 78.37°C, Melting: -114°C, Density: 0.789 g/mL, Flammable, Polar solvent",
    uses: "Alcoholic drinks, Fuel, Solvent, Disinfectant",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethanol-2D-flat.svg/120px-Ethanol-2D-flat.svg.png"
  },
  {
    name: "Benzene",
    formula: "C6H6",
    theory: [
      "Aromatic hydrocarbon with a ring structure.",
      "Planar molecule with delocalized electrons.",
      "Highly flammable and toxic.",
      "Found in crude oil and gasoline.",
      "Used as a precursor for many chemicals.",
      "Colorless liquid with sweet smell.",
      "Participates in electrophilic substitution reactions.",
      "Hexagonal ring structure with alternating double bonds.",
      "Boiling point 80.1°C, Melting point 5.5°C.",
      "Carcinogenic upon prolonged exposure."
    ],
    properties: "Boiling: 80.1°C, Melting: 5.5°C, Density: 0.8765 g/mL, Colorless, Flammable",
    uses: "Solvent, Chemical synthesis, Plastics, Rubber industry",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Benzene-2D-skeletal.svg/120px-Benzene-2D-skeletal.svg.png"
  },
  {
    name: "Methanol",
    formula: "CH3OH",
    theory: [
      "Simplest alcohol, toxic to humans.",
      "Used as fuel and solvent.",
      "Colorless liquid with a slightly sweet odor.",
      "Can be oxidized to formaldehyde.",
      "Miscible with water.",
      "Highly flammable.",
      "Absorbs CO2 from the air.",
      "Used in biodiesel production.",
      "Poisonous when ingested.",
      "Boiling point 64.7°C."
    ],
    properties: "Boiling: 64.7°C, Melting: -97.6°C, Density: 0.792 g/mL, Flammable, Polar solvent",
    uses: "Fuel, Solvent, Antifreeze, Chemical synthesis",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Methanol-2D-flat.svg/120px-Methanol-2D-flat.svg.png"
  },
  {
    name: "Acetone",
    formula: "C3H6O",
    theory: [
      "Colorless, volatile liquid.",
      "Simplest ketone.",
      "Used as solvent for plastics and synthetic fibers.",
      "Highly flammable.",
      "Miscible with water, alcohol, and ether.",
      "Boiling point 56°C.",
      "Participates in chemical reactions.",
      "Used in nail polish removers.",
      "Used in laboratories as reagent.",
      "Light sweet odor."
    ],
    properties: "Boiling: 56°C, Melting: -95°C, Density: 0.7845 g/mL, Flammable, Polar solvent",
    uses: "Solvent, Nail polish remover, Chemical synthesis",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Acetone-2D-skeletal.svg/120px-Acetone-2D-skeletal.svg.png"
  },
  {
    name: "Ammonia",
    formula: "NH3",
    theory: [
      "Colorless gas with pungent smell.",
      "Used in fertilizers and cleaning products.",
      "Soluble in water to form ammonium hydroxide.",
      "Boiling point -33.34°C.",
      "Melting point -77.73°C.",
      "Participates in chemical reactions.",
      "Basic in nature.",
      "Light gas, less dense than air.",
      "Used in refrigeration.",
      "Highly toxic in concentrated form."
    ],
    properties: "Boiling: -33.34°C, Melting: -77.73°C, Density: 0.73 kg/m³, Colorless, Pungent odor",
    uses: "Fertilizers, Cleaning agents, Refrigerants, Chemical manufacturing",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ammonia-3D-balls.png/120px-Ammonia-3D-balls.png"
  },
  {
    name: "Sodium Chloride",
    formula: "NaCl",
    theory: [
      "Common table salt.",
      "Essential for life.",
      "Ionic compound with high melting point.",
      "Soluble in water.",
      "Used in food and industry.",
      "Stable solid at room temperature.",
      "Conducts electricity when molten or in solution.",
      "Used in de-icing roads.",
      "Occurs naturally in seawater.",
      "Used in chemical reactions."
    ],
    properties: "Melting: 801°C, Boiling: 1413°C, Density: 2.16 g/cm³, Solid, Ionic compound",
    uses: "Food seasoning, Chemical industry, De-icing roads",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/NaCl-polyhedra-3D-ionic.png/120px-NaCl-polyhedra-3D-ionic.png"
  },
  {
    name: "Sulfuric Acid",
    formula: "H2SO4",
    theory: [
      "Dense, colorless to slightly yellow viscous liquid.",
      "Strong mineral acid.",
      "Used in fertilizer and chemical manufacturing.",
      "Highly corrosive.",
      "Boiling point 337°C.",
      "Melting point 10°C.",
      "Reacts violently with water if concentrated.",
      "Used in lead-acid batteries.",
      "Participates in dehydration reactions.",
      "Used in chemical laboratories."
    ],
    properties: "Boiling: 337°C, Melting: 10°C, Density: 1.84 g/mL, Colorless to yellow, Corrosive",
    uses: "Fertilizers, Batteries, Chemical synthesis",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sulfuric-acid-2D-skeletal.svg/120px-Sulfuric-acid-2D-skeletal.svg.png"
  },
  {
    name: "Nitric Acid",
    formula: "HNO3",
    theory: [
      "Strong oxidizing mineral acid.",
      "Colorless or yellow liquid.",
      "Highly corrosive.",
      "Used in fertilizers and explosives.",
      "Boiling point 83°C.",
      "Melting point -42°C.",
      "Reacts with metals to produce nitrate salts.",
      "Used in chemical laboratories.",
      "Participates in nitration reactions.",
      "Toxic if ingested."
    ],
    properties: "Boiling: 83°C, Melting: -42°C, Density: 1.51 g/mL, Colorless to yellow, Corrosive",
    uses: "Fertilizers, Explosives, Chemical synthesis",
    structure: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nitric-acid-2D-skeletal.svg/120px-Nitric-acid-2D-skeletal.svg.png"
  }
];

// Function to get compound data by name
function getCompound(name) {
    return compounds.find(c => c.name.toLowerCase() === name.toLowerCase());
}