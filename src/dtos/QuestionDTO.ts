type Categories = "tech" | "media" | "any";

export interface QuestionDTO {
  id: string;
  title: string;
  description: string;
  category: Categories;
}
