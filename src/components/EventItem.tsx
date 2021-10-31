import moment from 'moment';

interface IProps {
  title: string;
  description: string;
  time: string;
}

export function EventItem(props: IProps) {
  return (
    <div className={styles.eventContent}>
      <div className={styles.time}>{moment(props.time).format('HH:mm')}</div>
      <p className={styles.title}>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

const styles = {
  time: 'relative z-0 text-3xl sm:text-4xl opacity-20 font-extrabold',
  title: 'text-gray-700 text-lg font-bold',
  eventContent: 'w-60 sm:w-72 border-2 rounded-lg text-xs shadow m-2 p-1 ',
};
