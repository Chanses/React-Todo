import React from "react";
import { ModalState } from "../../AppContainer";
import { ICategoryItem } from "../../models/ICategoryItem";
import { ITaskItem } from "../../models/ITaskItem";
import Task, { ITask } from "./Task";

interface ITasksList {
  setModalState: (statge: ModalState) => void;
  setTaskItem: (state: ITaskItem) => void;
  taskItem: ITaskItem;
  taskList?: ITask[];
  categorieList?: ICategoryItem[];
  openEditModal: (
    id: string,
    name: string,
    description?: string,
    categoryId?: string
  ) => void;
  openDeleteModal: (id: string, name: string) => void;
}

const TasksList = (props: ITasksList) => {
  return (
    <>
      {props.taskList?.map((task, index) => (
        <Task {...props} {...task} key={index}></Task>
      ))}
    </>
  );
};

export default TasksList;
