import React from "react";
import folderImg from "../../images/Folder.svg";
import editImg from "../../images/Edit.svg";
import deleteImg from "../../images/Delete.svg";
import { ITaskItem, ModalState } from "../../AppContainer";
import { modalStateValues } from "../../models/modalStateValues";
import { ICategorie } from "../ListCategories/Categorie";

export interface ITask {
  id: string;
  name: string;
  key: number;
  categoryId: string;
  description: string;
  selectedValueId: string;
  categorieList?: ICategorie[];
  taskItem: ITaskItem;
  setTaskItem: (state: ITaskItem) => void;
  setModalState: (state: ModalState) => void;
}

const Task = (props: ITask) => {
  return (
    <div className="TaskWrapper" id={props.id}>
      <div className="TaskWrapper__Info">
        <div className="TaskWrapper__Info__Name">
          <div className="TaskWrapper__Info__Name-name">{props.name}</div>
          {/* Поиск выбранной категории в массиве */}
          {props.categorieList?.map((category, index) =>
            category.id.toString() === props.categoryId ? (
              <p className="TaskWrapper__Info__Name-folder" key={index}>
                <img src={folderImg} alt="" />
                <span>{category.name}</span>
              </p>
            ) : (
              <></>
            )
          )}
        </div>
        <div className="TaskWrapper__Info__Description">
          {props.description}
        </div>
      </div>
      <div className="TaskWrapper__Actions">
        <button
          className="TaskWrapper__Actions-Edit"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenEditTask);
            props.setTaskItem({
              ...props.taskItem,
              id: props.id,
              name: props.name,
              description: props.description,
              categoryId: props.categoryId,
            });
          }}
        >
          <img src={editImg} alt="" />
        </button>
        <button
          className="TaskWrapper__Actions-Delete"
          onClick={() => {
            props.setModalState(modalStateValues.Open.OpenDeleteTask);
            props.setTaskItem({
              ...props.taskItem,
              id: props.id,
              name: props.name,
            });
          }}
        >
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Task;
