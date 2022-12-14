import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "#FF9E9E" : props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDraggabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

function DraggabbleCard({ toDoId, toDoText, index }: IDraggabbleCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(provided, info) => (
        <Card
          isDragging={info.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggabbleCard);
