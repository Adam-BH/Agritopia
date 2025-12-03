import { PLANT_TYPES, FISH_TYPES, PlantType, FishType, getTypeById } from "@/data/types";

export type CatalogueKind = "plant" | "fish";
export type CatalogueItem = PlantType | FishType;

export function getAll(kind: CatalogueKind): CatalogueItem[] {
  return kind === "plant" ? PLANT_TYPES : FISH_TYPES;
}

export function getById(id: string): CatalogueItem | undefined {
  return getTypeById(id);
}

export function getByKindAndId(kind: CatalogueKind, id: string): CatalogueItem | undefined {
  const list = getAll(kind);
  return list.find((x) => x.id === id);
}

