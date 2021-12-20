import React from "react";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";

export interface ICategorie {
  id: string;
  name: string;
  description?: string;
  setItemId: (id: string) => void;
  setModalState: ({}: ModalState) => void;
}

const Categorie: React.FC<ICategorie> = (props) => {
  return (
    <div className="CategoriesWrapper">
      <div className="TaskWrapper__Info">
        <div className="TaskWrapper__Info__Name">
          <div className="TaskWrapper__Info__Name-name">{props.name}</div>
        </div>
        <div className="TaskWrapper__Info__Description">
          {props.description}
        </div>
      </div>
      <div className="TaskWrapper__Actions">
        <button
          className="TaskWrapper__Actions-Edit"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenEditCategory);
            props.setItemId(props.id);
          }}
        >
          {" "}
          <img src={editImg} alt="" />
        </button>
        <button
          className="TaskWrapper__Actions-Delete"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenDeleteCategory);
            props.setItemId(props.id);
          }}
        >
          {" "}
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Categorie;
