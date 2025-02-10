export type MeasureUnitTable = {
  name: string;
  unit: string;
};

export type ClothingTypeList = {
  id: string;
  name: string;
  gender: "male" | "female" | "unisex";
  base_price: string;
  created_at: string;
};

export const clothingTypeData: ClothingTypeList[] = [
  {
    id: "1",
    name: "Dragon Ball",
    base_price: "1000",
    created_at: "2021-09-01",
    gender: "male",
  },
  {
    id: "2",
    name: "Naruto",
    base_price: "1200",
    created_at: "2021-09-02",
    gender: "unisex",
  },
  {
    id: "3",
    name: "One Piece",
    base_price: "1100",
    created_at: "2021-09-03",
    gender: "unisex",
  },
  {
    id: "4",
    name: "Attack on Titan",
    base_price: "1300",
    created_at: "2021-09-04",
    gender: "male",
  },
  {
    id: "5",
    name: "My Hero Academia",
    base_price: "1150",
    created_at: "2021-09-05",
    gender: "male",
  },
  {
    id: "6",
    name: "Fullmetal Alchemist",
    base_price: "1250",
    created_at: "2021-09-06",
    gender: "female",
  },
  {
    id: "7",
    name: "Death Note",
    base_price: "1050",
    created_at: "2021-09-07",
    gender: "male",
  },
];
