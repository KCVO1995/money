import clone from '@/lib/clone';
import dayjs from 'dayjs';
import store from '@/store';

type Unit =
  'millisecond'
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'month'
  | 'year'
  | 'date'
  | 'd'
  | 'M'
  | 'y'
  | 'h'
  | 'm'
  | 's'
  | 'ms'
  | 'week'
  | 'w'
  | undefined
const showAmount = (type: string, unit: Unit, according: any, record: boolean) => {
  const recordList = clone(store.state.recordList).filter(record => record.type === type);
  if (recordList.length === 0) {return 0;}
  const todayGroup = [];
  let total = 0;
  for (let i = 0; i < recordList.length; i++) {
    const recordCreateAt = dayjs(recordList[i].createAt);
    if (dayjs(recordCreateAt).isSame(according, unit)) {
      todayGroup.push(recordList[i]);
    }
  }
  if (record) {return todayGroup;}
  for (let i = 0; i < todayGroup.length; i++) {total += todayGroup[i].amount;}
  return total;
};

export default showAmount;
