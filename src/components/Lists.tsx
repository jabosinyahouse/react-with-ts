import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    number: string;
    note?: string;
  }[];
}

// const List = (props: IProps) => {
const List: React.FC<IProps> = ({ people }) => {
  return <div>I am a list</div>;
};

export default List;
