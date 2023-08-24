import { SortCategoryType } from "../../types";

export const sortCategoryDummyData: SortCategoryType[] = [
    {category: 'Nice'},
    {category: 'One'},
    {category: 'There'},
    {category: 'Yay'},
  ];

  export const dateFormat = (date: string)=>{
    return new Date(date).toLocaleDateString()
}
export const HEIGHT = 220;
export const OVERDRAG = 20;