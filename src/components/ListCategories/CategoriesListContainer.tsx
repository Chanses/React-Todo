import React from "react";
import { ICategorie } from "./Categorie";
import CategoriesList from "./CategoriesList";

import { ModalState } from "../../AppContainer";

interface ICategoriesListContainer {
  setItemId: (id: string) => void;
  setModalState: ({}: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  categorieList?: ICategorie[];
}

const CategoriesListContainer: React.FC<ICategoriesListContainer> = (props) => {
  return <CategoriesList {...props} categorieList={props.categorieList} />;
};

export default CategoriesListContainer;
