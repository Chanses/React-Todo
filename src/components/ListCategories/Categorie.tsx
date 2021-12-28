import React from "react";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";
import { ICategoryItem } from "../../models/ICategoryItem";
import ImgButton from "../ImgButton";

export interface ICategorieProps extends ICategoryItem {
  categoryItem: ICategoryItem;
  setModalState: (state: ModalState) => void;
  setCategoryItem: (state: ICategoryItem) => void;
}

const Categorie = (props: ICategorieProps) => {
  return (
    <div className="CategoriesWrapper">
      <div className="CategoryWrapper__Info">
        <div className="CategoryWrapper__Info__Name">
          <div className="CategoryWrapper__Info__Name-name">{props.name}</div>
        </div>
        <div className="CategoryWrapper__Info__Description">
          {props.description}
        </div>
      </div>
      <div className="CategoryWrapper__Actions">
        <ImgButton
          className="CategoryWrapper__Actions-Edit"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenEditCategory);
            props.setCategoryItem({
              id: props.id,
              name: props.name,
              description: props.description,
            });
          }}
          img={editImg}
        />

        <ImgButton
          className="CategoryWrapper__Actions-Delete"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenDeleteCategory);
            props.setCategoryItem({
              ...props.categoryItem,
              id: props.id,
              name: props.name,
            });
          }}
          img={deleteImg}
        />
      </div>
    </div>
  );
};

export default Categorie;
