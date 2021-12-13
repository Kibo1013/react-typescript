type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  return <p>{`${completed ? "[完]" : "[未]"} ${title} (USER:${userId})`}</p>;
};
