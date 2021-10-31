interface IProps {
  title: string;
  description: string;
}

export function EventItem(props: IProps) {
  return (
    <div className={styles.eventContent}>
      <p className={styles.title}>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

const styles = {
  title: 'text-black text-md',
  eventContent:
    'w-60 sm:w-72 border-2 rounded-lg bg-gray-200 text-xs sm:text-sm m-4 ml-6 ',
};
