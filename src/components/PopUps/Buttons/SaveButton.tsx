import React from "react";
import { ModalState } from "../../../AppContainer";
import { modalEntityType } from "../../../models/enum/modalEntityType";
import { modalStateValues } from "../../../models/modalStateValues";

interface IButtonPopUp {
  setModalState: ({}: ModalState) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  editTask: (
    id: string,
    name: string,
    description?: string,
    categorie?: string
  ) => void;
  editCategory: (id: string, name: string, description?: string) => void;
  modalState: ModalState;
  name: string;
  description: string;
  itemId: string;
  selectValue: string;
}

const SaveButton = (props: IButtonPopUp) => {
  return (
    <>
      {props.modalState.createEditModal.entityType === modalEntityType.TASK ? (
        <button
          name="taskSaveButton"
          type="submit"
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateTask);
            props.setName("");
            props.setDescription("");
            props.editTask(
              props.itemId,
              props.name,
              props.description,
              props.selectValue
            );
          }}
        >
          Сохранить
        </button>
      ) : (
        <button
          name="categorieSaveButton"
          onClick={() => {
            props.setModalState(modalStateValues.CloseSave.CreateCategory);
            props.setName("");
            props.setDescription("");
            props.editCategory(props.itemId, props.name, props.description);
          }}
        >
          Сохранить
        </button>
      )}
    </>
  );
};

export default SaveButton;