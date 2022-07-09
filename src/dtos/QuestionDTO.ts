type Categories = "tech" | "media" | "any";

type OptionDTO = {
  id: "a" | "b" | "c" | "d";
  label: "React JS";
};

type UserSelectingDTO = {
  id: string;
  token: string; // code added in user session
  option: OptionDTO; // selected option
};

export interface QuestionDTO {
  id: string;
  owner_id: string;
  title: string;
  description: string;
  answer?: OptionDTO;
  category: Categories;
  options: OptionDTO[];
  users: UserSelectingDTO[];
  expire_at?: Date;
  created_at: Date;
}

export interface CreateQuestionDTO {
  title: string;
  description: string;
  category: Categories;
  options: OptionDTO[];
  answer?: OptionDTO;
  expire_at?: Date;
}
