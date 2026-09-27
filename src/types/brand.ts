export interface MaterialInnovation {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  scientificFormula: string;
  primaryBenefit: string;
  specs: {
    breathability: number; // percentage or g/m2
    elasticity: number; // 4-way stretch percentage
    weightGsm: number; // grams per square meter
    thermalRegulation: string;
  };
  keyFeatures: string[];
  usageScenario: string;
  microStructureDescription: string;
}

export interface LookbookItem {
  id: string;
  code: string;
  series: 'Series 01: Dawn Strides' | 'Series 02: Alpine Ascent' | 'Series 03: Urban Velocity';
  title: string;
  category: string;
  conceptPhilosophy: string;
  aerodynamicDrag: string;
  prototypeEdition: string;
  image: string;
  aspectRatio: string;
  testedWith: string;
  ergonomicHighlights: string[];
  textileComposition: string;
  designNotes: string;
}

export interface AthletePartner {
  id: string;
  name: string;
  discipline: string;
  fieldTestLocation: string;
  milestone: string;
  quote: string;
  testNotes: string;
}

export interface BrandManifestoPillar {
  number: string;
  title: string;
  shortDefinition: string;
  detailedArgument: string;
  metricLabel: string;
  metricValue: string;
}
